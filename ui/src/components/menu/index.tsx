import { useAppDispatch, useAppSelector } from '@/stores'
import { setActive, setPosition, store } from '@/stores/Divider'
import React, { useCallback, useEffect, useRef } from 'react'
import { Provider } from 'react-redux'

declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number
    }
}

const Menu = ({ children, current = 0, className, onChange }: { children: React.ReactNode, current?: number, className?: string, onChange?: (index: number) => void }) => {
    const ref = useRef<HTMLDivElement>(null)
    return (
        <Provider store={store}>
            <nav className={className} ref={ref}>
                {children}
                <Menu.Divider parentRef={ref} current={current} onChange={onChange} />
            </nav>
        </Provider>
    )
}

Menu.Item = ({ children, ...props }: { children: React.ReactNode, className?: string }) => {
    const dispatch = useAppDispatch()
    const clickHandle = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const active = Array.from(e.currentTarget.parentElement?.parentElement?.children as HTMLCollection).indexOf(e.currentTarget.parentElement as HTMLDivElement)
        dispatch(setActive(active))
    }, [])
    return (
        <div className='flex items-center justify-center h-16'>
            <button className='px-4 w-max' onClick={clickHandle} {...props}>
                {children}
            </button>
        </div>
    )
}

Menu.Divider = ({ parentRef, current, onChange }: { parentRef: React.RefObject<HTMLDivElement>, current: number, onChange?: (index: number) => void }) => {
    const { position, active } = useAppSelector(state => state.Divider)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (active === null) return
        const el = parentRef.current?.children[active] as HTMLButtonElement
        if (!el) return
        el.classList.add('active')
        const btn = el.children[0] as HTMLButtonElement
        const left = btn.offsetLeft
        const top = btn.offsetTop
        const width = btn.offsetWidth
        const height = btn.offsetHeight
        dispatch(setPosition({ top, left, width, height }))
        onChange?.(active)
        return () => {
            el.classList.remove('active')
        }
    }, [active])
    useEffect(() => {
        dispatch(setActive(current))
    }, [])
    return (
        <div className='divider absolute w-4 h-px bg-blue-500' style={{
            '--left': `${position.left}px`,
            '--top': `${position.top}px`,
            '--width': `${position.width}px`,
        }} />
    )
}

export default Menu
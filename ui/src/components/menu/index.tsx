import { UseAppDispatch, UseAppSelector } from '@/stores'
import { setPosition, store } from '@/stores/Divider'
import React from 'react'
import { Provider } from 'react-redux'

declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number
    }
}

const Menu = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <Provider store={store}>
            <nav className={`${className}`}>
                <Menu.Divider />
                {children}
            </nav>
        </Provider>
    )
}

Menu.Item = ({ children }: { children: React.ReactNode }) => {
    const dispatch = UseAppDispatch()
    const clickHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const left = e.currentTarget.offsetLeft
        const top = e.currentTarget.offsetTop
        const width = e.currentTarget.offsetWidth
        const height = e.currentTarget.offsetHeight
        dispatch(setPosition({ top, left, width, height }))
    }
    return (
        <div className='flex items-center justify-center h-16'>
            <button className='px-4 w-max' onClick={clickHandle}>
                {children}
            </button>
        </div>
    )
}

Menu.Divider = () => {
    const { position } = UseAppSelector(state => state.Divider)
    console.log(position)
    return (
        <div className='divider absolute w-4 h-px bg-white' style={{
            '--left': `${position.left}px`,
            '--top': `${position.top}px`,
            '--width': `${position.width}px`,
        }} />
    )
}

export default Menu
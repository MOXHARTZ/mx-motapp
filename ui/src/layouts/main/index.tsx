import Menu from '@/components/menu'
import { useCallback } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const IndexPaths = new Map([
    [0, '/'],
    [1, '/about']
])

const MainLayout = () => {
    const navigate = useNavigate()
    const handleChange = useCallback((index: number) => {
        const path = IndexPaths.get(index)
        if (!path) return console.error('Path not found', index)
        navigate(path)
    }, [])
    return (
        <>
            <Menu current={0} onChange={handleChange} className='w-full grid grid-cols-2 border-b border-b-slate-200/5 sticky top-0 pt-16 bg-white/90 z-50 dark:bg-black/90 dark:border-b-slate-800/5'>
                <Menu.Item>Your Room</Menu.Item>
                <Menu.Item>Settings</Menu.Item>
            </Menu>
            <Outlet />
        </>
    )
}

export default MainLayout
import Menu from '@/components/menu'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
    const location = useLocation()
    console.log('location', location)
    return (
        <>
            <Menu className='w-full relative grid grid-cols-2'>
                <Menu.Item>Home</Menu.Item>
                <Menu.Item>Settings</Menu.Item>
            </Menu>
            <Outlet />
        </>
    )
}

export default MainLayout
import MainLayout from '@/layouts/main';
import Home from '@/pages/home';
import NotFound from '@/pages/not-found';
import { createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: 'Hakkımızda'
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);

export default routes;
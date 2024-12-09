
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import CheakOut from '../CheakOut/CheakOut';
import Order from '../Pages/Order/Order';
import PrivateRoutes from './PrivateRoutes';
import Services from '../Pages/Home/Services/Services';
import About from '../Pages/Home/About/About';
import Contact from '../Pages/Home/Contact/Contact';
import Products from '../Pages/Home/Products/Products';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/cheakout/:id',
                element: <CheakOut></CheakOut>,
                loader: ({ params }) => fetch(`https://y-gold-psi.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoutes><Order></Order></PrivateRoutes>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/products',
                element: <Products></Products>
            }

        ]

    }
])


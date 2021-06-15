import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import DefaultLayout from "./DefaultLayout";
import AboutLayout from "./AboutLayout";
import ContactLayout from "./ContactLayout";
import { AuthContext } from '@/contexts/AuthContext'
import Login from '@/pages/login'

const layouts = {
    default: DefaultLayout,
    about: AboutLayout,
    contact: ContactLayout
};

const Layout = (props) => {
    const router = useRouter();
    const { auth } = useContext(AuthContext);
    console.log('isAuth---',auth.isAuth)
    const { layout, middleware } = props.children.type
    console.log('middleware',middleware)
    const layoutKey = layout ? layout : 'default';
    console.log('ttt', router.pathname)
    
    if(middleware && auth.isAuth == false ){
        return <Login />
    } else if(auth.isAuth) {
        if(router.pathname === '/login') {
            // router.replace('about');
            router.push('/');
            return false;
        }
    }

    const Layout = layouts[layoutKey];
    return <Layout {...props}>{props.children}</Layout>
}
export default Layout


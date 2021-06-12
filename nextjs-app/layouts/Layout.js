import React from 'react'
import DefaultLayout from "./DefaultLayout";
import AboutLayout from "./AboutLayout";
import ContactLayout from "./ContactLayout";

const layouts = {
    default: DefaultLayout,
    about: AboutLayout,
    contact: ContactLayout
};

const Layout = (props) => {
    const { layout } = props.children.type
    const layoutKey = layout ? layout : 'default';
    const Layout = layouts[layoutKey];
    return <Layout {...props}>{props.children}</Layout>
}
export default Layout


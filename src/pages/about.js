import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title='About' />
            <h1>About</h1>
            <p>Hey I'm Young. <Link to='/contact'>Contact Me</Link></p>            
        </Layout>
    )
}

export default AboutPage
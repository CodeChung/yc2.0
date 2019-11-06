import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title='Home' />
            <h1>Hello.</h1>
            <h2>I'm Young, a Korean American working professional and father of two</h2>
            <p>Need a mentor? <Link to='/contact'>Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage
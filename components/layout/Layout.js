import Head from 'next/head'
import { useEffect } from 'react'
import Header from '../header/Header'

export default function Layout({ children }) {
    useEffect(() => {
        import('amfe-flexible')
    })
    return (
        <>
            <Head>
                <meta name="renderer" content="webkit" />
                <title>FETAQ</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"></meta>
                <meta name="description" content="FETAQ Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Page Header */}
            <Header></Header>
            <div>
                {children}
            </div>
        </>
    )
}
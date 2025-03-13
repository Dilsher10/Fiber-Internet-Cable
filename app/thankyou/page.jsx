import React from 'react'
import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <Navbar />

            <div className="thankYou">
                <div className="wrapper">
                    <img src="/envelope.png" alt="thank-you-envelope" />
                    <h1>Thank You!</h1>
                    <p>for contacting us, we will reply promptly</p>
                    <p>once your message is received. </p>
                    <Link href="/" className="go-home">home page</Link>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default page
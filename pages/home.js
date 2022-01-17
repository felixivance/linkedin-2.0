import Head from "next/head"
import Image from "next/image"

function Home() {
    return (
        <div>
            <Head>
                <title>Welcome To Linked In</title>
            </Head>
            <header>
                <div>
                    <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
                </div>
            </header>
        </div>
    )
}

export default Home

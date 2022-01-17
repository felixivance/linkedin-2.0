import Head from "next/head"
import Image from "next/image"

function Home() {
    return (
        <div>
            <Head>
                <title>Welcome To Linked In</title>
            </Head>
            <header className="flex justify-between">
                <div className="relative w-36 h-10">
                    <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
                </div>
                <div className="flex items-center sm:divide-x divide-gray-300 space-x-2">
                    <div className="hidden sm:flex space-x-8 pr-4">

                    </div>
                </div>
            </header>

        </div>
    )
}

export default Home

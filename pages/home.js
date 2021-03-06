import Head from "next/head"
import Image from "next/image"
import HeaderLink from "../components/HeaderLink"
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import { getProviders, signIn } from "next-auth/react";

function Home({ providers }) {

    return (
        <div className="space-y-10 relative">
            <Head>
                <title>Welcome To LinkedIn 2.0</title>
            </Head>
            <header className="flex justify-around items-center py-4">
                <div className="relative w-28 h-10  sm:w-36 sm:h-10">
                    <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
                </div>
                <div className="flex items-center sm:divide-x divide-gray-300 space-x-2">
                    <div className="flex space-x-8 pr-4">
                        <HeaderLink Icon={ExploreIcon} text="Discover" />
                        <HeaderLink Icon={GroupIcon} text="People" />
                        <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
                        <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
                    </div>
                    <div className="pl-4 flex flex-col sm:inline-flex space-x-2 space-y-2">
                        <div className="hover:bg-gray-300 rounded-md text-center text-sm md:text-lg text-gray-600 ">
                            Join Now
                        </div>
                        {
                            Object.values(providers).map((provider, key) => (

                                <button key={key} className="text-blue-700 font-semibold px-5 py-1.5 border border-blue-500 rounded-full transition-all hover:border-2 cursor-pointer"
                                    onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                                    Sign In
                                </button>

                            ))
                        }

                    </div>
                </div>
            </header>
            <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
                {/* left */}
                <div className="space-y-6 xl:space-y-10">
                    <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-14 xl:pl-0 tracking-wide">Welcome to your professional community</h1>
                    <div className="space-y-4">
                        <div className="intent">
                            <h2 className="text-xl">Search for a job</h2>
                            <ArrowForwardIosRounded className="text-gray-700" />
                        </div>
                        <div className="intent">
                            <h2 className="text-xl">Find a person you know</h2>
                            <ArrowForwardIosRounded className="text-gray-700" />
                        </div>
                        <div className="intent">
                            <h2 className="text-xl">Learn a new skill</h2>
                            <ArrowForwardIosRounded className="text-gray-700" />
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 right-5">
                    <Image src="https://rb.gy/vkzpzt" layout="fill" priority alt="" />
                </div>

            </main>
        </div>
    )
}

export default Home


export async function getServerSideProps(context) {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }

}
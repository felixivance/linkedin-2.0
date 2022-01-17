import Head from "next/head"
import Image from "next/image"
import HeaderLink from "../components/HeaderLink"
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

function Home() {
    return (
        <div>
            <Head>
                <title>Welcome To Linked In</title>
            </Head>
            <header className="flex justify-around items-center py-4">
                <div className="relative w-36 h-10">
                    <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
                </div>
                <div className="flex items-center sm:divide-x divide-gray-300 space-x-2">
                    <div className="hidden sm:flex space-x-8 pr-4">
                        <HeaderLink Icon={ExploreIcon} text="Discover" />
                        <HeaderLink Icon={GroupIcon} text="People" />
                        <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
                        <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
                    </div>
                    <div className="pl-4">
                        <button className="text-blue-700 font-semibold px-5 py-1.5 border border-blue-500 rounded-md transition-all hover:border-2">
                            Sign In
                        </button>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Home

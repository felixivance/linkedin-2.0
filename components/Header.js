import Image from "next/image";

function Header() {
    return (
        <Header>
            {/* left */}
            <div className="flex items-center space-x-2 max-w-xs">
                <Image src="https://rb.gy/dpmd9s" width={55} height={55} />
            </div>
            {/* right */}
            <div>


            </div>
        </Header>
    )
}


export default Header;
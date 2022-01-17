function HeaderLink({ Icon, text }) {
    return (
        <div className="flex flex-col items-center">
            <Icon />
            <p>{text}</p>
        </div>
    )
}

export default HeaderLink

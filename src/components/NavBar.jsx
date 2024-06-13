import YouTubeLogo from "./YoutubeLogo";

export default function NavBar () {
    return (
    <nav className="col-start-1 col-end-3 grid grid-cols-3">
        <div className="flex flex-row items-center gap-1 pl-4">
            <YouTubeLogo height="1.8rem" width="3rem"/>
            <span>Youtube</span>
        </div>
        <div className="flex justify-center items-center">
            <input className="w-full p-[0.5rem_1rem] rounded-[1rem] border border-solid border-[#282828] bg-transparent mb-4" type="text" placeholder="Search" />
        </div>
        <div className="flex justify-end">
            <img 
            src="https://api.dicebear.com/8.x/identicon/svg?seed=Jorge" 
            alt="user"
            className="w-8 h-8 rounded-[50%]" />
        </div>
    </nav>
    )
}
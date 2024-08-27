

const LeftContent = () => {
    return (
        <div className="text-white flex-1 grid gap-5">
            <div><span className="text-blue-200">TS</span>&nbsp;/&nbsp;<span className="text-blue-200">JS</span> Developer</div>
            <div className="flex gap-2 items-center">
                <div className="h-[200px] bg-blue-200 w-[2px]" />
                <div className="text-6xl md:text-7xl">Hello, Welcome to my portfolio</div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint laudantium, perferendis necessitatibus minima dolores odio soluta minus, perspiciatis quisquam provident eum ratione, reprehenderit odit deleniti! Officia ut, consequatur possimus maiores blanditiis fuga aliquam. Veniam unde vitae aliquam dolores sed iure.</p>
            <div className="border group hover:border-blue-400 transition-all duration-300 border-blue-200 shadow-2xl w-fit overflow-hidden">
                <button className="px-6 py-2 hover:scale-105 transition-all duration-400">My Work</button>
                <button className="bg-blue-400 px-6 py-2 hover:scale-105 transition-all duration-400">Download CV</button>
            </div>
        </div>
    )
}

export default LeftContent
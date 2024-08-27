import SlightFlip from "../magicui/flip-text"


const LeftContent = () => {
    return (
        <div className="text-white flex-1 grid gap-5">
            <div><span className="text-blue-200 font-bold">TS</span>&nbsp;/&nbsp;<span className="text-blue-200 font-bold">JS</span> Developer</div>
            <div className="flex gap-2 items-center">
                <div className="h-[240px] md:h-[300px] bg-blue-200 w-[5px]" />
                <p className="text-6xl md:text-7xl">I&apos;m a passionate Frontend Developer</p>
            </div>
            <p>
                Fueled by a passion for crafting visually stunning and
                highly responsive web experiences, I embarked on my
                software development journey in January 2023.
                As a frontend developer, I thrive in challenging
                environments, turning complex ideas into seamless,
                user-friendly interfaces. My work isn&apos;t just about
                coding—it&apos;s about creating digital experiences that
                captivate and inspire.
            </p>
            <div className="border group hover:border-blue-400 transition-all duration-300 border-blue-200 shadow-2xl w-fit overflow-hidden">
                <button className="px-6 py-2 hover:scale-105 transition-all duration-400">My Work</button>
                <button className="bg-blue-400 px-6 py-2 hover:scale-105 transition-all duration-400">Download CV</button>
            </div>
        </div>
    )
}

export default LeftContent
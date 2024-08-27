import Ripple from "../magicui/ripple"
import LeftContent from "./leftContent"
import RightContent from "./rightContent"

const Hero = () => {
    return (
        <section id='hero' className='h-fit overflow-hidden z-10 p-2 md:h-screen bg-blue-900 pt-12 flex justify-center items-center'>
            <Ripple numCircles={16} /> {/* Background element */}
            <div className="flex w-[80%] md:w-[90%] mt-10 md:mt-auto m-auto gap-16 md:gap-5 flex-col md:flex-row ">
                <LeftContent />
                <RightContent />
            </div>
        </section>
    )
}

export default Hero
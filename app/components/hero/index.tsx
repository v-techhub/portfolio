import { cn } from "@/lib/utils"
import DotPattern from "../magicui/dot-pattern"
import LeftContent from "./leftContent"
import RightContent from "./rightContent"

const Hero = () => {
    return (
        <section id='hero' className='h-fit overflow-hidden z-10 p-2 md:h-screen bg-blue-900 pt-12 flex justify-center items-center'>
            {/* Background element */}
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                )}
            />
            <div className="flex w-[90%] mt-10 md:mt-auto m-auto gap-16 md:gap-5 flex-col md:flex-row ">
                <LeftContent />
                <RightContent />
            </div>
        </section>
    )
}

export default Hero
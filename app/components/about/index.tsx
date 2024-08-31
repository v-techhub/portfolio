import TextReveal from "@/app/components/magicui/text-reveal";
import PageTitle from "../ui/pageTitle";

const About = () => {
    return (
        <section id="about" className="z-10 h-fit">
            <PageTitle text="About Me" />
            <TextReveal text={`Welcome to my portfolio! As a dedicated and passionate software developer, I began my journey in January 2023 with a strong focus on frontend development. I'm now expanding my expertise to become a full-stack developer and exploring mobile development with React Native.

            I'm grateful for the mentorship of Mr. Gbenga ('iCode'), a seasoned industry professional who has provided invaluable guidance and insights. Under his mentorship, I've refined my coding skills and gained a deeper understanding of software development.

            With a passion for learning and growth, I'm committed to staying up-to-date with the latest technologies and methodologies. My goal is to create innovative software solutions that drive impact and make a meaningful difference.

            I'm excited to take on new challenges, push boundaries, and collaborate on exciting projects. Thank you for visiting my portfolio. I look forward to connecting and exploring opportunities to work together!.`}
            />
        </section>
    )
}

export default About
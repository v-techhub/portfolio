import TextReveal from "@/app/components/magicui/text-reveal";
import PageTitle from "../ui/pageTitle";

const About = () => {
    return (
        <section id="about" className="z-10 h-fit">
            <PageTitle text="About Me" />
            <TextReveal text={`Hello! I'm a passionate and dedicated software developer who embarked on this exciting journey in January 2023. With a strong foundation in frontend development, I'm steadily expanding my skills towards becoming a full-stack developer and venturing into mobile development using React Native.
My journey has been greatly influenced by my mentor, Mr.Gbenga, also known as "iCode," a seasoned professional in the software development industry.Under his guidance, I've gained valuable insights and honed my coding skills, which have been pivotal in shaping my career.
Driven by a love for learning and a commitment to growth, I'm constantly exploring new technologies and methodologies. My ultimate goal is to create impactful and innovative software solutions that make a difference. Whether it's building dynamic web applications or diving into the world of mobile development, I'm eager to tackle new challenges and push the boundaries of what's possible in the tech world.
Thank you for visiting my portfolio.I look forward to connecting and exploring opportunities to collaborate on exciting projects!.`}
            />
        </section>
    )
}

export default About
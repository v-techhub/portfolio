import IconCloud from "@/app/components/magicui/icon-cloud";
import PageTitle from "../ui/pageTitle";

const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nextdotjs",
    "firebase",
    "vercel",
    "git",
    "github",
    "visualstudiocode",
    "tailwindcss"
];

const IconCloudComponent = () => {
    return (
        <div className="relative flex-1 flex h-full w-full max-w-[30rem] mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 shadow-xl">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}

const Skills = () => {
    return (
        <section className="px-10 md:px-20" id="skills">
            <PageTitle text="My Skill" />
            <div className="flex gap-4 flex-col md:flex-row">
                {/* <div className="flex-1">
                    List
                </div> */}
                <IconCloudComponent />
            </div>
        </section>
    )
}

export default Skills





'use client'

import { useState } from "react"
import PageTitle from "../ui/pageTitle"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/app/components/ui/sheet"
import Link from "next/link";

interface IListOfProjects {
    thumbnail: string;
    projectName: string;
    projectOverview: string;
    fullDescription: string;
    techStack: string[];
    github: string;
    demo: string
}

const listOfProjects: IListOfProjects[] = [
    {
        thumbnail: "/lynk-vid.mp4",
        projectName: "LYNK",
        projectOverview: "Realtime Chat Application with industry standard features",
        fullDescription: "LYNK is a cutting-edge real-time chat application built with modern web technologies. It offers a seamless communication experience with industry-standard features like secure authentication and a streamlined multi-step form for user onboarding. Designed with a focus on both functionality and user experience, LYNK integrates powerful tools like React and TypeScript to ensure a robust and scalable application. The interface is crafted with Tailwind CSS and Shadcn UI, delivering a visually appealing and responsive design. Firebase powers the backend, providing real-time data synchronization and efficient database management. Whether for personal or professional use, LYNK sets a high standard for real-time communication platforms",
        techStack: ["React", "Tailwindcss", "Firebase", "Typescript", "Shadcn UI"],
        github: "https://github.com/Victor-TechHub/LYNK",
        demo: "https://lynk-cyan.vercel.app"
    }
]

const ProjectSheet = ({ project }: { project: IListOfProjects }) => {
    const {
        projectName,
        projectOverview,
        thumbnail,
        fullDescription,
        techStack,
        demo,
        github
    } = project
    return (
        <SheetContent className="overflow-y-scroll w-[90dvw] md:w-auto">
            <SheetHeader className="pt-10">
                <SheetTitle>{projectName}</SheetTitle>
                <SheetDescription>
                    {projectOverview}
                </SheetDescription>
            </SheetHeader>
            <section className="flex flex-col gap-10">
                <div className="h-[285px] w-full shadow-2xl mt-10">
                    <video width={300} height={400} loop muted autoPlay className="w-full h-full rounded-lg">
                        <source src={thumbnail} type="video/mp4" />
                    </video>
                </div>
                <div>
                    <h4 className="text-base font-bold">About</h4>
                    <p>{fullDescription}</p>
                </div>
                <div>
                    <h4 className="text-base font-bold">Technologies</h4>
                    <div className="flex gap-3 items-center mt-2 flex-wrap">
                        {techStack.map(tech => (
                            <legend className="bg-gray-300 py-1 text-xs rounded-xl px-3" key={tech}>{tech}</legend>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-base font-bold">Website</h4>
                    <Link href={demo}>https://lynk-cyan.vercel.app</Link>
                </div>
                <div>
                    <h4 className="text-base font-bold">Github</h4>
                    <Link href={github}>https://github.com/Victor-TechHub/LYNK</Link>
                </div>
            </section>
        </SheetContent>
    )
}


const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(0)

    const handleProjectSelection = (index: number) => {
        setSelectedProject(index)
    }
    return (
        <section className="h-screen mt-32" id="projects">
            <PageTitle text="Latest Projects" />
            <Sheet>
                {listOfProjects.map((project, idx) => (
                    <SheetTrigger asChild>
                        <fieldset className="mx-auto w-[90dvw] md:w-[500px] h-[400px] md:h-[285px] rounded-2xl shadow-2xl cursor-pointer" key={idx} onClick={() => handleProjectSelection(idx)}>
                            <video width={100} height={300} loop muted autoPlay className="w-full h-full rounded-2xl">
                                <source src={project.thumbnail} type="video/mp4" />
                            </video>
                        </fieldset>
                    </SheetTrigger>
                ))}
                <ProjectSheet project={listOfProjects[selectedProject]} />
            </Sheet>
        </section>
    )
}

export default Projects
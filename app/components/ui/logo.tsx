import SparklesText from "@/app/components/magicui/sparkles-text";

const name = "VictorScript"

const Logo = () => {
    return (
        <div className="flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-300 scale-125">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                />
            </svg>
            {/* <p>{name}</p> */}
            <SparklesText text={name} className="text-[20px]" sparklesCount={5} />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-300 scale-125">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 20.247 6-16.5"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-300 scale-125">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
            </svg>

            {/* <SlashIcon className="text-blue-300 scale-110" /> */}
            {/* <ChevronRightIcon className="text-blue-300 scale-110" /> */}
        </div>
    )
}

export default Logo
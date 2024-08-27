import SparklesText from "@/app/components/magicui/sparkles-text";
import { svg } from "../svg";

const name = "Victor Adeshina"

const Logo = () => {
    return (
        <div className="flex items-center">
            {svg.chevronLeft()}
            <SparklesText text={name} className="text-[20px]" sparklesCount={7} />
            {svg.slash()}
            {svg.chevronRight()}
        </div>
    )
}

export default Logo
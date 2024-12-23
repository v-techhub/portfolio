import Link from "next/link";
import { svg } from "../svg";

const githubLink = "https://github.com/v-techhub";

const GitHubLink = () => {
  return (
    <Link
      href={githubLink}
      target="_blank"
      className="bg-white rounded-full text-blue-500 p-2 hover:scale-110 transition-all duration-200 shadow-2xl cursor-pointer w-fit"
    >
      {svg.github()}
    </Link>
  );
};

export default GitHubLink;

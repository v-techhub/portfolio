import { cn } from "@/lib/utils";
import Marquee from "@/app/components/magicui/marquee";
import PageTitle from "../ui/pageTitle";

const reviews = [
  {
    name: "Mr. Gbenga (iCode), Professional Software Developer",
    username: "@iCode",
    body: "Working with victor has been an absolute pleasure. From the moment they started his journey in software development, I've seen a remarkable dedication to learning and growth. His ability to grasp complex concepts quickly and apply them effectively is impressive. Victor is well on his way to becoming a full-stack developer, and I have no doubt he'll excel in mobile development as well.",
    img: "iCode.jpg",
  },
  {
    name: "Enoch Olaoluwa",
    username: "@olastiqs",
    body: "I've known my guy for years, and seeing his journey into software development has been nothing short of inspiring. His dedication and passion for coding are contagious, and he often spend hours perfecting his craft. What impresses me most is his ability to balance work with his personal life, always making time for friends and hobbies while staying committed to his goals. Victor is not just a talented developer but also a great friend who genuinely cares about others' success.",
    img: "enoch.jpg",
  },
  {
    name: "Lisa Cot School",
    username: "@alicesama",
    body: "Having victor as a coding instructor at our school was an incredible experience for both students and staff. His ability to break down complex programming concepts into understandable lessons was truly remarkable. Victor's passion for coding was infectious, inspiring students to explore the world of technology with enthusiasm and confidence. His commitment to each student's success was evident in the way he personalized his teaching approach, ensuring that everyone could grasp the material. We are grateful for the positive impact victor has had on our students and look forward to seeing the future leaders he've helped shape.",
    img: "lisacot.jpg",
  },
  {
    name: "Pastor Ola",
    username: "@ogunruku",
    body: "I've had the privilege of mentoring victor at our church, and I've been continually impressed by his character, dedication, and growth. Beyond his technical skills in software development, Victor embodies the values of integrity, humility, and a genuine desire to help others. He often share his knowledge and skills with our community, always willing to lend a hand or offer guidance. It's been a blessing to watch him develop both personally and professionally, and I have no doubt he will continue to make a positive impact in every area of his life.",
    img: "/pastorOla.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[400px] cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full w-10 h-10 object-contain"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <section className="my-0" id="testimonials">
      <PageTitle text="Testimonials" />
      <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden border">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}

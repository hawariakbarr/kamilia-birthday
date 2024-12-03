import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const reviews = [
  {
    name: "Agus",
    img: "/assets/agus.jpg"
  },
  {
    name: "Bella", 
    img: "/assets/bella.jpg"
  },
  {
    name: "Dita",
    img: "/assets/dita.jpg"
  },
  {
    name: "Prama",
    img: "/assets/prama.jpg"
  },
];

const firstRow = reviews.slice(0, reviews.length);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <figure
            className={cn(
              "relative w-60 cursor-pointer overflow-hidden rounded-xl border px-4", // w-60 sets width to 15rem (240px)
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
          >
            <div className="flex flex-row items-center justify-center h-full">
              <img className="w-full h-auto object-contain" alt={name} src={img} />
            </div>
          </figure>
        </TooltipTrigger>
        <TooltipContent 
          side="right" 
          align="center"
          className="z-[60] px-4 py-2 text-base font-medium bg-foreground/90"
          sideOffset={5}
        >
          <p className="text-lg text-background">{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s] h-full">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
    </div>
  );
}

import Image from "next/image";
import { projects } from "@/data/data";

const ProjectCard = ({ card }: { card: (typeof projects)[number] }) => {
  return (
    <div
      key={card.title}
      className="group pb-2 border border-border rounded-lg overflow-hidden flex w-full cursor-pointer"
    >
      <div className="overflow-hidden w-1/3 h-28 relative">
        <Image
          src={card.imageSrc}
          alt={card.title}
          className="w-full h-full object-top object-cover transition-transform duration-300 group-hover:scale-105"
          width={1920}
          height={1080}
        />
      </div>

      <div className="pl-4 pr-2 py-3 w-2/3 flex flex-col">
        <div className="text-sm flex justify-between font-semibold text-primary">
          <span className="flex gap-2 items-center">
            <p>{card.title}</p>{" "}
            <span className="text-muted-foreground rounded-sm text-xs font-normal">
              {card.date}
            </span>
          </span>
        </div>

        <p className="line-clamp-2 text-sm mt-2">{card.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

import Image from "next/image";
import { projects } from "@/data/data";
import { motion } from "motion/react";

const ProjectCard = ({
  card,
  id,
  setActive,
}: {
  card: (typeof projects)[number];
  id: string;
  setActive: (card: (typeof projects)[number]) => void;
}) => {
  return (
    <motion.div
      layoutId={`card-${card.title}-${id}`}
      key={`card-${card.title}-${id}`}
      onClick={() => setActive(card)}
      className="group pb-2 border border-border rounded-lg overflow-hidden flex w-full cursor-pointer"
    >
      <motion.div
        layoutId={`image-${card.title}-${id}`}
        className="overflow-hidden w-1/3 h-28 relative"
      >
        <Image
          src={card.imageSrc}
          alt={card.title}
          className="w-full h-full object-top object-cover transition-transform duration-300 group-hover:scale-105"
          width={1920}
          height={1080}
        />
      </motion.div>

      <div className="pl-4 pr-2 py-3 w-2/3 flex flex-col">
        <div className="text-sm flex justify-between font-semibold text-primary">
          <div className="flex gap-2 items-center">
            <motion.h3 layoutId={`title-${card.title}-${id}`}>
              {card.title}
            </motion.h3>
            <motion.span
              layoutId={`date-${card.date}-${id}`}
              className="text-muted-foreground rounded-sm text-xs font-normal"
            >
              {card.date}
            </motion.span>
          </div>
        </div>

        <motion.p
          layoutId={`description-${card.description}-${id}`}
          className="line-clamp-2 text-sm mt-2"
        >
          {card.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

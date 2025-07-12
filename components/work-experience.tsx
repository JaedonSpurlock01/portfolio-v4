import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { Title } from "./ui/title";
import { work } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { Tech } from "./ui/tech";

export default function WorkExperience() {
  return (
    <section id="work-experience" className="space-y-4">
      <Title title="Work Experience" />

      <Timeline>
        {work.map((item, index) => (
          <TimelineItem
            key={item.company}
            step={index + 1}
            className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-8"
          >
            <TimelineHeader>
              <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
              <TimelineTitle className="text-muted-foreground text-xs font-normal">
                {item.date}
              </TimelineTitle>
              <TimelineIndicator className="bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-8 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
                <Link href={item.href}>
                  <Image
                    src={item.imageSrc}
                    alt={item.company + " logo"}
                    className="size-8 rounded-full"
                    width={40}
                    height={40}
                  />
                </Link>
              </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent className="text-primary">
              <p className="text-sm">
                <span className="px-1.5 py-0.5 border border-border rounded-sm">
                  {item.position}
                </span>{" "}
                at <span className="font-semibold">{item.company}</span>
              </p>
              <p className="my-2">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <Tech key={skill} technology={skill} />
                ))}
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}

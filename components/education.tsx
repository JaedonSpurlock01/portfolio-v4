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
import { education, leadership } from "@/data/data";
import Image from "next/image";

export default function Education() {
  const content = [
    <div key={0}>
      <ul>
        <li>
          • Acquired new first-time engineering spaces for student engineers to
          collaborate and grow
        </li>
        <li>
          {" "}
          • Secured over $100k+ in organization funding from negotiating with
          philanthropic donors
        </li>{" "}
      </ul>

      {/* <div className="rounded-lg overflow-hidden h-[180px] border border-border mt-4">
        <Image
          src="/gang.jpeg"
          alt="gang"
          width={1920}
          height={1080}
          className="object-cover -translate-y-30"
        />
      </div> */}
    </div>,
    <div key={1}>
      <ul>
        <li>• Building new club infrastructure for long-term expansion</li>
      </ul>

      {/* <div className="rounded-lg overflow-hidden h-[180px] border border-border mt-4">
        <Image
          src="/clubs/gdsc.png"
          alt="gang"
          width={1920}
          height={1080}
          className="object-cover -translate-y-10"
        />
      </div> */}
    </div>,
    <div key={2}>
      <p>
        • Spearhead the development of embedded software by handling task
        allocation and task oversight
      </p>

      {/* <div className="flex items-center gap-4">
        <div className="rounded-lg overflow-hidden h-[180px] border border-border mt-4">
          <Image
            src="/clubs/robotics.png"
            alt="gang"
            width={1920}
            height={1080}
            className="object-cover -translate-y-22"
          />
        </div>
        <div className="rounded-lg overflow-hidden h-[180px] border border-border mt-4">
          <Image
            src="/clubs/robotics-2.jpg"
            alt="gang"
            width={1920}
            height={1080}
            className="object-cover -translate-y-32"
          />
        </div>
      </div> */}
    </div>,
  ];

  return (
    <section id="Education" className="space-y-4">
      <Title title="Education" />

      <div className="group flex items-center gap-2">
        <Image
          src="/csusm.jpg"
          width={50}
          height={50}
          alt="csusm"
          className="rounded-xl aspect-square object-cover"
        />

        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-medium text-sm">{education.school}</h2>
            <time className="text-muted-foreground text-xs">
              {education.date}
            </time>
          </div>
          <p className="text-sm">{education.degree}</p>
        </div>
      </div>

      <Timeline className="mt-6">
        {leadership.map((item, index) => (
          <TimelineItem
            key={item.club}
            step={index + 1}
            className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-8"
          >
            <TimelineHeader>
              <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
              <TimelineTitle className="text-muted-foreground text-xs font-normal">
                {item.date}
              </TimelineTitle>
              <TimelineIndicator className="bg-transparent flex size-5 items-center justify-center border-2 !border-border group-data-[orientation=vertical]/timeline:-left-7"></TimelineIndicator>
            </TimelineHeader>
            <TimelineContent className="text-primary">
              <p className="text-sm mb-2">
                <span className="px-1.5 py-0.5 border border-border rounded-sm">
                  {item.position}
                </span>{" "}
                of <span className="font-semibold">{item.club}</span>
              </p>
              {content[index]}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}

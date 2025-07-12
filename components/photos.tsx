import React from "react";
import { Title } from "./ui/title";

export default function Photos() {
  return (
    <section id="photos">
      <Title title="Photos" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <div className="grid gap-4">
          <div>
            <img
              className="h-[18rem] object-cover max-w-full rounded-lg"
              src="/gallery/10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/gallery/11.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[14rem] object-cover max-w-full rounded-lg"
              src="/gallery/12.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/gallery/7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[20rem] object-cover max-w-full rounded-lg"
              src="/gallery/8.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/gallery/9.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4 col-span-2 md:col-span-1">
          <div>
            <img
              className="h-[12rem] object-cover w-full max-w-full rounded-lg"
              src="/gallery/13.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/gallery/2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/gallery/5.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

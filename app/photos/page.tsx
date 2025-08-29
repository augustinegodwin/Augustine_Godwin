import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Memes 😁",
  description: "Funny Memes Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Memes 😁</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/memes/memes.jpg",
            alt: "We are the best browsers",
          },  
          {
            src: "/memes/memes1.jpg",
            alt: "I just cant",
          },
          {
            src: "/memes/memes2.jpg",
            alt: "Localhost and cors",
          },
          {
            src: "/memes/memes3.jpg",
            alt: "Natural bugs",
          },
          {
            src: "/memes/memes7.jpeg",
            alt: "Python with newbie",
          },
          {
            src: "/memes/memes-6.jpg",
            alt: "Spiderman is a web designer",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/memes/memes13.webp", alt: "C++ in javaScript" },
          { src: "/memes/memes14.webp", alt: "Frontend,Backend and User" },
          { src: "/memes/memes11.webp", alt: "Computer science doctor" },
          { src: "/memes/memes15.webp", alt: "Made in Anger" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/memes/memes16.webp", alt: "What one programmer can do in one month two programmers can in two months" },
          { src: "/memes/memes17.webp", alt: "If bugs never existed" },
          { src: "/memes/memes18.jpg", alt: "Saying thank you to chatGPT " },
          { src: "/memes/memes19.jpg", alt: "Face od disappointment" },
          { src: "/memes/memes20.jpeg", alt: "AI" },
          { src: "/memes/memes21.jpg", alt: "The world and electricity" },
        ]}
      />
      
    </section>
  );
}

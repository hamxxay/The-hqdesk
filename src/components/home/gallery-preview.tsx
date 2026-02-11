"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const images = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop",
    alt: "Collaborative workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=450&fit=crop",
    alt: "Modern office lounge",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=450&fit=crop",
    alt: "Focused work area",
  },
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=450&fit=crop",
    alt: "Meeting room setup",
  },
];

export function GalleryPreview() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">Gallery</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              A quick look at the spaces
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Explore a few highlights from our workspace collection. From
              focused desks to relaxed lounges, there is a place for every work
              style.
            </p>
          </div>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-secondary"
          >
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <div
              key={image.alt}
              className="group relative overflow-hidden rounded-2xl border border-border bg-muted/20"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

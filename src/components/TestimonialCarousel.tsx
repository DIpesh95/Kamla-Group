"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/data";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(t);
  }, [paused]);

  const current = testimonials[index];

  return (
    <section
      className="bg-ivory py-28 sm:py-36"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        <Reveal>
          <SectionLabel text="Experience Speaks" />
        </Reveal>

        <div className="relative mt-16 min-h-[280px] sm:mt-20 sm:min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="max-w-4xl font-serif text-3xl leading-[1.3] text-ink text-balance sm:text-4xl lg:text-5xl">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <p className="mt-8 text-sm font-semibold text-ink">
                {current.name}
              </p>
              {current.role && (
                <p className="text-sm text-stone">{current.role}</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 flex items-center gap-8 sm:mt-20">
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-px w-10 transition-colors duration-500 ${
                  i === index ? "bg-brass" : "bg-line"
                }`}
              />
            ))}
          </div>
          <span className="label text-stone-light">
            0{index + 1} / 0{testimonials.length}
          </span>
        </div>
      </Container>
    </section>
  );
}

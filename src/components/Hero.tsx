"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import Container from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.18, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease }}
      >
        <Image
          src="/images/hero-times-tower.jpg"
          alt="Times Tower, Kamala City — Lower Parel, Mumbai"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Cinematic gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

      <Container className="relative w-full pb-20 pt-40 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          className="label text-ivory/60"
        >
          Mumbai · Est. 1960
        </motion.p>

        <div className="mt-7 overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 1.25, ease }}
            className="font-sans text-xs font-semibold tracking-[0.35em] text-brass uppercase sm:text-sm"
          >
            Built on Principles
          </motion.p>
        </div>

        <div className="mt-4 overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease }}
            className="font-serif text-[13vw] leading-[0.98] text-ivory text-balance sm:text-[9vw] lg:text-[6.4vw]"
          >
            65+ years of
            <br />
            shaping Mumbai.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9, ease }}
          className="mt-8 max-w-md text-[15px] leading-relaxed text-ivory/65 sm:max-w-lg"
        >
          From a single vision in 1960 to a conglomerate spanning Real
          Estate, Power, Hospitality, Fashion, HR Solutions and Tours &amp;
          Travels — built, every time, on the same principles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.15, ease }}
          className="mt-11 flex flex-wrap items-center gap-8"
        >
          <Button href="/verticals" tone="light">
            Explore the Group
          </Button>
          <Button href="#legacy" variant="link" tone="light">
            Our Legacy
          </Button>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
        className="absolute right-6 bottom-8 hidden flex-col items-end gap-1 lg:flex lg:right-12"
      >
        <span className="label text-ivory/40">Scroll</span>
        <span className="h-10 w-px bg-ivory/30" />
      </motion.div>
    </section>
  );
}

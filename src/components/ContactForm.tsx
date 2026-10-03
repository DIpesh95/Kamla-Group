"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/lib/data";

const fieldClass =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-stone-light focus:border-brass";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString() ?? "";
    const email = data.get("email")?.toString() ?? "";
    const message = data.get("message")?.toString() ?? "";

    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className="label text-stone">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={`${fieldClass} mt-2`}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="label text-stone">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={`${fieldClass} mt-2`}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="label text-stone">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={`${fieldClass} mt-2 resize-none`}
          placeholder="Tell us about your enquiry"
        />
      </div>
      <button
        type="submit"
        className="group inline-flex items-center gap-3 bg-ink px-7 py-4 font-sans text-[11px] font-semibold tracking-[0.22em] text-ivory uppercase transition-colors duration-400 hover:bg-brass hover:text-ink"
      >
        Send Message
        <svg
          width="15"
          height="11"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-transform duration-400 group-hover:translate-x-1"
        >
          <path
            d="M1 8h13M9 2l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {sent && (
        <p className="text-sm text-brass">
          Your email app should have opened with this message pre-filled —
          just hit send.
        </p>
      )}
    </form>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/lib/data";

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
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-brass"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-brass"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-brass"
          placeholder="Tell us about your enquiry"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-brass-dark"
      >
        Send Message
      </button>
      {sent && (
        <p className="text-sm text-brass-dark">
          Your email app should have opened with this message pre-filled —
          just hit send.
        </p>
      )}
    </form>
  );
}

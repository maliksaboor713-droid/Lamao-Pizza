"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thanks for contacting us! We'll get back to you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#24150e]">

      {/* Hero Section */}
      <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-[#24150e] px-5 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/image/Pizza/pizza (1).jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#24150e]/90" />

        <div className="relative z-10 mx-auto max-w-3xl text-white">
          <span className="mb-5 inline-block rounded-full bg-[#e63946] px-5 py-2 text-sm font-semibold">
            🍕 We&apos;d Love to Hear From You
          </span>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl">
            Get in <span className="text-[#f4a261]">Touch</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg">
            Have a question, feedback, or just want to say hello?
            Our pizza-loving team is always here for you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Left Side */}
          <div>
            <span className="text-sm font-bold tracking-[0.2em] text-[#e63946]">
              CONTACT US
            </span>

            <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
              Let&apos;s Talk{" "}
              <span className="text-[#e63946]">Pizza!</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Whether you have a question about our menu, need help
              with an order, or want to share your experience, feel free
              to reach out. We&apos;re happy to help!
            </p>

            {/* Contact Details */}
            <div className="mt-9 space-y-6">

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-[#fff0e5] text-2xl">
                  📍
                </div>

                <div>
                  <h3 className="font-bold">Visit Us</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    123 Pizza Street, Food City
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-[#fff0e5] text-2xl">
                  📞
                </div>

                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-[#fff0e5] text-2xl">
                  ✉️
                </div>

                <div>
                  <h3 className="font-bold">Email Us</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    hello@pizzahouse.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-[#fff0e5] text-2xl">
                  🕐
                </div>

                <div>
                  <h3 className="font-bold">Opening Hours</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Monday - Sunday: 11:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="font-bold">Follow Us</h3>

              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e63946] font-bold text-white transition hover:-translate-y-1 hover:bg-[#c92835]"
                >
                  f
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e63946] font-bold text-white transition hover:-translate-y-1 hover:bg-[#c92835]"
                >
                  ◎
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e63946] font-bold text-white transition hover:-translate-y-1 hover:bg-[#c92835]"
                >
                  𝕏
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e63946] font-bold text-white transition hover:-translate-y-1 hover:bg-[#c92835]"
                >
                  ♪
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.08)] sm:p-9">

            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Send Us a Message
            </h2>

            <p className="mt-2 leading-6 text-gray-500">
              Fill out the form below and we&apos;ll get back to you
              as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-7">

              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#e63946] focus:bg-white focus:ring-4 focus:ring-[#e63946]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#e63946] focus:bg-white focus:ring-4 focus:ring-[#e63946]/10"
                  />
                </div>

              </div>

              {/* Phone */}
              <div className="mt-5">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#e63946] focus:bg-white focus:ring-4 focus:ring-[#e63946]/10"
                />
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#e63946] focus:bg-white focus:ring-4 focus:ring-[#e63946]/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#e63946] px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#c92835] hover:shadow-lg"
              >
                Send Message
                <span className="text-xl">→</span>
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#24150e] px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">

          <div className="text-6xl">🍕</div>

          <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Hungry Yet?
          </h2>

          <p className="mt-4 leading-7 text-gray-300">
            Don&apos;t just talk about pizza. Order your favorite one
            and enjoy it fresh and hot!
          </p>

          <Link
            href="/product"
            className="mt-8 inline-flex rounded-xl bg-[#f4a261] px-7 py-3.5 font-bold text-[#24150e] transition hover:-translate-y-1 hover:bg-white"
          >
            Explore Our Menu →
          </Link>

        </div>
      </section>

    </main>
  );
}

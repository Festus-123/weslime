"use client";

import Image from "next/image";
import { images } from "@/assets/image";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toastID = toast.loading("Message on it way");
    setLoading(true);

      const form = e.currentTarget as HTMLFormElement;
      const formData = new FormData(form);

      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          location: formData.get("location"),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setLoading(false)
        toast.success("Message snt successfully ✅", { id: toastID });

        form.reset();
      } else {
        setLoading(false)
        toast.error("☹️ Couldnt send message ☹️", { id: toastID });
      }

  };

  return (
    <div className="h-full bg-[#141414] flex flex-col gap-10 p-4 md:p-16 overflow-hidden">
      <div className="mt-20">
        <h1 className="text-xl md:text-3xl text-white tracking-wide ">
          Contact Us
        </h1>
        <p className="flex items-center gap-2 text-white/40 mt-10">
          <span className="w-16 h-0.5 bg-white/40"></span>
          <span>We are just a click away</span>
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row items-start gap-10 md:gap-20">
        <div className="relative w-full md:w-[50%]">
          <Image
            src={images.car_wash}
            alt="image in contact form"
            loading="lazy"
            className="w-full h-auto"
          />
          <div className="absolute h-full flex items-center justify-center inset-0 bg-black/60 text-white/80 p-4 md:p-8 ">
            <ul className="w-full line-clamp-2 sm:line-clamp-4 md:line-clamp-none text-lg sm:text-xl md:text-2xl italic font-bold tracking-wider">
              <li>Fill in your details</li>
              <li>Enter your message, which service you require</li>
              <li>Click on send </li>
              <li>Get response withn 24 hours</li>
              <li>Thank you.</li>
            </ul>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-full md:w-[50%] flex flex-col gap-4 border-none outline-none"
        >
          {/* Name input */}
          <div className="flex flex-col gap-4 text-white grow">
            <label htmlFor="">Your Name</label>
            <input
              required
              name="name"
              type="text"
              placeholder="John Doe"
              className="p-4 bg-white/20 border-none outline-none"
            />
          </div>

          {/* Name Email */}
          <div className="flex flex-col gap-4 text-white grow">
            <label htmlFor="">Your Email</label>
            <input
              required
              name="email"
              type="email"
              placeholder="JohnDoe@gmail.com"
              className="p-4 bg-white/20 border-none outline-none"
            />
          </div>

          {/* Name Message */}
          <div className="flex flex-col gap-4 text-white grow">
            <label htmlFor="">Your Message</label>
            <textarea
              required
              name="message"
              placeholder="Need a pickup and repair immediately"
              className="p-4 bg-white/20 min-h-25 max-h-45 border-none outline-none"
            />
          </div>

          {/* Name location */}
          <div className="flex flex-col gap-4 text-white grow">
            <label htmlFor="">Your Location (protected)</label>
            <input
              required
              name="location"
              type="text"
              placeholder="Need a pickup and repair immediately"
              className="p-4 bg-white/20 border-none outline-none"
            />
          </div>

          <button disabled={loading} className={`grow ${ loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500 hover:scale-105' } bg-blue-700 p-4 text-center text-white transition-all duration-300`}>
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

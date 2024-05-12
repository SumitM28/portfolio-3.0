"use client";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { formData, formSchema } from "../../../utils/types";


// Type definition for form data
type FormData = z.infer<typeof formSchema>;

function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data:formData, event:any) => {
    console.log(data);
    event?.target.reset();
  };
  return (
    <div className="h-full w-full">
      <div className="h-full max-w-screen-xl mx-auto px-4 py-3">
        <div className="pt-[5rem] md:pt-[8rem] grid gap-x-8 gap-y-6 grid-cols-1 md:grid-cols-2">
          <div className="w-full h-full">
            <h1 className="text-5xl sm:text-7xl md:text-8xl text-white font-bold animate__animated  animate__backInLeft">
              Contact Me
            </h1>
            <div className="flex items-center gap-3 mt-10">
              <MdEmail size={28} className="text-slate-500" />
              <Link
                href={"mailto:sumitmahour24@gmail.com"}
                className="text-slate-500 text-2xl font-semibold'"
              >
                sumitmahour24@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <FaPhoneAlt size={25} className="text-slate-500" />
              <Link
                href={"tel:+91-7817980397"}
                className="text-slate-500 text-2xl font-semibold'"
              >
                +91-7817980397
              </Link>
            </div>
          </div>

          <div className="h-full  w-full">
            <form
              className="flex flex-col gap-8 mt-10"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-2">
                <Input
                  type="text"
                  placeholder="Name"
                  className="bg-black text-slate-500 font-medium text-xl"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span className="text-red-700 text-xs ml-3">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-black text-slate-500 font-medium text-xl"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-red-700 text-xs ml-3">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Input
                  type="phone"
                  placeholder="Phone"
                  className="bg-black text-slate-500 font-medium text-xl"
                  {...register("phone", { required: "Phone is required" })}
                />
                {errors.phone && (
                  <span className="text-red-700 text-xs ml-3">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Textarea
                  placeholder="Tell me about your project?"
                  className="bg-black text-slate-500 font-medium text-xl"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <span className="text-red-700 text-xs ml-3">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <Button
                type="submit"
                className="bg-white hover:bg-slate-500 group flex items-center justify-center gap-1"
              >
                <p className="text-slate-500 group-hover:text-white text-xl font-medium">
                  Send Message
                </p>
                <IoIosSend
                  size={30}
                  className="text-slate-500 group-hover:text-white group-hover:rotate-45 transition-all"
                />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;

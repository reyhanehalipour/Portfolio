"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/share/Button";
import InputField from "@/components/contact/InputField";
import TextAreaField from "@/components/contact/TextAreaField";
import { contactFormSchema } from "@/validations/contactFormSchema";
import { contactText } from "@/static content/FormContent";

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    console.log("Form submitted:", data);
    reset();
    
  };

  return (
    <section className="max-w-2xl py-10 p-6">
      <h2 className="text-3xl font-thin mb-6 text-end">{contactText.title}</h2>
      <h1 className="text-end text-green font-bold">{contactText.subtitle}</h1>
      <p className="text-end font-thin mb-6">{contactText.description}</p>

      {isSubmitSuccessful && (
        <div className="mb-4 p-4 b text-pink-700">
          Thank you! Your message has been sent
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="First Name"
            placeholder="Enter your first name"
            registration={register("firstName")}
            error={errors.firstName}
          />
          <InputField
            label="Last Name"
            placeholder="Enter your last name"
            registration={register("lastName")}
            error={errors.lastName}
          />
        </div>

        <InputField
          label="Email"
          type="email"
          placeholder="example@email.com"
          registration={register("email")}
          error={errors.email}
        />

        <InputField
          label="City"
          placeholder="Your city"
          registration={register("city")}
          error={errors.city}
        />

        <InputField
          label="Postal Code"
          placeholder="1234567890"
          registration={register("postalCode")}
          error={errors.postalCode}
        />
        <TextAreaField
          label="Message"
          placeholder="Write your message..."
          registration={register("message")}
          error={errors.message}
        />

        <Button
          title={isSubmitting ? "Sending..." : "Get in Touch"}
          disabled={isSubmitting}
          className="hover:text-white"
        />
      </form>
    </section>
  );
};

export default ContactForm;

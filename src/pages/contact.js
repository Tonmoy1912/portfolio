import React from 'react'
import ContactForm from '@/components/ContactForm'

export default function contact() {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        style={{ backgroundImage: "url(atombg-comp.webp" }}
        className="h-[65%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className="absolute left-10 md:left-20 top-9 md:top-6 w-[75%] md:w-[30%] text-center md:text-left">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

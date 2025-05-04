import { useRef } from "react";
import emailjs from "emailjs-com";

// EmailJS
export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bj64yfh",
        "template_6fh7ri9",
        form.current,
        "LQRAY8j91g7DFwi90"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="flex items-start justify-center p-4 mb-4">
      <div className="bg-slate-900 p-8 max-w-md w-full rounded-sm">
        <strong className="flex justify-center items-center text-2xl font-bold mb-6 text-center text-gradient">
          Let&lsquo;s work together
        </strong>
        <form ref={form} onSubmit={sendEmail}>
          {/* Name & Phone_#*/}
          <div className="flex flex-row gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-slate-200 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full p-3 text-slate-200 border rounded-sm shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-300"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-slate-200 mb-2">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="user_phone"
                className="w-full p-3 text-slate-200 border rounded-sm shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-300"
                placeholder="Enter your Phone"
                required
              />
            </div>
          </div>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-200 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full p-3 text-slate-200 border rounded-sm shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-300"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-slate-200 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 text-slate-200 border rounded-sm shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-300"
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="text-center w-full">
            <button
              type="submit"
              className="rounded-sm p-3 px-5 btn-hover-animation border border-slate-600 tracking-wider"
            >
              <strong> Send Message ➚ </strong>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

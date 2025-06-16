import { useTheme } from "next-themes";
import React, { useState } from "react";
import { motion } from "motion/react";

function Contact() {
  const [result, setResult] = useState("");

  const { systemTheme, theme } = useTheme();
  const isDark =
    theme === "dark" || (theme === "system" && systemTheme === "dark");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5d5c9e91-0b0f-4a18-9dbb-977f87de87c4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg"
      >
        {" "}
        Connect with me
      </motion.h4>
      <h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch
      </h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        welcome to my web developent portfolio! Explore a collection of projects
        showcasing my expertise in front-end developent.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid auto-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            type="text"
            placeholder="Enter your name"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md `}
            name="name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md "
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md  mb-6"
          rows="6"
          placeholder="Enter your message"
          required
          name="message"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 cursor-pointer
            ${
              isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-black/80"
            } text-white rounded-full mx-auto hover:bg-black duration-500"
          type="submit`}
        >
          Submit now
          <img width={"30px"} src="./icons8-arrow-white-50.png" />
        </motion.button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
}

export default Contact;

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesCore } from "../../app/components/UI/Sparkles";
import styles from "./Presentation/Presentation.module.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const buttonVariants = {
  idle: { scale: 1 },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 30px rgba(139, 69, 19, 0.3)",
    transition: { type: "spring", stiffness: 300 },
  },
  tap: { scale: 0.98 },
  sending: {
    scale: 1.02,
    transition: { repeat: Infinity, duration: 0.8, ease: "easeInOut" },
  },
};

export default function Contact() {
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    fonction: "",
    objet: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_2wk87pr",
        "template_u9m00rn",
        e.target,
        "OQpdfRliSb-itPKwp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setForm({
            name: "",
            fonction: "",
            objet: "",
            email: "",
            message: "",
          });
          setConfirmationMessage("Email envoyé avec succès !");
          setIsLoading(false);
          setTimeout(() => {
            setConfirmationMessage("");
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  const formFields = [
    {
      name: "name",
      placeholder: "NOM & PRENOM",
      type: "text",
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    {
      name: "fonction",
      placeholder: "FONCTION",
      type: "text",
      required: false,
      minLength: 2,
      maxLength: 20,
    },
    {
      name: "objet",
      placeholder: "OBJET",
      type: "text",
      required: true,
      minLength: 2,
      maxLength: 20,
    },
    { name: "email", placeholder: "EMAIL", type: "email", required: true },
  ];

  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center bg-myblack"
    >
      <div className="h-auto relative w-full overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={3}
            particleDensity={5}
            className="w-full h-full"
            particleColor="#7E5EA5"
          />
        </div>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              delay: 0.5,
              transition: { ease: "easeOut", duration: 3 },
            },
          }}
          className="w-full relative h-screen flex flex-col items-center justify-center z-20"
        >
          <div className={styles.container__title}>
            <motion.h2
              className={styles.titleAndMore}
              initial={{ x: "-100%" }}
              animate={{ x: "65%" }}
              transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            >
              CONTACT ME <span className={styles.titleName}>CONTACTEZ-MOI</span>{" "}
              CONTACT ME <span className={styles.titleName}>CONTACTEZ-MOI</span>{" "}
              CONTACT ME <span className={styles.titleName}>CONTACTEZ-MOI</span>{" "}
              CONTACT ME
            </motion.h2>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="pt-[2rem] md:pt-[4rem] flex justify-center flex-col gap-5 relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {confirmationMessage && (
                <motion.p
                  className="text-white font-aldrich text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    ✓
                  </motion.span>{" "}
                  {confirmationMessage}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.p
              className="text-white font-aldrich text-center"
              variants={fieldVariants}
              whileHover={{ scale: 1.05 }}
            >
              jessy.pintobarreto@gmail.com
            </motion.p>

            {formFields.map((field, index) => (
              <motion.div key={field.name} variants={fieldVariants}>
                <motion.input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="px-[2rem] py-[0.3rem] w-[20rem] md:py-[0.5rem] bg-slate-50 bg-opacity-10 text-white rounded-md focus:outline-none focus:border-purple-500 transition-all duration-300 ease-in-out"
                  onChange={handleChange}
                  value={form[field.name]}
                  minLength={field.minLength}
                  maxLength={field.maxLength}
                  required={field.required}
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(139, 69, 19, 0.3)",
                  }}
                  whileHover={{ scale: 1.01 }}
                />
              </motion.div>
            ))}

            <motion.div variants={fieldVariants}>
              <motion.textarea
                id="message"
                name="message"
                placeholder="MESSAGE"
                className="px-[2rem] py-[0.5rem] w-[20rem] bg-slate-500 bg-opacity-10 rounded-md text-white focus:outline-none focus:border-purple-800 transition-all duration-300 ease-in-out"
                onChange={handleChange}
                value={form.message}
                required
                minLength="2"
                maxLength="350"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(139, 69, 19, 0.3)",
                }}
                whileHover={{ scale: 1.01 }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="p-[0.5rem] text-white neon hover:text-white font-aldrich tracking-[0.3rem] bg-gradient-to-r from-black-800 to-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 ease-in-out hover:from-purple-600 hover:to-purple-800 hover:ring-2 hover:ring-purple-600 hover:shadow-xl"
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              animate={isLoading ? "sending" : "idle"}
              disabled={isLoading}
            >
              {isLoading ? "ENVOI..." : "ENVOYER"}
            </motion.button>
          </motion.form>
        </motion.section>
      </div>
    </section>
  );
}

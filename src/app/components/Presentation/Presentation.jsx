/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import Player1 from "../Player/Player1";
import styles from "./Presentation.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const socialVariants = {
  idle: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: 5,
    y: -5,
    transition: { type: "spring", stiffness: 400 },
  },
  tap: { scale: 0.95 },
};

const textHighlightVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
  hover: {
    textShadow: "0 0 20px rgba(126, 94, 165, 0.8)",
    transition: { duration: 0.3 },
  },
};

export default function Presentation() {
  return (
    <motion.div
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
      className={styles.container}
    >
      <motion.div className={styles.container__title} variants={itemVariants}>
        <motion.h2
          className={styles.titleAndMore}
          initial={{ x: "-100%" }}
          animate={{ x: "40%" }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          PINTO BARRETO JESSY{" "}
          <span className={styles.titleName}>JESSY PINTO BARRETO</span> PINTO
          BARRETO JESSY{" "}
          <span className={styles.titleName}>JESSY PINTO BARRETO</span> PINTO
          BARRETO JESSY
        </motion.h2>
      </motion.div>

      <motion.div className={styles.container__title2} variants={itemVariants}>
        <motion.h2
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className={styles.otherTitle}
        >
          WEB DEVELOPER <span className={styles.titleName}>COMPOSITEUR</span>{" "}
          DEVELOPPEUR WEB <span className={styles.titleName}>COMPOSER</span> WEB
          DEVELOPER
        </motion.h2>
      </motion.div>

      <motion.div
        className={styles.container__infosMore}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Player1 />
        </motion.div>

        <motion.p
          className={styles.container__description}
          variants={textHighlightVariants}
          whileHover="hover"
        >
          Donner vie aux visions & rentrer dans un paysage numérique où son
          univers s'exprime... <br />
          <motion.span
            whileHover={{ color: "#7E5EA5" }}
            transition={{ duration: 0.3 }}
          >
            Mon art réside dans l'exploration infinie
          </motion.span>{" "}
          des possibles où la lueur prend vie et illumine le regard de ceux qui
          la contemplent... <br />
        </motion.p>

        <motion.p
          className={styles.name}
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            textShadow: "0 0 15px rgba(126, 94, 165, 0.5)",
          }}
        >
          Pinto Barreto Jessy - Web Developer & MAO Composer
        </motion.p>

        <motion.div
          className={styles.container__socials}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Link
              href="mailto:jessy.pintobarreto@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={styles.socials__link}
            >
              <motion.div
                variants={socialVariants}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              href="https://www.linkedin.com/in/jessy-gomes-pinto-barreto/"
              target="_blank"
              rel="noreferrer"
              className={styles.socials__link}
            >
              <motion.div
                variants={socialVariants}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              href="https://github.com/jessygomes"
              target="_blank"
              rel="noreferrer"
              className={styles.socials__link}
            >
              <motion.div
                variants={socialVariants}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
        {/* <Link href="/mentions-legales">Mentions Légales</Link> */}
      </motion.div>
    </motion.div>
  );
}

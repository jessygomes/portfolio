"use client";
import { motion } from "framer-motion";
import Player1 from "../Player/Player1";
import styles from "./Presentation.module.css";

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
      <div className={styles.container__title}>
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
      </div>
      <div className={styles.container__title2}>
        <motion.h2
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className={styles.otherTitle}
        >
          WEB DEVELOPPER <span className={styles.titleName}>COMPOSITEUR</span>{" "}
          DEVELOPPEUR WEB <span className={styles.titleName}>COMPOSER</span> WEB
          DEVELOPPER
        </motion.h2>
      </div>
      <div className={styles.container__infosMore}>
        <Player1 />
        <p className={styles.container__description}>
          Donner vie aux visions & rentrer dans un paysage numérique où son
          univers s’exprime... <br /> Mon art réside dans l’exploration infinie
          des possibles où la lueur prend vie et illumine le regard de ceux qui
          la contemplent... <br />{" "}
          <span className={styles.name}>
            Pinto Barreto Jessy - Web Developper & MAO Composer
          </span>
        </p>
        {/* <Link href="/mentions-legales">Mentions Légales</Link> */}
      </div>
    </motion.div>
  );
}

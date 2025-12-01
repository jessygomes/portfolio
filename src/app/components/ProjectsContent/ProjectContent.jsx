"use client";
import { motion } from "framer-motion";
import styles from "./ProjectContent.module.css";
import CardProject from "./CardProjects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.4,
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

export default function ProjectContent() {
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
    >
      <motion.div className={styles.container__title} variants={itemVariants}>
        <motion.h2
          className={styles.titleAndMore}
          initial={{ x: "-100%" }}
          animate={{ x: "40%" }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          PROJECTS <span className={styles.titleName}>REALISATIONS</span>{" "}
          PROJECTS <span className={styles.titleName}>REALISATIONS</span>{" "}
          PROJECTS <span className={styles.titleName}>REALISATIONS</span>{" "}
          PROJECTS
        </motion.h2>
      </motion.div>

      <motion.div
        className={styles.container__infosMore}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <CardProject />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

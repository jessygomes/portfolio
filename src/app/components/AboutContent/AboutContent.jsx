"use client";
import { motion } from "framer-motion";
import styles from "./AboutContent.module.css";

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

const skillVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  hover: {
    scale: 1.05,
    x: 10,
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function AboutContent() {
  const skills = [
    "NodeJs & PostGreSQL | Nest.js | Docker",
    "Next.js (ReactJs) | Redux/Zustand",
    "TailwindCSS",
    "Figma & Base Photoshop (Design)",
    "FL Studio (MAO)",
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={styles.container}
    >
      <motion.div className={styles.container__title} variants={itemVariants}>
        <motion.h2
          className={styles.titleAndMore}
          initial={{ x: "-100%" }}
          animate={{ x: "20%" }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          ABOUT <span className={styles.titleName}>À PROPOS</span> ABOUT{" "}
          <span className={styles.titleName}>À PROPOS</span> ABOUT{" "}
        </motion.h2>
      </motion.div>

      <motion.div
        className={styles.container__infosMore}
        variants={containerVariants}
      >
        <motion.article className={styles.description} variants={itemVariants}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Je m&apos;appelle{" "}
            <motion.span
              className={styles.highlight}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Jessy
            </motion.span>
            , et je suis animé par le développement, le design digital et la
            musique. En tant que{" "}
            <motion.span
              className={styles.role}
              whileHover={{ color: "#00ff88" }}
            >
              Compositeur MAO (Beatmaker) & Développeur
            </motion.span>
            , j&apos;excelle à créer des univers tant musicaux que visuels. Mon
            objectif est d&apos;utiliser la puissance infinie des solutions
            offertes par le web pour résoudre des problèmes de manière
            innovante. Mon engagement dans ces domaines me permet
            d&apos;explorer et de fusionner harmonieusement les mondes du
            développement et de la création artistique.
          </motion.p>
        </motion.article>

        <motion.div className={styles.skills} variants={itemVariants}>
          <motion.h3 className={styles.skillsTitle} variants={itemVariants}>
            Compétences
          </motion.h3>
          {skills.map((skill, index) => (
            <motion.p
              key={index}
              variants={skillVariants}
              whileHover="hover"
              className={styles.skillItem}
              custom={index}
              transition={{ delay: index * 0.1 }}
            >
              <motion.span className={styles.skillBullet}>▸</motion.span>
              {skill}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

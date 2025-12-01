"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../../../public/Data/projects";
import { SparklesCore } from "../../components/UI/Sparkles";
import { useState } from "react";
import Link from "next/link";

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3 },
  },
};

const thumbnailVariants = {
  inactive: { opacity: 0.5, scale: 1 },
  active: { opacity: 1, scale: 1.05 },
  hover: {
    opacity: 0.8,
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
  },
};

const techVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: {
    scale: 1.1,
    y: -5,
    boxShadow: "0 8px 25px rgba(126, 94, 165, 0.3)",
    transition: { type: "spring", stiffness: 400 },
  },
};

const buttonVariants = {
  idle: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -2,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    transition: { type: "spring", stiffness: 300 },
  },
  tap: { scale: 0.98 },
};

export default function ProjectDetails({ params }) {
  const project = projects.find(
    (project) => String(project.slug) === String(params.slug)
  );

  const [mainImage, setMainImage] = useState(project.image[0]);

  const descriptionParagraphs = project.description
    .split("\n")
    .map((p, idx) => (
      <motion.p
        key={idx}
        className="text-white"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: idx * 0.1 }}
      >
        {p}
      </motion.p>
    ));

  return (
    <section className="min-h-screen flex flex-col items-center bg-myblack">
      <div className="h-auto relative w-full overflow-hidden rounded-md">
        <div className="w-full absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.2}
            maxSize={1}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#7E5EA5"
          />
        </div>
        <section className="w-full relative flex items-center justify-center z-20">
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
            className="w-full overflow-hidden pb-20"
          >
            <motion.div
              className="flex flex-col justify-center items-center gap-8 pt-32"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-white text-2xl font-aldrich uppercase"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(126, 94, 165, 0.5)",
                }}
              >
                {project.title}
              </motion.h1>

              <motion.div
                className="flex flex-col justify-center gap-2 px-8 sm:px-0"
                variants={itemVariants}
              >
                <motion.div layout className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={mainImage}
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Image
                        src={mainImage}
                        width={1000}
                        height={1000}
                        alt={project.name}
                        className="object-cover rounded-xl"
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  className="mt-2 w-16 h-12 md:w-96 flex gap-2"
                  variants={containerVariants}
                >
                  {project.image.map((img, idx) => (
                    <motion.div
                      key={idx}
                      variants={thumbnailVariants}
                      initial="inactive"
                      animate={mainImage === img ? "active" : "inactive"}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src={img}
                        width={400}
                        height={400}
                        alt={`${project.name} ${idx + 1}`}
                        className="object-cover rounded-xl cursor-pointer"
                        onClick={() => setMainImage(img)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="px-8 sm:px-0 max-w-[1000px] flex flex-wrap justify-center w-full gap-2 sm:gap-8"
                variants={containerVariants}
              >
                {project.techno.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="bg-mylightpurple w-20 sm:w-32 text-white font-aldrich text-xs sm:text-sm text-center py-1 rounded-xl cursor-pointer"
                    variants={techVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                className="px-8 sm:px-0 flex flex-col gap-2 text-white tracking-wide text-left text-xs sm:text-sm max-w-[1000px] w-full"
                variants={containerVariants}
              >
                {descriptionParagraphs}
              </motion.div>

              <motion.div className="flex gap-2" variants={itemVariants}>
                <Link target="_blank" href={project.link}>
                  <motion.button
                    className="w-28 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black font-aldrich text-sm font-bold z-50"
                    variants={buttonVariants}
                    initial="idle"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {project.finish ? "Voir le site" : "En cours"}
                  </motion.button>
                </Link>
                <Link href="/projects">
                  <motion.button
                    className="w-28 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black font-aldrich text-sm font-bold z-50"
                    variants={buttonVariants}
                    initial="idle"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Retour
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </section>
  );
}

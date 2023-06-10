import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      <div className="flex items-center justify-center h-screen">
        <h1 className="mb-10 text-3xl font-black md:text-7xl dark:text-white">
          <span className="text-gray-400 dark:text-gray-400">Hi 👋, I'm </span>
          Philson Philip!
        </h1>
      </div>
    </motion.div>
  );
}

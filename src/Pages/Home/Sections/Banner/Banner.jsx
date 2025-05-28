import React from "react";
import { motion } from "motion/react";
import team1 from "../../../../assets/team1.jpg";
import team2 from "../../../../assets/team2.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 3, repeat: Infinity }}
            src={team1}
            className="max-w-sm border-blue-600 border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 5, delay: 2, repeat: Infinity }}
            src={team2}
            className="max-w-sm border-blue-600 border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{
              scale: 1.2,
              transition: { duration: 3 },
            }}
            className="text-5xl font-bold text-center"
          >
            Latest{" "}
            <motion.span
              animate={{
                color: ["#b73ffc", "#ff7ae4", "#f8ff3b"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              Jobs
            </motion.span>{" "}
            for you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

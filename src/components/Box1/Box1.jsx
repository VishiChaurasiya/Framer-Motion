import React, { useState } from "react";
import { motion } from "framer-motion";

const Box1 = () => {
  const [isAnimating, setisAnimating] = useState(false);

  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: isAnimating ? "70vw" : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{
          opacity: 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
        onClick={() => setisAnimating(!isAnimating)}
      ></motion.div>
    </div>
  );
};

export default Box1;

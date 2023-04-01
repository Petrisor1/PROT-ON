import {useAnimation,motion} from 'framer-motion/dist/framer-motion';
import { useEffect } from "react";

const FadeInTextOnScroll = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const windowHeight = window.innerHeight;
      const triggerHeight = windowHeight * 0.8; // change this value to adjust when the animation triggers
      if (offset > triggerHeight) {
        controls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInTextOnScroll;
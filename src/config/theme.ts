export const themeTokens = {
  colors: {
    primary: "#004AAD",
    secondary: "#1B79EE",
    accent: "#00BBFF",
  },
  animation: {
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
    duration: {
      fast: 0.2,
      normal: 0.4,
      slow: 0.8,
    },
  },
};

export const motionVariants = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

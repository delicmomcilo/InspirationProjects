export const childrenVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
} as const;

export const staggerChildrenVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.25 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
} as const;

export const closeButton = {
  open: {
    opacity: [0, 1]
  },
  closed: {
    transition: {
      duration: 0.35
    },
    opacity: [1, 0]
  }
};

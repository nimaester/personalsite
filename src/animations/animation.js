export const primaryFadeAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity:1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.5
    }
  }
}


export const slideLeftAnimation = {
  hidden: {
    x: -2000,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.2,
      when: "beforeChildren"

    }
  }
}


export const slideRightAnimation = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
}

export const fadeAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren"
    }
  }
}

export const thirdFadeAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    }
  }
}

export const lineAnimation = {
  hidden: {
    opacity: 0,
    width: 0
  },
  show: {
    opacity: 1,
    width: 100,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    }
  }
}

// NEED TO FIX> NOT WORKING PROPERLY, INFINITE SLIDE FROM RIGHT
// export const slideRightAnimation = {
//   hidden: {
//     // x: 2000,
//     opacity: 0,
//   },
//   show: {
//     // x: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//       // staggerChildren: 0.5
//     }
//   }
// }
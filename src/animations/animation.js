export const slideUpAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity:1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.6,
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
      when: "beforeChildren",
      staggerChildren: 0.5

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
      duration: 0.8,
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

const useFadeAnimation = () => {
  const fadeAnimation = 'transition-opacity duration-500';
  const fadeIn = `opacity-100`
  const fadeOut = `opacity-0`

  return {
    fadeAnimation,
    fadeIn,
    fadeOut
  }
}

export default useFadeAnimation;
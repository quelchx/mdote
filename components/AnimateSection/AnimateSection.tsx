type AnimationProps = {
  children: React.ReactNode;
  animation?: string;
  duration?: string | number;
  delay?: string | number;
};

const AnimateSection: React.FC<AnimationProps> = ({
  children,
  animation,
  duration,
  delay,
}) => {
  AnimateSection.defaultProps = {
    animation: "fade-in",
    delay: "0",
    duration: "0",
  };

  return (
    <div
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
};

export default AnimateSection;


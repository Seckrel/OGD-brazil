import { ParallaxLayer } from "@react-spring/parallax";
import { useStyles } from "./styles";

const CustomParallax = ({
  offset,
  speed,
  children,
  imgSrc,
  backgroundPosition = "center center",
  backgroundSize = "cover",
  justifyContent = "start",
  ...props
}) => {
  const { classes, cx } = useStyles({
    src: imgSrc,
    backgroundPosition: backgroundPosition,
    backgroundSize: backgroundSize,
    justifyContent: justifyContent
  });

  return (
    <ParallaxLayer
      {...props}
      offset={offset}
      speed={speed}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className={cx(
          classes.fullScreen,
          classes.background,
          classes.textCenter
        )}
      >
        {children}
      </div>
    </ParallaxLayer>
  );
};

export default CustomParallax;

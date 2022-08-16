import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params) => ({
  fullScreen: {
    height: "100%",
    width: "100%",
  },
  background: {
    background: `url("${_params.src}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: _params.backgroundPosition,
    backgroundSize: _params.backgroundSize,
    position: "relative",
    zIndex: 1,
  },
  textCenter: {
    display: "flex",
    justifyContent: _params.justifyContent,
    alignItems: "stretch",
  },
}));

const overlayStyles = createStyles((theme, _params) => ({
  overlay: {
    position: "relative",
    padding: "10px",
    minWidth: "max(45%, 30vw)",
    padding: "2em",
    paddingTop: "max(15vh, 10rem)",
    "&::after": {
      background:
        theme.colorScheme === "light"
          ? _params.lightColor
          : _params.darkColor,
      mixBlendMode: _params.mixBlendMode || "multiply",
      position: "absolute",
      inset: 0,
      content: '""',
      zIndex: -1,
    },
  },
}));

export { useStyles, overlayStyles };

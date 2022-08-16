import { Stack, Text, useMantineTheme } from "@mantine/core";
import { overlayStyles } from "./styles";

const Avaliability = () => {
  const theme = useMantineTheme();
  const { classes } = overlayStyles({
    lightColor: theme.colors.gray[3],
    darkColor: theme.colors.gray[7],
    mixBlendMode: "hard-light",
  });
  return (
    <>
      <Stack spacing={"xs"} className={classes.overlay}>
        <Text
          align="center"
          transform="uppercase"
          size={"1.5rem"}
          sx={theme => ({
            font: "bolder 5vw 'Alfa Slab One'",
            position: "relative",
            backgroundColor: theme.colors.yellow[6],
            boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
            padding: "20px",
            borderRadius: "5px",
            color: theme.white,
            zIndex: 1,
            "&::before": {
              content: "''",
              position: "absolute",
              zIndex: -1,
              inset: 0,
              boxShadow: "inset 0 0 2000px rgba(255, 255, 255, .5)",
              filter: "blur(10px)"
            }
          })}
        >
          Now in Every State
        </Text>
      </Stack>
    </>
  );
};

export default Avaliability;

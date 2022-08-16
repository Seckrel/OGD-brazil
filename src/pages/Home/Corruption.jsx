import { Stack, Text, useMantineTheme, Image, Box } from "@mantine/core";
import { overlayStyles } from "./styles";

const Corruption = () => {
  const theme = useMantineTheme();
  const { classes } = overlayStyles({
    lightColor: theme.colors.yellow[2],
    darkColor: theme.colors.gray[7],
  });
  return (
    <>
      <Stack spacing={"xs"} className={classes.overlay}>
        <Text
          align="center"
          transform="capitalize"
          size={"1.5rem"}
          sx={(theme) => ({
            font: "bolder 5vw 'Alfa Slab One'",
            position: "relative",
            backgroundColor: theme.colors.yellow[6],
            boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
            padding: "20px",
            borderRadius: "5px",
            color: theme.white,
            zIndex: 1,
            right: "-40%",
            "&::before": {
              content: "''",
              position: "absolute",
              zIndex: -1,
              inset: 0,
              boxShadow: "inset 0 0 2000px rgba(255, 255, 255, .5)",
              filter: "blur(10px)",
            },
          })}
        >
          No more corruption
        </Text>
      </Stack>
    </>
  );
};

export default Corruption;

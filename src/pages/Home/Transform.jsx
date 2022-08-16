import { Stack, Text, useMantineTheme } from "@mantine/core";
import { overlayStyles } from "./styles";

const Transfrom = () => {
  const theme = useMantineTheme();
  const { classes } = overlayStyles({
    lightColor: theme.colors.gray[3],
    darkColor: theme.colors.gray[7],
    mixBlendMode: "color",
  });
  return (
    <>
      <Stack
        spacing={"xs"}
        sx={{
          borderRadius: "100%",
          zIndex: "-2px",
          left: "10%",
          bottom: "10%",
          "&::after": {
            borderRadius: "100%",
          },
        }}
        className={classes.overlay}
      >
        <Text
          align="center"
          transform="capitalize"
          size={"1.5rem"}
          sx={(theme) => ({
            font: "bolder 5vw 'Alfa Slab One'",
            position: "relative",
            backgroundImage:
              " linear-gradient(to right, var(--mantine-color-green-4), var(--mantine-color-green-7), var(--mantine-color-gray-6),var(--mantine-color-gray-6))",
            boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
            padding: "20px",
            borderRadius: "5px",
            color: theme.white,
            backgroundClip: "text",
            color: "transparent",
            zIndex: 1,
            right: "25%",
            top: "20%",
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
          Transfrom into <br />
          something better
        </Text>
      </Stack>
    </>
  );
};

export default Transfrom;

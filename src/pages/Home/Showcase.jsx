import { Stack, Text, useMantineTheme } from "@mantine/core";
import { overlayStyles } from "./styles";
import brazilLogo from "/images/brazil-logo.png?url";

const Showcase = () => {
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
          size={"1.5rem"}
          color={"#130b73b5"}
          sx={(theme) => ({
            backgroundColor: theme.colors.dark[0],
            borderRadius: "5px",
          })}
        >
          Government Open Data
        </Text>
        <Text
          size={"1.2rem"}
          sx={(theme) => ({
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            color: theme.colors.yellow[5],
          })}
        >
          Now in{" "}
          <Text
            ml={10}
            size={"5rem"}
            sx={{
              background: `url("${brazilLogo}")`,
              backgroundClip: "text",
              backgroundSize: "contain",
              backgroundColor: "green",
              backgroundPosition: "center",
              color: "transparent",
              font: "bolder 12vw 'Alfa Slab One'"
            }}
          >
            Brazil
          </Text>
        </Text>
      </Stack>
    </>
  );
};

export default Showcase;

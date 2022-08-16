import { Stack, Text, useMantineTheme } from "@mantine/core";
import { overlayStyles } from "./styles";
import rioDeJaneiro from "/images/rio-de-janeiro.jpg?url";
import brazilLogo from "/images/brazil-logo.png?url";

const BrazilMessage = () => {
  const theme = useMantineTheme();
  const { classes } = overlayStyles({
    lightColor: theme.colors.yellow[2],
    darkColor: theme.colors.gray[7],
  });
  return (
    <>
      <Stack
        spacing={"xs"}
        className={classes.overlay}
        sx={{
          width: "100%",
          padding: "20px",
          backgroundImage: `url(${rioDeJaneiro})`,
        }}
      >
        <Text
          align="center"
          transform="uppercase"
          sx={{
            background: `url("${rioDeJaneiro}")`,
            backgroundClip: "text",
            backgroundSize: "contain",
            backgroundColor: "green",
            backgroundPosition: "center",
            color: "transparent",
            font: "bolder 12vw 'Alfa Slab One'",
          }}
        >
          Explore Digital <br /> Brazil
        </Text>
      </Stack>
    </>
  );
};

export default BrazilMessage;

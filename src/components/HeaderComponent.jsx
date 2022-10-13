import {
  Header,
  Group,
  Image,
  createStyles,
  Box,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { Sun, Moon } from "tabler-icons-react";
import { Link } from "wouter";
import { colorScheme } from "../utils/colorScheme.utils";
import brazilLogo from "/images/brazil-logo.png?url";

const useStyles = createStyles((theme) => ({
  button: {
    textDecoration: "none",
    border: `1px solid ${colorScheme(true)}`,
    color: `${colorScheme(true)}`,
    padding: "5px 7px",
    borderRadius: "5px",
    boxShadow: theme.shadows.md,
    "&:hover": {
      textDecoration: "none",
      color: colorScheme(),
      backgroundColor: colorScheme(true),
    },
  },
}));

const ButtonAchor = ({ children, ...props }) => {
  const { classes } = useStyles();

  return (
    <Link {...props} className={classes.button}>
      {children}
    </Link>
  );
};

export default function CutomizedHeader() {
  const { colorScheme: mantineColorScheme, toggleColorScheme } =
    useMantineColorScheme();

  return (
    <>
      <Header height={70} py={"xs"} px={"xl"} sx={{ top: 0 }}>
        <Group sx={{ height: "100%" }}>
          <Box sx={{ width: 50, height: 50, cursor: "pointer" }}>
            <Link href="/">
              <Image radius="md" src={brazilLogo} alt={"log"} />
            </Link>
          </Box>
          <Group ml={"auto"}>
            <ButtonAchor href="/">Home</ButtonAchor>
            <ButtonAchor href="/covid-info">Covid</ButtonAchor>
            <ButtonAchor href="/cities-info">Cities Info</ButtonAchor>
            <ButtonAchor href="/weather-info">Weather</ButtonAchor>
            <ActionIcon
              onClick={() => toggleColorScheme()}
              size="lg"
              sx={(theme) => ({
                backgroundColor: colorScheme(
                  false,
                  theme.colors.gray[0],
                  theme.colors.dark[6]
                ),
                color: colorScheme(
                  false,
                  theme.colors.blue[6],
                  theme.colors.yellow[4]
                ),
              })}
            >
              {mantineColorScheme === "light" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </ActionIcon>
          </Group>
        </Group>
      </Header>
    </>
  );
}

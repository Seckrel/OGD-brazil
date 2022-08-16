import { useMantineTheme } from "@mantine/core";

const colorScheme = (
  reverse = false,
  lightColor = undefined,
  darkColor = undefined
) => {
  const theme = useMantineTheme();
  lightColor = lightColor === undefined ? theme.colors.gray[0] : lightColor;
  darkColor = darkColor === undefined ? theme.colors.gray[9] : darkColor;
  const checkedColor = reverse ? "dark" : "light";
  return theme.colorScheme === checkedColor ? lightColor : darkColor;
};

export { colorScheme };

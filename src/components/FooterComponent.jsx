import { Footer } from "@mantine/core";
import { BrandInstagram, BrandFacebook, BrandGithub } from "tabler-icons-react";
import { Group, ActionIcon } from "@mantine/core";

export default function CustomizedFooter() {
  return (
    <Footer
      height={60}
      p="md"
      sx={{ position: "absolute", bottom: 0, width: "100%" }}
    >
      <Group spacing="xs" position="center" noWrap>
        <ActionIcon
          component="a"
          target={"_blank"}
          size="lg"
          variant="default"
          radius="xl"
          href="https://github.com/Seckrel"
        >
          <BrandGithub size={18} />
        </ActionIcon>
        <ActionIcon
          size="lg"
          variant="default"
          radius="xl"
          href={"https://www.instagram.com/aayam_oza/"}
        >
          <BrandInstagram size={18} />
        </ActionIcon>
        <ActionIcon
          component="a"
          target={"_blank"}
          size="lg"
          variant="default"
          radius="xl"
          href="https://www.facebook.com/Seckrell/"
        >
          <BrandFacebook component="a" target="_blank" size={18} />
        </ActionIcon>
      </Group>
    </Footer>
  );
}

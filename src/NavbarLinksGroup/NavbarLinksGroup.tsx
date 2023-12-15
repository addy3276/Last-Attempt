// import { useState } from "react";
import {
  Group,
  Box,
  // Collapse,
  ThemeIcon,
  // Text,
  UnstyledButton,
  rem,
} from "@mantine/core";
// import { IconCalendarStats, IconChevronRight } from "@tabler/icons-react";
import classes from "./NavbarLinksGroup.module.css";
import { useNavigate } from "react-router-dom";

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  link: any;
}

export function LinksGroup({ icon: Icon, label, link }: LinksGroupProps) {
  const navigate = useNavigate();
  return (
    <>
      <UnstyledButton
        onClick={() => navigate(link.to)}
        className={classes.control}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
        </Group>
      </UnstyledButton>
    </>
  );
}

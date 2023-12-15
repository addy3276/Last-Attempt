import { Group, Code, ScrollArea, rem } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  // IconPresentationAnalytics,
  // IconFileAnalytics,
  // IconAdjustments,
  // IconLock,
} from "@tabler/icons-react";
import { UserButton } from "./UserButton/UserButton";
import { LinksGroup } from "./NavbarLinksGroup/NavbarLinksGroup";
import { Logo } from "./NavbarNested/Logo";
import classes from "../src/NavbarNested/NavbarNested.module.css";
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const mockdata = [
  { label: "Dashboard", icon: IconGauge, to: "/dashboard" },
  {
    label: "To Do List",
    icon: IconNotes,
    initiallyOpened: false,
    to: "/todo",
  },
  {
    label: "Releases",
    icon: IconCalendarStats,
    links: [{ label: "Upcoming releases", link: "/release" }],
  },
];
export function Nav() {
  const links = mockdata?.map((link, index) => (
    <LinksGroup {...link} key={index} link={link} />
  ));
  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo style={{ width: rem(120) }} />
          <Code fw={700}>v3.1.2</Code>
        </Group>
      </div>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}
export default Nav;

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger } from "@mantine/core";
import { ReactNode } from "react";
// import Nav from "../Nav";

interface AppshellProps {
  children: ReactNode;
}

export function Appshell({ children }: AppshellProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">{/* <Nav /> */}</AppShell.Navbar>

      <AppShell.Main style={{ minHeight: "100vh !important" }}>
        Main
      </AppShell.Main>
      <AppShell.Main> {children}</AppShell.Main>
    </AppShell>
  );
}
export default Appshell;

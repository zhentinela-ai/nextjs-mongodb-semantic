/* eslint-disable jsx-a11y/alt-text */
import { Menu, Container, Button, Image } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

export function Navbar() {
  const router = useRouter();

  return (
    <Menu inverted attached borderless>
      <Container>
        <Menu.Item>
          <Link href="/">
            <Image src="/favicon.ico" centered size="mini" />
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button
              primary
              size="mini"
              onClick={() => router.push("/tasks/new")}
            >
              New task
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

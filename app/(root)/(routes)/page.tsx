import Header from "@/components/Header";
import { ModeToggle } from "@/components/Theme-Toggle";
import { UserButton } from "@clerk/nextjs";
import Container from "@/components/Container";
import { Button, FloatButton } from "antd";

export default function Home() {
  return (
    <div>
      <Container>
        <Button type="primary" size="small">
          Hello World
        </Button>
        <FloatButton />
      </Container>
    </div>
  );
}

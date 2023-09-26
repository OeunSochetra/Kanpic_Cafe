import Container from "@/components/Container";
import { Button, ConfigProvider } from "antd";
import theme from "@/themeConfig";

export default function Home() {
  return (
    <div className="text-[#786f7a]">
      <ConfigProvider theme={theme}>
        <Container>
          <Button type="primary">Button</Button>
        </Container>
      </ConfigProvider>
    </div>
  );
}

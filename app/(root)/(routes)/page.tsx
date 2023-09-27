import Container from "@/components/Container";
import { ConfigProvider, Button } from "antd";
import theme from "@/themeConfig";
import Mainpage from "@/components/Mainpage";

export default function Home() {
  return (
    <div>
      <ConfigProvider theme={theme}>
        <Mainpage />
      </ConfigProvider>
    </div>
  );
}

import { ConfigProvider, Button } from "antd";
import theme from "@/themeConfig";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div>
      <ConfigProvider theme={theme}></ConfigProvider>
    </div>
  );
}

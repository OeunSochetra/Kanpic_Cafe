import type { ThemeConfig } from 'antd';
import Modal from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 12,
    colorPrimary: '#7b727d',
  },
  
  components: {
    Modal: {
      colorBgElevated:"#7a717d",
      contentBg:"#7a717d"
    }
  }

};

export default theme;
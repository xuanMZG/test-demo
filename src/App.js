import './App.scss';
import Router from './router';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return <Layout className="layout">
  <Sider>Sider</Sider>
  <Layout>
    <Header>Header</Header>
    <Content style={{overflow: 'auto'}}>
      <div className="main">
        <Router />
      </div>
    </Content>
    <Footer className="footer">create by wzw</Footer>
  </Layout>
</Layout>
}

export default App;

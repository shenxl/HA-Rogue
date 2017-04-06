import React from 'react';
import { connect } from 'dva';
import { Layout, Breadcrumb } from 'antd';
import { Link } from 'dva/router';
import Menu from '../components/layout/Menu';
import styles from './Main.less';

const { Header, Content, Footer, Sider } = Layout;

function Main({ children, routes: baseroutes, layout, dispatch }) {
  const itemRender = (route, params, routes, paths) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ?
      <span>{route.breadcrumbName}</span> :
      <Link to={`/${paths.join('/')}`}>{route.breadcrumbName}</Link>;
  };

  const onCollapse = () => {
    dispatch({ type: 'layout/collapsed', payload: !layout.silderCollapsed });
  };
  const SilderProps = {
    breakpoint: 'lg',
    collapsedWidth: '0',
    className: styles.sider,
    collapsible: true,
    collapsed: layout.silderCollapsed,
    onCollapse,
  };
  const MenuProps = {
    layout,
  };

  const BreadcrumbProps = {
    separator: '>',
    routes: baseroutes,
    itemRender,
  };
  return (
    <Layout>
      <Sider {...SilderProps} >
        <div className={styles.logo} />
        <Menu {...MenuProps} />
      </Sider>
      <Layout>
        <Header className={styles.header} >
          <div className={styles.title}>WPS 数据统计平台</div>
        </Header>
        <Content className={styles.content}>
          <div className={styles.breadcrumb}>
            <Breadcrumb {...BreadcrumbProps} />
          </div>
          {children}
        </Content>
        <Footer className={styles.footer}>
          wps 统计平台 ©2017 金山办公软件技术部
        </Footer>
      </Layout>
    </Layout>
  );
}

function mapStateToProps({ layout }) {
  return { layout };
}

export default connect(mapStateToProps)(Main);

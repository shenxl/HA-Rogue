import React from 'react';
import { Menu, Icon } from 'antd';
// import { Icon as FaIcon } from 'react-fa';
import { Link } from 'dva/router';
import styles from './Menu.less';

const SubMenu = Menu.SubMenu;
function CustomMenu({ layout }) {
  const MenuProps = {
    theme: 'dark',
    mode: 'inline',
    defaultOpenKeys: layout.MenuOpenKeys,
    selectedKeys: layout.MenuSelectedKeys,
    className: styles.normal,
  };

  const renderSubMenuTitle = () => {
    return (
      <span >
        <Icon type="dashboard" />
        <span>报活面板</span>
      </span>
    );
  };

  return (
    <Menu {...MenuProps}>
      <SubMenu
        key="dashboard"
        title={renderSubMenuTitle()}
      >
        <Menu.Item key="/dashboard/monthly">
          <Link to="/dashboard/monthly">
            <Icon type="monthly" />
            <span className="nav-text">月活分析</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/dashboard/daily">
          <Link to="/dashboard/daily">
            <Icon type="daily" />
            <span className="nav-text">日活分析</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/dashboard/version">
          <Link to="/dashboard/version">
            <Icon type="version" />
            <span className="nav-text">版本情况</span>
          </Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="/analysis/monthly">
        <Link to="/analysis/monthly">
          <Icon type="dot-chart" />
          <span className="nav-text">统计详情</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default CustomMenu;

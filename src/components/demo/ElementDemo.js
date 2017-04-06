import React from 'react';
import { Icon, Card } from 'antd';
import CountUp from 'react-countup';
import styles from './ElementDemo.css';

function ElementDemo({ type = '政府', icon = 'zhengfu', number = 4000 }) {
  return (
    <Card title={`${type}数据`} extra={<Icon type={icon} className={styles[`icon_${icon}`]} />}>
      <div className={styles.countUp}>
        <CountUp start={0} end={number} duration={3} />
      </div>
    </Card>
  );
}

export default ElementDemo;

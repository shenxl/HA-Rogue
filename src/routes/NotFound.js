import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './NotFound.less';

function NotFound() {
  return (
    <div className={styles.normal}>
      <section>
        <h1><Icon type="404" /></h1>
        <p>页面不见了！
          <a href="/">返回首页</a>
          <Icon type="find1" />找一找
        </p>
      </section>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(NotFound);

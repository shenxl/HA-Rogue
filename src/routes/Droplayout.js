import React from 'react';
import { connect } from 'dva';
import styles from './Droplayout.css';

function Droplayout() {
  return (
    <div className={styles.normal}>
      Route Component: Droplayout
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Droplayout);

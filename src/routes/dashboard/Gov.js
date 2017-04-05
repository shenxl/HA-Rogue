import React from 'react';
import { connect } from 'dva';
import styles from './Gov.css';

function Gov() {
  return (
    <div className={styles.normal}>
      Route Component: Gov
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Gov);

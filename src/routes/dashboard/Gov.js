import React from 'react';
import { connect } from 'dva';
import Block from 'react-blocks';
import classnames from 'classnames';
import ElementDemo from '../../components/demo/ElementDemo';
import styles from './Gov.less';

function Gov() {
  const searchbarStyle = classnames({
    [styles.common]: true,
    [styles.search]: true,
  });

  const widgetStyle = classnames({
    [styles.transparent]: true,
    [styles.widget]: true,
  });

  const ElementDemoProps = {
    type: '企业',
    icon: 'qiye',
    number: 3021,
  };

  const ElementDemoPropsJinrong = {
    type: '金融',
    icon: 'jinrong',
    number: 13021,
  };
  return (
    <Block className={styles.demo} layout vertical wrap>
      <Block className={styles.transparent} layout>
        <Block className={styles.common}>Brand</Block>
        <Block className={searchbarStyle}>Searchbar</Block>
        <Block className={styles.transparent} layout flex justifyEnd>
          <Block className={styles.common} layout>Navigation</Block>
        </Block>
      </Block>
      <Block className={styles.transparent} layout flex>
        <Block className={styles.sidebar} layout vertical>
          <Block className={styles.common} flex>Categories</Block>
          <Block className={styles.common}>Settings</Block>
        </Block>
        <Block className={styles.transparent} layout vertical flex>
          <Block className={styles.common}>Dashboard Graph</Block>
          <Block className={widgetStyle} layout>
            <Block className={styles.common} flex >
              <ElementDemo {...ElementDemoProps} /></Block>
            <Block className={styles.common} flex>
              <ElementDemo /></Block>
            <Block className={styles.common} flex>
              <ElementDemo {...ElementDemoPropsJinrong} /></Block>
          </Block>
          <Block className={styles.common} flex>Dashboard Content</Block>
        </Block>
      </Block>
      <Block style={styles.common}>Footer</Block>
    </Block>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Gov);

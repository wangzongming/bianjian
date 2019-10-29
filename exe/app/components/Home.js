// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import "antd/es/style/index.css"
import Button from "antd/es/button"

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <center>
        <h1>hello</h1>
        <Button>antd 按钮</Button>
        </center>

      </div>
    );
  }
}

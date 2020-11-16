import React, { FC } from 'react';
import PropTypes from 'prop-types';

import styles from './layout.module.scss';

const Layout: FC = ({ children }) => (
  <div className={styles['uq-Layout']}>{children}</div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

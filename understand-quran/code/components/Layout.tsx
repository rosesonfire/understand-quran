import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Head from 'next/head';

import Header from './Header';
import styles from './layout.module.scss';
import { Children, DefaultProps } from '../utils/react-utils';

type Props = {
  children: Children,
  isHome?: boolean,
  pageTitle: string,
};

const DEFAULT_PROPS: DefaultProps<Props> = {
  isHome: false,
};

const Layout: FC<Props> = ({
  children,
  isHome = DEFAULT_PROPS.isHome,
  pageTitle,
}) => (
  <>
    <Head>
      <title>{pageTitle}</title>
    </Head>

    <div className={styles['uq-Layout']}>
      <Header isHome={isHome} />

      <main>{children}</main>

      {!isHome && (
        <div className={styles.backToHome}>
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  pageTitle: PropTypes.string.isRequired,
};

Layout.defaultProps = DEFAULT_PROPS;

export default Layout;

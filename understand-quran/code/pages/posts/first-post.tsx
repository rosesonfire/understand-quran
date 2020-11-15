import React, { FC } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '../../components/layout';

const FirstPost: FC = () => (
  <Layout>
    <Head>
      <title>First Post</title>
    </Head>
    <h2>
      <Link href="/">
        Back to home
      </Link>
    </h2>
  </Layout>
);

FirstPost.propTypes = {};

export default FirstPost;

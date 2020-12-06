import React, { FC } from 'react';
import Link from 'next/link';

import { Layout } from '@components';

const FirstPost: FC = () => (
  <Layout pageTitle="First Post">
    <h2>
      <Link href="/">
        Back to home
      </Link>
    </h2>
  </Layout>
);

export default FirstPost;

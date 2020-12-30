import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import {
  Link as MaterialLink,
  Typography,
} from '@material-ui/core';

import { PageLinks } from '@components';

const Index: NextPage = () => (
  <>
    <Typography variant="h1">
      Read
      <Link href="/rendering/FirstPost">
        <MaterialLink>
          this page!
        </MaterialLink>
      </Link>
    </Typography>

    <Typography paragraph>
      Get started by editing
      <code>pages/index.js</code>
    </Typography>

    <Typography variant="h3">
      <Link href="/testing-redux/item-list">
        <MaterialLink href="/testing-redux/item-list">
          Test redux
        </MaterialLink>
      </Link>
    </Typography>

    <PageLinks />
  </>
);

export default Index;

import React, { FC } from 'react';
import Link from 'next/link';
import {
  Link as MaterialLink,
  Typography,
} from '@material-ui/core';

import { PageLinks } from '@components';

const Index: FC = () => (
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

    <PageLinks />
  </>
);

export default Index;

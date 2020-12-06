import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import { GridItem } from '@components';

import PageLink from './PageLink';
import styles from './pageLinks.module.scss';

const PageLinks: FC = () => (
  <Grid className={styles['uq-PageLinks']} container justify="center" spacing={2}>
    <GridItem>
      <PageLink
        description="Without state"
        href="/rendering/server-side/server-side-without-state"
        name="Server side&rarr;"
      />
    </GridItem>

    <GridItem>
      <PageLink
        description="With state"
        href="/rendering/server-side/server-side-with-state"
        name="Server side&rarr;"
      />
    </GridItem>

    <GridItem>
      <PageLink
        description="Without state"
        href="/rendering/ssg/ssg-without-state"
        name="SSG&rarr;"
      />
    </GridItem>

    <GridItem>
      <PageLink
        description="With state"
        href="/rendering/ssg/ssg-with-state"
        name="SSG&rarr;"
      />
    </GridItem>

    <GridItem>
      <PageLink
        description="Without state"
        href="/rendering/irs/irs-without-state"
        name="IRS&rarr;"
      />
    </GridItem>

    <GridItem>
      <PageLink
        description="With state"
        href="/rendering/irs/irs-with-state"
        name="IRS&rarr;"
      />
    </GridItem>

    <GridItem>
      <PageLink
        description="Without state"
        href="/rendering/static/static-without-state"
        name="Static&rarr;"
      />
    </GridItem>

    <GridItem>
      <PageLink
        description="With state"
        href="/rendering/static/static-with-state"
        name="Static&rarr;"
      />
    </GridItem>
  </Grid>
);

export default PageLinks;

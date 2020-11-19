import React, { FC } from 'react';
import Link from 'next/link';
import {
  Grid,
  Link as MaterialLink,
  Typography,
} from '@material-ui/core';

import { Card } from '../lib';

const Index: FC = () => (
  <>
    <Typography variant="h1">
      Read
      <Link href="/posts/FirstPost">
        <MaterialLink>
          this page!
        </MaterialLink>
      </Link>
    </Typography>

    <Typography paragraph>
      Get started by editing
      <code>pages/index.js</code>
    </Typography>

    <Grid container justify="center">
      <Grid item>
        <Card
          description="Find in-depth information about Next.js features and API."
          link="https://nextjs.org/docs"
          name="Documentation &rarr;"
        />
      </Grid>

      <Grid>
        <Card
          description="Learn about Next.js in an interactive course with quizzes!"
          link="https://nextjs.org/learn"
          name="Learn &rarr;"
        />
      </Grid>

      <Grid>
        <Card
          description="Discover and deploy boilerplate example Next.js projects."
          link="https://github.com/vercel/next.js/tree/master/examples"
          name="Examples"
        />
      </Grid>

      <Grid>
        <Card
          description="Instantly deploy your Next.js site to a public URL with Vercel."
          link="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          name=" Deploy &rarr;"
        />
      </Grid>
    </Grid>
  </>
);

export default Index;

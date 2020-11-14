import { FC } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Layout from '../../components/layout'

const FirstPost: FC = () => (
  <Layout>
    <Head>
      <title>First Post</title>
    </Head>
    <h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h2>
  </Layout>
)

export default FirstPost
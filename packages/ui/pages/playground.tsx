import React from 'react';
import Head from 'next/head';
import { Typography } from 'antd';

import { AppLayout } from 'components/AppLayout';

const { Title, Paragraph } = Typography;

export default function IndexPage(props: { body: string }) {
  return (
    <AppLayout>
      <Head>
        <title>Playground</title>
      </Head>
      <Title level={2}>Playground</Title>
      <Paragraph>Playground Page</Paragraph>
    </AppLayout>
  );
}

import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import { Button, Layout } from '@components';
import { useModal, useSwitch } from '@hooks';

const FirstPost: NextPage = () => {
  const [shouldShowModal,, setShouldShowModal] = useSwitch();

  const modal = useModal({
    closeModal: () => setShouldShowModal(false),
    description: 'Click outside to exit modal',
    isShown: shouldShowModal,
    name: 'This is a modal',
  });

  return (
    <Layout pageTitle="First Post">
      <>
        {modal}
        <h2>
          <Link href="/">
            Back to home
          </Link>
        </h2>

        <Button
          onClick={() => setShouldShowModal(true)}
          text="OPEN MODAL"
        />

        <br />

        <Button
          onClick={() => {}}
          text="Custom button"
        />
      </>
    </Layout>
  );
};

export default FirstPost;

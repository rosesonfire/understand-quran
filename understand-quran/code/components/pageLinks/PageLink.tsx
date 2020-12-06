import React, { FC } from 'react';
import { Card } from '@uq/design-library';
import PropTypes from 'prop-types';
import {
  Link as MaterialLink,
} from '@material-ui/core';
import Link from 'next/link';

type Props = {
  description: string,
  href: string,
  name: string,
};

const PageLink: FC<Props> = ({ description, href, name }) => (
  <>
    <Card
      description={description}
      href={href}
      name={name}
    />
    <Link href={href}>
      <MaterialLink>
        Navigate to without refresh
      </MaterialLink>
    </Link>
  </>
);

PageLink.propTypes = {
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PageLink;

import React, { ChangeEventHandler, FC } from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  InputLabel,
  Typography,
} from '@material-ui/core';

import { DefaultProps } from '@utils/react-utils';

export type Props = {
  name: string,
  onChange?: ChangeEventHandler | null,
  value: string | string[],
};

const DEFAULT_PROPS: DefaultProps<Props> = {
  onChange: null,
};

const CardItem: FC<Props> = ({
  name,
  onChange = DEFAULT_PROPS.onChange,
  value,
}) => (
  <>
    <InputLabel>
      {name}
      :
    </InputLabel>

    {onChange === null ? (
      <Typography paragraph>
        {value}
      </Typography>
    ) : (
      <Input
        onChange={onChange}
        value={value}
      />
    )}
  </>
);

CardItem.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string.isRequired),
  ]).isRequired,
};

CardItem.defaultProps = DEFAULT_PROPS;

export default CardItem;

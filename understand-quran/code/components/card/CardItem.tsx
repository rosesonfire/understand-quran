import React, { ChangeEventHandler, FC } from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  InputLabel,
  Typography,
} from '@material-ui/core';

import { DefaultProps } from '@utils/react-utils';

import CardItemEmptyState from './CardItemEmptyState';
import CardItemErrorState from './CardItemErrorState';

export type Props = {
  hasError?: boolean,
  isEmpty?: boolean,
  name: string,
  onChange?: ChangeEventHandler | null,
  value?: string | string[] | null,
};

const DEFAULT_PROPS: DefaultProps<Props> = {
  hasError: false,
  isEmpty: false,
  onChange: null,
  value: null,
};

const CardItem: FC<Props> = ({
  hasError = DEFAULT_PROPS.hasError,
  isEmpty = DEFAULT_PROPS.isEmpty,
  name,
  onChange = DEFAULT_PROPS.onChange,
  value = DEFAULT_PROPS.value,
}) => {
  const hasBody = !hasError && !isEmpty;

  return (
    <>
      <InputLabel>
        {name}
        :
      </InputLabel>

      {hasError ? <CardItemErrorState /> : null}

      {isEmpty ? <CardItemEmptyState /> : null}

      {(hasBody && onChange) ? <Input onChange={onChange} value={value} /> : null}

      {hasBody && !onChange
        ? (
          <Typography paragraph>
            {value}
          </Typography>
        )
        : null}
    </>
  );
};

CardItem.propTypes = {
  hasError: PropTypes.bool,
  isEmpty: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string.isRequired),
  ]),
};

CardItem.defaultProps = DEFAULT_PROPS;

export default CardItem;

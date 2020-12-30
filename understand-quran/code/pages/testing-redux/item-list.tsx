import React, { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Autocomplete, Skeleton } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@material-ui/core';

import { Item } from '@uqTypes/business/item';
import { selector, State } from '@redux/ducks';
import { ActionFactory } from '@redux/ducks/actions';
import { ChangeHandler } from '@utils/react-utils';

import styles from './itemList.module.scss';

const SEARCH_ENDPOINT = '/api/itemIds';

const ItemList: NextPage = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [areSuggestionsDisplayed, setAreSuggestionsDisplayed] = useState(false);
  // const [clickCount, setClickCount] = useState(0);
  // const { data: posts } = HTTPAPI.get<Posts[]>('/api/posts');
  // const { error } = HTTPAPI.get<Posts[]>('/api/wrong-url');

  // const handleClick = ChangeHandler.getClickHandler(() => setClickCount(clickCount + 1));
  const {
    itemList: { items },
    searchedItems,
  } = useSelector<State, ReturnType<typeof selector>>(selector);

  const searchItems = items?.filter(({ id }) => searchedItems.itemIds?.includes(id)) ?? null;

  return (
    <div className={styles['uq-ItemList']}>
      <Autocomplete<Item, undefined, undefined, true>
        autoComplete
        autoHighlight
        blurOnSelect
        clearOnBlur
        clearOnEscape
        freeSolo
        fullWidth
        getOptionLabel={(option) => option.name}
        getOptionSelected={(option, value) => option.name === value.name}
        inputValue={searchedItems.searchText ?? ''}
        loading={!items}
        onClose={() => setAreSuggestionsDisplayed(false)}
        onOpen={() => setAreSuggestionsDisplayed(true)}
        open={areSuggestionsDisplayed}
        options={searchItems ?? []}
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {items ? null : <CircularProgress color="inherit" size={20} />}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
            label="Item"
            onChange={ChangeHandler.getKeyPressHandler(
              value => dispatch(ActionFactory.initiateSearch(value, `${SEARCH_ENDPOINT}?q=${value}`)),
            )}
            variant="outlined"
          />
        )}
        style={{ width: 300 }}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items ? (
              items.map(({
                category,
                id,
                name,
                price,
              }) => (
                <TableRow key={id}>
                  <TableCell align="center">
                    {id}
                  </TableCell>

                  <TableCell align="center">
                    {name}
                  </TableCell>

                  <TableCell align="center">
                    {price}
                  </TableCell>

                  <TableCell align="center">
                    {category}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align="center">
                  <Skeleton />
                </TableCell>

                <TableCell align="center">
                  <Skeleton />
                </TableCell>

                <TableCell align="center">
                  <Skeleton />
                </TableCell>

                <TableCell align="center">
                  <Skeleton />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <br />
      <br />

      <Typography align="center" variant="h4">
        <Link href="/">
          Back to home
        </Link>
      </Typography>
    </div>
  );
};

export default ItemList;

import React, { FC, useEffect } from 'react';
import { /* batch , */useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { Skeleton } from '@material-ui/lab';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import { selectors, State } from '@redux/ducks';
import { ItemListActionFactory } from '@redux/ducks/itemList/actions';

// import { ChangeHandler } from '@utils/react-utils';
import styles from './itemList.module.scss';

const ItemList: FC = () => {
  // const [clickCount, setClickCount] = useState(0);
  // const { data: posts } = HTTPAPI.get<Posts[]>('/api/posts');
  // const { error } = HTTPAPI.get<Posts[]>('/api/wrong-url');

  // const handleClick = ChangeHandler.getClickHandler(() => setClickCount(clickCount + 1));

  const dispatch = useDispatch();

  const { itemList: { items } } = typeof window !== undefined
    ? useSelector<State, ReturnType<typeof selectors>>(selectors)
    : { itemList: { items: null } };

  useEffect(() => {
    dispatch(ItemListActionFactory.initializeItemList());

    // Use Redux observables for this
    // batch(() => {
    //   dispatch(ItemListActionFactory.addToItemList(
    //     {
    //       category: 'furniture',
    //       id: '8524',
    //       name: 'Chair',
    //       price: '$20',
    //     },
    //   ));

    //   dispatch(ItemListActionFactory.addToItemList(
    //     {
    //       category: 'electronics',
    //       id: '7891',
    //       name: 'Keyboard',
    //       price: '$100',
    //     },
    //   ));
    // });
  }, []);

  return (
    <div className={styles['uq-ItemList']}>
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

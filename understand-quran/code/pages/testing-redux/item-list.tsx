import React, { FC, useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
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

import itemListSelectors from '@redux/selectors/itemList';
import { State } from '@redux/reducers';
import { ItemListActionFactory } from '@redux/actions/itemList';

// import { ChangeHandler, HTTPAPI } from '@utils/react-utils';
import styles from './itemList.module.scss';

const ItemList: FC = () => {
  // const [clickCount, setClickCount] = useState(0);
  // const { data: posts } = HTTPAPI.get<Posts[]>('/api/posts');
  // const { error } = HTTPAPI.get<Posts[]>('/api/wrong-url');

  // const handleClick = ChangeHandler.getClickHandler(() => setClickCount(clickCount + 1));

  const dispatch = useDispatch();

  const { items } = typeof window !== undefined
    ? useSelector<State, ReturnType<typeof itemListSelectors>>(
      ({ itemList }) => itemListSelectors(itemList),
    )
    : { items: null };

  useEffect(() => {
    batch(() => {
      dispatch(ItemListActionFactory.initializeItemList([
        {
          category: 'food',
          id: '4984',
          name: 'Egg',
          price: '$1 per dozen',
        },
        {
          category: 'toy',
          id: '9689',
          name: 'Football',
          price: '$10',
        },
        {
          category: 'food',
          id: '4586',
          name: 'Cake',
          price: '$2 per pound',
        },
      ]));

      dispatch(ItemListActionFactory.addToItemList(
        {
          category: 'furniture',
          id: '8524',
          name: 'Chair',
          price: '$20',
        },
      ));
    });
  }, []);

  // const items: Item[] = [
  //   {
  //     category: 'Food',
  //     id: '1',
  //     name: 'Eggs',
  //     price: '$1 per dozen',
  //   },
  //   {
  //     category: 'Sports',
  //     id: '2',
  //     name: 'Football',
  //     price: '$10',
  //   },
  //   {
  //     category: 'Food',
  //     id: '3',
  //     name: 'Spinach',
  //     price: '$0.5 per kg',
  //   },
  // ];

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
              items.map(({ category, id, name, price }) => (
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

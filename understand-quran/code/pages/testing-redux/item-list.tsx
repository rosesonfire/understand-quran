import React, { FC, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
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

import selector from '@redux/selectors';

// {itemIds.map(({
//   category,
//   id,
//   name,
//   price,
// }) => (
//     <TableRow key={id}>
//       <TableCell component="th" scope="row">{name}</TableCell>
//       <TableCell align="right">{price}</TableCell>
//       <TableCell align="right">{category}</TableCell>
//     </TableRow>
//   ))}

// import { ChangeHandler, HTTPAPI } from '@utils/react-utils';
import styles from './itemList.module.scss';

const ItemList: FC = () => {
  // const [clickCount, setClickCount] = useState(0);
  // const { data: posts } = HTTPAPI.get<Posts[]>('/api/posts');
  // const { error } = HTTPAPI.get<Posts[]>('/api/wrong-url');

  // const handleClick = ChangeHandler.getClickHandler(() => setClickCount(clickCount + 1));
  const { itemList: { itemIds } } = useSelector(selector);

  useEffect(() => {
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
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemIds ? (
              null
            ) : (
              <TableRow>
                <TableCell>
                  <Skeleton />
                </TableCell>

                <TableCell>
                  <Skeleton />
                </TableCell>

                <TableCell>
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

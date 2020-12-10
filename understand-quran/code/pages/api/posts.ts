import { NextApiHandler } from 'next';

const METHODS = {
  GET: 'GET',
};

const posts: NextApiHandler = (req, res) => {
  if (req.method === METHODS.GET) {
    res.status(200).json([
      {
        id: 1,
        title: 'This is a post',
      },
      {
        id: 2,
        title: 'This is another post',
      },
    ]);
  }
};

export default posts;

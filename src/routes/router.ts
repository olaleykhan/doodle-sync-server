// import userRouter from './users/users.router.js';
import express from 'express';

const router = express.Router();

router.get('/hello', (req, res) => {
  res.send('Hello World!');
}
);

// router.use('/users', userRouter);

export default router;

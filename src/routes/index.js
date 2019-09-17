import { Router } from 'express';
import auth from './auth';
import admin from './admin';
import product from './product';
import sale from './sale';

const router = Router();

router.use('/auth', auth);
router.use(admin);
router.use('/products', product);
router.use('/sales', sale);

export default router;

import { Router } from 'express';
import auth from './auth';
import admin from './admin';
import product from './product';

const router = Router();

router.use('/auth', auth);
router.use(admin);
router.use('/products', product);

export default router;

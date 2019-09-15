import { Router } from 'express';
import auth from './auth';
import admin from './admin';

const router = Router();

router.use('/auth', auth);
router.use(admin);

export default router;

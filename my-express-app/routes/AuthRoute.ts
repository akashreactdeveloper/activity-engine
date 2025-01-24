import { Router } from 'express';
import * as GetAuthDetails from '../controllers/GetAuthDetails'

const router = Router();

router.post('/auth', GetAuthDetails.createSession);

export default router;
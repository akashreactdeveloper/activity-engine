import { Router } from 'express';
import * as GetAuthDetails from '../controllers/GetAuthDetails'

const router = Router();

router.post('/auth', GetAuthDetails.createSession);
router.delete('/auth/:user_id', GetAuthDetails.deleteUser);
router.put('/auth/:user_id', GetAuthDetails.updateUser);

export default router;  
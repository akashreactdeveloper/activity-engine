import { Router } from 'express';
import * as ProgressTracking from '../controllers/ProgressTracking';

const router = Router();

router.post('/course-progress/initialize-progress',ProgressTracking.createProgressMap);

export default router;
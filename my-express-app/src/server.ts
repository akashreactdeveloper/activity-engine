import express from 'express';
import { PrismaClient } from '@prisma/client';
import AuthRoutes from '../routes/AuthRoute';

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

app.use(express.json());
app.use(AuthRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

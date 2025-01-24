// src/controllers/LoginSessionController.ts
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export async function createSession(req: Request, res: Response): Promise<void> {
    const { user_id, access_token, expires_in } = req.body;
    try {
        const newSession = await prisma.loginSession.create({
            data: {
                user_id,
                access_token,
                expires_in
            }
        });

        res.json(newSession);
    } catch (error) {
        console.error('Failed to create session:', error);
        const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
        res.status(500).send({ message: `Error creating session: ${errorMessage}`    })
}
}
// You might want to add more functionalities like deleting a session, finding a session by accessToken, etc.

// src/controllers/attemptSessionController.ts
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import axios from "axios";
import LMS_URL from "../contant";

const prisma = new PrismaClient();

export async function submitAssessment(
  req: Request,
  res: Response
): Promise<void> {
  const { studentId, courseId, assessmentId, attemptId, questionId, answers } =
    req.body;

  const parsedAssessmentId = parseInt(assessmentId, 10);
  const parsedcourseId = parseInt(courseId, 10);
  const parsedStudentId = parseInt(studentId, 10);
  const parsedAttemptId = parseInt(attemptId, 10);
  const parsedQuestionId = parseInt(questionId, 10);
  let isCorrect = false;

  try {
    const session = await prisma.loginSession.findFirst({
      where: {
        user_id: parsedStudentId,
      },
      select: {
        access_token: true,
      },
    });

    if (session) {
      console.log("Session:", session.access_token);
    } else {
      console.error("Session not found for user:", parsedStudentId);
      res.status(404).send({ message: "Session not found" });
      return;
    }

    console.log(`${LMS_URL}/api/v1/assessment/solutions/${parsedQuestionId}`)
    const response = await axios.get(`${LMS_URL}/api/v1/assessment/solutions/${parsedQuestionId}`, {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });
    const externalData = response.data.solution.choice;
    console.log(externalData);

    if(answers === externalData){
        isCorrect = true;
    }

    const newSubmit = await prisma.submitSession.create({
      data: {
        assessmentId: parsedAssessmentId,
        courseId: parsedcourseId,
        studentId: parsedStudentId,
        attemptId: parsedAttemptId,
        questionId: parsedQuestionId,
        answers,
        isAnswerCorrect: isCorrect, // or true, depending on your logic
      },
    });

    res.json(newSubmit);
  } catch (error) {
    console.error("Failed to create session:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res
      .status(500)
      .send({ message: `Error creating session: ${errorMessage}` });
  }
}

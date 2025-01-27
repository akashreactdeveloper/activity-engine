-- CreateTable
CREATE TABLE "submitSession" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "assessmentId" INTEGER NOT NULL,
    "attemptId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "answers" TEXT NOT NULL,
    "isAnswerCorrect" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "submitSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "submitSession_studentId_idx" ON "submitSession"("studentId");

-- CreateIndex
CREATE INDEX "submitSession_assessmentId_idx" ON "submitSession"("assessmentId");

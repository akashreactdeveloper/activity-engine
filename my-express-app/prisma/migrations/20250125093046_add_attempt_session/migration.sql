-- CreateTable
CREATE TABLE "attemptSession" (
    "id" SERIAL NOT NULL,
    "assessmentId" INTEGER NOT NULL,
    "courseInstanceId" TEXT NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "attemptSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "attemptSession_assessmentId_idx" ON "attemptSession"("assessmentId");

-- CreateIndex
CREATE INDEX "attemptSession_studentId_idx" ON "attemptSession"("studentId");

-- CreateTable
CREATE TABLE "LoginSession" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "access_token" TEXT NOT NULL,
    "expires_in" INTEGER NOT NULL,

    CONSTRAINT "LoginSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LoginSession_user_id_idx" ON "LoginSession"("user_id");

-- CreateIndex
CREATE INDEX "LoginSession_access_token_idx" ON "LoginSession"("access_token");

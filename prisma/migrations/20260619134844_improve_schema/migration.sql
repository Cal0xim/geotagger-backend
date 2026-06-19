-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "imageKey" TEXT;

-- CreateIndex
CREATE INDEX "Guess_userId_idx" ON "Guess"("userId");

-- CreateIndex
CREATE INDEX "Guess_locationId_idx" ON "Guess"("locationId");

-- CreateIndex
CREATE INDEX "Location_createdAt_idx" ON "Location"("createdAt");

-- CreateIndex
CREATE INDEX "Location_userId_idx" ON "Location"("userId");

-- CreateIndex
CREATE INDEX "PasswordResetToken_userId_idx" ON "PasswordResetToken"("userId");

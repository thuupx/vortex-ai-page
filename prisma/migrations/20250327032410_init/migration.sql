-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'CONTACTED', 'ONBOARDED', 'UNSUBSCRIBED');

-- CreateTable
CREATE TABLE "waitlist_users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "referrer" TEXT,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "waitlist_users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "waitlist_users_email_key" ON "waitlist_users"("email");

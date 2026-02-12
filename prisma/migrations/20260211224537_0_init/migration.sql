-- CreateEnum
CREATE TYPE "Category" AS ENUM ('stress', 'relationship', 'work', 'family', 'motivation', 'purpose', 'life', 'finance', 'health', 'other');

-- CreateEnum
CREATE TYPE "ResponseCategory" AS ENUM ('advice', 'empathy', 'encouragement', 'humor', 'perspective', 'validation', 'support', 'resources', 'motivation', 'other');

-- CreateTable
CREATE TABLE "Whisper" (
    "id" SERIAL NOT NULL,
    "category" "Category" NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Whisper_pkey" PRIMARY KEY ("id")
);

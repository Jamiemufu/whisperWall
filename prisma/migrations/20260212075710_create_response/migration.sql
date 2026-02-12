-- CreateTable
CREATE TABLE "Response" (
    "id" SERIAL NOT NULL,
    "whisperId" INTEGER NOT NULL,
    "category" "ResponseCategory" NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "parentId" INTEGER,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_whisperId_fkey" FOREIGN KEY ("whisperId") REFERENCES "Whisper"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Response"("id") ON DELETE CASCADE ON UPDATE CASCADE;

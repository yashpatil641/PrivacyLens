-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_siteId_fkey";

-- DropIndex
DROP INDEX "Score_siteId_key";

-- AlterTable
ALTER TABLE "Score" ALTER COLUMN "siteId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE SET NULL ON UPDATE CASCADE;

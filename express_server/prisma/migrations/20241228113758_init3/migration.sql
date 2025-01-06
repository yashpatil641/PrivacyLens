/*
  Warnings:

  - The primary key for the `RiskMetadata` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Score` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Site` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "RiskMetadata" DROP CONSTRAINT "RiskMetadata_siteId_fkey";

-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_siteId_fkey";

-- AlterTable
ALTER TABLE "RiskMetadata" DROP CONSTRAINT "RiskMetadata_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "siteId" SET DATA TYPE TEXT,
ADD CONSTRAINT "RiskMetadata_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "RiskMetadata_id_seq";

-- AlterTable
ALTER TABLE "Score" DROP CONSTRAINT "Score_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "siteId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Score_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Score_id_seq";

-- AlterTable
ALTER TABLE "Site" DROP CONSTRAINT "Site_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Site_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Site_id_seq";

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiskMetadata" ADD CONSTRAINT "RiskMetadata_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

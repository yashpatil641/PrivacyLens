/*
  Warnings:

  - You are about to drop the column `account_control` on the `Score` table. All the data in the column will be lost.
  - You are about to drop the column `data_collection` on the `Score` table. All the data in the column will be lost.
  - You are about to drop the column `data_deletion` on the `Score` table. All the data in the column will be lost.
  - You are about to drop the column `data_sharing` on the `Score` table. All the data in the column will be lost.
  - You are about to drop the column `legal_rights` on the `Score` table. All the data in the column will be lost.
  - You are about to drop the column `privacy_controls` on the `Score` table. All the data in the column will be lost.
  - You are about to drop the column `security_measures` on the `Score` table. All the data in the column will be lost.
  - You are about to drop the column `terms_changes` on the `Score` table. All the data in the column will be lost.
  - You are about to drop the column `transparency` on the `Score` table. All the data in the column will be lost.
  - You are about to drop the column `user_content_rights` on the `Score` table. All the data in the column will be lost.
  - Added the required column `data` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Score" DROP COLUMN "account_control",
DROP COLUMN "data_collection",
DROP COLUMN "data_deletion",
DROP COLUMN "data_sharing",
DROP COLUMN "legal_rights",
DROP COLUMN "privacy_controls",
DROP COLUMN "security_measures",
DROP COLUMN "terms_changes",
DROP COLUMN "transparency",
DROP COLUMN "user_content_rights",
ADD COLUMN     "data" JSONB NOT NULL;

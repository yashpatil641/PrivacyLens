/*
  Warnings:

  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "test";

-- CreateTable
CREATE TABLE "Site" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Site_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Score" (
    "id" SERIAL NOT NULL,
    "account_control" JSONB NOT NULL,
    "data_collection" JSONB NOT NULL,
    "data_deletion" JSONB NOT NULL,
    "data_sharing" JSONB NOT NULL,
    "legal_rights" JSONB NOT NULL,
    "privacy_controls" JSONB NOT NULL,
    "security_measures" JSONB NOT NULL,
    "terms_changes" JSONB NOT NULL,
    "transparency" JSONB NOT NULL,
    "user_content_rights" JSONB NOT NULL,
    "siteId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RiskMetadata" (
    "id" SERIAL NOT NULL,
    "risk_percentage" INTEGER NOT NULL,
    "risk_level" TEXT NOT NULL,
    "GDPR_compliance_score" INTEGER NOT NULL,
    "additional_notes" TEXT NOT NULL,
    "siteId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RiskMetadata_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Site_url_key" ON "Site"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Score_siteId_key" ON "Score"("siteId");

-- CreateIndex
CREATE UNIQUE INDEX "RiskMetadata_siteId_key" ON "RiskMetadata"("siteId");

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiskMetadata" ADD CONSTRAINT "RiskMetadata_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

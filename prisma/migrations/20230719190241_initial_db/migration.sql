-- CreateTable
CREATE TABLE "stores" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fantasyName" TEXT NOT NULL,
    "corporateName" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phones" TEXT NOT NULL,
    "themes" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fantasyName" TEXT NOT NULL,
    "corporateName" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phones" TEXT NOT NULL,
    "themes" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME,
    "storeId" TEXT
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "customerId" TEXT
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,
    "visibility" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME,
    "storeId" TEXT
);

-- CreateTable
CREATE TABLE "promotions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "startDate" DATETIME,
    "finalDate" DATETIME,
    "visibility" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME,
    "storeId" TEXT
);

-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "date" DATETIME,
    "times" TEXT,
    "images" TEXT,
    "visibility" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME,
    "promotionId" TEXT,
    "storeId" TEXT,
    "customerId" TEXT,
    "categoryId" TEXT
);

-- CreateTable
CREATE TABLE "appointments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "paidOut" BOOLEAN NOT NULL DEFAULT false,
    "amountPaid" DECIMAL NOT NULL,
    "date" DATETIME,
    "time" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME,
    "storeId" TEXT,
    "customerId" TEXT,
    "userId" TEXT
);

-- CreateIndex
CREATE INDEX "customers_storeId_idx" ON "customers"("storeId");

-- CreateIndex
CREATE UNIQUE INDEX "users_customerId_key" ON "users"("customerId");

-- CreateIndex
CREATE INDEX "users_customerId_idx" ON "users"("customerId");

-- CreateIndex
CREATE INDEX "categories_storeId_idx" ON "categories"("storeId");

-- CreateIndex
CREATE INDEX "promotions_storeId_idx" ON "promotions"("storeId");

-- CreateIndex
CREATE INDEX "schedules_storeId_idx" ON "schedules"("storeId");

-- CreateIndex
CREATE INDEX "schedules_promotionId_idx" ON "schedules"("promotionId");

-- CreateIndex
CREATE INDEX "schedules_customerId_idx" ON "schedules"("customerId");

-- CreateIndex
CREATE INDEX "schedules_categoryId_idx" ON "schedules"("categoryId");

-- CreateIndex
CREATE INDEX "appointments_storeId_idx" ON "appointments"("storeId");

-- CreateIndex
CREATE INDEX "appointments_customerId_idx" ON "appointments"("customerId");

-- CreateIndex
CREATE INDEX "appointments_userId_idx" ON "appointments"("userId");

-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('INACTIVE', 'REGULAR', 'ADVANCED', 'SU');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "pwd" TEXT NOT NULL,
    "role" "Roles" NOT NULL DEFAULT E'INACTIVE',
    "profileId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_profileId_unique" ON "User"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile.email_unique" ON "Profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile.phone_unique" ON "Profile"("phone");

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

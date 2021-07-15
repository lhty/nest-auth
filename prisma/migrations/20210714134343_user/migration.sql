-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('PASSWORD_REQUIRED', 'INACTIVE', 'REGULAR', 'ADVANCED', 'SU');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "email" TEXT NOT NULL,
    "role" "Roles" NOT NULL DEFAULT E'INACTIVE',
    "phone" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile.email_unique" ON "Profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile.phone_unique" ON "Profile"("phone");

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("email") REFERENCES "Profile"("email") ON DELETE CASCADE ON UPDATE CASCADE;

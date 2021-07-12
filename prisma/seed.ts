import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import { hash } from 'argon2';
import { Roles } from './@generated';

const prisma = new PrismaClient();

const seedData = {
  pwd: 'admin',
  profile: {
    create: {
      email: 'admin1@mail.com',
      role: Roles.SU,
      phone: '22323232323',
      firstName: 'admin',
      lastName: 'admin',
    },
  },
};
async function main() {
  console.log('Seeding...');
  dotenv.config();

  const data = seedData;
  data.pwd = await hash(data.pwd);
  await prisma.user.create({ data });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

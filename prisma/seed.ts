// import { PrismaClient } from '@prisma/client';
// import * as dotenv from 'dotenv';
// import { hash } from 'argon2';

// const prisma = new PrismaClient();

// const seedData = [
//   { name: 'admin', email: 'admin1@mail.com', password: 'admin', role: 3 },
// ];

// async function main() {
//   console.log('Seeding...');
//   dotenv.config();

//   await prisma.user.create({
//     data: {
//       profile: { name: 'admin', email: 'admin1@mail.com' },
//       pwd: await hash('admin'),
//     },
//   });
// }

// main()
//   .catch((e) => console.error(e))
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

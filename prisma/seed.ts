// https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding#integrated-seeding-with-prisma-migrate

// External Dependencies
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialContactMeMessages: Prisma.ContactMeMessageCreateInput[] = [
  {
    contactInfo: 'Not provided',
    contactMessage: '<p>Hi, I would like to know more about your services.</p>',
    // author: {
    //   connectOrCreate: {
    //     where: {
    //       email: '',
    //     },
    //     create: {
    //       email: '',
    //       hashedPassword: 'Anonymous',
    //     },
    // },
  },
];

async function main() {
  console.log('Start seeding ...');

  await Promise.all(
    initialContactMeMessages.map(async (data) => {
      await prisma.contactMeMessage.create({ data });
    }),
  );

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

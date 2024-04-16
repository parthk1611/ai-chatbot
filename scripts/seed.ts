const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: 'Famous People' },
        { name: 'Entertainers' },
        { name: 'Musicians' },
        { name: 'Fictional Characters' },
        { name: 'Explorers' },
        { name: 'Artists' },
        { name: 'Scientists' },
        { name: 'Entrepreneurs' },
      ],
    });
  } catch (error) {
    console.error('Error seeding default categories:', error);
  } finally {
    await db.$disconnect();
  }
}

main();
// user_2m42vhAd8hx3qFFB7XGd8b9iV0d

const { PrismaClient } = require('@prisma/client');
const data = require('./mock_data.json');
const prisma = new PrismaClient();

async function main() {
  const clerkId = 'user_2m42vhAd8hx3qFFB7XGd8b9iV0d';
  const jobs = data.map((job) => {
    return {
      ...job,
      clerkId,
    };
  });
  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });
  }
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
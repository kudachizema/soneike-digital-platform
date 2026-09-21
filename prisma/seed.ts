import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const db = new PrismaClient();

async function main() {
  const school = await db.school.upsert({
    where: { id: 'soneike-high-school' },
    update: {},
    create: {
      id: 'soneike-high-school',
      name: 'Soneike High School',
      location: 'Kuils River, Cape Town, South Africa',
      motto: 'Lux et Auctus'
    }
  });

  const passwordHash = await bcrypt.hash('change-this-password', 12);
  await db.user.upsert({
    where: { email: 'admin@soneikehigh.co.za' },
    update: {},
    create: {
      name: 'Soneike Administrator',
      email: 'admin@soneikehigh.co.za',
      passwordHash,
      role: Role.ADMIN,
      schoolId: school.id
    }
  });
}

main().finally(() => db.$disconnect());

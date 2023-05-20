import { prisma } from "..";

export const userSyncSeed = async () => {
  await Promise.all([
    prisma.user.deleteMany({}),
    prisma.user.signUp({
      username: "moe",
      password: "123",
      email: "moe@gmail.com",
      firstName: "Moe",
      lastName: "Smith",
      state: "AK",
      zip: "60601",
    }),
    prisma.user.signUp({
      username: "ramir",
      password: "123",
      email: "ramir@gmail.com",
      firstName: "ramir",
      lastName: "salcedo",
      state: "NY",
      zip: "11111",
    }),
    prisma.user.signUp({
      username: "lucy",
      password: "123",
      email: "lucy@gmail.com",
      firstName: "Moe",
      lastName: "Smith",
      state: "AK",
      zip: "60601",
    }),
  ]);
};

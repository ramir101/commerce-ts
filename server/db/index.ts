import { PrismaClient } from "@prisma/client";
import { userPrismaExt } from "./models/user";
import { userSyncSeed } from "./syncNseed/userFeed";
import { productSyncSeed } from "./syncNseed/productFeed";

export const prisma = new PrismaClient().$extends(userPrismaExt);

export const syncSeed = async (): Promise<void> => {
  await userSyncSeed();
  await productSyncSeed();
};

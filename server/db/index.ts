import { PrismaClient } from "@prisma/client";
import { userPrismaExt } from "./models/user";

export const prisma = new PrismaClient().$extends(userPrismaExt);

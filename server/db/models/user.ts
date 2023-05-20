import bcrypt from "bcrypt";
import { prisma } from "..";
import jwt from "jsonwebtoken";
const JWT = process.env.JWT as jwt.Secret;
import { State } from "@prisma/client";

interface UserPassword {
  username: string;
  password: string;
}

interface SignUpInfo {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  state: State;
  zip: string;
}

export const userPrismaExt = {
  model: {
    user: {
      async signUp(signUpInfo: SignUpInfo) {
        const hash = await bcrypt.hash(signUpInfo.password, 10);
        return prisma.user.create({
          data: {
            username: signUpInfo.username,
            password: hash,
            email: signUpInfo.email,
            firstName: signUpInfo.firstName,
            lastName: signUpInfo.lastName,
            state: signUpInfo.state,
            zip: signUpInfo.zip,
          },
        });
      },

      async findByToken(token: string) {
        try {
          const jwtPayload = jwt.verify(token, JWT) as string;
          const user = prisma.user.findUnique({
            where: {
              id: jwtPayload,
            },
          });
          if (user) {
            return user;
          } else {
            throw "user not found";
          }
        } catch (ex) {
          const error = new Error("bad crendentials");
        }
      },
      async authenticate({ username, password }: UserPassword) {
        const user = await prisma.user.findUnique({
          where: {
            username: username,
          },
        });
        if (user && (await bcrypt.compare(password, user.password))) {
          return jwt.sign({ id: user.id }, JWT);
        }
        const error = new Error("Bad credentials");
        throw error;
      },
    },
  },
};

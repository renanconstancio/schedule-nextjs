import { Resolvers } from "./resolvers-types";

import prisma from "@/libs/prisma";

export const resolvers: Resolvers = {
  Query: {
    links: async (parent, args, ctx) => {
      return await prisma.link.findMany();
    },
  },
};

import { Resolvers } from "./resolvers-types";

import prisma from "@/libs/prisma";

export const resolvers: Resolvers = {
  Query: {
    stores: async (parent, args, ctx) => {
      return (await prisma.store.findMany()).map((items) => ({
        ...items,
        created_at: "",
        updated_at: "",
        deleted_at: "",
      }));
    },
  },
};

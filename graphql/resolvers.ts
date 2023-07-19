import { Resolvers } from "./resolvers-types";

import prisma from "@/libs/prisma";

export const resolvers: Resolvers = {
  Query: {
    stores: async (parent, args, ctx) => {
      return (await prisma.store.findMany()).map((items) => ({
        ...items,
        created_at: items.created_at.toString(),
        updated_at: items.created_at.toString(),
        deleted_at: "",
      }));
    },

    store: async (parent, args, ctx) => {
      const { id } = args;
      return await prisma.store.findFirst({ where: { id } }).then((result) => ({
        ...result,
        created_at: result?.created_at?.toString(),
        updated_at: result?.created_at?.toString(),
        deleted_at: "",
      }));
    },
  },

  Mutation: {
    createStore: async (parent, args, ctx) => {
      const {
        fantasyName,
        corporateName,
        cnpj,
        cpf,
        description,
        address,
        phones,
        themes,
      } = args;
      return await prisma.store
        .create({
          data: {
            fantasyName: fantasyName ?? "",
            corporateName: corporateName ?? "",
            cnpj: cnpj ?? "",
            cpf: cpf ?? "",
            description: description ?? "",
            address: address ?? "",
            phones: phones ?? "",
            themes: themes ?? "",
          },
        })
        .then((items) => ({
          ...items,
          created_at: items.created_at.toString(),
          updated_at: items.created_at.toString(),
          deleted_at: "",
        }));
    },
  },
};

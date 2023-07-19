import { Resolvers } from "./resolvers-types";

import prisma from "@/libs/prisma";

export const resolvers: Resolvers = {
  Query: {
    stores: async (_parent, _args, _ctx) => {
      return (await prisma.store.findMany()).map((items) => ({
        ...items,
        created_at: items.created_at.toString(),
        updated_at: items.created_at.toString(),
        deleted_at: "",
      }));
    },

    store: async (_parent, args, _ctx) => {
      const { id } = args;
      return await prisma.store
        .findFirst({ where: { id: id ?? undefined } })
        .then((result) => ({
          ...result,
          created_at: result?.created_at?.toString(),
          updated_at: result?.created_at?.toString(),
          deleted_at: "",
        }));
    },
  },

  Mutation: {
    createUpdateStore: async (_parent, args, _ctx) => {
      const {
        id,
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
        .upsert({
          where: { id: id ?? undefined },
          update: {
            fantasyName: fantasyName ?? "",
            corporateName: corporateName ?? "",
            cnpj: cnpj ?? "",
            cpf: cpf ?? "",
            description: description ?? "",
            address: address ?? "",
            phones: phones ?? "",
            themes: themes ?? "",
          },
          create: {
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

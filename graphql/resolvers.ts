import { Resolvers } from "./resolvers-types";

import prisma from "@/libs/prisma";

export const resolvers: Resolvers = {
  Query: {
    stores: async (_parent, _args, _ctx) => {
      return (
        await prisma.store.findMany({
          where: {
            deleted_at: null,
          },
          include: {
            categories: true,
          },
        })
      ).map((store) => ({
        ...store,
        created_at: store.created_at.toString(),
        updated_at: store.created_at.toString(),
        deleted_at: "",
        categories: store.categories.map((category) => ({
          ...category,
          created_at: store.created_at.toString(),
          updated_at: store.created_at.toString(),
          deleted_at: "",
        })),
      }));
    },

    store: async (_parent, args, _ctx) => {
      const { id } = args;
      return (
        (await prisma.store
          .findFirst({
            where: { id: id ?? undefined },
            include: {
              categories: true,
            },
          })
          .then((store) => ({
            ...store,
            created_at: store?.created_at?.toString(),
            updated_at: store?.created_at?.toString(),
            deleted_at: "",
            categories:
              store?.categories.map((category) => ({
                ...category,
                created_at: store.created_at.toString(),
                updated_at: store.created_at.toString(),
                deleted_at: "",
              })) ?? [],
          }))) ?? []
      );
    },
  },

  Mutation: {
    storeCreateUpdate: async (_parent, args, _ctx) => {
      const { id } = args;
      const { body } = args;

      const fantasyName = body?.fantasyName ?? "";
      const corporateName = body?.corporateName ?? "";
      const cnpj = body?.cnpj ?? "";
      const cpf = body?.cpf ?? "";
      const description = body?.description ?? "";
      const address = body?.address ?? "";
      const phones = body?.phones ?? "";
      const themes = body?.themes ?? "";

      return await prisma.store
        .upsert({
          where: { id: id ?? undefined },
          update: {
            fantasyName: fantasyName,
            corporateName: corporateName,
            cnpj: cnpj,
            cpf: cpf,
            description: description,
            address: address,
            phones: phones,
            themes: themes,
          },
          create: {
            fantasyName: fantasyName,
            corporateName: corporateName,
            cnpj: cnpj,
            cpf: cpf,
            description: description,
            address: address,
            phones: phones,
            themes: themes,
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

import { startServerAndCreateNextHandler } from "@as-integrations/next";

import { ApolloServer } from "@apollo/server";

import { NextRequest } from "next/server";

import { typeDefs } from "@/graphql/type-defs";
import { resolvers } from "@/graphql/resolvers";
// import { context } from "@/graphql/context";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler(apolloServer);

export async function GET(req: NextRequest) {
  return handler(req);
}

export async function POST(req: NextRequest) {
  return handler(req);
}

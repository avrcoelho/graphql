import { GraphQLSchema, GraphQLObjectType } from "graphql";

// os campos das queries
import rootQuery from "./modules/rootQuery";
import rootMutation from "./modules/rootMutation";

// GraphQLObjectType: tipo de objeto
export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "rootQueryType",
    fields: {
      ...rootQuery
    }
  }),
  mutation: new GraphQLObjectType({
    name: "rootMutationType",
    fields: {
      ...rootMutation
    }
  })
});

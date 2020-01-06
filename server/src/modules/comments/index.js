import { GraphQLString, GraphQLList, GraphQLInputObjectType } from "graphql";

import CommentType from "./CommentType";
import { getComments, saveComment } from "./CommentLoader";

export const mutations = {
  getComments: {
    // o tipo é uma lista de comentarios
    type: GraphQLList(CommentType),
    // chama o metodo getCOments
    resolve: getComments
  }
};

export const queries = {
  saveComment: {
    // tipo commentario
    type: CommentType,
    // argumentos de entrada
    args: {
      input: {
        type: new GraphQLInputObjectType({
          // o nome pode ser qualquer, isso é só para documentação
          name: "CommentInput",
          // os campos que vai receber
          fields: {
            name: {
              type: GraphQLString
            },
            content: {
              type: GraphQLString
            }
          }
        })
      }
    },
    // chama o metodo de salvar
    resolve: saveComment
  }
};

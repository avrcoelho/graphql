import {
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLNonNull
} from "graphql";

import CommentType from "./CommentType";
import {
  getComments,
  saveComment,
  getComment,
  deleteComments
} from "./CommentLoader";

export const queries = {
  getComments: {
    // o tipo é uma lista de comentarios
    type: GraphQLList(CommentType),
    // chama o metodo getCOments
    resolve: getComments
  },
  getComment: {
    type: CommentType,
    // chama o metodo getCOment
    resolve: getComment,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) }
    }
  }
};

export const mutations = {
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
  },
  deleteComments: {
    type: CommentType,
    resolve: deleteComments,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) }
    }
  }
};

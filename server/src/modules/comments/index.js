import { GraphQLString, GraphQLList, GraphQLInputObjectType } from "graphql";

import CommentType from "./CommentType";
import { getComments, saveComment } from "./CommentLoader";

export const mutations = {
  getComments: {
    type: GraphQLList(CommentType),
    resolve: getComments
  }
};

export const queries = {
  saveComment: {
    type: CommentType,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "CommentInput",
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
    resolve: saveComment
  }
};

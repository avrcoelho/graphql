import Comment from "./CommentModel";

// informações que não quer coloca o underline
export async function saveComment(_, { input }) {
  const comment = await Comment.create(input);

  return comment;
}

export async function getComments() {
  const comments = await Comment.find();

  return comments;
}

export async function getComment(_, { id }) {
  const comments = await Comment.findById(id);

  return comments;
}

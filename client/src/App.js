import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Form from "./components/Form";
import Comment from "./components/Comment";

const GET_COMMENTS = gql`
  query {
    getComments {
      id
      name
      content
    }
  }
`;

const DELETE_COMMENTS = gql`
  mutation DeleteComment($id: String!) {
    deleteComments(id: $id) {
      id
    }
  }
`;

function App() {
  const { loading, error, data, refetch } = useQuery(GET_COMMENTS);
  const [deleteComment] = useMutation(DELETE_COMMENTS);

  if (error) return "Error";

  function handleAddComment() {
    refetch();
  }

  function handleDelete(id) {
    deleteComment({ variables: { id } });
    refetch();
  }

  return (
    <>
      <h1>GraphQL Comments</h1>
      <Form onAddComment={handleAddComment} />
      {loading ? (
        "Carregando..."
      ) : (
        <section className="comments">
          {data.getComments.map(({ id, name, content }) => (
            <Comment
              key={id}
              id={id}
              name={name}
              content={content}
              onClick={handleDelete}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default App;

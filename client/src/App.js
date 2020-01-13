import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Form from "./components/Form";
import Comment from "./components/Comment";

const GET_COMMENTS = gql`
  query {
    comments {
      id
      name
      content
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_COMMENTS);

  if (error) return "Error";

  return (
    <>
      <h1>RocketComments</h1>
      <Form onAddComment={handleAddComment} />
      {loading ? (
        "Carregando..."
      ) : (
        <section className="comments">
          {data.comments.map(({ id, name, content }) => (
            <Comment key={id} namw={name} description={content} />
          ))}
        </section>
      )}
    </>
  );
}

export default App;

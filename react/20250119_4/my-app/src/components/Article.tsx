import React from "react";

interface ArticleProps {
    title: string,
    body: string
}

const Article = (props): React.FC<ArticleProps> => {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </>
  );
};

export default Article;

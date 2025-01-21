import React from "react";
import { useState } from "react";

interface UpdateProps{
    onUpdate(title: string, body: string): void;
}

const Update = (props): React.FC<UpdateProps> => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onUpdate(title,body);
      }}
    >
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </p>
      <p>
        <textarea
          type="text"
          name="body"
          placehorder="body"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        />
      </p>
      <p>
        <input type="submit" value="Update" />
      </p>
    </form>
  );
};

export default Update;

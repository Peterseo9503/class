import { useState } from "react";
const Update = (props) => {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <>
      <h2>Update</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.onUpdate(event.target.title.value, event.target.body.value);
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
          ></input>
        </p>
        <p>
          <textarea name="body" placeholder="body" value={body}
            onChange={(event)=>{
                setBody(event.target.value);
            }}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="update"></input>
        </p>
      </form>
    </>
  );
};

export default Update;

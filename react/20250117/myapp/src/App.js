import "./App.css"; // 파일 존재 여부 확인
import { useState } from "react";
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const htmlArticle = props.topics.map((v) => {
    return (
      <li key={v.id}>
        <a
          id={v.id}
          href={`/read/${v.id}`}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {v.title}
        </a>
      </li>
    );
  });
  return (
    <nav>
      <ol> {htmlArticle} </ol>{" "}
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2> {props.title} </h2> <p> {props.body} </p>{" "}
    </article>
  );
}
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value; //form태그의 이름을 가지고옴
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="title" />
        </p>
        <p>
          <input type="submit" value="create"></input>
        </p>
      </form>
    </article>
  );
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value; //form태그의 이름을 가지고옴
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => {
              console.log(event.target.value);
              setTitle(event.target.value);
            }}
            placeholder="title"
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="title"
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          />
        </p>
        <p>
          <input type="submit" value="update"></input>
        </p>
      </form>
    </article>
  );
}
function App() {
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: "html",
      body: "html is ...",
    },
    {
      id: 2,
      title: "css",
      body: "css is ...",
    },
    {
      id: 3,
      title: "javascript",
      body: "javascript is ...",
    },
  ]);
  const [id, setId] = useState(null);
  const [mode, setMode] = useState("welcome");
  let contextControl = null;
  let content = null;
  if (mode === "welcome") {
    content = <Article title="Welcome" body="hello ,Web"></Article>;
  } else if (mode === "read") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    contextControl = (
      <><li>
        <a
          href={"/update/" + id}
          onClick={(event) => {
            event.preventDefault();
            setMode("update");
          }}
        >
          Update
        </a>
      </li>
      <li>
        <input type="button" value="Delete" onClick={()=>{
          const newTopics = [];
          for(let i=0; i<topics.length; i++){
            if(topics[i].id !== id){
              newTopics.push(topics[i]);
            }
          }
          setTopics(newTopics);
          setMode("welcome");
        }}></input>
      </li>
      </>
    );
    content = <Article title={title} body={body}></Article>;
  } else if (mode === "create") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          const cpTopic = [...topics];
          cpTopic.push(newTopic);
          setTopics(cpTopic);
          setMode("read");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  } else if (mode === "update") {
    let title = "";
    let body = "";
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(title, body) => {
          const updatedTopic = { id: id, title: title, body: body };
          const newTopics = [...topics];
          for (let i = 0; i < newTopics.length; i++) {
            if(newTopics[i].id === id){
              newTopics[i] = updatedTopic;
              break;
            }
          }
          setTopics(newTopics);
          setMode('read');
        }
      }
      ></Update>
    );
  }

  return (
    <div>
      <Header
        title="REACT"
        onChangeMode={() => {
          setMode("welcome");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode("read");
          setId(id);
        }}
      />
      {content}
      <ul>
        <li>
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode("create");
            }}
          >
            create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;

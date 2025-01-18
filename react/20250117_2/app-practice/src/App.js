import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Create from "./components/Create";
import Update from "./components/Update";
import rawData from "./data/data.json";

function App() {
  const { topics: cpData } = rawData;
  const [topics, setTopics] = useState(cpData);
  const [mode, setMode] = useState("welcome");
  const [nextId, setNextId] = useState("4");
  // let [title,body] = [null,null];
  const [id, setId] = useState(null);
  let content = null;
  let contextControl = "";
  if (mode === "welcome") {
    content = <Article title="Welcome" body="hello"></Article>;
  } else if (mode === "read") {
    const topic = topics.find((topic) => topic.id === id);
    const title = topic.title;
    const body = topic.body;
    contextControl = (
      <>
        <li>
          <a
            href="/update/"
            onClick={(event) => {
              event.preventDefault();
              setMode("update");
            }}
          >
            update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="Delete"
            onClick={() => {
              const newTopics = topics.filter( (topic)=>{
                  return topic.id !== id;
              } )

              console.log(newTopics);
              setTopics(newTopics)
              setMode("welcome");
            }}
          ></input>
        </li>
      </>
    );
    content = <Article title={title} body={body}></Article>;
  } else if (mode === "create") {
    content = (
      <Create
        onCreate={(title, body) => {
          const newTopics = [...topics];
          newTopics.push({ id: nextId, title: title, body: body });
          setTopics(newTopics);
          setId(nextId);
          setMode("read");
          setNextId(nextId + 1);
          console.log(newTopics);
        }}
      ></Create>
    );
  } else if (mode === "update") {
    const topic = topics.find((topic) => topic.id === id);
    content = (
      <Update
        title={topic.title}
        body={topic.body}
        onUpdate={(title, body) => {
          const updatedTopic = { id: id, title: title, body: body };
          const newTopics = topics.map((topic) =>
            topic.id === id ? updatedTopic : topic
          );
          setTopics(newTopics);
          setMode("read");
        }}
      ></Update>
    );
  }
  return (
    <>
      <img src="/img/folderTree.png" />
      <p>목표</p>
       <p> 1. 컴포넌트 폴더에 각가의 컴포넌트 파일을 생성 후 App.js에서 import하여 컴포넌트를 사용하기</p>
       <p> 2. 기존데이터를 jsonData로 받았다고 가정하고 코드작성</p>

      <Header
        title="REACT"
        onChangeMode={(id) => {
          setMode("welcome");
          setId(id);
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode("read");
          setId(id);
        }}
      ></Nav>
      {content}
      <ul>
        <li>
          <a
            href="/create/"
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
    </>
  );
}

export default App;

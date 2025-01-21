import React from "react";
import { useState } from "react";
// START "Components"
import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Article from "./components/Article.tsx";
import Create from "./components/Create.tsx"
import Update from "./components/Update.tsx"
// END "Components"

interface Topic{
  id: number, 
  title: string,
  body: string
}

const App: React.FC = () => {
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." }
  ]);
  const [id,setId] = useState( null );
  const [nextId, setNextId] = useState(4);
  let content = null;
  const [mode,setMode] = useState("welcome");
  let contextControl = null;
  if(mode === "welcome"){
    content = <Article title="Welcome" body="Hello, Web"/>;
  }else if(mode === "read"){
    const topic = topics.find( v=> v.id === id );
    content = <Article title={topic.title} body={topic.body}/>;
    contextControl = <><li><a href="/update" onClick={(event)=>{
      event.preventDefault();
      setMode("update");
    }}>Update</a></li>
    <li><input type="button" value="Delete" onClick={()=>{
      const newTopics: Topic[] = topics.filter( v=>{
        return v.id != id;
      } );
      setTopics(newTopics);
      setMode("welcome");
    }}></input></li></>

  }else if(mode === "create"){
    content = <Create
      onCreate = {(title: string,body: string)=>{
        const newTopics: Topic[]= [...topics];
        const topic: Topic = {id:nextId, title:title, body:body}
        newTopics.push( topic );
        setTopics( newTopics );
        setId(nextId);
        setMode("read");
        setNextId( nextId+1 );
      }}
    ></Create>
  }else if(mode === "update"){
    content = <Update onUpdate={(title: string,body: string)=>{
      const newTopics: Topic[]= topics.map( v=>{
        return v.id === id ? {id:id, title:title, body:body}:v 
      } )
      setTopics(newTopics);
      setMode("read");
    }}></Update>
  }

  return (
    <>
      <Header title="React" onChangeMode={ ()=>{
        setMode("welcome");
      } } />
      <Nav topics = {topics} onChangeMode={(id: number)=>{
        setId(id);
        setMode("read");
      }}/>
      {content}
      <ul>
      <li><a href="/create/" onClick={(event)=>{
        event.preventDefault();
        setMode("create");
      }}>Create</a></li>
      {contextControl}
      </ul>
    </>
  );
};

export default App;

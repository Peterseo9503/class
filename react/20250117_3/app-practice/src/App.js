import { useRef, useState, useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Create from "./components/Create";
import Update from "./components/Update";

import axios from "axios";

function App() {
  const [topics, setTopics] = useState([]);

  const [mode, setMode] = useState("welcome");
  // const [nextId, setNextId] = useState("4");
  const nextIdRef = useRef(null);
  const [id, setId] = useState(null);
  ////////////////////////////////////////////////////////////
  //                데이터 처리 로직 (Data Processing)      //
  ////////////////////////////////////////////////////////////
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "http://kkms4001.iptime.org:21129/topics";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        const topics = response.data.map((value) => {
          return { id: Number(value.id), title: value.title, body: value.body };
        });
        setTopics(topics);
        setLoading(false);
        nextIdRef.current = Math.max(...topics.map((v) => v.id)) + 1;
        console.log(nextIdRef);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  ////////////////////////////////////////////////////////////
  //     END   데이터 처리 로직 (Data Processing)    END    //
  ////////////////////////////////////////////////////////////

  // START "Create" 구문
  const requestPost = (topic) => {
    setLoading(true);
    setError(null);
    axios
      .post(url, topic)
      .then((response) => {
        console.log("Post 성공");
        const newTopics = [...topics];
        newTopics.push({id:Number(topic.id),title:topic.title, body:topic.body });
        setTopics(newTopics);

        setLoading(false);
        setId(Number(nextIdRef.current));
        setMode("read");
        nextIdRef.current += 1;
        // setNextId(nextId + 1);
      })
      .catch((error) => {
        setError(error);
        console.log("오류발생");
      });
  };
  // END "Create" 구문

  // START "PUT" 구문(UPDATE)
  const requestPut = (topic) => {
    setLoading(true);
    setError(null);
    const postUrl = url + `/${topic.id}`;
    axios
      .put(postUrl, topic)
      .then((response) => {
        console.log("Put성공!");
        const newTopics = topics.map((v) => {
          return v.id != topic.id ? v : {id:Number(topic.id), title:topic.title,body:topic.body}
        });
        console.log(newTopics);
        setTopics( newTopics );
        setLoading(false);
        setMode("read");
      })
      .catch((err) => {
        setError(err);
      });
  };
  // END "PUT" 구문(UPDATE)

  // START "DELETE" 구문
  const requestDelete = (deleteId)=>{
    setLoading(true);
    setError(null);

    const deleleUrl = url + `/${String(deleteId)}`;
    axios.delete(deleleUrl)
    .then( (response)=>{
      console.log("delete성공!!");
      const newTopics = topics.filter( v=>{ return v.id !== deleteId} );
      setTopics(newTopics);
      setMode("welcome");
      setLoading(false);
    } )
    .catch( (error)=>{
      setError(error);
    } );
  }
  // END "DELETE" 구문


  let content = null;
  let contextControl = "";
  if (mode === "welcome") {
    content = <Article title="Welcome" body="hello"></Article>;
  } else if (mode === "read") {
    if (!topics || topics.length === 0) {
      content = <p>No data available. Please wait or add a topic.</p>;
    } else {
      console.log(topics);
      // console.log(topics[id - 1].id, id);
      // console.log(typeof topics[id - 1].id);
      // console.log(typeof id);
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

                requestDelete(id);
                //const newTopics = topics.filter((topic) => {
                //  return topic.id !== id;
                //});
                // console.log(newTopics);
                // setTopics(newTopics);
                // setMode("welcome");
              }}
            ></input>
          </li>
        </>
      );
      content = <Article title={title} body={body}></Article>;
    }
  } else if (mode === "create") {
    content = (
      <Create
        onCreate={(title, body) => {
          requestPost({
            id: String(nextIdRef.current),
            title: title,
            body: body,
          });
        }}
      ></Create>
    );
  } else if (mode === "update") {
    const topic = topics.find((topic) => Number(topic.id) === id);
    content = (
      <Update
        title={topic.title}
        body={topic.body}
        onUpdate={(title, body) => {
          requestPut( { id: String(id), title: title, body: body } );
        }}
      ></Update>
    );
  }
  return (
    <>
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

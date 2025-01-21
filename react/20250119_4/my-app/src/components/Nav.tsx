import React from "react"
interface Topic{
    id: number;
    title: string;
    body: string;
}

interface Navprops {
    topics: Topic[];
    onChangeMode: (id: number)=> void;
}

const Nav: React.Fc<Navprops> = (props)=>{
    // console.log(props);
    const content = props.topics.map( v=>{
        return <li key={v.id}><a href={`/read/${v.id}`} id={v.id}
        onClick={ (event)=>{
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
        } }
        >{v.title}</a></li>
    } )
    return <ol>
        {content}
        {/* <li><a href="/read/1">html</a></li>
        <li><a href="/read/2">css</a></li>
        <li><a href="/read/3">js</a></li> */}
    </ol>
}

export default Nav;
const Create = (props)=>{
    return(
        <>
        <h2>Create</h2>
        <form onSubmit={(event)=>{
            event.preventDefault();
            props.onCreate(event.target.title.value, event.target.body.value);
        }}>
            <p><input type="text"name="title" placeholder="title"></input></p>
            <p><textarea name="body" placeholder="body"></textarea></p>
            <p><input type="submit" value="create"></input></p>
        </form>
        </>
    )
}

export default Create;
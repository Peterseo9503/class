const Nav = (props) => {
  const content = props.topics.map((value) => {
    return (
      <li key={value.id}>
        <a
          href={`"/read/${value.id}"`}
          id={value.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {value.title}
        </a>
      </li>
    );
  });

  return (
    <nav>
      <ol>
        {content}
        {/* <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li> */}
      </ol>
    </nav>
  );
};

export default Nav;

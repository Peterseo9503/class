import React from "react";

interface HeaderProps {
  title: string;
  
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <h1>
        <a href="/"
        onClick={ (event)=>{
            event.preventDefault();
            props.onChangeMode();
        } }
        >{props.title}</a>
      </h1>
    </header>
  );
};

export default Header;

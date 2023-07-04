import React, { useState } from "react";
import "./Header.css";
import Button from "../Button/Button";
import Nav from "../Nav/Nav";

function Header() {
  // let isTrue = JSON.stringify(true); //сериализуем его
  // let isFalse = JSON.stringify(false);

  // localStorage.setItem("myKey", isTrue); //запишем его в хранилище по ключу "myKey"

  // let returnObj = JSON.parse(localStorage.getItem("myKey"));

  // function isTrueToggle() {
  //   if (returnObj === true) {
  //     localStorage.setItem("myKey", isFalse);
  //   }
  //   if (returnObj === false) {
  //     localStorage.setItem("myKey", isTrue);
  //   }
  //   returnObj = JSON.parse(localStorage.getItem("myKey"));
  //   console.log("returnObj", returnObj);
  // }
  return (
    <>
      <div className="header-wrapper container">
        <Nav />
        {/* {returnObj === true ? <div>it's true</div> : <div>it's false</div>} */}
        <form className="form">
          <input
            placeholder="Поиск по названию картины"
            className="header-input"
          ></input>
          <Button>Найти</Button>
        </form>
      </div>
      <div className="header-divider"></div>
    </>
  );
}

export default Header;

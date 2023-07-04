import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <>
      <ul className="nav-list">
        <img className="nav-logo" src="./logo.jpg" />
        <li>Каталог</li>
        <li>Доставка</li>
        <li>Оплата</li>
        <li>Контакты</li>
        <li>О галерее</li>
      </ul>
    </>
  );
}

export default Nav;

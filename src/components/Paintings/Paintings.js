import React, { useState } from "react";
import "./Paintings.css";
import Button from "../Button/Button";

function Paintings({ data, setData }) {
  const [isLoading, setIsLoading] = useState(false);
  const URL = "https://reqres.in/api/users?delay=0.5";

  async function getRequest(id) {
    let newData = JSON.parse(JSON.stringify(data));
    newData.paintings.find((el) => el.id === id).loading = true;
    setData(newData);

    setIsLoading(true);
    const response = await fetch(URL);
    const jsonData = await response.json();
    setIsLoading(false);

    newData.paintings.find((el) => el.id === id).isInBasket === true
      ? (newData.paintings.find((el) => el.id === id).isInBasket = false)
      : (newData.paintings.find((el) => el.id === id).isInBasket = true);
    newData.paintings.find((el) => el.id === id).loading = false;
    setData(newData);
  }

  return (
    <div className="container">
      <h1 className="title">Картины эпохи Возрождения</h1>
      <div className="printings-wrapper">
        {data.paintings.map((painting) => {
          return (
            <div key={painting.id} className="painting-block ">
              <img
                className={
                  !!painting.sold
                    ? "painting-img painting-img-sold"
                    : "painting-img"
                }
                src={painting.img}
              />
              <div
                className={
                  !!painting.sold ? "painting-title-sold" : "painting-title"
                }
              >
                {painting.name}
              </div>
              <div className="painting-price-with-button-block">
                {!!painting.sold ? (
                  <div className="painting-price-sold">Продана на аукционе</div>
                ) : !painting.discount ? (
                  <div className="painting-price">{`${painting.price.toLocaleString(
                    "ru-RU"
                  )} $`}</div>
                ) : (
                  <div className="price-wrapper">
                    <div className="painting-price-discount">
                      {`${painting.price.toLocaleString("ru-RU")} $`}
                    </div>
                    <div className="painting-price">
                      {`${(painting.price - painting.discount).toLocaleString(
                        "ru-RU"
                      )} $`}
                    </div>
                  </div>
                )}
                {!!painting.sold ? (
                  true
                ) : (
                  <Button id={painting.id} onClick={getRequest}>
                    {!!painting.loading ? (
                      <div className="loader"></div>
                    ) : !painting.isInBasket ? (
                      "Купить"
                    ) : (
                      "В корзине"
                    )}
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Paintings;

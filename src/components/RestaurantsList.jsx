import React from "react";

const RestaurantsList = ({ item }) => {
  console.log(item);
  return (
    <div className="item-parent">
      <div className="largeBox">
        <div>
          <img src={item.src} alt="" />
        </div>


        <div className="description">
          <h1>{item.name}</h1>
          <p className="light"> {item.cuisine.join(", ")}</p>
          <p>{`Cost ${"₹"}${item.costForTwo}/-  for two`}</p>
          <p>
            Min ₹{item.minOrder} •{" "}
            <span>Up to{item.deliveryTime} min delivery</span>{" "}
          </p>
        </div>

        <div className="credits">
          <p className="ratings">★ {item.rating}</p>
          <p>{item.votes} votes</p>
          <p>{item.reviews} reviews</p>
        </div>
      </div>

      <div className="bottom-box">
        <p>
          {" "}
          <span className="bold">Payments accepts: </span>
          {item.payment_methods.cash && item.payment_methods.card
            ? "Cash and Card"
            : item.payment_methods.card
            ? "Card"
            : "Cash"}
        </p>
        <button>Order Online {">"} </button>
      </div>
    </div>
  );
};

export default RestaurantsList;

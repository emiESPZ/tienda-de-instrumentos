import { faWeight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const styleH1 = {
  fontSize: 40,
  color: "#4a54f1",
  textAlign: "center",
  paddingTop: "100px",
  fontWeight: "800",
};
const ItemCard = ({ data }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl ml-4 mr-4">
      <figure className="px-10 pt-10">
        <img src={data.pictureUrl} alt="Shoes" class="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {data.instrument}
          <br />
          {data.model}
        </h2>
        <p>${data.price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

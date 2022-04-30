import { useEffect, useState } from "react";
import { itemsData } from "../data/itemsData.js";
import ItemCard from "./ItemCard.jsx";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemsData);
      }, 2000);
    });
    getItems
      .then((result) => {
        console.log("Se completo la promesa", result);
        setItems(result);
      })
      .catch((err) => {
        console.log("Hubo un error", err);
      });
  }, []);

  return (
    <div className="flex mx-20 mt-20">
      {items.map((item) => (
        <ItemCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export { ItemListContainer };

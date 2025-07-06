"use client";

import "./style.css";
import styles from "./card.module.css";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  image: string;
  title: string;
  price: number;
  previousPrice: number;
  category: string;
  brand: string;
  isNew?: boolean;
  quantity: number;
  description: string;
}

export default function GetData() {
  const [data, setData] = useState<Product[] | null>(null);

  const options: string[] = [ "amazonpro", "phone", "watch", "phonecase", "accessories" ];
  const [selectedOption, setSelectedOption] = useState("amazonpro");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch("https://jsonserver.reactbd.com/phone");
        // const response = await fetch("https://jsonserver.reactbd.com/phonecase");
        // const response = await fetch("https://jsonserver.reactbd.com/accessories");
        // const response = await fetch("https://jsonserver.reactbd.com/watch");
        // const response = await fetch("https://jsonserver.reactbd.com/amazonpro");
        const response = await fetch(`https://jsonserver.reactbd.com/${selectedOption}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [selectedOption]);

  return (
    <>
      <div className="category">
        <h3>Select Product:</h3>
        {options.map((option) => (
          <div key={option}>
            <input
              type="radio"
              id={option}
              name="dynamicRadio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>

      {data ? (
        <div className={styles.container}>
          {data.map((data) => (
            <div key={data._id} className={styles.card}>
              <Image
                src={data.image}
                alt="image"
                width={560 / 4}
                height={640 / 4}
                className={styles.photo}
              />
              <h4>Title: {data.title}</h4>
              <p>
                Price: {data.price} | Previous Price: {data.previousPrice}
              </p>
              <p>
                Category:{" "}
                {data.category === "phone" ? `Phone` : data.category}
                {` | Brand: ${data.brand}`}
                {data.isNew && ` | New`} | {`Quantity: ${data.quantity}`}
              </p>
              <p>Description: {data.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading Products...</p>
      )}
    </>
  );
}
"use client";

import "./style.css";
import styles from "./card.module.css";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function GetData() {
  const [data, setData] = useState(null);

  // ================================
  const options: string[] = [ "amazonpro", "phone", "watch", "phonecase", "accessories" ];
  const [selectedOption, setSelectedOption] = useState("amazonpro");

  const handleOptionChange = (event: { target: { value: any; }; }) => {
    const value: string = event.target.value;
    setSelectedOption(value);
    console.log(value);
  };
  // ================================

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
    handleOptionChange;
  }, [selectedOption]);

  

  return (
    <>
    {/* // ================================ */}
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
      {/* // ================================ */}

      {data ? (
        <div className={styles.container}>
          {data.map((data: any) => {
            return (
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
            );
          })}
        </div>
      ) : (
        <p>Loading Products...</p>
      )}
    </>
  );
}

// =======================================================================
// None: Below Code For Server Component | Above code for Client Component
// =======================================================================

// async function getData() {
//   const res = await fetch("https://jsonserver.reactbd.com/phone");
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function Page() {
//   const data = await getData();
//   // console.log(data);

//   return (
//     <>
//       {data ? (
//         <div>
//           {data.map((data: any) => {
//             return (
//               <div key={data._id}>
//                 <h2>Title: {data.title}</h2>
//                 <p>
//                   Price: {data.price} | Previous Price: {data.previousPrice}
//                 </p>
//                 <p>
//                   Category:{" "}
//                   {data.category === "phone" ? `Phone` : data.category}
//                   Brand: {data.brand}
//                   {data.isNew && ` | New`} | Quantity: {data.quantity}
//                 </p>
//                 <p>Description: {data.description}</p>

//                 <Image
//                   src={data.image}
//                   alt="image"
//                   width={560 / 4}
//                   height={640 / 4}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p>Loading Products...</p>
//       )}
//     </>
//   );
// }

// ===============================================
// APIs
// ===============================================
// https://jsonserver.reactbd.com/
// https://jsonserver.reactbd.com/phone
// https://dummyjson.com/posts?skip=5&limit=10
// ===============================================

// async function getData() {
//   const res = await fetch("https://jsonserver.reactbd.com/phone");
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function Page() {
//   const data = await getData();
//   console.log(data);

//   return (
//     <>
//       <h1>Phone Details</h1>

//       {data.map((data: any) => (
//         <p key={data._id}>{data.title}</p>
//       ))}
//     </>
//   );
// }

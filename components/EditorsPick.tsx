import React from "react";
import AppCard from "./AppCard";
import appCardData from "../data/appcarddata.json";

const EditorsPick = () => {
  // Shuffle the app card data array to randomize the order
  const shuffledData = appCardData.appCards.sort(() => Math.random() - 0.5);

  // Select the first three unique cards from the shuffled data
  const uniqueCards = Array.from(
    new Set(shuffledData.map((data) => data.id))
  ).slice(0, 3);

  // Filter the app card data based on the unique card IDs
  const cardData = shuffledData.filter((data) => uniqueCards.includes(data.id));

  return (
    <div className="container px-6 pb-2 mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl pb-4 md:pb-6 font-extrabold font-first mb-4 text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary">
        Editor's Pick:
      </h2>

      <div className="flex flex-wrap justify-between pb-4 gap-4 md:gap-6 lg:gap-8">
        {cardData.map((data) => (
          <AppCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;

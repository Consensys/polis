import React from "react";
import AppCard from "./AppCard";
import appCardData from "../data/appcarddata.json";

const EditorsPick = () => {
  // Filter the app card data to include only the editor's pick cards
  const cardData = appCardData.appCards.filter((data) => data.isEditorsPick);

  return (
    <div className="container px-6 pb-2 mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl pb-4 md:pb-6 text-center font-extrabold font-first mb-4 text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary">
        Our Editor's Pick
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

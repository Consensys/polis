import React from "react";
import AppCard from "./AppCard";
import appCardData from "../data/appcarddata.json";
import { H2 } from "./Text";

const EditorsPick = () => {
  // Filter the app card data to include only the editor's pick cards
  const cardData = appCardData.appCards.filter((data) => data.isEditorsPick);

  return (
    <div className="container px-6 pb-2 mx-auto mt-24">
      <H2 className="text-transparent mb-14 text-center bg-gradient-to-br bg-clip-text from-primary to-slate-500">Our Editor&apos;s Pick</H2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center pb-4 gap-4 md:gap-6 lg:gap-8 cursor-pointer">
        {cardData.map((data) => (
          <AppCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;

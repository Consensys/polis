import React, { FC } from "react";
import AppCard from "./AppCard";
import { H2 } from "./Text";

type EditorsPickProps = {
  applications: IApplication[];
};

const EditorsPick: FC<EditorsPickProps> = ({ applications }) => {
  // Filter the app card data to include only the editor's pick cards

  const editorPicked = applications.filter(
    (application) => application.isEditorsPick
  );

  return (
    <div className="container px-6 pb-2 mx-auto mt-24">
      <H2 className="text-center text-transparent mb-14 bg-gradient-to-br bg-clip-text from-primary to-slate-500">
        Our Editor&apos;s Pick
      </H2>
      <div className="grid justify-center gap-4 cursor-pointer md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-12">
        {editorPicked.map((data) => (
          <AppCard key={data.id} application={data} />

          //data.isEditorsPick ? data.split(0,2) : null
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;

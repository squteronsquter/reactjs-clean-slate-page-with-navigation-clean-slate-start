import React from "react";

const Article = (props) => {
  return (
    <div>
      <h2 className="text-slate-900 text-2xl mb-4 mt-8">{props.title}</h2>
      <p className="text-slate-900 text-xs">{props.content}</p>
      <hr className=" bg-slate-400 h-2 mt-4" />
    </div>
  );
};

export default Article;

import React from "react";

const Card = ({img_path, title, text, tags}) => {
  const tags_list = tags.map((tag) => (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {tag}
    </span>
  ));

  return (
    <>
      <div className="w-1/2 px-3 rounded overflow-hidden shadow-lg md:w-1/3">
        <img className="w-full" src={img_path} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{text}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags_list}
        </div>
      </div>
    </>
  );
};

export default Card;

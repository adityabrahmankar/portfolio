import React from "react";

interface TagsProps {
  name: string;
}

const Tags = ({ name }: TagsProps) => {
  return (
    <div className="flex flex-row items-center gap-3 px-4 py-2 text-white rounded-full select-none bg-black/20 w-fit">
      {name}
    </div>
  );
};

export default Tags;

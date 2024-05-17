import React from "react";
import MediaCard from "./Card";
export default function Dashboard() {
  const input_list = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      {input_list.map(() => {
        return <MediaCard />;
      })}
      <MediaCard />
    </div>
  );
}

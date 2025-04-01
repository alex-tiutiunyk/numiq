import React from "react";
import data from "../../db.json";
import ConstructionBlock from "./ConstructionBlock";
import { IData } from "@/types/data";

const ConstructionCosts: React.FC = () => {
  return (
    <section className="text-brand-gray-20">
      <h1 className="text-brand-orange lign p-4 text-[26px] leading-[1] font-bold uppercase">
        Construction costs
      </h1>
      {data.map((block: IData) => (
        <ConstructionBlock key={block.id} block={block} />
      ))}
    </section>
  );
};

export default ConstructionCosts;

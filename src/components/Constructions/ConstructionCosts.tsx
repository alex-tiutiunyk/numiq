import React from "react";
import data from "../../db.json";
import { IData } from "@/types/data";
import ConstructionBlock from "./ConstructionBlock";
import CostsTotal from "./CostsTotal";

const ConstructionCosts: React.FC = () => {
  return (
    <section className="text-brand-gray-20">
      <h1 className="text-brand-orange lign p-4 text-[26px] leading-[1] font-bold uppercase">
        Construction costs
      </h1>
      {(data as IData[]).map((block) => (
        <ConstructionBlock key={block.id} block={block} />
      ))}
      <CostsTotal />
      <button
        type="button"
        className="border-brand-orange bg-brand-gray-900 hover:bg-brand-orange mx-auto mb-6 block min-w-[366px] cursor-pointer rounded-xl border-2 p-2.5 font-bold text-white uppercase transition"
      >
        Print the preliminary calculation
      </button>
    </section>
  );
};

export default ConstructionCosts;

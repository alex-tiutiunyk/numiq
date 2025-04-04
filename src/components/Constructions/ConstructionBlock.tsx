"use client";

import React from "react";
import ConstructionTitle from "./ConstructionTitle";
import ConstructionRows from "./ConstructionRows";
import { IData } from "@/types/data";

interface ConstructionBlockProps {
  block: IData;
}

const ConstructionBlock: React.FC<ConstructionBlockProps> = ({ block }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <div className="mb-4">
      <ConstructionTitle block={block} setIsOpen={setIsOpen} isOpen={isOpen} />
      <ConstructionRows
        rows={block.rows}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </div>
  );
};

export default ConstructionBlock;

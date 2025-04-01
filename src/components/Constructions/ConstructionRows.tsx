import React from "react";
import ConstructionRow from "./ConstructionRow";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { IRow } from "@/types/data";

interface ConstructionRowsProps {
  rows: IRow[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const ConstructionRows: React.FC<ConstructionRowsProps> = ({
  rows,
  isOpen,
  setIsOpen,
}) => {
  const handleToggle: () => void = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  return (
    <div className="relative">
      {rows.slice(0, 2).map((row) => (
        <ConstructionRow key={row.id} row={row} />
      ))}

      {rows.length > 2 && (
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          {rows.slice(2).map((row) => (
            <ConstructionRow key={row.id} row={row} />
          ))}
        </motion.div>
      )}

      {rows.length > 2 && (
        <footer
          className={cn(
            "from-brand-gray-800 absolute right-0 bottom-0 left-0 flex h-[100px] justify-center overflow-hidden bg-linear-to-t to-transparent [transition:_height_0.3s_linear]",
            { "h-0": isOpen },
          )}
        >
          <button
            type="button"
            onClick={handleToggle}
            className={cn(
              "text-brand-orange mt-auto cursor-pointer bg-[url('../../public/icons/icon-arrow-down.svg')] [background-size:12px_12px] bg-[100%_50%] bg-no-repeat py-2 pr-6 transition delay-[0.5s]",
              { "[transform:_translateY(50px)]": isOpen },
            )}
          >
            Show all items
          </button>
        </footer>
      )}

      {rows.length === 0 && (
        <div className="bg-brand-gray-500 p-4 text-center leading-[20px] transition select-none last:rounded-b-[20px]">
          Empty
        </div>
      )}
    </div>
  );
};

export default ConstructionRows;

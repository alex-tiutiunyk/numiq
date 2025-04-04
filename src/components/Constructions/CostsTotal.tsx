import React from "react";

const CostsTotal: React.FC = () => {
  return (
    <footer className="bg-brand-gray-100 mb-16 flex items-center justify-between rounded-[20px] p-3 leading-[1.6]">
      <strong className="text-brand-orange pr-4 pl-1 text-[26px] font-bold uppercase">
        Construction costs total
      </strong>
      <div className="flex gap-4">
        <em className="pr-4 text-[26px] font-bold text-white uppercase not-italic">
          1 380 £
        </em>
        <button
          type="button"
          className="hover:text-brand-orange text-brand-gray-600 relative min-w-[192px] cursor-pointer rounded-xl bg-white p-1.5 text-center text-[15px] font-bold transition"
        >
          Save
          <span className="group absolute -top-1 -right-1 h-[21px] w-[21px] rounded-[11px] bg-red-500 pl-[1px] text-center leading-[20px] text-white">
            !
            <span className="invisible absolute right-0 bottom-full mb-2 w-[300px] rounded-[3px] bg-red-500 px-2.5 py-1.5 text-center text-xs font-normal text-white opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 after:absolute after:top-full after:right-1 after:-mt-2 after:h-3 after:w-3 after:transform-[rotate(45deg)] after:bg-red-500 after:content-['']">
              You have entered a LOCKED item. Please switch to the OPEN or PROFI
              programs to recalculate the price with LOCKED items.
            </span>
          </span>
        </button>
      </div>
    </footer>
  );
};

export default CostsTotal;

import React from "react";

const Search: React.FC = () => {
  return (
    <form
      action="#"
      className="group before:bg-brand-gray-15 relative mb-3.5 ml-auto max-w-[425px] before:absolute before:top-0 before:right-10 before:bottom-0 before:w-[1px] before:content-[''] after:absolute after:top-3 after:right-3 after:h-4 after:w-4 after:bg-[url('../../public/icons/search.png')] after:[background-size:32px_16px] after:bg-[-16px_0px] after:content-['']"
    >
      <fieldset>
        <legend className="aria-invisible">Search form</legend>
        <input
          type="search"
          placeholder="Search"
          className="focus:bg-brand-gray-15 w-full rounded-[3px] bg-white p-[8px_45px_8px_10px] leading-6 text-black focus:outline-0"
        />
      </fieldset>
    </form>
  );
};

export default Search;

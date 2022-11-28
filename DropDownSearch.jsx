import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

import ukinstitutions from '../data/ukinstitutions.json';

const DropDownSearch = ({setInstitution}) => {
  const [inst, setInst] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

 
  //Used to fetch data of all institutions in ukinstitutions.JSON
  useEffect(() => {
    fetch(ukinstitutions)

     .then(res => res.json())
      .then(data => {setInst(data);});
  }, []);

  return (
    
    <div className="w-72 h-32 font-small ">
      
      {/*clicking the drop down should open the search bar and list of options */}
      <div onClick={() => setOpen(!open)} className={`bg-indigo-100 w-full p-2 flex items-center justify-between rounded ${!selected && "text-gray-700"}`}>
        {selected
          ? selected?.length > 25 ? selected?.substring(0, 25) + "...": selected: "Select Institution"}
        {setInstitution(selected)}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
       {/*the drop down list, displays of a max height of 32. Other options can be scrolled through*/}
      <ul
        className={`bg-white overflow-y-auto sticky ${
          open ? "max-h-32 " : "max-h-0 "
        } `}
      >

        <div className="flex items-center px-1 sticky top-0 bg-slate-100">
          <AiOutlineSearch size={18} className="text-gray-700" />
          {/*search bar*/}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Search"
            className="placeholder:text-gray-700 bg-slate-100 p-1 outline-none"
          />
        </div>
        {/* maps all data collected from uk institutions into the drop down box*/}
        {ukinstitutions?.map((inst) => (
          <li
            key={inst?.name}
            className={`p-0 text-sm hover:bg-sky-600 hover:text-white
            ${
              inst?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-indigo-600 text-white"
            }
            ${
              inst?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (inst?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(inst?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {inst?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownSearch;
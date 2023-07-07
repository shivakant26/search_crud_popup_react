
import React, { useState, useEffect, useRef, createRef } from "react";
const Dropdowns = ({data}) => {
  const [menuData, setMenuData] = useState(data);
  const elementsRef = useRef(menuData.map(() => createRef()));
  const toggleDropdown = (index) => {
    const updatedMenuData = [...menuData];
    updatedMenuData[index].isOpen = !updatedMenuData[index].isOpen;
    setMenuData(updatedMenuData);
  };

  const handleNestedDropdown = (e) => {
    e.stopPropagation();
  };

  const handleClickOutside = (e, dropdownRef, index) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      e.target !== dropdownRef.current.previousElementSibling
    ) {
      const updatedMenuData = [...menuData];
      updatedMenuData[index].isOpen = false;
      setMenuData(updatedMenuData);
    }
  };
  

  useEffect(() => {
    document.addEventListener("click", (e, i) => {
      return elementsRef.current?.map((ref, index) => {
        return handleClickOutside(e, index === i ? ref : "", index);
      });
    });

    return () => {

      document.addEventListener("click", (e, i) => {
        console.log("jsdsjfsdfg");
        return elementsRef.current?.map((ref, index) => {
          return handleClickOutside(e, elementsRef.current[index], index);
        });
      });
    };
  }, []);

  const renderMenuItems = (items) => {
    return items?.map((item, index) => (
      <li key={index}>
        <a
          href={item.href}
          onClick={item.submenu ? () => toggleDropdown(index) : undefined}
        >
          {item.label}
        </a>
        {item.submenu && (
          <ul
            ref={elementsRef.current[index]}
            className={`submenu ${item.isOpen ? "open" : ""}`}
            onClick={handleNestedDropdown}
          >
            {renderMenuItems(item.submenu)}
          </ul>
        )}
      </li>
    ));
  };

  return <ul className="main-navigation">{renderMenuItems(menuData)}</ul>;
};

export default Dropdowns;

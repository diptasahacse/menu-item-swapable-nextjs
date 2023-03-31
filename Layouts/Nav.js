import React, { useState } from "react";

const Nav = () => {
  const [menuItems, setMenuItems] = useState([
    { title: "A" },
    { title: "G" },
    { title: "H" },
    { title: "K" },
    { title: "S" },
    { title: "L" },
    { title: "M" },
    { title: "N" },
    { title: "O" },
    { title: "P" },
    { title: "Q" },
    { title: "T" },
    { title: "U" },
    { title: "V" },
    { title: "I" },
    { title: "J" },
    { title: "W" },
    { title: "X" },
    { title: "Y" },
    { title: "R" },
    { title: "B" },
    { title: "C" },
    { title: "D" },
    { title: "E" },
    { title: "F" },
    { title: "Z" },
  ]);

  const data = {
    dragItemIndex: undefined,
    dropItemIndex: undefined,
  };

  const swapMenu = (data, array) => {
    const { dragItemIndex, dropItemIndex } = data;

    const temp = array[dragItemIndex];
    array[dragItemIndex] = array[dropItemIndex];
    array[dropItemIndex] = temp;

    setMenuItems(() => [...array]);
  };

  const handleDragDrop = (type, index) => {
    if (type == "drag") {
      data.dragItemIndex = index;
    }
    if (type == "drop") {
      data.dropItemIndex = index;

      swapMenu(data, menuItems);
    }
  };

  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            draggable="true"
            onDragStart={(e) => handleDragDrop("drag", index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDragDrop("drop", index)}
            data-index={index}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

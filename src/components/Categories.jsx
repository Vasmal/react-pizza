import React, { useState } from "react";

function Categories({ value, onClickCategory }) {
  let categoriesList = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={value == index ? "active" : ""}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;

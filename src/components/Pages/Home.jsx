import React, { useState, useEffect } from "react";
import Categories from "../Categories";
import Sort from "../Sort";
import Skeleton from "../PizzaBlock/Skeleton";
import PizzaBlock from "../PizzaBlock";
import Pagination from "../Pagination";

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [categoryId, setCategoryId] = useState(0);
  const sortNames = ["rating", "price", "title"];
  const [sortId, setSortId] = useState(0);

  const category = categoryId > 0 && `category=${categoryId}`;
  const sort =
    sortId === 0 ? sortNames[sortId] + "&order=desc" : sortNames[sortId];
  const search = searchValue && `search=${searchValue}`;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62cf2956486b6ce8265393b8.mockapi.io/items?${category}&sortBy=${sort}&${search}&page=${currentPage}&limit=4`
    )
      .then((res) => res.json())
      .then((list) => {
        setItems(list);
        setIsLoading(false);
      });
  }, [categoryId, sortId, searchValue, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(id) => setCategoryId(id)}
        />
        <Sort value={sortId} onSortClick={(id) => setSortId(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock {...obj} key={obj.id} />)}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Home;

import { useState } from "react";
import { resList } from "../utils/mockData";
import ResCard from "./ResCard";
const Body = () => {
  // whenever state variable changes, react reredner with updated values.
  // useState => state variable and method which helps us to update state variable and it will rerender the list
  const [listOfRes, setListOfRes] = useState(resList);
  const [listForSearchRes, setListForSearchRes] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          style={{ margin: "5px" }}
          onClick={() => {
            const filterList = listOfRes.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRes(filterList);
          }}>
          Top rated restaurants
        </button>
      </div>
      <div className="search">
        <input
          type="text"
          onChange={(event) => {
            const filterList = listOfRes.filter((res) =>
              res.info.name.includes(event.target.value)
            );
            setListOfRes(filterList);
          }}
        />
      </div>
      <div className="res-container">
        {listOfRes.map((res) => (
          <ResCard key={res.info.id} {...res} />
        ))}
      </div>
    </div>
  );
};

export default Body;

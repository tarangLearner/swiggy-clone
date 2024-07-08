import { resList } from "../utils/mockData";
import ResCard from "./ResCard";
const Body = () => (
  <div className="body">
    <div className="search"></div>
    <div className="res-container">
      {resList.map((res) => (
        <ResCard key={res.info.id} {...res} />
      ))}
    </div>
  </div>
);

export default Body;

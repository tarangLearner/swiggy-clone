import { DUMMY_IMG } from "../utils/constant";
const ResCard = (props) => {
  console.log(props);
  const { info } = props;
  return (
    <div className="res-card">
      <img src={DUMMY_IMG} style={{ width: "100px" }} />
      <div>{info.locality}</div>
      <div>{info.cuisines.join(",")}</div>
      <div>{info.areaName}</div>
      <div>{info.avgRating}</div>
    </div>
  );
};

export default ResCard;

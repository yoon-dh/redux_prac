import React from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

function Detail() {
  //   const id = useParams();
  const id = useSelector((state) => state.id);

  console.log(id);
  return <h1>Detail</h1>;
}

export default Detail;

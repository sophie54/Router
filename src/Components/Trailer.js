import React from "react";
import { useHistory } from "react-router-dom";

function Trailer({ data, match }) {
  const history = useHistory();
  var details = data.find((el) => el.id == match.params.id);
  var productData;

  if (details)
    productData = (
      <div>
        <h3 style={{ textAlign: "center" }}> {details.title} </h3>
        <p> {details.description} </p>
        <hr />
        <iframe
          width="560"
          height="315"
          src={details.trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />{" "}
      </div>
    );
  else productData = <h2> Sorry. Product doesnt exist </h2>;

  return (
    <div>
      {productData}
      <button onClick={() => history.goBack()} className="btn btn-info">
        Return To home
      </button>
    </div>
  );
}

export default Trailer;

import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();
  const { loading, error, items } = useSelector((state) => state);
  const navigate = useNavigate();

  console.log(id, items);
  const item = items.find((item) => item.id === Number(id));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { title, body, userId } = item || {};

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div>
      {item && (
        <div className="item-detail">
          <div>
            <button className="go-back btn" onClick={handleGoBack}>
              &larr;
            </button>
            <h3>Post Number #{item.id}</h3>
          </div>
          <div className="main">
            <div className="left">
              <img
                src={`https://picsum.photos/200?random=${item.id}`}
                alt={item.id}
                className="seperate-photo"
              ></img>
            </div>
            <div className="right">
              <div className="up">
                <button className="button1">Detail</button>
                <button className="button2">User info</button>
              </div>
              <div className="down">
                <p>User id : {userId}</p>
                <p>Title : {title}</p>
                <p>Body: {body}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  const { loading, error, items } = useSelector((state) => state);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message if data fetching fails
  }

  return (
    <div className="items-container">
      {items &&
        items.map((item) => (
          <div
            onClick={() => navigate(`/item/${item.id}`)}
            className="items-content"
            key={item.id}
          >
            <img
              src={`https://picsum.photos/200?random=${item.id}`}
              alt={`${item.id}`}
            ></img>
            <div className="section">
            <div className="item-details">
              <p className="card-title">
                <b>{item.title.slice(0, 25)}...</b>
              </p>
              <p>{item.body.slice(0, 60)}...</p>
              <p className="read-more">Read More</p>
            </div>
            <div>
                <button>&gt;</button>
            </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;

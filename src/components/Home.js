import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardData from "./CardData";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Home = () => {
  const [cartData, setCartData] = useState(CardData);
  const dispatch = useDispatch();

  //add to cart
  const send = (e) => {
    dispatch(addToCart(e))
    toast.success("Item added in your Cart.")
  }

  return (
    <>
      <section className="item_section mt-4 container">

        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {cartData.map((element, index) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4">
                  <Card.Img variant="top" className="cd" src = {element.imgdata} />

                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">{element.dish}</h4>
                      <span title="rating">{element.rating}⭐</span>
                    </div>

                    <div className="lower_data d-flex justify-content-between">
                      <h5 className="mt-2">{element.address}</h5>
                      <span>{element.price}$</span>
                    </div>
                    <div className="extra"></div>

                    <div className="last_data d-flex justify-content-between align-items-center">
                      <img className="limg" alt="food-image" src={element.arrimg} />
                      <Button
                        style={{
                          width: "150px",
                          background: "#ff3054db",
                          border: "none",
                        }}
                        variant="outline-light"
                        className="mt-2 mb-2"
                        onClick={() => send(element)}
                        title="Add this item to your cart"
                        aria-label={`Add ${element.dish} to cart`}
                        >
                        Add To Cart
                      </Button>
                      <img className="laimg" alt="delivery badge" src={element.delimg} />
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;

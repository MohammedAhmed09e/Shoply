import React, { useEffect, useState } from "react";
import "./shop.css";
import Products from "./products.js";
import { FaArrowUp, FaCcMastercard, FaCcPaypal, FaCcVisa, FaXmark } from "react-icons/fa6";
import { BiSolidArrowFromLeft, BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
const initialCart = localStorage.getItem("shop-cart")
  ? JSON.parse(localStorage.getItem("shop-cart"))
  : [];

const Shop = () => {
  const [info, setInfo] = useState([]);
  const infoPa = (Product) => {
    document.querySelector(".info-f").style.display = "block";
    setInfo([{ ...Product }]);
  };
  function close() {
    document.querySelector(".info-f").style.display = "none";
    return infoPa;
  }
  function openFilter() {
    document.querySelector(".filter").classList.add("move");
    document.querySelector(".open-filter").classList.add("move-open");
  }
  function closeFilter() {
    document.querySelector(".filter").classList.remove("move");
    document.querySelector(".open-filter").classList.remove("move-open");
  }
  const [items, setItem] = useState(Products);
  const filterItem = (catItems) => {
    const uptadeItem = Products.filter((carItems) => {
      return carItems.catorage === catItems;
    });

    setItem(uptadeItem);
  };

  const filterItme = (catItems) => {
    const uptadeItem = Products.filter((carItems) => {
      return carItems.page === catItems;
    });

    setItem(uptadeItem);
  };
  let up1 =document.querySelector(".up")
  window.onscroll=function(){
      if(this.scrollY>=230){
          up1.style.display="block";
      }
      else{
          up1.style.display="none";
      };
  }
    function top() {
      window.scrollTo({
          top:0,  
          behavior:'smooth',  
      });
  }
  const [cart, setCart] = useState(initialCart);
  const addToCart = (item) => {
    const newProduct = {
      ...item,
      count: 1,
      newProduct: 1,
    };
    setCart([...cart, newProduct]);
    setCart.reduce = ((quantity, item) => item.quantity + quantity, 0);
    if (cart.length > 0) {
      document.querySelector(".ic-close").style.display = "block";
      document.querySelector(".cart").style.display = "block";
    }
    if ((cart.length = 0)) {
      document.querySelector(".ic-close").style.display = "none";
      document.querySelector(".cart").style.display = "none";
    }
  };
  useEffect(() => {
    localStorage.setItem("shop-cart", JSON.stringify(cart));
  }, [cart]);
  function closeCart() {
    document.querySelector(".cart").style.display = "none";
  }
  const onquantityChange = (productId, count) => {
    setCart((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };
  const removeProduct = (producte) => {
    setCart((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === producte.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };
  const pay = document.querySelector(".payments");
  const paym = () => {
    pay.style.display = "block";
  };
  const closePay = () => {
    pay.style.display = "none";
  };
  const sendd = () => {
    alert("sent succesfully");
    pay.style.display = "none";
  };
  let inputs = document.querySelectorAll("input");
  const reset = () => {
    inputs.forEach((input) => (input.value = ""));
  };
  return (
    <>
      <div className="shop">
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        <a href="#cart" className="cart-text">
          <BiCart className="cart-icon" />
          cart
        </a>
        <div className="filter">
          <h1 className="filter-title text-4xl">Filter</h1>
          <br />
          <br />
          <FaXmark className="close-filter" onClick={closeFilter}></FaXmark>
          <div className="links">
            <Link onClick={() => setItem(Products)}>All Products</Link>
            <br />
            <br />
            <Link onClick={() => filterItem("laptop")}>laptop</Link>
            <br />
            <br />
            <Link onClick={() => filterItem("headPhone")}>headphone</Link>
            <br />
            <br />
            <Link onClick={() => filterItem("watch")}>Watch</Link>
            <br />
            <br />
            {/* <Link onClick={() => filterIteem("premium")}>premium</Link> */}
          </div>
        </div>
        <BiSolidArrowFromLeft
          className="open-filter"
          onClick={openFilter}
        ></BiSolidArrowFromLeft>
        <h1 className=" pro-h1 relative bottom-32 text-2xl flex justify-center ">
          Products
        </h1>
        <div className="info-f">
          <div className="info.content">
            {info.map((x) => {
              return (
                <>
                  <div className="info">
                    <div className="iop">
                      <FaXmark className="close" onClick={close}></FaXmark>
                      <img src={x.image}></img>
                    </div>
                    <div className="info-name">{x.name}</div>
                    <div className="des">{x.pargraph}</div>
                    <div className="info-price">{x.price}</div>
                    <button className="add-info" onClick={() => addToCart(x)}>
                      Add to cart
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {items.map((item) => {
          return (
            <>
              <div className="list">
                <div className="item">
                  <img src={item.image} className="iamg" />
                  <div className="title">{item.name}</div>
                  <div className="price">{item.price}</div>
                  <button className="add" onClick={() => addToCart(item)}>
                    Add to cart
                  </button>
                  <br />
                  <br />
                  <button className="more-info" onClick={() => infoPa(item)}>
                    more information
                  </button>
                </div>
              </div>
            </>
          );
        })}
        {/* <NavLink className="nA" onClick={() => filterItme("1")}>1</NavLink>
            <br />
            <br />
            <NavLink  className="nA" onClick={() => filterItme("2")}>2</NavLink>
            <br />
            <br />
            <NavLink  className="nA" onClick={() => filterItme("3")}>3</NavLink> */}
        <div className="cart" id="cart">
          <div className="ic-close hidden relative left-3/4">
            <FaXmark
              className="ic-closee relative left-32 top-3 cursor-pointer "
              onClick={closeCart}
            ></FaXmark>
          </div>
          <h1 className="text-cart relative left-72  bottom-11">Your Cart</h1>
          {cart.map((y) => {
            return (
              <>
                <div className="carti">
                  <div className="iopc">
                    <img className="cai" src={y.image}></img>
                  </div>
                  {/* <button
                   onClick={ ()=> moreIt()}>
                  +</button> */}

                  <div className="cart-name">{y.name}</div>
                  <div className="price-cart"> {y.price}$</div>

                  <select
                    className="select-cart"
                    value={y.count}
                    onChange={(event) => {
                      onquantityChange(y.id, event.target.value);
                    }}
                  >
                    {[...Array(10).keys()].map((number) => {
                      const num = number + 1;
                      return <option>{num}</option>;
                    })}
                  </select>
                  <button
                    className="remove-cart"
                    onClick={() => removeProduct(y)}
                  >
                    remove
                  </button>
                  <button className="buy-cart" onClick={paym}>
                    buy now
                  </button>
                  <div className="toatalItem-cart">
                    total:{y.price * y.count}$
                  </div>
                  {/* {()=>{
  const price = y.price;
                price(
                  cart.reduce((total,cart)=>{
                    const item =Products.find((i)=> i.id === cart.id);
                    return total + (item?.price ||0) * cart.quantity;
                  },0)
                )
}} */}
                </div>
              </>
            );
          })}
        </div>
        {/* {
        items.map((val)=>{
            return(
                <>
                <div className="list">
                <div className="item">
                <img  src={val.image} className="iamg"/>
                <div className="title">{val.name}</div>
                <div className="price" >{val.price}</div>
                <div></div>
                <button className="add">Add to cart</button><br/><br/>
                <button className="more-info" onClick={()=> infoPa(val)}>more information</button>
                </div>
                </div>
            </>
            )
          })
    } */}
      <span className="up" onClick={top}>
          <FaArrowUp />
          </span>
        <div className="payments">
          <div className="burin">
            <h1 className="payt1">Buyer information</h1>
            <br />
            <br />
            <label>Full Name</label>
            <input type="text" placeholder="Mohammed Ahmed Mohammed" />
            <br />
            <br />
            <label>Phone Numper</label>
            <input type="text" placeholder="+20 0*********" className="num" />
            <br />
            <br />
            <label>Adresss</label>
            <input type="text" placeholder="Country-city-street" />
            <br />
            <br />
          </div>
          <div class="cardin">
            <h1 class="tepay">card information</h1>
            <div className="icons flex gap-2 relative left-48">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
            </div>
            <input
              type="password"
              placeholder="card numper"
              maxlength="8"
              className="card-num"
            />
            <br />
            <br />
            <input type="text" placeholder="mm" className="m-num" />
            <input type="text" placeholder="yyy" className="y-num" />
            <input type="text" placeholder="cvv" className="c-num" />
            <br />
            <button className="send " onClick={sendd}>
              Send
            </button>
            <button className="res" onClick={() => reset()}>
              reset
            </button>
            <span className="closee">
              <FaXmark
                className=" relative right-52 top-4"
                onClick={closePay}
              ></FaXmark>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;

import React, { useContext } from "react";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../providers/cart/cart.provider";

const CartIcon = () => {
  const { toggleCartHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;

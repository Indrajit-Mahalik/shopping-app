import React, { useEffect } from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

function CartDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();
  const {
    isEmpty,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  // Lock background scrolling and handle Escape key while cart is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <div
      className="cart_backdrop_overlay"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="cart-title"
    >
      <div
        className="cart_drawer_panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div className="cart_drawer_header">
          <div className="cart_header_title_wrap">
            <i className="fa fa-shopping-bag cart_header_icon" aria-hidden="true"></i>
            <h3 id="cart-title">Shopping Cart</h3>
            <span className="cart_count_pill">{totalItems} {totalItems === 1 ? "item" : "items"}</span>
          </div>

          <button
            type="button"
            className="cart_drawer_close_btn"
            onClick={onClose}
            aria-label="Close Shopping Cart"
          >
            &times;
          </button>
        </div>

        {/* Cart Body */}
        <div className="cart_drawer_body">
          {isEmpty ? (
            <div className="cart_empty_view">
              <div className="cart_empty_icon_circle">
                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
              </div>
              <h4>Your Cart is Empty</h4>
              <p>Looks like you haven't added any lovely gifts yet.</p>
              <button
                type="button"
                className="cart_shop_now_btn"
                onClick={onClose}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="cart_drawer_item_list">
              {items.map((item) => (
                <li key={item.id} className="cart_drawer_item_card">
                  <div className="cart_item_image_box">
                    <img
                      src={`/src/assets/images/${item.img}`}
                      alt={item.name}
                    />
                  </div>

                  <div className="cart_item_main_info">
                    <h5 className="cart_item_name">{item.name}</h5>
                    <span className="cart_item_unit_price">${item.price} each</span>

                    <div className="cart_item_qty_and_subtotal">
                      <div className="cart_qty_control_group">
                        <button
                          type="button"
                          className="cart_qty_btn"
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="cart_qty_display">{item.quantity}</span>
                        <button
                          type="button"
                          className="cart_qty_btn"
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <span className="cart_item_subtotal">
                        ${(item.quantity * item.price).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="cart_item_delete_btn"
                    onClick={() => removeItem(item.id)}
                    title="Remove item"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Cart Footer */}
        {!isEmpty && (
          <div className="cart_drawer_footer">
            <div className="cart_total_breakdown">
              <div className="cart_total_row">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="cart_total_row shipping_row">
                <span>Shipping</span>
                <span className="free_shipping_badge">FREE</span>
              </div>
              <div className="cart_total_divider"></div>
              <div className="cart_total_row grand_total_row">
                <span>Total</span>
                <span className="cart_grand_total_amount">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="cart_footer_actions">
              <button
                type="button"
                className="cart_clear_all_btn"
                onClick={() => emptyCart()}
              >
                Clear All
              </button>
              <button
                type="button"
                className="cart_checkout_primary_btn"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;

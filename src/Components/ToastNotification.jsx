import React from "react";

function ToastNotification({ toast, isClosing, onClose, onOpenCart }) {
  if (!toast) return null;

  return (
    <div
      className={`bottom_toast_container ${isClosing ? "toast_leave" : "toast_enter"}`}
      role="alert"
      aria-live="polite"
    >
      <div className="toast_inner">
        <div className="toast_icon_badge">
          <i className="fa fa-check" aria-hidden="true"></i>
        </div>

        {toast.img && (
          <div className="toast_thumb">
            <img src={`/src/assets/images/${toast.img}`} alt={toast.name} />
          </div>
        )}

        <div className="toast_details">
          <div className="toast_header_line">
            <span className="toast_status">Added to Cart!</span>
            {onClose && (
              <button
                type="button"
                className="toast_dismiss_btn"
                onClick={onClose}
                aria-label="Dismiss"
              >
                &times;
              </button>
            )}
          </div>
          <span className="toast_product_name">{toast.name}</span>
          {toast.price !== undefined && (
            <span className="toast_product_price">${toast.price}</span>
          )}
        </div>
      </div>

      {onOpenCart && (
        <div className="toast_actions">
          <button
            type="button"
            className="toast_view_cart_btn"
            onClick={() => {
              if (onClose) onClose();
              onOpenCart();
            }}
          >
            <i className="fa fa-shopping-bag" aria-hidden="true"></i> View Cart
          </button>
        </div>
      )}

      {/* Progress timer bar: drains from right to left over 3 seconds */}
      <div className="toast_timer_track">
        <div className="toast_timer_bar"></div>
      </div>
    </div>
  );
}

export default ToastNotification;

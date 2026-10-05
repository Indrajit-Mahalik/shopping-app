import React, { createContext, useContext, useState, useRef, useCallback } from "react";
import ToastNotification from "../Components/ToastNotification";

const ToastContext = createContext();

export function ToastProvider({ children, onOpenCart }) {
  const [toast, setToast] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef(null);
  const closeTimerRef = useRef(null);

  const hideToast = useCallback(() => {
    setIsClosing(true);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setToast(null);
      setIsClosing(false);
    }, 300);
  }, []);

  const showToast = useCallback(
    (product) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);

      setIsClosing(false);
      setToast({
        id: Date.now(),
        name: product.name || "Product",
        price: product.price,
        img: product.img,
        message: `${product.name || "Item"} added to cart!`,
      });

      // 3-second display duration
      timerRef.current = setTimeout(() => {
        hideToast();
      }, 3000);
    },
    [hideToast]
  );

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {toast && (
        <ToastNotification
          key={toast.id}
          toast={toast}
          isClosing={isClosing}
          onClose={hideToast}
          onOpenCart={onOpenCart}
        />
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

import { createContext, useContext, useState, type ReactNode } from 'react';
import type { FC } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: string;
  img: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity' | 'id'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Omit<CartItem, 'quantity' | 'id'>) => {
    setItems((prevItems) => {
      // create a simple id from the name for this demo
      const id = product.name.toLowerCase().replace(/\s+/g, '-');
      const existingItem = prevItems.find((item) => item.id === id);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, id, quantity: 1 }];
    });
    setIsCartOpen(true); // Open sidebar automatically when adding
  };

  const removeFromCart = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prevItems) => 
      prevItems.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  const getNumericPrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
  };

  const cartTotal = items.reduce((total, item) => total + (getNumericPrice(item.price) * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      items, addToCart, removeFromCart, updateQuantity, 
      isCartOpen, setIsCartOpen, cartCount, cartTotal 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

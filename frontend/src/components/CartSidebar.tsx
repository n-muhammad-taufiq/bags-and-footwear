import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartSidebar: React.FC = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  // Format currency
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-[1000] transition-all duration-300 ${
          isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} 
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div 
        className={`fixed top-0 right-[-100%] md:right-[-450px] w-full max-w-[450px] h-full bg-bg-primary z-[1001] shadow-[-5px_0_30px_rgba(0,0,0,0.1)] flex flex-col transition-[right] duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isCartOpen ? 'right-0!' : ''
        }`}
      >
        <div className="flex justify-between items-center p-6 md:px-8 border-b border-bg-tertiary">
          <h3 className="text-2xl font-medium">Your Cart</h3>
          <button 
            className="text-text-secondary hover:text-text-primary transition-colors duration-200" 
            onClick={() => setIsCartOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-text-secondary gap-6">
              <ShoppingBag size={48} className="text-bg-tertiary" />
              <p className="text-lg">Your cart is empty</p>
              <button 
                className="inline-flex items-center justify-center py-4 px-8 rounded-sm font-medium transition-all duration-300 min-w-[160px] bg-text-primary text-white hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]" 
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-6">
                  <div className="w-24 h-24 shrink-0 bg-bg-secondary rounded-sm overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-medium">{item.name}</h4>
                      <button 
                        className="text-text-secondary hover:text-text-primary p-1" 
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-text-secondary mb-auto">{item.price}</p>
                    <div className="flex items-center gap-4 border border-bg-tertiary rounded-sm px-2 py-1 w-max mt-4">
                      <button 
                        className="flex items-center justify-center text-text-primary w-6 h-6 hover:text-accent transition-colors" 
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="min-w-[1.2rem] text-center">{item.quantity}</span>
                      <button 
                        className="flex items-center justify-center text-text-primary w-6 h-6 hover:text-accent transition-colors" 
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 md:p-8 border-top border-bg-tertiary bg-bg-primary">
            <div className="flex justify-between text-xl font-medium mb-2">
              <span>Subtotal</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-text-secondary text-sm mb-6">Taxes and shipping calculated at checkout</p>
            <button 
              className="w-full inline-flex items-center justify-center py-4 px-8 rounded-sm font-medium transition-all duration-300 bg-text-primary text-white hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
              onClick={() => {
                setIsCartOpen(false);
                navigate('/checkout');
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;

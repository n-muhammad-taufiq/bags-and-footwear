import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { items, cartTotal, updateQuantity } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="section container min-h-[80vh] flex flex-col items-center justify-center text-center gap-4">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-semibold">Order Confirmed</h2>
          <p className="max-w-md text-text-secondary">We have received your order and are currently processing it. You will receive an email confirmation with tracking details shortly.</p>
          <Link to="/" className="mt-8 inline-flex items-center justify-center py-4 px-8 rounded-sm font-medium transition-all duration-300 min-w-[160px] bg-text-primary text-white hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="section container min-h-[80vh] flex flex-col items-center justify-center text-center gap-4">
        <ShoppingBag size={64} className="text-bg-tertiary mb-4" />
        <h2 className="text-3xl font-semibold">Your cart is empty</h2>
        <p className="text-text-secondary">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="mt-8 inline-flex items-center justify-center py-4 px-8 rounded-sm font-medium transition-all duration-300 min-w-[160px] bg-text-primary text-white hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-screen">
        {/* Checkout Form */}
        <div className="p-8 md:p-16 lg:pl-32 lg:pr-16 bg-bg-primary">
          <div className="max-w-[600px] lg:ml-auto">
            <Link to="/" className="text-2xl font-semibold text-text-primary">B&F Essentials</Link>
            <h1 className="text-4xl font-semibold text-left mt-8 mb-8">Checkout</h1>
            <form onSubmit={handleCheckout} className="flex flex-col gap-0">
              <h2 className="text-xl font-medium mb-4 text-text-primary mt-0">Contact Information</h2>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3.5 border border-bg-tertiary rounded-sm bg-bg-primary font-inherit text-base transition-colors duration-200 outline-none focus:border-accent" 
                  required 
                />
              </div>

              <h2 className="text-xl font-medium mb-4 text-text-primary mt-6">Shipping Address</h2>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full px-4 py-3.5 border border-bg-tertiary rounded-sm bg-bg-primary font-inherit text-base transition-colors duration-200 outline-none focus:border-accent" 
                    required 
                  />
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full px-4 py-3.5 border border-bg-tertiary rounded-sm bg-bg-primary font-inherit text-base transition-colors duration-200 outline-none focus:border-accent" 
                    required 
                  />
                </div>
              </div>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Address" 
                  className="w-full px-4 py-3.5 border border-bg-tertiary rounded-sm bg-bg-primary font-inherit text-base transition-colors duration-200 outline-none focus:border-accent" 
                  required 
                />
              </div>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Apartment, suite, etc. (optional)" 
                  className="w-full px-4 py-3.5 border border-bg-tertiary rounded-sm bg-bg-primary font-inherit text-base transition-colors duration-200 outline-none focus:border-accent" 
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="City" 
                    className="w-full px-4 py-3.5 border border-bg-tertiary rounded-sm bg-bg-primary font-inherit text-base transition-colors duration-200 outline-none focus:border-accent" 
                    required 
                  />
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="State" 
                    className="w-full px-4 py-3.5 border border-bg-tertiary rounded-sm bg-bg-primary font-inherit text-base transition-colors duration-200 outline-none focus:border-accent" 
                    required 
                  />
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="ZIP Code" 
                    className="w-full px-4 py-3.5 border border-bg-tertiary rounded-sm bg-bg-primary font-inherit text-base transition-colors duration-200 outline-none focus:border-accent" 
                    required 
                  />
                </div>
              </div>

              <h2 className="text-xl font-medium mb-4 text-text-primary mt-6">Payment Options</h2>
              <div className="flex flex-col gap-2 mb-8">
                <label className="flex items-center gap-3 p-4 border border-bg-tertiary rounded-sm cursor-pointer transition-all duration-200 hover:bg-bg-secondary">
                  <input type="radio" name="payment" value="cod" defaultChecked className="w-auto m-0 !accent-text-primary" />
                  <span>Cash on Delivery</span>
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center py-5 px-8 rounded-sm font-medium text-lg transition-all duration-300 bg-text-primary text-white hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
              >
                Complete Order
              </button>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-accent/15 p-8 md:p-16 lg:pl-16 lg:pr-32 border-l border-black/5">
          <div className="max-w-[450px] lg:mr-auto sticky top-16">
            <h2 className="text-xl font-medium mb-6 text-text-primary">Order Summary</h2>
            <div className="flex flex-col gap-5 mb-8 max-h-[50vh] overflow-y-auto pr-4 scrollbar-thin">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-sm bg-transparent relative shrink-0 border border-black/10 overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-sm" />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-text-primary block">{item.name}</span>
                    <div className="flex items-center gap-3 mt-2 border border-black/10 rounded-sm px-2 py-1 w-max">
                      <button type="button" className="flex items-center justify-center text-text-primary w-5 h-5 cursor-pointer hover:text-accent" onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                      <span className="text-sm font-normal">{item.quantity}</span>
                      <button type="button" className="flex items-center justify-center text-text-primary w-5 h-5 cursor-pointer hover:text-accent" onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                    </div>
                  </div>
                  <span className="font-medium text-text-primary">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-black/10 pt-6 flex flex-col gap-3">
              <div className="flex justify-between text-text-primary">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-text-primary">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="flex justify-between text-text-primary text-xl font-semibold mt-2">
                <span>Total</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

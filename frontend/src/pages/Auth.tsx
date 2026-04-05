import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only mock: you would typically handle authentication here
    console.log(isLogin ? "Mock Login Attempt" : "Mock Registration Attempt");
  };

  return (
    <div className="pt-[140px] pb-20 min-h-[80vh] flex items-center justify-center bg-bg-secondary">
      <div className="container">
        <div className="w-full max-w-[500px] mx-auto bg-bg-primary rounded-md p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
            <p className="text-text-secondary text-base leading-relaxed">
              {isLogin 
                ? 'Sign in to access your account, saved items, and order history.' 
                : 'Join B&F Essentials for exclusive access, faster checkout, and more.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {!isLogin && (
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-text-primary">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    placeholder="First Name" 
                    className="w-full px-4 py-3.5 border border-bg-tertiary rounded-sm bg-bg-primary font-inherit text-base transition-colors duration-200 outline-none focus:border-accent" 
                    required 
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-text-primary">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Last Name" 
                    className="w-full px-4 py-3.5 border border-bg-tertiary rounded-sm bg-bg-primary font-inherit text-base transition-colors duration-200 outline-none focus:border-accent" 
                    required 
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-primary">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="you@example.com" 
                className="w-full px-4 py-3.5 border border-bg-tertiary rounded-sm bg-bg-primary font-inherit text-base transition-colors duration-200 outline-none focus:border-accent" 
                required 
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2 text-text-primary">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="••••••••" 
                className="w-full px-4 py-3.5 border border-bg-tertiary rounded-sm bg-bg-primary font-inherit text-base transition-colors duration-200 outline-none focus:border-accent" 
                required 
                minLength={8} 
              />
              {!isLogin && <span className="block text-xs text-text-secondary mt-2">Must be at least 8 characters.</span>}
            </div>

            {isLogin && (
              <div className="flex justify-end -mt-2">
                <Link to="#" className="text-sm text-text-secondary underline underline-offset-4 hover:text-text-primary">Forgot password?</Link>
              </div>
            )}

            <button 
              type="submit" 
              className="w-full inline-flex items-center justify-center py-4.5 px-8 rounded-sm font-medium transition-all duration-300 bg-text-primary text-white hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] mt-2"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-bg-tertiary text-center">
            <p className="text-text-secondary text-[0.95rem]">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                className="text-text-primary font-semibold ml-2 underline underline-offset-4 cursor-pointer hover:text-accent transition-colors text-[0.95rem]" 
                onClick={() => setIsLogin(!isLogin)}
                type="button"
              >
                {isLogin ? 'Create Account' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

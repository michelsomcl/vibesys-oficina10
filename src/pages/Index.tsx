
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Your Project
              <span className="block text-slate-600 text-3xl md:text-4xl font-normal mt-2">
                Starts Here
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A clean slate ready for your next amazing idea. Start building something incredible.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">Ready to Build</h2>
              <p className="text-slate-600">
                This is your empty canvas. Add components, pages, and features as you need them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

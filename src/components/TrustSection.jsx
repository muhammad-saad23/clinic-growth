export default function TrustSection() {
    return (
      <section className="relative py-20 px-6 overflow-hidden bg-slate-900">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400 rounded-full blur-[120px]"></div>
        </div>
  
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            {/* Stats 1 */}
            <div className="text-center md:text-left space-y-2">
              <h2 className="text-5xl font-black text-white tracking-tighter">
                5,000<span className="text-blue-500">+</span>
              </h2>
              <p className="text-blue-100/60 uppercase tracking-widest text-sm font-bold">
                Happy Patients
              </p>
            </div>
  
            {/* Central Rating Card */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[2rem] shadow-2xl text-center transform md:-translate-y-4">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              <h3 className="text-white text-3xl font-bold mb-1">4.9/5.0</h3>
              <p className="text-blue-200 font-medium">Google Review Rating</p>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center gap-3">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_\\_logo.svg"
                  alt="Google" 
                  className="w-5 h-5"
                />
                <span className="text-white/40 text-sm font-semibold tracking-wide">VERIFIED CLINIC</span>
              </div>
            </div>
  
            {/* Stats 2 */}
            <div className="text-center md:text-right space-y-2">
              <h2 className="text-5xl font-black text-white tracking-tighter">
                15<span className="text-blue-500">+</span>
              </h2>
              <p className="text-blue-100/60 uppercase tracking-widest text-sm font-bold">
                Expert Dentists
              </p>
            </div>
  
          </div>
  
          {/* Scrolling Trust Bar (Subtle) */}
          <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-30 grayscale invert">
             <span className="font-bold text-lg italic uppercase">Patient First</span>
             <span className="font-bold text-lg italic uppercase">World Class Care</span>
             <span className="font-bold text-lg italic uppercase">24/7 Support</span>
          </div>
        </div>
      </section>
    );
  }
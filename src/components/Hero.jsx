export default function Hero() {
    return (
      <section className="relative pt-20 pb-24 lg:pt-20 lg:pb-44 px-6 overflow-hidden text-center">
        {/* Premium Mesh Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] opacity-70"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-60"></div>
        </div>
  
        <div className="max-w-4xl mx-auto">
          {/* 1. Status Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-5 py-2 rounded-full mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            <span className="text-blue-700 text-xs font-black uppercase tracking-[0.15em]">Accepting New Patients</span>
          </div>
  
          {/* 2. Main Headline */}
          <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
            Expert Care for Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
              Perfect Smile.
            </span>
          </h1>
          
          {/* 3. Sub-text */}
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Experience painless dental treatments in Lahore's most advanced clinic. From whitening to implants, we do it all.
          </p>
  
          {/* 4. CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href="https://wa.me/yournumber" className="group w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-9 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-2xl shadow-green-200 hover:-translate-y-1 active:scale-95">
              Book via WhatsApp
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
            <button className="w-full sm:w-auto bg-blue-500 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all hover:bg-blue-600">
              View Price List
            </button>
          </div>
  
          {/* 5. Social Proof Footer */}
          {/* <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/150?img=${i+20}`} alt="patient" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex text-yellow-400 text-sm">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-sm font-bold text-slate-900">
                  450+ Joined this month
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    );
  }
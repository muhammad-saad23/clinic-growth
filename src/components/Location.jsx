export default function Location() {
    return (
      <section id="location" className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-100 rounded-full blur-[120px] opacity-50"></div>
  
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-blue-600 font-bold tracking-tighter uppercase text-sm border-l-4 border-blue-600 pl-3">
                Visit Our Facility
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">
                Easy to Reach, <br />
                <span className="text-blue-600">Hard to Forget.</span>
              </h2>
            </div>
            <p className="text-slate-500 font-medium max-w-xs pb-2">
              Located in the premium medical hub of Gulberg III, with dedicated valet parking for our patients.
            </p>
          </div>
  
          <div className="relative group bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px] border-[8px] border-white">
            
            {/* Left: Glassmorphism Info Panel */}
            <div className="lg:w-1/3 p-10 flex flex-col justify-between relative z-10 bg-slate-900/80 backdrop-blur-md border-r border-white/10">
              <div className="space-y-10">
                {/* Branch Tag */}
                <div className="bg-blue-600 inline-block px-4 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em]">
                  Main Gulberg Branch
                </div>
  
                {/* Address Item */}
                <div className="group/item cursor-pointer">
                  <p className="text-blue-400 text-xs font-black uppercase tracking-widest mb-2">The Spot</p>
                  <h4 className="text-white text-xl font-bold leading-snug group-hover/item:text-blue-400 transition-colors">
                    Office No. 6, Al-Hafeez Suites, MM Alam Rd, Lahore
                  </h4>
                </div>
  
                {/* Timing Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                    ⏰
                  </div>
                  <div>
                    <p className="text-white font-bold">12:00 PM — 10:00 PM</p>
                    <p className="text-slate-400 text-sm italic">Monday to Saturday</p>
                  </div>
                </div>
  
                {/* Phone Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                    📞
                  </div>
                  <div>
                    <p className="text-white font-bold">+92 327 7088881</p>
                    <p className="text-slate-400 text-sm italic">Emergency line available</p>
                  </div>
                </div>
              </div>
  
              <div className="mt-12 space-y-4">
                <a 
                  href="https://goo.gl/maps/yourlink" 
                  target="_blank" 
                  className="flex items-center justify-center gap-3 w-full bg-white text-slate-900 py-4 rounded-2xl font-black hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl"
                >
                  <span>GET DIRECTIONS</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </a>
              </div>
            </div>
  
            {/* Right: High-Contrast Map */}
            <div className="lg:w-2/3 relative h-[400px] lg:h-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.23!2d74.34!3d31.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMwJzM2LjAiTiA3NMKwMjAnMjQuMCJF!5e0!3m2!1sen!2s!4v1" 
                className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-[1.2] invert-[0.05] brightness-[1.05]" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
              {/* Overlay Gradient to blend with panel */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent pointer-events-none hidden lg:block"></div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
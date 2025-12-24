const services = [
    { 
      title: "General Consultation", 
      desc: "Comprehensive checkups with advanced diagnostic tools to ensure your overall health.", 
      icon: "🩺",
      color: "bg-blue-500" 
    },
    { 
      title: "Specialist Appointments", 
      desc: "Skip the wait. Direct access to Lahore's top certified medical specialists.", 
      icon: "👨‍⚕️",
      color: "bg-indigo-500" 
    },
    { 
      title: "Lab Tests", 
      desc: "State-of-the-art pathology and diagnostic imaging with digital report delivery.", 
      icon: "🔬",
      color: "bg-cyan-500" 
    },
    { 
      title: "Vaccinations", 
      desc: "Safe, sterilized, and internationally approved immunization for all age groups.", 
      icon: "💉",
      color: "bg-emerald-500" 
    },
  ];
  
  export default function Services() {
    return (
      <section id="services" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>
  
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4">What We Offer</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Comprehensive Care <br /> 
              <span className="text-slate-400 font-light">Tailored to Your Needs.</span>
            </h3>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-3"
              >
                {/* Icon Container with glowing effect */}
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-lg shadow-current/20 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <span className="drop-shadow-md">{service.icon}</span>
                </div>
  
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-slate-500 leading-relaxed text-sm mb-6">
                  {service.desc}
                </p>
  
                {/* Interaction Link */}
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Learn More 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
  
                {/* Bottom Decoration */}
                <div className="absolute bottom-6 right-8 text-slate-100 font-black text-6xl italic group-hover:text-blue-50 transition-colors pointer-events-none">
                  0{i + 1}
                </div>
              </div>
            ))}
          </div>
  
          {/* Action Callout */}
          <div className="mt-20 bg-blue-600 rounded-[3rem] p-8 md:p-12 text-center text-white shadow-2xl shadow-blue-400/40 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
             <h4 className="text-2xl md:text-3xl font-bold mb-6">Can't find what you're looking for?</h4>
             <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black uppercase tracking-wider hover:bg-blue-50 transition-colors shadow-xl">
               Inquire about other services
             </button>
          </div>
        </div>
      </section>
    );
  }
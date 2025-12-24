const benefits = [
    { 
      title: "Same Day Appointment", 
      desc: "We value your time. Book by 10 AM and see a doctor the same day.", 
      icon: "🕒",
      points: ["Priority booking", "No waiting room lag"]
    },
    { 
      title: "Expert Dental Team", 
      desc: "Led by PMDC certified surgeons with specialized international training.", 
      icon: "👨‍⚕️",
      points: ["10+ Years Experience", "Specialized Surgeons"]
    },
    { 
      title: "Modern Sterilization", 
      desc: "Your safety is our priority. We follow international hygiene protocols.", 
      icon: "🛡️",
      points: ["100% Safe", "EPA approved sanitizers"]
    },
  ];
  
  export default function Benefits() {
    return (
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm bg-blue-50 px-4 py-2 rounded-full">
              Our Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4">
              Why Lahore Trusts <span className="text-blue-600">Our Clinic</span>
            </h2>
          </div>
  
          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-200 mb-8 transform group-hover:rotate-6 transition-transform">
                  {b.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{b.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {b.desc}
                </p>
  
                {/* Feature Tags */}
                <div className="space-y-3">
                  {b.points.map((point, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
          {/* Quick Trust Bar */}
          <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
              <span className="font-bold text-xl text-slate-400">PMDC Certified</span>
              <span className="font-bold text-xl text-slate-400">ISO 9001</span>
              <span className="font-bold text-xl text-slate-400">Sterilized Facility</span>
          </div>
        </div>
      </section>
    );
  }
export default function Team() {
  const doctors = [
    { id: 1, role: "Senior Consultant", specialty: "General Medicine" },
    { id: 2, role: "Medical Specialist", specialty: "Diagnostics & Research" },
    { id: 3, role: "Lead Surgeon", specialty: "Surgical Procedures" },
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-indigo-50 rounded-full blur-[100px] opacity-60"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
            Medical Board
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4">
            Our Elite <span className="text-blue-600">Medical Team</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            We are currently finalizing the profiles of our world-class specialists. 
            Stay tuned to meet the experts dedicated to your health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {doctors.map((doc) => (
            <div key={doc.id} className="group relative">
              {/* Image Container */}
              <div className="relative h-[450px] w-full rounded-[3rem] overflow-hidden bg-slate-100 shadow-2xl transition-all duration-500 group-hover:shadow-blue-200 group-hover:-translate-y-2">
                <img 
                  src={`https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800`} 
                  alt="Doctor Placeholder" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                
                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-blue-400 font-black text-xs uppercase tracking-[0.2em] mb-2">{doc.role}</p>
                    <h4 className="text-2xl font-bold mb-1">Profile Coming Soon</h4>
                    <p className="text-white/60 text-sm font-medium">{doc.specialty}</p>
                  </div>
                </div>

                {/* Decorative Badge */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl text-[10px] font-black text-white uppercase tracking-widest">
                  Verified Expert
                </div>
              </div>

              {/* Bottom Decoration for extra style */}
              <div className="mt-6 flex items-center justify-between px-4">
                <div className="h-1 w-12 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Trust Note */}
        <div className="mt-20 text-center bg-slate-50 border border-slate-100 py-6 px-10 rounded-[2rem] inline-block left-1/2 -translate-x-1/2 relative">
           <p className="text-slate-600 font-bold flex items-center gap-3">
             <span className="text-blue-600 text-xl">🛡️</span> 
             All our doctors are PMDC Certified & Internationally Trained
           </p>
        </div>
      </div>
    </section>
  );
}
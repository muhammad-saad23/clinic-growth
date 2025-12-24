export default function Hero() {
    const clinicName = "Dental Care Lahore"; // Replace with [Client Clinic Name]
  
    return (
      <section className="relative pt-20 pb-24 lg:pt-36 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-70"></div>
        </div>
  
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            <span className="text-blue-700 text-xs font-black uppercase tracking-widest">Accepting New Patients</span>
          </div>
  
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">
            Welcome to {clinicName} – <span className="text-blue-600">Quality Care for Your Health</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience painless dental treatments in Lahore's most advanced clinic. From whitening to implants, we do it all.
          </p>
  
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/923001234567" className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl hover:-translate-y-1">
              Book WhatsApp Appointment
            </a>
            <button className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:border-blue-600">
              View Services
            </button>
          </div>
        </div>
      </section>
    );
  }
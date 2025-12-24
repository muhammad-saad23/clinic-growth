export default function Navbar() {
    return (
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg text-white font-bold text-xl">D</div>
          <span className="font-bold text-xl tracking-tight text-slate-800">DENTAL<span className="text-blue-600">CARE</span></span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#location" className="hover:text-blue-600">Location</a>
        </div>
        <a href="tel:+923001234567" className="bg-blue-50 text-blue-600 px-5 py-2 rounded-full font-semibold border border-blue-100 hover:bg-blue-100 transition-colors">
          Call Clinic
        </a>
      </nav>
    );
  }
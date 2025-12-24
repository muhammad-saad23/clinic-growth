export default function Footer() {
    const clinicInfo = {
      address: "Office No. 6, Al-Hafeez Suites, MM Alam Rd, Lahore",
      phone: "+92 327 7088881",
      email: "info@clinicname.com"
    };
  
    return (
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Clinic Logo</h3>
            <p className="text-slate-400">Your trusted partner in modern healthcare and dental surgery.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-blue-400">Contact Us</h4>
            <p className="text-slate-300 mb-2">{clinicInfo.address}</p>
            <p className="text-slate-300 mb-2">{clinicInfo.phone}</p>
            <p className="text-slate-300">{clinicInfo.email}</p>
          </div>
          <div className="text-right">
            <h4 className="font-bold mb-6 uppercase tracking-widest text-blue-400">Hours</h4>
            <p className="text-slate-300">Mon - Sat: 12:00 PM - 10:00 PM</p>
            <p className="text-slate-500 text-sm mt-2">Sunday: Closed</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 text-center text-slate-500 text-sm">
          © 2025 [Clinic Name]. All Rights Reserved.
        </div>
      </footer>
    );
  }
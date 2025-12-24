export default function Footer() {
    return (
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© 2024 ClinicGrow. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  }
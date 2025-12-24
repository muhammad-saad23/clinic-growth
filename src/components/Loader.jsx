export default function Loader() {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
          <span className="mt-4 font-bold text-blue-900 tracking-tighter text-xl">CLINIC<span className="text-blue-500">GROW</span></span>
        </div>
      </div>
    );
  }
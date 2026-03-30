export default function OvernightAdvantageSection() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-20 pb-8 text-center">
      <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-red-600/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-red-600/5 blur-3xl rounded-full"></div>
        
        <div className="relative z-10">
          <h2 className="text-white text-2xl md:text-4xl font-black leading-tight mb-6">
            <span className="text-red-500 uppercase tracking-widest text-sm font-bold block mb-4">
              The Overnight Advantage
            </span>
            Your &apos;Overnight&apos; Dispatch Team.
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            While you sleep, we build and optimize your lead workflows. You wake up to a system that is ready to work. Zero operations lag during your business hours.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function FinalCTASection() {
  return (
    <section className="w-full bg-red-600 border-y border-red-500 py-24 relative overflow-hidden">
      {/* Background radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="text-white text-4xl md:text-6xl font-black leading-tight mb-6">
          Ready to Stop Losing Clients?
        </h2>
        <p className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
          Get a fully functional AI receptionist built for your business in less than 48 hours. No setup fees. No long-term contracts.
        </p>

        <a
          href="sms:+1?body=DEMO"
          className="
            inline-flex items-center gap-2 
            bg-slate-950 hover:bg-black
            text-white font-bold text-lg
            px-10 py-5 rounded-xl 
            shadow-2xl shadow-black/50 hover:shadow-black/70
            transition-all duration-300 ease-out
            hover:-translate-y-1 hover:scale-105
            border border-slate-700
          "
        >
          Text &apos;DEMO&apos; To Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        <p className="text-red-200/70 text-sm mt-6 font-medium">
          Or call us directly at +234 902 724 2453 • 24/7 Support
        </p>
      </div>
    </section>
  );
}

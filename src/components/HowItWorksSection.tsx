export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "A Call is Missed",
      description: "When you can't answer, the call is instantly forwarded to your dedicated AI Assistant phone number.",
    },
    {
      number: "02",
      title: "AI Engages the Caller",
      description: "The AI answers politely, collects their name, contact info, and the reason for their call within seconds.",
    },
    {
      number: "03",
      title: "You Get Notified",
      description: "You receive an instant SMS or email with the qualified lead's details, ready for you to close.",
    },
  ];

  return (
    <section className="w-full bg-slate-950 border-y border-slate-800 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">
            The Process
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-black leading-tight">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-slate-800 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-slate-900 border-2 border-red-500 text-white font-bold flex items-center justify-center text-xl mb-6 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                {step.number}
              </div>
              <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

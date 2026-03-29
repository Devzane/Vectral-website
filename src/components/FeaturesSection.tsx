export default function FeaturesSection() {
  const features = [
    {
      title: "24/7 Availability",
      description:
        "Missed calls happen after hours, on weekends, and when your team is busy. Our AI never clocks out, ensuring every single lead is captured instantly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
    {
      title: "Instant Qualification",
      description:
        "We don't just take messages. The AI asks predefined qualifying questions to ensure the prospect is a fit before passing the lead to you.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
    {
      title: "Seamless Integration",
      description:
        "Leads are automatically routed to your CRM, sent via SMS, or emailed to your team. Zero disruption to your current workflow.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-24 pb-32">
      <div className="text-center mb-16">
        <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">
          The Solution
        </p>
        <h2 className="text-white text-3xl md:text-5xl font-black leading-tight">
          Stop Bleeding Leads. <br className="hidden sm:block" />
          <span className="text-slate-400">Start Dominating Your Market.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-red-500/50 transition-colors duration-300"
          >
            <div className="h-12 w-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-white text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

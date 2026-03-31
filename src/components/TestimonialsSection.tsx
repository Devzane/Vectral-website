export default function TestimonialsSection() {
  const useCases = [
    {
      title: "The Overworked HVAC Owner",
      description:
        "Weekend emergency calls are where the highest margins are, but you can't be by the phone 24/7. Our AI captures those weekend callers and books the dispatch directly into your calendar.",
    },
    {
      title: "The On-Site Contractor",
      description:
        "You are managing a chaotic job site and physically cannot answer a ringing phone. The AI acts as your dedicated dispatcher, qualifying the lead's location and project type, and texting you the details.",
    },
    {
      title: "The Solo Real Estate Agent",
      description:
        "Missing a call while hosting an open house can mean losing a commission. The AI answers immediately, captures the buyer's budget, and sets a clear expectation for when you will follow up.",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-24 mb-10">
      <div className="text-center mb-16">
        <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">
          Who We Build For
        </p>
        <h2 className="text-white text-3xl md:text-5xl font-black leading-tight mb-4">
          Built For The Realities of Your Workday
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          You didn&apos;t start your business to sit by a phone. Here&apos;s how
          the AI works for people who work with their hands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative hover:border-red-500/50 transition-colors duration-300"
          >
            {/* Use Case Icon — wrench for trades, hard hat for contractor, key for real estate */}
            <div className="h-12 w-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
              {index === 0 && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
              )}
              {index === 1 && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.192-.14 1.743" />
                </svg>
              )}
              {index === 2 && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                </svg>
              )}
            </div>

            <h3 className="text-white text-xl font-bold mb-3">
              {useCase.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {useCase.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Before Vectra, we were missing 3-4 calls every weekend. Now, the AI books them straight into my ServiceTitan calendar. It paid for itself in week one.",
      author: "Mike T.",
      role: "Owner, Elite HVAC Services",
    },
    {
      quote:
        "I'm on roofs all day. I can't answer my phone. The AI assistant qualifies the lead, gets their address, and texts me the details. Absolute game changer.",
      author: "Sarah J.",
      role: "Independent Roofing Contractor",
    },
    {
      quote:
        "As a solo agent, missing a call means missing a commission. The AI answers immediately, gets their budget, and tells them I'll call back in 10 minutes.",
      author: "David R.",
      role: "Luxury Real Estate Agent",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-24 mb-10">
      <div className="text-center mb-16">
        <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">
          Real Results
        </p>
        <h2 className="text-white text-3xl md:text-5xl font-black leading-tight mb-4">
          Don&apos;t Just Take Our Word For It
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Built for operators who are too busy working in their business to answer the phone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative"
          >
            {/* Quote Icon */}
            <svg
              className="absolute top-6 left-6 h-8 w-8 text-slate-800/50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <div className="relative z-10">
              <p className="text-slate-300 italic mb-6 text-sm leading-relaxed pt-4">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-auto">
                <p className="text-white font-bold">{testimonial.author}</p>
                <p className="text-red-500 text-xs font-semibold tracking-wide uppercase mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

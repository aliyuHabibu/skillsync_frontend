const stats = [
  { value: '500+', label: 'Verified mentors' },
  { value: '10k+', label: 'Mentees guided' },
  { value: '92%', label: 'Return rate from mentees' },
  { value: '4.9/5', label: 'Average mentor rating' },
];

export default function PlatformStatisticsSection() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Our impact in numbers
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Trusted by professionals worldwide.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition hover:border-white/20 hover:bg-white/10"
            >
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

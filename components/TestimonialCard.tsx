interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  stars?: number;
}

export default function TestimonialCard({ quote, name, location, stars = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-sky shadow-sm flex flex-col gap-4">
      <div className="flex gap-1" aria-label={`${stars} out of 5 stars`}>
        {Array.from({ length: stars }).map((_, i) => (
          <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-dark-blue/80 text-sm leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div>
        <p className="font-black text-dark-blue text-sm">{name}</p>
        <p className="text-mid-blue/60 text-xs uppercase tracking-widest">{location}</p>
      </div>
    </div>
  );
}

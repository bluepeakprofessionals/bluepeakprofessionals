export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "how-often-should-you-service-your-pool",
    category: "Maintenance",
    title: "How Often Should You Service Your Pool?",
    excerpt:
      "Most homeowners underestimate how frequently their pool needs attention. We break down what weekly, monthly, and seasonal care actually looks like — and why skipping visits adds up fast.",
    date: "June 10, 2026",
    readTime: "4 min read",
    content: [
      "Most homeowners assume a pool only needs attention when something looks wrong. The truth is that consistent, proactive care is what keeps your water safe, your equipment running, and your costs predictable.",
      "**Weekly visits** are the foundation of good pool care. Every week your pool should be skimmed for debris, the walls and floor vacuumed, the waterline brushed to prevent calcium and algae buildup, and the water chemistry tested and adjusted. Skipping even one week in summer — when heat and bather load spike — can turn a minor imbalance into a full algae bloom.",
      "**Monthly tasks** go deeper: filter cleaning or backwashing, checking pump and motor operation, inspecting seals and fittings for early signs of wear, and testing for metals or phosphates that standard weekly kits miss. These checks catch small problems before they become expensive repairs.",
      "**Seasonally**, your pool needs a full opening and closing service. At opening, we balance the water from scratch, inspect every piece of equipment after the off-season, and ensure your circulation and filtration systems are ready for heavy use. At closing, we winterize lines, lower water levels, and protect the equipment from freeze damage.",
      "The cost of skipping regular service almost always exceeds the cost of keeping up with it. A single algae treatment can run several times the monthly maintenance fee — and that's before factoring in the equipment damage that comes from chronically unbalanced water. Consistency is the best investment you can make in your pool.",
    ],
  },
  {
    slug: "signs-your-pool-chemistry-is-off",
    category: "Water Chemistry",
    title: "5 Signs Your Pool Chemistry Is Off",
    excerpt:
      "Cloudy water and burning eyes aren't just annoyances — they're your pool telling you something is wrong. Learn the warning signs and what to do before the problem gets expensive.",
    date: "May 28, 2026",
    readTime: "5 min read",
    content: [
      "Your pool water is constantly changing. Sunlight, rain, swimmer load, and temperature all shift the chemical balance — sometimes dramatically within 24 hours. Here are the five most common signs that your chemistry needs attention.",
      "**1. Cloudy or hazy water.** Clear water is a sign of proper sanitation and filtration. Cloudiness usually means low chlorine, high pH, or a filtration problem. It can also signal the early stages of an algae bloom. Don't wait to see if it clears on its own — it won't.",
      "**2. Burning or red eyes after swimming.** This is one of the most misunderstood signs. Most people blame high chlorine, but the real culprit is usually a pH that's too far out of range (too high or too low) or chloramines — a byproduct of chlorine reacting with body oils and sweat. Proper shocking and pH correction resolves this quickly.",
      "**3. Strong chlorine smell.** A properly maintained pool has very little odor. A strong 'pool smell' is actually the smell of chloramines, which form when sanitizer is consumed by contaminants. The fix is a shock treatment, not less chlorine.",
      "**4. Algae growth on walls or floor.** Green, black, or mustard-colored patches are a clear sign that your sanitizer levels have dropped. Different algae types require different treatments, and waiting makes them harder to eradicate.",
      "**5. Scale or staining on surfaces.** White, chalky deposits mean your calcium hardness or pH is too high. Metal staining (brown, blue-green, or black) indicates iron, copper, or manganese in your water. Both can permanently damage pool surfaces if left untreated.",
      "If you're seeing any of these signs, the fastest path to resolution is a professional water test. At-home kits measure the basics, but a full lab-style analysis catches the underlying causes that basic kits miss.",
    ],
  },
  {
    slug: "pool-safety-tips-for-families",
    category: "Safety",
    title: "Pool Safety Tips Every Family Should Know",
    excerpt:
      "From proper fencing to drain covers and surface alarms, here's a practical checklist to make sure your backyard pool is safe for kids of every age.",
    date: "May 14, 2026",
    readTime: "6 min read",
    content: [
      "A backyard pool is one of the best additions you can make to your home — but it also requires a serious approach to safety, especially with young children. Drowning is fast and silent. These are the layers of protection every pool owner should have in place.",
      "**Barrier fencing.** A four-sided fence that completely isolates the pool from the house and yard is the single most effective drowning prevention measure. The fence should be at least four feet tall, with no footholds for climbing, and self-latching gates that open away from the pool and latch from the pool side.",
      "**Self-closing, self-latching gates.** Gates are only as good as how consistently they're closed. Self-closing hinges and a latch at the top of the gate — out of reach of young children — remove human error from the equation.",
      "**Pool surface alarms.** These float on the water and trigger an alarm when they detect surface disturbance. They're not a replacement for fencing or supervision, but they add a critical extra layer if a child gets through a gate unnoticed.",
      "**Anti-entrapment drain covers.** Older drain covers can create suction strong enough to trap a swimmer underwater. Modern anti-entrapment covers are designed to prevent this. If your pool was built before 2008, it's worth having the drains inspected and updated.",
      "**Designated supervision.** When kids are in or near the pool, one adult should be the designated watcher — phone down, eyes on the water. Drowning happens in the gaps when everyone assumes someone else is watching.",
      "**Swimming lessons.** Water competency doesn't make a child drown-proof, but it dramatically improves their ability to recover from an accidental fall into the water.",
      "We offer pool kid-proofing services that cover fencing inspection, gate hardware, surface alarms, and drain cover upgrades. If you'd like a safety assessment of your pool, reach out and we'll walk through it with you.",
    ],
  },
  {
    slug: "algae-prevention-guide",
    category: "Algae",
    title: "The Homeowner's Guide to Algae Prevention",
    excerpt:
      "Green, black, mustard — algae comes in more varieties than you'd think, and each type requires a different approach. Here's how to stop it before it starts.",
    date: "April 30, 2026",
    readTime: "5 min read",
    content: [
      "Algae spores are in every pool. They're introduced by wind, rain, swimwear, and pool toys — and they're impossible to keep out entirely. What you can control is whether those spores get the conditions they need to grow.",
      "**Green algae** is the most common type. It turns water green and makes surfaces slippery. It thrives when chlorine levels drop, circulation is poor, or pH drifts too high. A weekly shock and consistent chlorine levels (2–4 ppm) will keep it at bay.",
      "**Black algae** is far more stubborn. It appears as dark spots on plaster or grout and embeds itself deep into the surface. It has a protective outer layer that standard chlorine struggles to penetrate. Treatment requires physical brushing with a steel brush followed by high-dose chlorine or specialized algaecide. It almost always comes back unless the source is addressed — usually contaminated swimwear or equipment from another pool.",
      "**Mustard algae** looks like sand or pollen sitting on the pool floor and walls. It's chlorine-resistant and can survive on equipment, toys, and even swimwear outside the pool. Treatment requires a thorough shocking of both the pool and everything that touches it.",
      "**Prevention comes down to four things:** consistent sanitizer levels, proper pH, good circulation, and regular brushing. Algae loves stagnant water and surfaces that aren't brushed regularly. Running your pump for at least 8 hours a day and brushing walls weekly removes the foothold algae needs to establish itself.",
      "A phosphate remover added monthly can also help — phosphates are algae's primary food source, and keeping them low starves potential blooms before they start.",
    ],
  },
  {
    slug: "when-to-call-a-pool-professional",
    category: "Equipment",
    title: "When to Call a Pool Professional vs. DIY",
    excerpt:
      "Some things you can handle yourself. Others — like pump failures, heater issues, or persistent chemistry problems — need a trained technician. Know the difference.",
    date: "April 15, 2026",
    readTime: "4 min read",
    content: [
      "There's a lot a pool owner can do themselves — and a shorter list of things they shouldn't attempt without experience. Knowing the difference saves money, prevents accidental damage, and keeps your warranty intact.",
      "**DIY-friendly tasks** include skimming debris, emptying skimmer and pump baskets, testing water with a basic kit, adding chlorine tablets to a floater, and backwashing a sand filter. These are routine, low-risk tasks that don't require specialized knowledge.",
      "**Call a professional for chemistry problems you can't resolve.** If you've adjusted your pH twice and it keeps bouncing back, if your water stays cloudy after shocking, or if you're seeing recurring algae despite good chlorine levels — these are signs of an underlying issue that a basic test kit won't diagnose. A full professional water test and treatment plan will resolve it faster and cheaper than continued guesswork.",
      "**Always call a professional for equipment issues.** Pumps, motors, heaters, automation systems, and variable-speed drives involve electrical components and refrigerants that require licensed technicians. Attempting to repair these without proper training can void warranties, damage equipment further, or create safety hazards.",
      "**Call a professional for leaks.** Pool leaks are notoriously difficult to locate and can cause serious structural damage if left unrepaired. A pressure test or dye test by an experienced technician will find the source quickly.",
      "**Call a professional for opening and closing.** Winterizing a pool incorrectly — particularly the equipment lines — can result in freeze damage that costs thousands to repair. A professional opening and closing service is worth every penny compared to that risk.",
      "When in doubt, a quick call to a pool professional will tell you whether something is DIY-appropriate or not. We're always happy to give honest advice, even if the answer is 'you can handle that one yourself.'",
    ],
  },
  {
    slug: "pressure-washing-your-pool-deck",
    category: "Cleaning",
    title: "Why Pressure Washing Your Pool Deck Matters",
    excerpt:
      "Your deck is the first thing guests see. Beyond looks, algae and mineral buildup on coping and tile can cause real damage over time. Here's why a yearly wash pays off.",
    date: "April 2, 2026",
    readTime: "3 min read",
    content: [
      "The pool itself gets most of the attention, but the deck, coping, and surrounding hardscapes take just as much abuse — and they're often the first thing guests and potential buyers notice.",
      "**Algae and mold on deck surfaces are slip hazards.** The greenish film that builds up on concrete, pavers, and stone around pools isn't just unsightly — it's slippery when wet. A pressure wash removes it completely and restores traction to surfaces that see a lot of barefoot traffic.",
      "**Mineral deposits on tile and coping cause long-term damage.** The waterline is particularly vulnerable. Calcium and mineral scale builds up at the water's edge, and over time it etches into tile and stone surfaces. Regular cleaning prevents the scale from hardening to the point where it requires acid washing or tile replacement.",
      "**Pressure washing extends the life of your deck surface.** Organic material — algae, mold, debris — breaks down concrete and paver sealer over time. Annual cleaning followed by resealing keeps your deck surface protected and looking new for years longer than a deck that's left uncleaned.",
      "**It makes a real difference to home value.** A clean, well-maintained pool area signals to buyers (and guests) that the whole property is cared for. A stained, algae-streaked deck creates the opposite impression, regardless of how good the pool water looks.",
      "We include deck and coping areas in our pressure washing service, along with tile line cleaning and hardscape restoration. If your deck is overdue for a cleaning, get in touch — it's one of the fastest and most visible improvements you can make to your outdoor space.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

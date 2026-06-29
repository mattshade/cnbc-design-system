export type Slide = {
  id: string;
  title: string;
  notes: string;
};

export const SLIDES: Slide[] = [
  {
    id: 'hero',
    title: 'CNBC Design System',
    notes: `Hi — thanks for having me. Today I'm walking through the CNBC Design System, a project I led as Lead Product Designer at CNBC.

This work focused on building a comprehensive design system for CNBC.com — keeping the brand consistent and improving the user experience across all digital platforms.

On the right you can see the hero mockup. Below the title you'll see the project frame: CNBC, design system creation, my role as lead product designer, and media as the industry.

That's the lens for everything that follows.`,
  },
  {
    id: 'overview',
    title: 'Scaling the CNBC Experience',
    notes: `Let me start with the overview.

I led the construction of the design system for CNBC.com. This work consists of a Figma-based Pattern Library with Storybook integration that functioned as our style guide.

Our Pattern Library is intended to be a centralized place where designers shape and evolve the design language over time. It integrates with Storybook — our UI component explorer that brings patterns to life.

Storybook also houses foundational principles and overarching rulesets through a simple platform, accessible for all internal teams.

It's a central hub for design principles, components, and guidelines — helping designers and developers create cohesive, high-quality interfaces more efficiently.

The lede card on the right is a good example of that unified language in production.`,
  },
  {
    id: 'problem',
    title: 'Design Debt & Fragmentation',
    notes: `Here's the problem we were solving.

From a lack of foundations, CNBC.com was redesigned and had a series of dependencies from an older platform, resulting in unscalable patterns.

Three things made this painful:

First, design debt — a mix of new and old resulted in almost never-ending accrual because the language wasn't built off its own solid foundation.

Second, unscalable patterns — many existing components did not scale well for old and new use cases, leading to single-use patterns and inconsistent user experience.

Third, no centralized location — designs were dispersed throughout Sketch, Illustrator, and Figma with no clear documentation or versioning.

The problem wasn't cosmetic. Teams couldn't move fast because they couldn't agree on what already existed.`,
  },
  {
    id: 'solution',
    title: 'A Unified Source of Truth',
    notes: `Our solution was a unified source of truth.

We built two complementary systems.

The Pattern Library includes all core foundations — typography, color, layout — as well as patterns for components and modules. Designers use it to cross-check specifications. QA uses it as a reference for accuracy.

The Style Guide provides principles, guidelines, and documentation for engineers to house and test new components. We embedded Figma designs in Storybook so engineering could reference specs as components were built.

Together, these gave every discipline a shared reference point — not just designers.`,
  },
  {
    id: 'process',
    title: 'Auditing the Landscape',
    notes: `Before we designed anything new, we had to assess the design debt on CNBC.com. I led the UI audit, collaborating with agile teams, QA, product, and engineering.

We ran three phases: audit and discuss UI patterns to identify inconsistencies; inventory cutouts of all known pieces to build a running inventory; and find short and long-term improvements while laying groundwork for the style guide.

Some of this was physical — cutout sessions where we printed and grouped components to expose redundancies.

From there we adopted Atomic Design principles — elements, components, and modules — classifying functional patterns by complexity.

We also established strict naming conventions in Figma: component name, type, variation, and screen type. That structure simplified maintenance, aided handoff, and ensured consistency across devices.

The goal wasn't a prettier library. It was exposing hidden complexity and turning it into something teams could navigate.`,
  },
  {
    id: 'system',
    title: 'The Design Language',
    notes: `With inventory and taxonomy in place, we rebuilt the visual foundations.

For typography, I chose a modular scale of Major Second — 1.125 — rounded to the nearest whole number. That gave flexibility while maintaining visual harmony and vertical rhythm across four breakpoints. Line height used 1.125 times the font size.

For color, we moved to a tonal range from zero to one hundred. "System 10" is easier for teams to remember than arbitrary names. Font foreground colors meet minimum WCAG AA standards.

For spatial rhythm, we used a four-point grid system — consistent scaling across screen sizes. Smaller than four would increase complexity; larger would reduce flexibility.

These weren't aesthetic choices in isolation. They were rulesets designed to scale across breakpoints and product surfaces.`,
  },
  {
    id: 'implementation',
    title: 'Storybook & Governance',
    notes: `A design system that only lives in Figma isn't really a system — it's an artifact. Storybook bridged the gap between Figma and production.

Adopting Storybook gave engineers a centralized space for building components while enabling the design team to embed style guide information. The Figma node view plugin let engineers view real-time designs and reference specs as components were constructed.

We also leveraged Figma's Design System Analytics to shape usage of the system — monitoring libraries, components, and internal styles to identify areas needing refinement and focus on what provided the most value.

Analyzing usage helped demonstrate effectiveness to stakeholders — highlighting practical benefits in real-world scenarios, not just anecdotes.`,
  },
  {
    id: 'impact',
    title: 'Lessons Learned & Impact',
    notes: `So what did we deliver?

The efficiency gain was significant — about forty percent faster start-up time across agile teams. Since adoption, the system has grown to over one thousand unique elements, components, and modules.

Three lessons I'd carry forward:

Collaboration — I would have involved a broader range of colleagues, including QE, Infrastructure, and SoftOps earlier.

Stakeholders — demonstrating value to leadership earlier could have accelerated resource allocation.

Impact — growth to one thousand plus unique elements is a testament to the system's success and ongoing adoption.

This reinforced that a design system is an operating model for quality — not just a component library. When the system is clear, teams move faster.

Thanks — happy to take questions.`,
  },
];

export const SLIDE_IDS = SLIDES.map((s) => s.id);

export function getSlideIndex(id: string): number {
  return SLIDES.findIndex((s) => s.id === id);
}

export function getSlide(id: string): Slide | undefined {
  return SLIDES.find((s) => s.id === id);
}

/**
 * Type definitions and the local fallback content for the portfolio's editable
 * pages (Home, About, Speaking). Kept free of top-level await so plain Node
 * tooling can import it; `pages.ts` resolves the live data at build time.
 *
 * Inline links use `[label](https://url)` markdown — see `RichParagraph.astro`.
 * This mirrors the portfolio-admin `/api/public/pages` response shape.
 */

export interface Experience {
  company: string;
  role: string;
}

export interface LinkEntry {
  title: string;
  venue: string;
  link: string;
}

export interface HomeContent {
  avatar: string;
  heading: string;
  paragraphs: string[];
}

export interface AboutContent {
  name: string;
  availableForWork: boolean;
  availabilityLabel: string;
  tagline: string;
  image: string;
  paragraphs: string[];
  experienceTitle: string;
  experiences: Experience[];
  beyondTitle: string;
  beyondParagraphs: string[];
  marqueeImages: string[];
}

export interface SpeakingContent {
  title: string;
  intro: string[];
  marqueeImages: string[];
  pastEventsTitle: string;
  pastEvents: LinkEntry[];
  notesTitle: string;
  notesIntro: string;
  notes: LinkEntry[];
}

export interface PagesContent {
  home: HomeContent;
  about: AboutContent;
  speaking: SpeakingContent;
}

export const fallbackPages: PagesContent = {
  home: {
    avatar: "/dami.png",
    heading: "👋🏾 Hiyaa! I’m Dami",
    paragraphs: [
      "Software designer and founder based in Lagos, building [Tabs](https://www.jointabs.com) a curated library for discovering and learning from African digital products. Focused on designing functional, human-centred products that solve real usability challenges through experimentation and iterative learning.",
      "Currently designing solutions that enable businesses and startups discover, manage and pay for software tools and services in their local currencies; and owning and maintaining an internal design system to drive efficiency and scalability across a cross functional team.",
    ],
  },
  about: {
    name: "Oluwadamilola ‘Dami’ Ojetunji",
    availableForWork: true,
    availabilityLabel: "Available for New Opportunities",
    tagline:
      "Architect-turned-product designer, Founder, Community builder, Traveller, Tennis player & Plant mom.",
    image: "/dami-ojetunji.jpg",
    paragraphs: [
      "I’m genuinely fascinated by how things, people and communities work, why and how they work the way they do. This curiosity has been my north star through making key decisions in my design processes, solving complex and ambiguous problems, considering uniques contexts and nuances that could influence design decisions. all of which has guided me to consistently find the right solutions for the right people while scaling the company, users and the market at large for the last 5 years.",
      "I've done this as a founding product designer at teams like [Vegeel](https://ng.linkedin.com/company/vegeel) and [Tempo AI (YC SC23)](https://www.ycombinator.com/companies/tempo-2) and as a senior product designer at [Luupli](https://apps.apple.com/ng/app/luupli/id6463861554) and a myriad of other global teams across industries like AI, HealthTech, Cybersecurity, B2B, B2C, E-commerce, Fintech and more.",
      "On the side, I'm building [Tabs](https://www.jointabs.com) aka. 'Mobbin for Africa'. Tabs is a thoughtfully curated library of African digital products. It helps product designers, engineers, and product teams see how real products in Africa are solving design and usability challenges. Instead of relying on references from outside contexts, Tabs showcases screenshots categorised by industries, user flows, and features from African products, think onboarding, payment flows, error states, mobile screens dashboards, and more.",
      "To me, design is more than just ‘how it looks’ or ‘how it works’ but, ‘who it works for’. Design considers long term impact on a business, the users and non-users, and society at large. It has the power to include and exclude and has it’s consequences. it’s important to me to do the best I can from my little corner of the world to make it easier, thoughtful, beneficial, inclusive, and truly human-centred.",
    ],
    experienceTitle: "Experience (2020 - Present)",
    experiences: [
      { company: "Mercurie", role: "Product Designer" },
      { company: "Tabs", role: "Founder & Design Lead" },
      { company: "Tempo AI (YC S23)", role: "Founding Product Designer" },
      { company: "Stealth AI Startup", role: "Founding Product Designer" },
      { company: "Luupli", role: "Senior Product Designer" },
      { company: "Vegeel", role: "Product Design Lead" },
      { company: "Freelance", role: "Product Designer" },
    ],
    beyondTitle: "Beyond the day-to-day",
    beyondParagraphs: [
      "I also dedicate time to mentoring designers at all stages of their careers on platforms like [ADPList](https://adplist.org/mentors/dami-ojetunji) and through NGOs like [Design Chics](https://www.designchics.com/) , where I help train the next generation of people in design including underrepresented groups. I provide guidance on launching successful careers, how to thrive and remain relevant in the industry, refining design processes, working on cross-functional teams, and more. I also contribute to open-source and speak at industry events. When I'm not doing all that, you'll find me rewatching the office for the millionth time, annotating a new read, at a local rave, an art exhibition, or on the tennis court.",
    ],
    marqueeImages: [
      "/slider1.jpg",
      "/slider2.png",
      "/slider3.jpg",
      "/slider4.jpg",
      "/slider5.jpg",
    ],
  },
  speaking: {
    title: "Speaking",
    intro: [
      "Throughout my career, I've been invited to speak at conferences, TV shows, podcasts, and webinars, experiences I deeply value. I love connecting with the design and tech community, home and abroad, to share insights from my journey. My talks focus on inclusivity and diversity in tech, designing products that reflect unique cultural nuances, navigating emerging technologies, and more.",
      "For more information about me, photographs, press and more, view my [press kit](https://www.notion.so/damiojetunji/Dami-s-Press-Kit-28520a7f600680139e6bec754a3c42d2)",
    ],
    marqueeImages: [
      "/speaking1.jpg",
      "/speaking2.jpg",
      "/speaking3.jpg",
      "/speaking4.jpg",
      "/speaking5.jpg",
    ],
    pastEventsTitle: "Past Events",
    pastEvents: [
      {
        title: "Designing Human-Centred Web3 Products",
        venue: "WEB3 LAGOS CONFERENCE 4.0",
        link: "https://www.youtube.com/live/QO-FAaKSQT8?si=T0NOhWnWR7PPL2UD",
      },
      {
        title: "Designing Products That Scale",
        venue: "BUSINESS INCORPORATED SHOW. CHANNELS TELEVISION",
        link: "https://youtu.be/CmVdUAmLyek?si=xPJIiKfElLBLSlOr",
      },
      {
        title: "Blending Technology Into Resolving Everyday Problems",
        venue: "TELEVISION CONTINENTAL BREAKFAST SHOW",
        link: "https://youtu.be/x-1A5VXmqDM?si=eZZxFW615IMWs1Pw",
      },
      {
        title: "Go Behind the Ship: Meet The Designer Behind Tabs",
        venue: "THE BTS SHOW WITH LOTA ANIDI",
        link: "https://youtu.be/ZzvtIi6TCXg?si=kGFyeNjzLjEbOR7H",
      },
      {
        title: "Beyond The Code: Women Leading The Next Tech Revolution",
        venue: "GOOGLE WOMEN TECHMAKERS. IWD 2025",
        link: "https://www.instagram.com/reel/DI6lsnRI9Ud/?igsh=MW1uajhvaG5va3FxYg==",
      },
      {
        title:
          "Context Is King: Building Tools That Understand The African User",
        venue: "NEWBII AFRICA FIRESIDE CHAT",
        link: "https://www.linkedin.com/posts/newbiiafrica_a-big-thank-you-to-oluwadamilola-o-founder-activity-7357378391274119169-I77_?utm_source=share&utm_medium=member_ios&rcm=ACoAACJaFScBwoO-sichdLg9autSS8IXqeIzWnU",
      },
      {
        title: "Crafting a Job-Winning Portfolio",
        venue: "PORTFOLIO POWER-UP: BUILD, SHOWCASE & GET HIRED",
        link: "https://www.youtube.com/live/QHKfvvqiIFc?si=0FEUAMDlWsbnUvwL",
      },
    ],
    notesTitle: "Notes",
    notesIntro:
      "I share insights through articles and interviews with leading tech blogs, newspapers and others, writing about design best practices for startup teams, refining design processes, the complexities of designing for emerging markets, and my journey building and running Tabs.",
    notes: [
      {
        title: "Documenting Africa's Digital Products with Tabs",
        venue: "TECHPRESSION",
        link: "https://techpression.com/documenting-africas-digital-products-with-tabs/",
      },
      {
        title: "A Solo Designers Guide To Building MVPs",
        venue: "VANGUARD NIGERIA",
        link: "https://www.vanguardngr.com/2025/07/a-solo-designers-guide-to-building-mvps/amp/",
      },
      {
        title: "Designing With Purpose In Emerging Markets",
        venue: "TECHCITY NIGERIA",
        link: "https://www.techcityng.com/designing-with-purpose-in-emerging-markets/",
      },
      {
        title: "The Designer Who Built The Library She Couldn't Find",
        venue: "THE BTS SHOW WITH LOTA ANIDI",
        link: "https://open.substack.com/pub/behindtheship/p/the-designer-who-built-the-library?r=4hy7y&utm_medium=ios",
      },
      {
        title:
          "How Platform Helps African Product Teams Find Locally Relevant Design",
        venue: "NIGERIAN TRIBUNE NEWSPAPER",
        link: "https://tribuneonlineng.com/how-platform-helps-african-product-teams-find-locally-relevant-design/",
      },
      {
        title: "Embracing Imperfection In The Design Process",
        venue: "TECHECONOMY",
        link: "https://techeconomy.ng/embracing-imperfection-in-the-design-process/",
      },
      {
        title: "Turning User Research Into Product Decisions",
        venue: "TECHNEXT",
        link: "https://technext24.com/2025/08/25/turn-user-research-product-decisions/",
      },
    ],
  },
};

export type TextSegment =
  | { type: "text"; content: string }
  | { type: "link"; text: string; href: string };

export type Paragraph =
  | string
  | TextSegment[]
  | { content: string | TextSegment[]; hidden?: boolean };

export type SideParagraph = string | { content: string; hidden?: boolean };

export interface SlideImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface TeamMember {
  name: string;
  image: string;
  role: string;
}

export type SectionContent =
  | {
      type: "text";
      title: string;
      paragraphs: Paragraph[];
      showTitle?: boolean;
      hideOnSmallerScreen?: boolean;
      customHtml?: string;
      scrollToTop?: boolean;
      showInNav?: boolean;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      hideOnSmallerScreen?: boolean;
      customHtml?: string;
    }
  | {
      type: "slider";
      images: SlideImage[];
      hideOnSmallerScreen?: boolean;
      customHtml?: string;
    }
  | {
      type: "summary";
      role: string;
      responsibilities: string;
      deliverables: string[];
      timeline: string;
      sideParagraphs: SideParagraph[];
      team: TeamMember[];
      hideOnSmallerScreen?: boolean;
      customHtml?: string;
    }
  | {
      type: "html";
      content: string;
      maxWidth?: string;
      hideOnSmallerScreen?: boolean;
    };

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  listTitle: string;
  pageTitle?: string;
  description?: string;
  coverImage: string;
  client?: string;
  year: string;
  role: string;
  sections: SectionContent[];
  notes: string[];
  password?: string;
  video?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "a1b2c3d4-e5f6-4789-a012-b3c4d5e6f7a8",
    title: "Mercurie Platform",
    listTitle: "payments and subscriptions from one platform",
    pageTitle: "Designing a all-in-one platform for software payments",
    description:
      "End-to-end design of a platform that enabled businesses to overcome local currency restrictions and seamlessly discover, purchase and manage technology services and software.",
    coverImage: "/images/artisan-cover.jpg",
    client: "Mercurie",
    year: "2023",
    role: "Product Designer",
    password: "DO_2025",
    video: "/videos/mercurie.mp4",
    sections: [
      {
        type: "text",
        scrollToTop: true,
        title: "Background",
        showTitle: false,
        paragraphs: [
          [
            { type: "link", href: "", text: "Mercurie" },
            {
              type: "text",
              content:
                " is a web and mobile platform enabling businesses discover, pay for, and manage technology services and softwares easily, in their local currencies.",
            },
          ],
          "The launch of the Mercurie platform was timely, coinciding with a critical period when African businesses faced rising operational costs for dollar-based digital services. This was primarily driven by the CBN’s restrictions on using Naira debit cards for international transactions. The team had previously launched Adpay in 2022 to address a specific part of this problem: enabling users to top up wallets and manage Google Ad campaigns in their local currency. Adpay was successful, but its model wasn't scalable. There were a number of factors that weren’t considered that stemmed from pushing the platform to its limits, leading to compliance issues, user restrictions, and more. It was time to expand and fix said issues with a new product, Mercurie.",
        ],
      },
      {
        type: "summary",
        role: "Product Designer",
        responsibilities:
          "Product & Design Strategy, Product Design, UX Research, Usability Testing, Prototyping",
        deliverables: ["Web Design", "Mobile Web"],
        timeline: "Q1 2024 - Present",
        team: [
          {
            name: "Dami",
            image: "/dami-study.jpg",
            role: "Product Designer",
          },
          {
            name: "Michelle",
            image: "/mercurie-michelle.png",
            role: "Frontend Eng",
          },
          {
            name: "Harry",
            image: "/mercurie-harry.png",
            role: "Tech Lead & Frontend Eng",
          },
          {
            name: "Sunday",
            image: "/mercurie-sunday.png",
            role: "Backend Eng",
          },
          {
            name: "Elvis",
            image: "/mercurie-elvis.png",
            role: "Backend Eng",
          },
        ],
        sideParagraphs: [
          "As the First Product Design Hire and solo designer at Mercurie, I was responsible for driving design priority and project scope.partnering closely with engineering, primary stakeholders, sales, and marketing to critique, scale, and deliver 0-1 user experiences. My focus ensured alignment across growth initiatives, design discovery, and final deliverable management.",

          {
            hidden: true,
            content:
              "📣 Due to NDA restrictions this case study has been summarised! However, the most recent and iterated version of the platform is currently live and being used by over 100+ businesses across Africa. Happy to share a walkthrough, other explorations, ideas, and non-business impact of this project.",
          },
        ],
      },
      {
        type: "text",
        title: "MVPing",
        hideOnSmallerScreen: true,
        paragraphs: [
          `In a fast-paced startup environment, the team's pursuit of a "perfect" MVP led to significant scope creep and delays. Our initial two-month launch window stretched to a year primarily caused by continuous scope changes and the desire to include all ideated features in the first release. This delay was discouraging as it prevented us from validating design decisions through valuable user testing and opened the door to frequent, unmoderated input from non-core stakeholders. This experience taught me critical lessons in standing firm on focused design choices, maintaining project scope, and communicating the importance of data to drive key decision-making.`,
          "📣 Due to NDA restrictions this case study has been summarised! However, the most recent and iterated version of the platform is currently live and being used by over 100+ businesses across Africa. Happy to share the nitty-gritty on the design process, tools, explorations, ideas, and non-business impact of this project.",
        ],
      },
      {
        type: "text",
        title: "Strategic Focus",
        paragraphs: [
          "Translating abstract concepts into tangible experiences required successfully bridging the gap between design vision, product strategy, and technical feasibility. The core project goal was simple: ensure users could discover, pay for, and track their technology services, with ease and pay in their local currency. This clear focus helped streamline design efforts and address technical feasibility early on. We also paid close attention to the unique African fintech context, ensuring payment methods were transparent, compliant, and familiar to users, avoiding any unnecessary complexity.",
        ],
      },
      {
        type: "image",
        hideOnSmallerScreen: true,
        src: "/mercurie-flow.png",
        alt: "Mercurie Flow",
        customHtml: `
          <div class="absolute -right-[170px] flex justify-center items-center top-0 bottom-0">
            <h6 class="w-[170px]">A very early snippet from the team’s very first brainstorming session on the vision and direction of the Mercurie platform. As expected, a lot of this changed/evolved as time went on.</h6>
          </div>
        `,
      },
      {
        type: "text",
        hideOnSmallerScreen: true,
        title: "Research & Collaboration",
        paragraphs: [
          `Much of the early brainstorming was informed by user research conducted on the existing sister platform, Adpay. Although Adpay had a different product offering, its success with Mercurie's primary target users gave me critical foundational insights for design direction.`,
          `I also leveraged inspiration from previous wireframes and personal project explorations. The entire process was grounded in continuous critique and collaboration with the team, particularly with engineering. Understanding the technical constraints, requirements, and the inner workings of APIs was essential for ensuring an excellent and technically feasible user experience.`,
        ],
      },
      {
        type: "text",
        hideOnSmallerScreen: true,
        title: "Explorations & Iterations",
        paragraphs: [
          "The first few iterations were 'straightforward' based on the understanding of the overall scope and user journeys and got better as I iterated and gained more clarity. One my biggest challenges was making the new platform not overwhelming and functional for customers coming over from the sister platform, Adpay. The main goal was to avoid user drop-off and boost adoption as much as possible for both old and new users.",
          "Another unique challenge was the absence of a PRD or documentation, which is a common occurrence in startups. This meant diving into many engineering meetings (yaay collaboration 🎉) to understand how the APIs worked and key technical considerations that might influence design decisions. In turn, I was able to use the knowledge gained and technical documentation to draft all necessary user stories and flows to gain clarity and get the show on the road.",
        ],
      },
      {
        type: "image",
        hideOnSmallerScreen: true,
        src: "/mercurie-arrow.png",
        alt: "Mercurie Dashboard",
        customHtml: `
          <div class="absolute -left-[260px] top-10 bottom-0 flex flex-col items-end">
            <h6 class="w-[260px]">Referral Program API Flow. A sample flowchart created during one of our engineering meetings, illustrating the planned referral logic and how it interacts with different APIs across the system , from sign-up to earning rewards.</h6>
            <img src="/large-arrow.svg">
          </div>
        `,
      },
      {
        type: "text",
        title: "Quote",
        showInNav: false,
        hideOnSmallerScreen: true,
        showTitle: false,
        paragraphs: [
          "Design is never a straight line; it's a process of constant change and learning. Below, you can scroll through some key iterations and design variations of the Mercurie platform. These show how the design evolved over time as I and the team gained clarity on user needs, technical constraints, and the shifting scope of the project (Enjoy! 😊)",
        ],
      },
      {
        type: "slider",
        hideOnSmallerScreen: true,
        images: [
          {
            src: "/mercurie-dashboard.png",
            alt: "Mercurie Dashboard",
            caption:
              "The objective for this version was to enable user exploration and discovery. The design focused on serving as a single entry point where users could take a guided tour, find available services, manage existing subscriptions, read relevant blog posts, access their wallet, and more.",
          },
          {
            src: "/mercurie-dashboard-2.png",
            alt: "Mercurie Dashboard",
            caption: `This version provided users with a quick, prioritised summary of their existing subscriptions, including active services, licenses, and payments for efficiency. the design fulfils our objective of user exploration and growth by prominently featuring a "Pay & Save on other Services" section to encourage the discovery and adoption of new services. clear visual feedbacks were introduced to build user trust.`,
          },
        ],
      },
      {
        type: "text",
        title: "Quote",
        showInNav: false,
        hideOnSmallerScreen: true,
        showTitle: false,
        paragraphs: [
          "📣 Due to NDA restrictions this case study has been summarised! However, the most recent and iterated version of the platform is currently live and being used by over 100+ businesses across Africa. Happy to share a walkthrough, other explorations, ideas, and non-business impact of this project.",
        ],
      },
      {
        type: "text",
        title: "Reflections & Impact",
        hideOnSmallerScreen: true,
        paragraphs: [
          "Working on the Mercurie team, especially as part of the core team, was a great experience. It provided key insights into my skills as a designer and showed me what I would do differently if I could restart this project or any projects in the future.",
        ],
        customHtml: `
          <div>
            <div class="flex">
              <span class="w-1 h-1 aspect-square bg-text rounded-full mr-4 mt-3"></span>
              <p>This project was a huge opportunity to grow my communication and collaboration skills. I worked closely with a cross-functional team, including the engineering, sales, and marketing, wearing many hats. I was able to gain deep technical understanding by attending engineering discussions, which not only allowed me draft design documentations but contribute immensely to how projects were scoped and managed across the company.</p>
            </div><br>
            <div class="flex">
              <span class="w-1 h-1 aspect-square bg-text rounded-full mr-4 mt-3"></span>
              <p>If I could restart this project, I would suggest a much shorter timeline and a much ‘simpler’ MVP. The desire for a perfect, feature-packed product delayed our launch significantly. Strictly relying on stakeholder input instead of user testing led to a bulky MVP and a huge launch delay. This trade-off had immediate consequences: the platform required a lot more customer support, straining our support team. Also, because Engineering was stretched thin fixing post-launch bugs, critical time-saving 'features' like an FAQ section or Intercom integration (for automated support) couldn't be built. The core lesson here is clear: the simpler the initial scope, the better for the entire team.</p>
            </div><br>
            <div class="flex">
              <span class="w-1 h-1 aspect-square bg-text rounded-full mr-4 mt-3"></span>
              <p>Although I'd learned this on a previous team, it was nice to be reminded of how much joy I get from collaborating with my cross-functional peers. I had a blast jamming with the engineers while designing the UX. I loved digging into the technical constraints to come up with creative design strategies to make up for the constraints without sacrificing user experience.</p>
            </div>
            <div class="absolute rotate-[-17deg] -left-[260px] bottom-0 flex flex-col items-end">
            <h6 class="w-[260px]">I've also always found that engineers have great ideas but are too ‘shy’ to share them outside in larger forums </h6>
            <img src="/small-arrow.svg" />
            </div>
          </div>
        `,
      },
    ],
    notes: [],
  },
  {
    id: "2",
    slug: "f1a2b3c4-d5e6-4f78-9a0b-c1d2e3f4a5b6",
    title: "Tempo AI (YC S23)",
    pageTitle: "Founding Designer for Early Stage Startups",
    listTitle: "FOUNDING DESIGNER FOR EARLY STAGE STARTUPS",
    coverImage: "/images/tempo-cover.jpg",
    year: "2023",
    description:
      "Spearheaded the product design lifecycle for multiple YC-funded and early-stage companies including building Tempo's core AI product and providing comprehensive design leadership, from UX strategy and creative direction to developing scalable design systems.",
    role: "Founding Designer",
    password: "DO_2025",
    sections: [],
    notes: [],
  },
  {
    id: "3",
    slug: "c3d4e5f6-a7b8-4c9d-0e1f-a2b3c4d5e6f7",
    title: "Tabs Platform",
    pageTitle:
      "Cohesive Design Library That Improved Design & Development Efficiency",
    listTitle: "“Mobbin for Africa”",
    coverImage: "/images/design-system-cover.jpg",
    year: "2023",
    description:
      "Created a library for product teams across Africa to discover and learn from African digital products. Teams can see how real-life products solve unique design and usability pain-points, categorised by industry, user flow, platform, and more.",
    role: "Product Designer",
    password: "DO_2025",
    sections: [],
    notes: [],
  },
  {
    id: "4",
    slug: "b2c3d4e5-f6a7-4b89-c0d1-e2f3a4b5c6d7",
    title: "Mercurie Design System",
    pageTitle:
      "Cohesive Design Library That Improved Design & Development Efficiency",
    listTitle:
      "COHESIVE DESIGN LIBRARY THAT IMPROVED  DESIGN & DEVELOPMENT EFFICIENCY",
    coverImage: "/images/design-system-cover.jpg",
    year: "2023",
    description:
      "Owning a comprehensive design system spanning 1,500+ components, which is accelerating design-to-development collaboration and establishing consistent user experiences across diverse product lines",
    role: "Product Designer",
    password: "DO_2025",
    sections: [],
    notes: [],
  },

  {
    id: "5",
    slug: "d4e5f6a7-b8c9-4d0e-1f2a-b3c4d5e6f7a8",
    title: "Stealth AI Startup",
    pageTitle: "Chat GPT But for the Stock Market",
    listTitle: "CHAT GPT BUT FOR THE STOCK MARKET",
    coverImage: "/images/stealth-cover.jpg",
    description:
      "Led 0-1 design of an LLM-powered chatbot for financial and stock market insights, translating complex AI agent workflows and data flows into intuitive user experiences.",
    year: "2023",
    role: "Product Designer",
    password: "DO_2025",
    sections: [],
    notes: [],
  },
];

// Helper function to get a case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

// Helper function to get all case study slugs (useful for static path generation)
export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}

// Helper function to check if a case study has content
export function caseStudyHasContent(caseStudy: CaseStudy): boolean {
  return caseStudy.sections.length > 0;
}

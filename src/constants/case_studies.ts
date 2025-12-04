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
  darkSrc?: string;
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
      darkSrc?: string;
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
    slug: "software-payments-platform",
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
              "📣 Due to NDA restrictions, key company information, and business metrics have been omitted from this case study. However, the platform is live and serving businesses across Africa.",
          },
        ],
      },
      {
        type: "text",
        title: "MVPing",
        hideOnSmallerScreen: true,
        paragraphs: [
          `In a fast-paced startup environment, the team's pursuit of a "perfect" MVP led to significant scope creep and delays. Our initial two-month launch window stretched to a year primarily caused by continuous scope changes and the desire to include all ideated features in the first release. This delay was discouraging as it prevented us from validating design decisions through valuable user testing and opened the door to frequent, unmoderated input from non-core stakeholders. This experience taught me critical lessons in standing firm on focused design choices, maintaining project scope, and communicating the importance of data to drive key decision-making.`,
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
          <div class="absolute -left-[280px] top-10 bottom-0 flex flex-col items-end">
            <h6 class="w-[260px]">Referral Program API Flow. A sample flowchart created during one of our engineering meetings, illustrating the planned referral logic and how it interacts with different APIs across the system , from sign-up to earning rewards.</h6>
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
            <div class="absolute -left-[260px] bottom-0 flex flex-col items-end">
            <h6 class="w-[260px]">I've also always found that engineers have great ideas but are too ‘shy’ to share them outside in larger forums </h6>
            </div>
          </div>
        `,
      },
    ],
    notes: [],
  },
  {
    id: "5",
    slug: "Financial-AI-Platform",
    title: "Financial AI Startup",
    pageTitle: "Designing 0-1 conversational AI-platform for 150k+ investors",
    listTitle: "CHAT GPT BUT FOR THE STOCK MARKET",
    coverImage: "/images/stealth-cover.jpg",
    description:
      "Led the 0-1 design of a conversational AI platform for 150,000+ investors, providing financial and stock market insights, and translating complex AI agent and data workflows into intuitive user experiences.",
    year: "2023",
    role: "Product Designer",
    password: "DO_2025",
    video: "/videos/stealthai.mp4",
    sections: [
      {
        type: "text",
        scrollToTop: true,
        title: "Overview",
        showTitle: false,
        paragraphs: [
          [
            { type: "link", href: "/", text: "The Average Joe" },
            {
              type: "text",
              content:
                " had built something special, a financial newsletter that 150,000+ people trusted for stock market insights and investment guidance. Their mission was clear: help the modern generation live their best financial life through education and motivation. But they had a bigger vision. What if instead of waiting for the next newsletter, users could ask questions whenever they wanted? What if the AI could analyse their portfolio, interpret market movements in real-time, and offer personalised insights based on actual stock market and investment behaviour?",
            },
          ],
        ],
      },
      {
        type: "summary",
        role: "Founding Product Designer",
        responsibilities:
          "Product & Design Strategy, Product Design, UX Research, Usability Testing, Prototyping, Design System",
        deliverables: ["Web Design", "Mobile Web"],
        timeline: "3 months",
        team: [
          { name: "Dami", role: "Product Designer", image: "/dami-study.jpg" },
          { name: "Victor", role: "Founder", image: "/stealth_ai/victor.jpg" },
          {
            name: "Fabio",
            role: "Product Manager",
            image: "/mercurie-elvis.png",
          },
          { name: "Khel", role: "Frontend", image: "/mercurie-harry.png" },
          { name: "Niko", role: "Backend", image: "/stealth_ai/niko.jpg" },
        ],
        sideParagraphs: [
          "I joined as the sole designer at a critical inflection point. The team had a hard deadline, three months to go from concept to friends and family testing. There was no time for traditional user research cycles or extensive testing. Every design decision had to be informed by my understanding of the existing newsletter, the audience, competitive/market analysis, and collaboration with the cross-functional team. This meant working fast and decisively. I'd present designs in our stand-ups, get immediate feedback from engineering and product, iterate quickly, and move to the next.",
          "📣 Due to NDA restrictions, key company information have been omitted in this case study.",
        ],
      },
      {
        type: "text",
        title: "Setting the Stage",
        paragraphs: [
          "What happens when a newsletter company serving 150k+ users pivots to become an AI platform for stock market insights? You make sure complex AI agent orchestration translates into an experience that feels simple, trustworthy, and easily customisable, without losing traction while continuing to grow.",
          "The brief: 3 months to build a complete platform (web and mobile) that handles big data, looks aesthetically pleasing yet minimal, and ships fast enough to not bottleneck growth. The pressure was intense, but it earned me the trust to make bold calls, from using Shadcn as the design system for quick implementation, to revising flows or scrapping the inherited data-heavy approach entirely. The team saw the reasoning immediately, and we moved quickly.",
          "Thankfully, the team served as my de facto testers. If they found something confusing or over-complicated, our users definitely would too. This constraint forced immediate clarity: we couldn’t hide behind “we’ll test this later.” Every design decision had to be defensible in the moment.",
        ],
      },
      {
        type: "text",
        title: "Understanding the Landscape",
        paragraphs: [
          "Before jumping into solutions, I needed to understand what we were really building. This wasn't just a chatbot like ChatGPT, this was a sophisticated financial intelligence system with multiple AI agents working together. The architecture was fascinating. When a user asked a question, an orchestrator agent would analyse the query, determine which specialised agents to activate (market data, portfolio analysis, news, technical indicators), coordinate their responses, and synthesise everything into a coherent answer. Each agent had access to different data sources, APIs, and reasoning capabilities. This meant I wasn't designing for one AI but, it needed to feel like a single, intelligent advisor.",
        ],
      },
      {
        type: "image",
        src: "/stealth_ai/architecture.png",
        darkSrc: "/stealth_ai/architecture_dark.png",
        alt: "Architecture",
        customHtml: `
          <div class="absolute -left-[170px] flex justify-center items-center -top-25 bottom-0">
            <h6 class="w-[210px]">I joined with zero understanding of how LLMs worked, how agents orchestrated tasks, or why certain queries took longer than others. Understanding at least 30% of the common constraints fundamentally shaped my design decisions.</h6>
          </div>
        `,
      },
      {
        type: "text",
        title: "The User Reality",
        paragraphs: [
          "I also analyzed the existing newsletter audience. They were mostly millennials and new investors who wanted to understand the market without drowning in complex data. They trusted the newsletters because the content broke down complex topics into digestible, actionable insights. The interface needed to maintain that clarity while giving them control and flexibility over how the information is consumed.",
        ],
      },
      {
        type: "text",
        title: "The Inherited Design",
        paragraphs: [
          "Looking at previous wireframes, I could see where things could be improved which included: information architecture and visual hierarchy. Data screens seemed dense and text-heavy, making it difficult for to quickly scan and prioritise the most important insights. Also, the visual design lacked a consistent design system, which would be important not only for user experience but, building trust by ensuring the platform felt intuitive and easy to use, especially when dealing with complex data.",
        ],
      },
      {
        type: "slider",
        images: [
          { src: "/stealth_ai/slide1.png", alt: "Slide 1" },
          { src: "/stealth_ai/slide2.png", alt: "Slide 2" },
          { src: "/stealth_ai/slide3.png", alt: "Slide 3" },
        ],
      },
      {
        type: "text",
        title: "Design Principles",
        hideOnSmallerScreen: true,
        paragraphs: [
          "Given the fast-paced nature of the project, establishing core principles was critical to guide every key design decision made:",
        ],
        customHtml: `
          <div>
            <div class="flex">
              <span class="w-1 h-1 aspect-square bg-text rounded-full mr-4 mt-3"></span>
              <p>Conversation First, Data Second: The interface must feel like chatting with a knowledgeable friend, not querying a database. Data visualisations should be delivered contextually, not overwhelm the user with unnecessary information.</p>
            </div>
            <div class="flex">
              <span class="w-1 h-1 aspect-square bg-text rounded-full mr-4 mt-3"></span>
              <p>Progressive Disclosure: With a data-heavy platform like this, it is easy to overload users and increase cognitive load. The goal was to start simple, and allow users to dig deeper only if and when they choose to.</p>
            </div>
            <div class="flex">
              <span class="w-1 h-1 aspect-square bg-text rounded-full mr-4 mt-3"></span>
              <p>Transparency in Uncertainty: Financial AI cannot predict the future. The interface must clearly distinguish between historical data, current analysis, and forward-looking insights, and communicate confidence levels appropriately and honestly.</p>
            </div>
          </div>
        `,
      },
      {
        type: "text",
        title: "The Outcome",
        paragraphs: [
          "Rather than just redesigning what existed, I identified critical gaps in the user experience and designed features that would make the platform genuinely useful for daily investing workflows.",
        ],
      },
      {
        type: "slider",
        images: [
          {
            src: "/stealth_ai/slide-2_1.png",
            alt: "",
            caption:
              "I added a persistent ticker to the launch screen for constant market monitoring. Investors don't just check markets once, they glance at it regularly. The ticker shows major indices, trending stocks, and user watchlist items, letting them stay oriented without opening multiple tabs. It transforms the platform from a Q&A tool into a companion.",
          },
          {
            src: "/stealth_ai/slide-2_2.png",
            alt: "",
            caption: `Not all questions are the same. Asking "What's the latest Tesla news?" requires different processing than "Compare Tesla vs. amazon fundamentals." Users can select modes before asking or let the AI auto-detect based on query patterns. This made responses more predictable and relevant to intent.`,
          },
          {
            src: "/stealth_ai/slide-2_3.png",
            alt: "",
            caption:
              "When the AI generates charts, tables, or analysis, it was important for users to be able to reference them while continuing the conversation. we also made sure that Users could customise which metrics are in view, resize columns, and save preferred configurations. The sidebar could be docked as well, adapting to different workflows, from casual viewing to in-depth analysis.",
          },
          {
            src: "/stealth_ai/slide-2_4.png",
            alt: "",
            caption:
              "it was important to follow familiar patterns, the in-app feedback was one of them. it created an immediate feedback loop for the friends and family testing phase and beyond.",
          },
        ],
      },
      {
        type: "text",
        title: "Mobile-Specific Considerations",
        paragraphs: [
          "One of my discoveries was that a good number of beginner investors check their stocks or market information on-the-go, it was important that the mobile UX wasn’t just a compressed version of the web version. It had to be designed and optimised for how people actually use regular apps: quick checks between meetings or daily activities, panic queries during market volatility, or portfolio monitoring throughout the day.",
        ],
      },
      {
        type: "image",
        src: "/stealth_ai/mobile.png",
        alt: "",
      },
      {
        type: "text",
        title: "Design Decisions I'm Proud Of (Well, some of them 😄)",
        paragraphs: [],
        customHtml: `
          <div>
            <div class="flex">
              <span class="w-1 h-1 aspect-square bg-text rounded-full mr-4 mt-3"></span>
              <p>Customisable Financial Tables: I redesigned the entire data viewing experience to be adaptable to different use cases and screen sizes. Column widths could be resized, panels could be expanded or collapsed, and the entire interface adapted to how much information density each user preferred. Power users could see everything at once; casual investors could keep it minimal.</p>
            </div><br>
            <div class="flex">
              <span class="w-1 h-1 aspect-square bg-text rounded-full mr-4 mt-3"></span>
              <p>Status-Aware Input Prompts: This is something that’s often overlooked but, the chat input placeholder text changed based on context for example after user mentions a stock, the placeholder changes to "Ask more about AMZN” or after showing requested information, "What else would you like to know?". It’s a small detail, but it reinforced possible actions users could do next.</p>
            </div><br>
            <div class="flex">
              <span class="w-1 h-1 aspect-square bg-text rounded-full mr-4 mt-3"></span>
              <p>Smart Defaults for Time Periods: Financial data has dozens of time period options (1D, 5D, 1M, 3M, 6M, YTD, 1Y, 5Y, MAX). Overwhelming. I designed smart defaults based on query intent, Users could always change periods, but starting them in the right context reduced friction and improved understanding.</p>
            </div>
          </div>
        `,
      },

      {
        type: "text",
        title: "Reflections",
        paragraphs: [
          "This project pushed me in ways I didn't expect. Working across time zones, with team members in Toronto, Vancouver, and the Philippines, meant I couldn't rely on synchronous feedback loops. This made me more explicit in my design rationale, and proactive in anticipating edge cases. The async nature actually made me a better designer, everything had to be clear in Figma comments, documented in specs, or captured in Loom videos. This discipline meant fewer misunderstandings and faster implementation despite the distance.",
        ],
        customHtml: `
          <div>
            <div class="flex">
              <span class="w-1 h-1 aspect-square bg-text rounded-full mr-4 mt-3"></span>
              <p>What surprised me most: How much financial domain knowledge I had to learn. I couldn't design a balance sheet view without understanding what balance sheets meant or what it was showing. I couldn't create comparison interfaces without knowing which metrics actually mattered for different industries. The first month I spent probably 30% of my time just learning enough finance to design intelligently.</p>
            </div><br>
            <div class="flex">
              <span class="w-1 h-1 aspect-square bg-text rounded-full mr-4 mt-3"></span>
              <p>What I'd do differently: I would have pushed harder for at least minimal user testing, even just 3-4 sessions. While the team gave valuable feedback and thoughts, we were too close to the product. Some assumptions we made, like how users would discover the mode switching, or which metrics they'd want visible by default, could have been validated or invalidated with external input.</p>
            </div>
          </div>
        `,
      },
      {
        type: "text",
        title: "",
        paragraphs: [
          "This was my first time designing an AI product, and it taught me that AI design is really just good product design with new constraints. Users still want clarity, control, and confidence. The medium is different, conversational interfaces instead of forms, responses instead of page loads but the principles remain, understand the problem, respect the user's mental model, remove friction, build trust.",
        ],
      },
    ],
    notes: [],
  },
  {
    id: "4",
    slug: "design-system",
    title: "Mercurie Design System",
    pageTitle: "Improving design & development efficiency with a design system",
    listTitle:
      "COHESIVE DESIGN LIBRARY THAT IMPROVED  DESIGN & DEVELOPMENT EFFICIENCY",
    coverImage: "/images/design-system-cover.jpg",
    year: "2023",
    video: "/videos/mercurie_ds.mp4",
    description:
      "Created a design system with multiple states, accessibility standards, variables and documentation, improving design-to-development collaboration, efficiency, and establishing consistent UX across diverse internal products and use case.",
    role: "Product Designer",
    password: "DO_2025",
    sections: [
      {
        type: "text",
        title: "Overview",
        scrollToTop: true,
        showTitle: false,
        paragraphs: [
          `Starting out as the first design hire on a team that isn't design-led means you have to justify everything, and that includes the design system. The resistance usually comes down to two things: prioritising it over "more important" feature work and proving the immediate ROI. My approach is always to use my user-centred mindset to frame the long-term costs: without a system or a solid foundation, the user experience, collaboration, efficiency, scalability, and time-to-market suffers.`,
        ],
      },
      {
        type: "summary",
        team: [
          { name: "Dami", role: "Product Designer", image: "/dami-study.jpg" },
        ],
        role: "Product Designer",
        responsibilities: "Design System",
        deliverables: [],
        timeline: "Q1 2024",
        sideParagraphs: [
          "I collaborated closely with the team contracted to define the new product's look and feel. This partnership allowed for an easy collaboration of visions and ideas, defining everything from who the product would serve to its long-term growth trajectory and UX goals. This alignment was the perfect starting point for me to build a comprehensive set of guidelines and components. These now serve as the single source of truth at Mercurie (and AdPay), ensuring a consistent and scalable user interface across the platform for both design and development.",
        ],
      },
      { type: "image", src: "/mercurie_design/adpay_mock.png", alt: "" },
      {
        type: "text",
        title: "Starting Point",
        paragraphs: [
          "I began by analysing 40+ design systems built in Figma (via the Figma Community). This allowed me to study and extract common patterns for things like text styles, spacing, and colours.",
          "Why this approach? Before this project, I had only created style guides/UI kits, not a ‘standard’ design system. It was important for this project and my own personal growth, to get familiar the industry's best practices before tackling this. Studying these systems gave me key insights into organisation, naming conventions, scales, how to successfully apply these rules for responsive designs and more.",
          "(Bear in mind) I was simultaneously building this while working on the platform's early iterations. I think this approach really helped me test and get earlier previews on what worked and didn’t for the interface. A good example of this was A/B testing input fields and button types while analysing the onboarding process with the team. Basic foundational visual aspects were defined in the branding, like the logo, typeface and colour system. Where I came in was defining the line height, naming conventions, variables, states, semantics and other details.",
        ],
      },
      { type: "image", src: "/mercurie_design/design_system.png", alt: "" },
      {
        type: "text",
        title: "Atoms, Molecules, and the Rest",
        paragraphs: [
          "During my research, I loved the way Design Systems use the Atomic Design methodology. I broke the Mercurie system down to the smallest parts (Atoms like buttons and fields) and then built them up into reusable components (Molecules and Organisms). This helped me truly understand how the design system moves beyond basic building blocks and works as one whole, that's the best part of good design. Atomic design gave me the structure we needed. It was also important that components had to be reusable across Mercurie AND our sister platform, AdPay.",
        ],
      },
      {
        type: "text",
        title: "Conceptualising",
        paragraphs: [
          "I focused on building flexibility into the foundation partly to ensure that the library continues to grow and evolve as we scale. Also because, every component needed to handle multiple states, adapt to different contexts, and work seamlessly across Mercurie and the sister platform, AdPay. This meant thinking beyond just visual consistency and aesthetics, I had to consider accessibility standards, scalability, responsiveness, and how the engineering team would implement these components.",
          "The key was starting with the constraints. By defining spacing scales, variables, colour tokens, and typography systems first, I created guardrails that made design decisions faster and implementation more predictable.",
        ],
        customHtml: `
          <div class="absolute -left-[230px] flex justify-center items-center top-[50px]">
            <h6 class="w-[210px]">I redesigned the Adpay platform primarily to solve reoccurring pain-points across  onboarding, payment, referral flows, and improving user experience for active users before moving them to the Mercurie platform. This also meant updating the UI but retaining the branding but, with new components</h6>
          </div>
        `,
      },
      {
        type: "slider",
        images: [
          { src: "/mercurie_design/button_text.png", alt: "" },
          { src: "/mercurie_design/variables.png", alt: "" },
        ],
        customHtml: `
          <div class="absolute z-50 -right-[70px] flex justify-center items-center bottom-[50px]">
            <h6 class="w-[196px]">Used variables for components like typography, colours, spacing, annotations, and more to create a system with robust naming conventions to ensure team alignment and production-ready components</h6>
          </div>
        `,
      },
      {
        type: "text",
        title: "Impact",
        paragraphs: [
          "The system has successfully become the single source of truth, fully aligning design and development. Engineers now build and iterate much faster using documented components, and I can move quickly knowing that common patterns are already solved. Because of the cross-platform requirement, the AdPay platform benefited immediately from every component built, it's a perfect flow state.",
          "The design system has also grown significantly since I first built it in Q1 2024. The addition of new platform features like wallets, virtual accounts, and compliance required specific components, pushing us from about 960 components to over 2,100. It's certainly robust! 😄",
          "More importantly, the system fundamentally shifted how the team approached product work. The long-term ROI I'd argued for at the start became genuinely tangible: faster feature development, fewer visual inconsistencies, and a scalable, dependable foundation.",
        ],
      },
      {
        type: "slider",
        images: [
          { src: "/mercurie_design/slide1.png", alt: "" },
          { src: "/mercurie_design/slide2.png", alt: "" },
          { src: "/mercurie_design/slide3.png", alt: "" },
        ],
      },
      {
        type: "text",
        title: "One System, Two Platforms",
        paragraphs: [
          "Using the new design system to update AdPay's UI required a balance. While the component library gave us consistency and efficiency, I couldn't simply copy and paste Mercurie's visual language. AdPay had existing users who'd built muscle memory around the existing interface; a dramatic visual change would create unnecessary friction and risk increasing existing drop-offs. So, I adapted the system to suit AdPay's layout patterns and colour palette to feel familiar to the users but better while solving recurring pain points across onboarding, payment, account, and referral flows.",
          "My goal for AdPay was to improve the UX for active users before eventually transitioning them to a unified platform.",
        ],
      },
      {
        type: "image",
        src: "/mercurie_design/before_after.png",
        alt: "",
        caption:
          "The sister platform requirement initially felt like added complexity, but it actually helped me focus on designing for real reusability and scalability. This led to components that are truly flexible and future-proof across different contexts, rather than being optimised for a single use case.",
      },
      {
        type: "text",
        title: "Reflections",
        paragraphs: [
          `Building a design system from scratch was a huge learning curve. It really drove home that the work is never truly "done", it just evolves alongside the product. The real skill isn't in creating perfect, finished components, it's in building a system that can change and grow without falling apart.`,
          "Starting the project by studying existing systems was absolutely the right call. I learned essential patterns I wouldn't have discovered on my own, which helped me avoid common mistakes. But what really kept me grounded was the simultaneous approach, building the design system while designing the product.",
          "Ultimately, this project proved that design systems aren't just another designer lingo; they are critical infrastructure. Just like solid code architecture, a good design system makes everything you build on top of it better, faster, and much more maintainable.",
        ],
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

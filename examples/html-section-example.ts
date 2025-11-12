import type { CaseStudy } from "../src/constants/case_studies";

const exampleCaseStudy: CaseStudy = {
  id: "example",
  slug: "example",
  title: "Example Case Study",
  description: "Example with custom HTML sections",
  coverImage: "/example.jpg",
  year: "2024",
  role: "Designer",
  sections: [
    {
      type: "text",
      title: "Text Section with Custom HTML",
      paragraphs: [
        "This is a regular text paragraph.",
        "You can add custom HTML below the paragraphs.",
      ],
      customHtml: `
        <div class="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg mt-4">
          <h3 class="font-bold mb-2">Custom HTML in Text Section</h3>
          <p>This HTML appears after the regular paragraphs!</p>
        </div>
      `,
    },
    {
      type: "image",
      src: "/example-image.jpg",
      alt: "Example Image",
      customHtml: `
        <div class="text-center mt-4">
          <p class="text-sm text-gray-600">Custom caption or additional content below the image</p>
        </div>
      `,
    },
    {
      type: "slider",
      images: [
        { src: "/slide1.jpg", alt: "Slide 1" },
        { src: "/slide2.jpg", alt: "Slide 2" },
      ],
      customHtml: `
        <div class="mt-6 p-4 border border-gray-200 rounded-lg">
          <h4 class="font-semibold mb-2">About these designs</h4>
          <p>Additional context or explanation about the slider images.</p>
        </div>
      `,
    },
    {
      type: "summary",
      role: "Product Designer",
      responsibilities: "Design, Research, Prototyping",
      deliverables: ["Web Design", "Mobile Design"],
      timeline: "Q1 2024",
      sideParagraphs: ["Additional context about the project."],
      team: [
        { name: "John", image: "/john.jpg", role: "Designer" },
      ],
      customHtml: `
        <div class="mt-6 p-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg">
          <h4 class="font-bold text-lg mb-2">Project Highlights</h4>
          <ul class="list-disc list-inside space-y-1">
            <li>Increased user engagement by 40%</li>
            <li>Reduced bounce rate by 25%</li>
            <li>Won design award</li>
          </ul>
        </div>
      `,
    },
    {
      type: "html",
      content: `
        <div class="custom-section">
          <h2>Standalone HTML Section</h2>
          <p>This is a dedicated HTML section (not attached to other section types).</p>
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded">
              <h3>Feature 1</h3>
              <p>Description</p>
            </div>
            <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded">
              <h3>Feature 2</h3>
              <p>Description</p>
            </div>
          </div>
        </div>
      `,
    },
    {
      type: "html",
      content: `
        <div class="video-container">
          <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/VIDEO_ID" 
            frameborder="0" 
            allowfullscreen>
          </iframe>
        </div>
      `,
      maxWidth: "max-w-[1200px]",
    },
  ],
  notes: [],
};

export default exampleCaseStudy;


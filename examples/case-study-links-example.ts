import type { CaseStudy } from "../src/constants/case_studies";

/**
 * Example Case Study showing different ways to add inline links to paragraphs
 *
 * This example demonstrates:
 * 1. Simple text paragraphs (no links)
 * 2. Paragraphs with single inline links
 * 3. Paragraphs with multiple inline links
 * 4. Mixed simple and rich text paragraphs in the same section
 */

const exampleCaseStudy: CaseStudy = {
  id: "example",
  slug: "example-with-links",
  title: "Example Case Study with Inline Links",
  description: "Demonstrating various ways to add links to case study paragraphs",
  coverImage: "/images/example-cover.jpg",
  client: "Example Corp",
  year: "2024",
  role: "Product Designer",
  sections: [
    {
      type: "text",
      title: "Simple Text Paragraphs",
      paragraphs: [
        // Example 1: Plain string paragraph (backward compatible)
        "This is a simple paragraph without any links. It works exactly as before.",

        // Example 2: Another plain paragraph
        "You can have multiple plain paragraphs in a row. This is useful for sections without external references.",
      ],
    },
    {
      type: "text",
      title: "Single Link in Paragraph",
      paragraphs: [
        // Example 3: Paragraph with one inline link
        [
          { type: "text", content: "We used " },
          { type: "link", text: "Figma", href: "https://figma.com" },
          { type: "text", content: " for all our design work." },
        ],

        // Example 4: Link at the beginning
        [
          { type: "link", text: "User research", href: "https://example.com/research" },
          { type: "text", content: " was the foundation of our design process." },
        ],

        // Example 5: Link at the end
        [
          { type: "text", content: "All our designs followed " },
          { type: "link", text: "WCAG 2.1 guidelines", href: "https://www.w3.org/WAI/WCAG21" },
          { type: "text", content: "." },
        ],
      ],
    },
    {
      type: "text",
      title: "Multiple Links in Paragraph",
      paragraphs: [
        // Example 6: Two links in one paragraph
        [
          { type: "text", content: "We collaborated using " },
          { type: "link", text: "Figma", href: "https://figma.com" },
          { type: "text", content: " for design and " },
          { type: "link", text: "Miro", href: "https://miro.com" },
          { type: "text", content: " for workshops." },
        ],

        // Example 7: Three links in one paragraph
        [
          { type: "text", content: "The project was influenced by " },
          { type: "link", text: "Material Design", href: "https://material.io" },
          { type: "text", content: ", " },
          { type: "link", text: "Human Interface Guidelines", href: "https://developer.apple.com/design" },
          { type: "text", content: ", and " },
          { type: "link", text: "Carbon Design System", href: "https://carbondesignsystem.com" },
          { type: "text", content: "." },
        ],
      ],
    },
    {
      type: "text",
      title: "Mixed Paragraph Types",
      paragraphs: [
        // Example 8: Start with plain text
        "This section shows how you can mix both formats in the same section.",

        // Example 9: Then use rich text with links
        [
          { type: "text", content: "Check out our " },
          { type: "link", text: "design system documentation", href: "https://example.com/docs" },
          { type: "text", content: " for more details." },
        ],

        // Example 10: Back to plain text
        "And then continue with regular paragraphs as needed.",

        // Example 11: Another rich text paragraph
        [
          { type: "text", content: "We followed " },
          { type: "link", text: "accessibility best practices", href: "https://www.a11yproject.com" },
          { type: "text", content: " throughout the project." },
        ],
      ],
    },
    {
      type: "image",
      src: "/images/example.jpg",
      alt: "Example image",
      caption: "An example image in the case study",
    },
    {
      type: "text",
      title: "Real-World Examples",
      paragraphs: [
        // Example 12: Research methodology link
        [
          { type: "text", content: "We conducted " },
          { type: "link", text: "contextual inquiry sessions", href: "https://www.usability.gov/how-to-and-tools/methods/contextual-interview.html" },
          { type: "text", content: " with 15 participants to understand their needs." },
        ],

        // Example 13: Tool/framework reference
        [
          { type: "text", content: "The prototype was built using " },
          { type: "link", text: "Framer", href: "https://www.framer.com" },
          { type: "text", content: " to demonstrate complex interactions and animations." },
        ],

        // Example 14: Standards compliance
        [
          { type: "text", content: "All color combinations met " },
          { type: "link", text: "WCAG AAA contrast ratios", href: "https://www.w3.org/WAI/WCAG2AAA-Conformance" },
          { type: "text", content: " for enhanced readability." },
        ],

        // Example 15: Academic or industry reference
        [
          { type: "text", content: "Our approach was informed by " },
          { type: "link", text: "Don Norman's principles of design", href: "https://jnd.org" },
          { type: "text", content: " and modern UX best practices." },
        ],

        // Example 16: Product/company link
        [
          { type: "text", content: "Similar to how " },
          { type: "link", text: "Airbnb improved their design system", href: "https://airbnb.design" },
          { type: "text", content: ", we focused on component reusability and consistency." },
        ],
      ],
    },
  ],
  notes: [
    "Links automatically render with the TextLink component, including an external link icon",
    "You can mix simple text and rich text paragraphs in the same section",
    "Keep text segments split at natural boundaries for better readability",
    "Always provide complete, valid URLs for links",
  ],
};

export default exampleCaseStudy;

/**
 * QUICK REFERENCE TEMPLATES
 * Copy and paste these templates when creating your own case studies
 */

// Template 1: Simple paragraph (no links)
const simpleTemplate = "Your paragraph text here.";

// Template 2: Single link in middle of paragraph
const singleLinkTemplate = [
  { type: "text", content: "Text before the " },
  { type: "link", text: "link text", href: "https://example.com" },
  { type: "text", content: " and text after." },
];

// Template 3: Multiple links in one paragraph
const multipleLinkTemplate = [
  { type: "text", content: "Text with " },
  { type: "link", text: "first link", href: "https://example1.com" },
  { type: "text", content: " and " },
  { type: "link", text: "second link", href: "https://example2.com" },
  { type: "text", content: "." },
];

// Template 4: Link at the start
const linkAtStartTemplate = [
  { type: "link", text: "Starting with a link", href: "https://example.com" },
  { type: "text", content: " followed by text." },
];

// Template 5: Link at the end
const linkAtEndTemplate = [
  { type: "text", content: "Text ending with a " },
  { type: "link", text: "link", href: "https://example.com" },
  { type: "text", content: "." },
];

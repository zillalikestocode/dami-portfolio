import type { CaseStudy } from "../src/constants/case_studies";

/**
 * Example Case Study showing how to use the slider component
 *
 * This example demonstrates:
 * 1. Adding a slider section with multiple images
 * 2. Including captions for each slide
 * 3. Combining slider sections with text and single image sections
 * 4. Best practices for slider content
 */

const exampleSliderCaseStudy: CaseStudy = {
  id: "slider-example",
  slug: "slider-example",
  title: "Product Redesign with Image Slider",
  description: "Demonstrating the use of image sliders in case studies",
  coverImage: "/images/example-cover.jpg",
  client: "Example Client",
  year: "2024",
  role: "Product Designer",
  sections: [
    {
      type: "text",
      title: "Project Overview",
      paragraphs: [
        "This case study demonstrates how to use the new slider component to showcase multiple related images in a swipeable carousel format.",
        "Sliders are perfect for showing iterations, different screens of a flow, or variations of a design.",
      ],
    },
    {
      type: "slider",
      images: [
        {
          src: "/images/design-v1.jpg",
          alt: "First iteration of the design",
          caption: "Initial design concept with basic layout",
        },
        {
          src: "/images/design-v2.jpg",
          alt: "Second iteration of the design",
          caption: "Refined design with improved visual hierarchy",
        },
        {
          src: "/images/design-v3.jpg",
          alt: "Final design version",
          caption: "Final design with polished interactions and accessibility improvements",
        },
      ],
    },
    {
      type: "text",
      title: "Design Evolution",
      paragraphs: [
        "The slider above shows the evolution of our design from initial concept to final implementation.",
        "Each iteration incorporated user feedback and refined the visual language to better align with brand guidelines.",
      ],
    },
    {
      type: "slider",
      images: [
        {
          src: "/images/mobile-home.jpg",
          alt: "Mobile home screen",
          caption: "Mobile home screen with quick actions",
        },
        {
          src: "/images/mobile-search.jpg",
          alt: "Mobile search interface",
          caption: "Search functionality optimized for mobile",
        },
        {
          src: "/images/mobile-profile.jpg",
          alt: "Mobile profile screen",
          caption: "User profile with customization options",
        },
        {
          src: "/images/mobile-settings.jpg",
          alt: "Mobile settings screen",
          caption: "Settings organized by category for easy navigation",
        },
      ],
    },
    {
      type: "text",
      title: "Mobile Experience",
      paragraphs: [
        "The mobile version required careful consideration of touch interactions and screen real estate.",
        "We prioritized the most common user actions and made them easily accessible from the home screen.",
      ],
    },
    {
      type: "image",
      src: "/images/desktop-overview.jpg",
      alt: "Desktop version overview",
      caption: "Desktop interface with expanded layout",
    },
    {
      type: "text",
      title: "Results",
      paragraphs: [
        "The redesign led to a 45% increase in user engagement and a 30% reduction in task completion time.",
        "User satisfaction scores improved from 3.8 to 4.6 out of 5.",
      ],
    },
  ],
  notes: [
    "Best practice: Use sliders for showing sequential content, design iterations, or multiple screens from the same feature.",
    "Keep slider images to 3-6 items for optimal user experience. Too many slides can be overwhelming.",
    "Always include descriptive alt text for accessibility and meaningful captions to provide context.",
    "Captions are optional but highly recommended to guide the viewer through the images.",
  ],
};

export default exampleSliderCaseStudy;

/**
 * USAGE NOTES:
 *
 * 1. SLIDER SECTION STRUCTURE:
 *    {
 *      type: "slider",
 *      images: [
 *        {
 *          src: "/path/to/image.jpg",    // Required: path to image
 *          alt: "Description",            // Required: accessibility text
 *          caption: "Caption text"        // Optional: displayed below image
 *        }
 *      ]
 *    }
 *
 * 2. WHEN TO USE SLIDERS:
 *    - Showing design iterations or versions
 *    - Displaying multiple screens from a user flow
 *    - Comparing before/after states
 *    - Showcasing different responsive breakpoints
 *    - Presenting variations of a design
 *
 * 3. SLIDER FEATURES:
 *    - Navigation arrows (left/right)
 *    - Pagination dots at the bottom
 *    - Swipe gestures on touch devices
 *    - Keyboard navigation support
 *    - Fully responsive
 *
 * 4. ACCESSIBILITY:
 *    - Always provide alt text for each image
 *    - Use descriptive captions to provide context
 *    - The component includes proper ARIA labels
 *
 * 5. COMBINING WITH OTHER SECTION TYPES:
 *    You can mix slider sections with text and single image sections:
 *
 *    sections: [
 *      { type: "text", title: "Introduction", paragraphs: [...] },
 *      { type: "slider", images: [...] },
 *      { type: "text", title: "Analysis", paragraphs: [...] },
 *      { type: "image", src: "...", alt: "...", caption: "..." },
 *      { type: "slider", images: [...] }
 *    ]
 */

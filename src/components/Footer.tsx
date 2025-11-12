import Button from "./ui/button";

export default function Footer() {
  return (
    <footer className="flex sm:flex-row flex-col justify-between mt-12 gap-3 sm:items-center">
      <div>
        <p className="font-normal">
          © 2025 Dami Ojetunji. All Rights Reserved
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          href="https://www.linkedin.com/in/damiojetunji/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
        <Button
          href="http://x.com/damiojetunji"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Button>
        <Button
          href="http://instagram.com/damiojetunji"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Button>
        <Button
          href="https://layers.to/ojetunji"
          target="_blank"
          rel="noopener noreferrer"
        >
          Layers
        </Button>
        <Button
          href="https://dribbble.com/ojetunji"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dribbble
        </Button>
      </div>
    </footer>
  );
}

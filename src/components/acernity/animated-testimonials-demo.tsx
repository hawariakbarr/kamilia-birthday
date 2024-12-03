import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
      {
        quote:
          "This portfolio feels like a masterclass in understated brilliance. Smooth, effortless, and just enough flair to leave you wanting more.",
        name: "Kamilia",
        designation: "Aesthetics Enthusiast",
        src: "/mila/mila-1.jpg",
      },
      {
        quote:
          "Some designs catch your eye; this one holds it hostage. The transitions are so polished, I might have mistaken them for your natural grace.",
        name: "Kamilia",
        designation: "Detail Observer",
        src: "/mila/mila-2.jpg",
      },
      {
        quote:
          "Elegance in design is rare, but here, it’s effortless. It feels like scrolling through a reflection of someone who knows their worth.",
        name: "Kamilia",
        designation: "Creative Critic",
        src: "/mila/mila-3.jpg",
      },
      {
        quote:
          "This portfolio is proof that subtlety is an art form. It’s as if every element decided to dress up for the occasion—much like you do effortlessly.",
        name: "Kamilia",
        designation: "Style Connoisseur",
        src: "/mila/mila-4.jpg",
      },
      {
        quote:
          "Rarely do designs feel personal, but this one does. It’s inviting, timeless, and leaves you wondering if perfection was the intention all along.",
        name: "Kamilia",
        designation: "Thoughtful Observer",
        src: "/mila/mila-5.jpg",
      },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
  }
  
import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "May your day be filled with joy and laughter",
      src: "/mila/mila-12.jpg",
    },
    {
      title: "Wishing you endless happiness and success", 
      src: "/mila/mila-7.jpg",
    },
    {
      title: "May all your dreams come true",
      src: "/mila/mila-8.jpg",
    },
    {
      title: "Here's to another amazing year ahead",
      src: "/mila/mila-9.jpg",
    },
    {
      title: "May your life be as beautiful as you are",
      src: "/mila/mila-10.jpg",
    },
    {
      title: "Celebrating you on your special day",
      src: "/mila/mila-11.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
  
}

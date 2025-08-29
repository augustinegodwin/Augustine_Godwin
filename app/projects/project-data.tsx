export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Skiilink Ventures",
    year: 2024,
    description: "Ecommerce platform for buying security & solar gadgets",
    url: "https://skiilink-store.vercel.app",
  },
  {
    title: "Quotely",
    year: 2023,
    description: "Socal media app for sharing quotes",
    url: "https://quo-tely.vercel.app",
  },
];

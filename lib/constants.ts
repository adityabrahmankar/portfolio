import ProjectCard from "@/components/ProjectCard";
import CryptText from "@/components/snippets/crypt-text";
import {
  Code,
  FileText,
  GithubIcon,
  Home,
  InstagramIcon,
  Laptop,
  LinkedinIcon,
  Newspaper,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export const MenuItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: Laptop,
  },
  {
    title: "About",
    href: "/about",
    icon: FileText,
  },
  {
    title: "Snippets",
    href: "/snippets",
    icon: Code,
  },
];

export const projects = [
  {
    title: "Posttrig AI",
    description:
      "The AI Powered Linkedin scheduling app let's you seamlessly create and schedule posts up to 1 month in advance. Stay organized with a visual calendar to manage your content. Unleash your creativity with AI-driven carousels. Elevate your LinkedIn presence effortlessly!",
    imageURL: "/posttrig.png",
    // href: "https://www.quizoai.com",
    tech: [
      "Nextjs 14",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Prisma ORM",
      "Open AI",
      "Supabase",
      "Framer Motion",
      "Trigger Dev",
    ],
  },
  {
    title: "Quizo AI",
    description:
      "The fastest AI Powered online quizing platform Quizo helps creating sharing and taking quizzes. Whether you want to have fun learn or grow your business.Quizo has a plan for you compare our plans and features and start your free trial today",
    imageURL: "/quizo.png",
    href: "https://www.quizoai.com",
    tech: [
      "Nextjs 13",
      "React 18",
      "Typescript",
      "Tailwind CSS",
      "Prisma ORM",
      "Open AI Functions",
      "Supabase",
      "Framer Motion",
    ],
  },
  {
    title: "Studybuddy AI",
    description:
      "The fastest AI Powered online studying platform for CBSE students",
    imageURL: "/studdybuddy.png",
    href: "https://studybuddy-gg.vercel.app",
    tech: [
      "Nextjs 13",
      "Typescript",
      "React",
      "Prisma ORM",
      "Vercel AI sdk",
      "Supabase",
      "Langchain",
      "OpenAI Embeddings",
    ],
  },
  {
    title: "Lawbot AI",
    description: "The fastest AI Powered legal answers",
    imageURL: "/lawbot.png",
    // href: "https://www.quizoai.com",
    tech: [
      "HTML ",
      "JS",
      "CSS",
      "Python",
      "Fast API",
      "Chroma VectorDB",
      "Replit",
      "OpenAI Embeddings",
    ],
  },
  {
    title: "AICreators Bot",
    description:
      "AI Creators Bot is a WhatsApp chatbot that uses ChatGPT to provide personalized responses to users' queries. It can assist users in a variety of tasks, including email writing, recipe generation, yoga teaching, and storytelling. It is an easy and convenient way to stay informed and entertained while staying connected through WhatsApp.",
    imageURL: "/bot.png",
    href: "https://aicreators.framer.website/",
    tech: ["OpenAI API", "WhatsApp", "No Code Tool"],
  },
  {
    title: "AICreators Directory",
    description:
      "Largest AI tools directory where you'll find comprehensive listings of the best AI tools for all your needs. We have categorized AI tools by industry, type, tool purpose and more to make it easier for you to find the right AI tools for your organization.",
    imageURL: "/directory.png",
    href: "https://www.aicreators.co/",
    tech: ["Softr", "Airtable"],
  },
  {
    title: "ResourceHunt",
    description:
      "ResouceHunt is the ultimate destination for tech enthusiasts looking to stay up to date with the latest insights from the most influential figures in technology. Our platform showcases curated videos from the world's top tech personalites in the industry, including Elon Musk, Peter Thiel, Sam Altman and more.",
    imageURL: "/resourcehunt.png",
    href: "https://resourcehunt.softr.app/",
    tech: ["Softr", "Airtable"],
  },
];

export const Socials = [
  {
    name: "Twitter",
    href: "https://twitter.com/aaditya_ai",
    icon: TwitterIcon,
  },
  {
    name: "Github",
    href: "https://github.com/adityabrahmankar",
    icon: GithubIcon,
  },
  {
    name: "Replit",
    href: "https://replit.com/@aditya0897",
    icon: Laptop,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aaditya.ai/",
    icon: InstagramIcon,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@aaditya_ai",
    icon: YoutubeIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adityabrahmankar9/",
    icon: LinkedinIcon,
  },
  {
    name: "AI Newsletter",
    href: "https://latestinai.beehiiv.com/",
    icon: Newspaper,
  },
];

export const snippets = [
  {
    title: "Crypt Text",
    description: "A component rendering cryptographic text",
    component: CryptText,
  },

];

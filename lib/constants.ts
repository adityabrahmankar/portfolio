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
    imageURL: "https://utfs.io/f/244499b5-10b0-4dde-95dd-c8dea55b3c83-cj9z24.png",
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
    imageURL: "https://utfs.io/f/edcc52eb-e721-4aae-9403-27318a24ac2b-1s9pdm.png",
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
    imageURL: "https://utfs.io/f/1630f982-3b2e-4f1c-b81e-b6194af29f38-t7icv5.png",
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
    imageURL: "https://utfs.io/f/29d2537d-e12e-47b4-9149-273935326830-icqqzf.png",
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
    imageURL: "https://utfs.io/f/d55aa826-5af8-4df8-8f4e-6113144e63b8-23ev.png",
    href: "https://aicreators.framer.website/",
    tech: ["OpenAI API", "WhatsApp", "No Code Tool"],
  },
  {
    title: "AICreators Directory",
    description:
      "Largest AI tools directory where you'll find comprehensive listings of the best AI tools for all your needs. We have categorized AI tools by industry, type, tool purpose and more to make it easier for you to find the right AI tools for your organization.",
    imageURL: "https://utfs.io/f/8f0407a0-3dac-46fa-a55b-349abd5db9f4-fx3jbn.png",
    href: "https://www.aicreators.co/",
    tech: ["Softr", "Airtable"],
  },
  {
    title: "ResourceHunt",
    description:
      "ResouceHunt is the ultimate destination for tech enthusiasts looking to stay up to date with the latest insights from the most influential figures in technology. Our platform showcases curated videos from the world's top tech personalites in the industry, including Elon Musk, Peter Thiel, Sam Altman and more.",
    imageURL: "https://utfs.io/f/8edce2bb-a834-439b-9880-c9d5c00cfb85-6chkrj.png",
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

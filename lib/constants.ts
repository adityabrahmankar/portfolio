import {
  GithubIcon,
  InstagramIcon,
  Laptop,
  LinkedinIcon,
  Newspaper,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { PiFileText, PiHouse, PiLaptop, PiLink, PiPen } from "react-icons/pi";

export const MenuItems = [
  {
    title: "Home",
    href: "/",
    icon: PiHouse,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: PiLaptop,
  },
  {
    title: "About",
    href: "/about",
    icon: PiFileText,
  },
  //   {
  //     title: "Contact",
  //     href: "/contact",
  //     icon: PiLink,
  //   },
];

export const projects = [
  {
    title: "Posttrig AI",
    description:
      "The AI Powered Linkedin scheduling app.Seamlessly create and schedule posts up to 1 month in advance. Stay organized with a visual calendar to manage your content. Unleash your creativity with AI-driven carousels. Elevate your LinkedIn presence effortlessly!",
    imageURL: "/posttrig.png",
    // href: "https://www.quizoai.com",
  },
  {
    title: "Quizo AI",
    description:
      "The fastest AI Powered online quizing platform Quizo helps creating sharing and taking quizzes. Whether you want to have fun learn or grow your business.Quizo has a plan for you compare our plans and features and start your free trial today",
    imageURL: "/quizo.png",
    href: "https://www.quizoai.com",
  },
  {
    title: "Studybuddy AI",
    description:
      "The fastest AI Powered online studying platform for CBSE students",
    imageURL: "/studdybuddy.png",
    href: "https://studybuddy-gg.vercel.app",
  },
  {
    title: "Lawbot AI",
    description: "The fastest AI Powered online quizing platform",
    // imageURL: "/quizo.png",
    href: "https://www.quizoai.com",
  },
  {
    title: "AI Creators Bot",
    description:
      "AI Creators Bot is a WhatsApp chatbot that uses ChatGPT to provide personalized responses to users' queries. It can assist users in a variety of tasks, including email writing, recipe generation, yoga teaching, and storytelling. It is an easy and convenient way to stay informed and entertained while staying connected through WhatsApp.",
    imageURL: "/bot.png",
    href: "https://aicreators.framer.website/",
  },
  {
    title: "AI Creators Directory",
    description:
      "Welcome to the world's largest AI tools directory. Here you'll find comprehensive listings of the best AI tools for all your needs. We have categorized AI tools by industry, type, tool purpose and more to make it easier for you to find the right AI tools for your organization.",
    imageURL: "/directory.png",
    href: "https://www.aicreators.co/",
  },
  {
    title: "Resource Hunt",
    description:
      "ResouceHunt is the ultimate destination for tech enthusiasts looking to stay up to date with the latest insights from the most influential figures in technology. Our platform showcases curated videos from the world's top tech personalites in the industry, including Elon Musk, Peter Thiel, Sam Altman and more.",
    imageURL: "/resourcehunt.png",
    href: "https://resourcehunt.softr.app/",
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

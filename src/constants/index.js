import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";

export const HERO_CONTENT = `My name is Jadin Hutchinson.  

I enjoy making all sorts of front-end UI/UX websites and applications that involve creating a GUI for a great user experience.  

I have significant overall programming experience in Python, Java, C++, JavaScript, TypeScript, CSS, Tailwind CSS, HTML, LaTeX, and more.  

My goal is to become a serial entrepreneur, owning my own websites and businesses while making an impact through them in the world of technology.`;

export const ABOUT_TEXT = `Born in Bridgeport, CT, and raised in Atlanta, GA, my journey has been shaped by the ongoing support of my family, and a mix of creativity and technology. 

My passions span from music production, fashion and gaming—each playing a role in sparking my deep interest in technology. 

What started as a fascination with how things work evolved into a drive to build, create, and innovate. 

Whether it’s coding dynamic applications, producing music, or exploring new creative outlets, I’m always seeking ways to push boundaries and bring ideas to life.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Teachers Assistant (T.A.) At North Carolina A&T",
    company: "NCAT",
    description: `Helped to deepen students' overall understanding in programming languages such as Python and Java.`,
    technologies: ["Python", "Java"],
  },
  {
    year: "2025 - Present",
    role: "Freelance Web Developer",
    company: "NCAT",
    description: `Develop websites for efficient user experiences, focusing on design, frontend and backend functionality.`,
    technologies: ["JavaScript", "TypeScript", "CSS", "Tailwind CSS", "HTML"],
  },
];

export const PROJECTS = [
  {
    title: "Retro J-Chat",
    image: project7,
    description:
      "Developed and designed an 80s retro themed, open-chat web-app where users are able to use Gmail to sign-in and sign-out using Google API and Firebase Authentication, along with storing all documents in Firebase.",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Node.js", "Google API", "Firebase", "Netlify"],
    link: "https://retrojchat.netlify.app/",
    linkTitle: "- Check out 'Retro J-Chat' Here\n"
  },
  {
    title: "Jai",
    image: project9,
    description:
      "Made an AI model based off of Google's Gemini AI by utilizing Gemini's API to call to an open source model.",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Node.js", "Gemini API", "Firebase", "Netlify"],
    link: "https://jai-ai-model.netlify.app/",
    linkTitle: "- Check out 'Jai' Here\n"
  },
  {
    title: "Jcodes Backgrounds",
    image: project8,
    description:
      "Designed and developed a fun, creative website for UI and web developers looking to integrate backgrounds into their own websites. This project was heavily made with Tailwind CSS and was also made into an installable npm library.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML", "Node.js", "npm", "Vercel"],
    link: "https://jcodesbackgrounds.vercel.app/",
    linkTitle: "- Check out 'Jcodes Backgrounds' Here\n"
  },
  {
    title: "ChevConnect",
    image: project1,
    description:
      "Tasked with developing a website for Chevron to utilize AI in scanning resume and/or linkedin profile info, me and my team came up with our solution 'ChevConnect' that took 1st place in NCAT's Hackathon 8.0 Pt.2. To use the website below, simply enter any applicable email and password of your choosing, then enjoy the experience",
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML", "Node.js", "OPENAI/APIKEY", "Java", "Netlify"],
    link: "https://chevconnect.netlify.app/signin",
    linkTitle: "- Check out 'ChevConnect' Here\n"
  },
  {
    title: "Visa Rewards Plus",
    image: project6,
    description:
      "Taking 1st place at a Visa sponsored case challenge event, we manipulated a given dataset containing sample customer information, utilizing the python pandas library, and integrated it with a website that also utilizes AI to make reward and discount suggestions tailored to a specific user based on their spending habits.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "HTML", "Node.js", "OPENAI/APIKEY", "Python", "Pandas", "Netlify"],
    link: "https://visarewardplus.netlify.app/",
    linkTitle: "- Check out 'Visa Rewards Plus' Here\n"
  },
  {
    title: "Budget Management App GUI",
    image: project2,
    description:
      "An application for managing one's budget and keeping track of their expenses, with features such as task adding a transaction, adding client info, and being able to report a purchase.",
    technologies: ["Java", "IntelliJ", "JavaFX"],
  },
  {
    title: "NetApp Data Center Optimization",
    image: project3,
    description:
      "Participating in NCAT's Hackathon 8.0 Pt.1, my team and I developed a Data Center Optimization Application for NetApp to deliver cooling to different sectors of databse to prevent overheating or under optimization.",
    technologies: ["Python", "PyCharm", "CustomTkinter"],
  },
  {
    title: "Spoti.py App",
    image: project4,
    description:
      "This application utilizes Spotify's API to make calls to their database and retrieve information whenever a user searches for an Author, Album, Single, and so on. Another included feature is also Spotify's 'for Developers' website that will allow a user to create their own CLIENT ID and KEY via Spotify for Developers (S.f.D.) and use that to make more in-depth callouts to Spotify's database using their API through the web.",
    technologies: ["Python", "PyCharm", "Spoti.py", "Spotify API"],
  },
  {
    title: "Simple Web Searcher",
    image: project5,
    description: "Created this Python program using the Wiki API to retrieve articles by searching for specific keywords, providing users with relevant content based on their input.",
    technologies: ["Python", "PyCharm", "Wiki API"],
  },
];

export const CONTACT = {
  address: "n/a",
  phoneNo: "n/a",
  email: "jadin.hutchinson.future@gmail.com",
};

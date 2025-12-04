import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";
import project10 from "../assets/projects/project-10.png";
import project11 from "../assets/projects/project-11.png";

import badge_1 from "../assets/certs_badges/impl_bdg.jpg";
import cert_1 from "../assets/certs_badges/cdl_jh.png";
import cert_2 from "../assets/certs_badges/j_oracle_1.jpg"
import cert_3 from "../assets/certs_badges/jh_nvidia_coursera.jpeg"

export const HERO_CONTENT = `My name is Jadin Hutchinson.  

I enjoy making all sorts of front-end UI/UX websites and applications that involve creating a GUI for a great user experience.  

I have significant overall programming experience in JavaScript, Ruby, Python, Rust and more.  

My goal is to become a serial entrepreneur, owning my own websites and businesses while making an impact through them in the world of technology.`;

export const ABOUT_TEXT = `Born in Bridgeport, CT, and raised in Atlanta, GA, my journey has been a mix of creativity and technology. 

My passions spanning from music production, fashion, and gaming—each playing a role in sparking my interest in the endless world of technology. 

What started as a question from 9-year-old me, "What makes my character Jump when I press 'X' on the controller?" has evolved into a drive to build, create, and innovate. 

Whether it’s coding dynamic applications, producing music, or exploring new creative outlets, I’m always seeking ways to push boundaries and bring ideas to life.`;

export const CERTS_BADGES = [
  {
    title: "Jadin Hutchinson CDL Cert",
    image: cert_1,
  },
  {
    title: "Implement Load Balancing on Compute Engine Badge",
    image: badge_1,
  },
  {
    title: "Oracle Autonomous Database Cloud 2025 Certified Professional",
    image: cert_2,
  },
  {
    title: "(NCA-GENL): NVIDIA-Certified Generative AI LLMs",
    image: cert_3,
  },
];

export const EXPERIENCES = [
  {
    year: "Dec. 2025 - Present",
    role: "Google Developer Group (GDG) Founder & Lead Organizer at NCA&T",
    company: "Google",
    description: "Founded and charted the Google Developer Group on North Carolina Agricultural & Technical State University, to spread more awareness of technologies within Google.",
    technologies: ["Google Cloud", "Firebase", "Flutter", "Android", "Google Assistant", "Gemini", "TensorFlow", "& More"]
  },
  {
    year: "May 2025 - Aug. 2025",
    role: "Google Cloud Career Jumpstart Cohort",
    company: "Google",
    description: "Took involved participation and had real world experience in learning about Google Cloud resources, developing skills and knowledge in cloud infrastructure, as well developing in GCP.",
    technologies: ["Google Cloud"]
  },
  {
    year: "2025 - Present",
    role: "CodePath Tech Fellow (T.F.)",
    company: "CodePath",
    description: "Stepped in as a Tech Fellow with CodePath and helped students to further their programming skills.",
    technologies: ["Python", "ASD (Algorithms and Systems Design with GenAi)"],
  },
  {
    year: "2024 - Present",
    role: "Teachers Assistant (T.A.) At North Carolina A&T",
    company: "NCAT",
    description: "Helped to deepen students' overall understanding in programming languages such as Python and Java.",
    technologies: ["Python", "Java"],
  },
  {
    year: "2025 - Present",
    role: "Freelance Web Developer",
    company: "NCAT",
    description: "Develop websites for efficient user experiences, focusing on design, frontend and backend functionality.",
    technologies: ["JavaScript", "TypeScript", "CSS", "Tailwind CSS", "HTML"],
  },
];

export const PROJECTS = [
  {
    title: "Gate City Gigs",
    image: project11,
    description:
      "Built an AI powered application that connects local community citizens to paid and community service hour gigs in their area.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML", "Node.js", "Google API", "AWS", "AWS Bedrock", "Shell", "MapBox"],
    link: "https://gate-city-gigs.vercel.app/",
    linkTitle: "- Check out 'Gate City Gigs' Here\n"
  },
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
    title: "Jynx",
    image: project10,
    description: "Jynx is a linktree-alike web application designed to allow users to create an account and design their own Jynx with their own personal links and design it however one sees fit.",
    technologies: ["Ruby", "Ruby on Rails", "HTML", "CSS", "Docker"],
    link: "https://youtu.be/5dkDputFysU",
    linkTitle: "- Check out 'Jynx' Here\n"
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
    title: "NetApp Data Center Optimization",
    image: project3,
    description:
      "Participating in NCAT's Hackathon 8.0 Pt.1, my team and I developed a Data Center Optimization Application for NetApp to deliver cooling to different sectors of databse to prevent overheating or under optimization.",
    technologies: ["Python", "PyCharm", "CustomTkinter"],
    link: "https://github.com/jcodes101/DataCenterOptimizationGUIForNetApp",
    linkTitle: "- Check out Source Code Here\n"
  },
  {
    title: "Spoti.py App",
    image: project4,
    description:
      "This application utilizes Spotify's API to make calls to their database and retrieve information whenever a user searches for an Author, Album, Single, and so on. Another included feature is also Spotify's 'for Developers' website that will allow a user to create their own CLIENT ID and KEY via Spotify for Developers (S.f.D.) and use that to make more in-depth callouts to Spotify's database using their API through the web.",
    technologies: ["Python", "PyCharm", "Spoti.py", "Spotify API"],
    link: "https://github.com/jcodes101/SonicHubSpotifyApp",
    linkTitle: "- Check out Source Code Here\n"
  },
  {
    title: "Simple Web Searcher",
    image: project5,
    description: "Created this Python program using the Wiki API to retrieve articles by searching for specific keywords, providing users with relevant content based on their input.",
    technologies: ["Python", "PyCharm", "Wiki API"],
    link: "https://github.com/jcodes101/SimplifiedSearchEngine",
    linkTitle: "- Check out Source Code Here\n"
  },
];

export const CONTACT = {
  address: "n/a",
  phoneNo: "n/a",
  email: "jadin.hutchinson.future@gmail.com",
};

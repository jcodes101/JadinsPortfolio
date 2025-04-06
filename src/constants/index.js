import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `My name is Jadin Hutchinson.  

I enjoy making all sorts of front-end UI/UX websites and applications that involve creating a GUI for a great user experience.  

I have significant overall programming experience in Python, Java, C++, JavaScript, TypeScript, CSS, Tailwind CSS, HTML, LaTeX, and more.  

My goal is to become a serial entrepreneur, owning my own websites and businesses while making an impact through them in the world of technology.`;

export const ABOUT_TEXT = `Born in Bridgeport, CT, and raised in Atlanta, GA, my journey has been shaped by the ongoing support of my family, and a mix of creativity and technology. 

My passions span from music production, fashion, and gaming—each playing a role in sparking my deep interest in technology. 

What started as a fascination with how things work evolved into a drive to build, create, and innovate. 

Whether it’s coding dynamic applications, producing music, or exploring new creative outlets, I’m always seeking ways to push boundaries and bring ideas to life.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "T.A. At North Carolina A&T",
    company: "NCAT",
    description: `Helped to deepen students' overall understanding in programming languages such as Python and Java.`,
    technologies: ["Python", "Java"],
  },
];

export const PROJECTS = [
  {
    title: "ChevConnect",
    image: project1,
    description:
      "Tasked with developing a website to utilize AI in scanning resume and/or linkedin profile info, me and my team came up with our solution 'ChevConnect' that took 1st place in NCAT's Hackathon 8.0 Pt.2.",
    technologies: ["React", "Javascript", "TailwindCSS", "HTML", "Node.js", "OPENAI/APIKEY", "Java"],
    link: "https://chevconnect.netlify.app/signin",
    linkTitle: "- ᴄʜᴇᴄᴋ ᴏᴜᴛ ᴄʜᴇᴠᴄᴏɴɴᴇᴄᴛ ʜᴇʀᴇ\n"
  },
  {
    title: "Budget Management App GUI",
    image: project2,
    description:
      "An application for managing one's budget and keeping track of their expenses, with features such as task adding a transaction, adding client info, and being able to report a purchase.",
    technologies: ["Java", "JavaFX"],
  },
  {
    title: "NetApp - DCO",
    image: project3,
    description:
      "Participating in NCAT's Hackathon 8.0 Pt.1, me and my team developed a Data Center Optimization Application to deliver cooling to different sectors of databse to prevent overheating or under optimization.",
    technologies: ["Python", "CustomTkinter"],
  },
  {
    title: "Spoti.py App",
    image: project4,
    description:
      "This application utilizes Spotify's API to reach out to their database and retrive information whenever a user searches for an Author, Album, Sngle, and so on. Another included feature is also Spotify's 'for Developers' website that will allow a user to create their own CLIENT ID and KEY via SfD and use that to more in depth callout to Spotify's database using their API on the web.",
    technologies: ["Python", "Spoti.py", "API Development"],
  },
  {
    title: "Simple Web Searcher",
    image: project5,
    description: "This project uses WIKI API to make calls to their database and retrive articles searching for specifc keywords that may be contained in them to give the user an article based off of their input.",
    technologies: ["Python", "API Development"],
  },
];

export const CONTACT = {
  address: "n/a",
  phoneNo: "n/a",
  email: "jadin.hutchinson.future@gmail.com",
};

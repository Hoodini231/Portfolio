import { t } from "maath/dist/misc-19a3ec46.esm";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    aiSg1,
    dataAnalyst,
    sqlHR,
    nus,
    sji,
    turtTech,
    turtogotchi,
    hack4good,
    TBS,
    run,
    script,
    firebase,
    python,
    java,
    sql

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Tech Entusiast",
      icon: creator,
    },
  ];
  const certificates = [
    {
      name: "Data Analyst Associate",
      giver: "DataCamp",
      icon: dataAnalyst,
    }, 
    {
      name: "SQL (Advanced)",
      giver: "HackerRank",
      icon: sqlHR,
    },
    {
      name: "AI Level 1",
      giver: "AI Singaore",
      icon: aiSg1,
    }
  ]
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "sql",
      icon: sql
    },
    {
      name: "python",
      icon: python
    }, 
    {
      name: "java",
      icon: java
    },
    {
      name: "firebase",
      icon: firebase
    }
  ];
  
  const experiences = [
    {
      title: "Co-Creator and Full Stack Developer",
      company_name: "TurtTech",
      icon: turtTech,
      iconBg: "#383E56",
      date: "Aug 2024 - Present",
      points: [
        "Recieved the SPCA Animal Advocacy Award Winner 2024 with $9000 in funding.",
        "Award reciepent in the DSTA's Brainhack 2024.",
        "Co-created a mobile game which aims to promote education on conservation efforts and links with the local Singaporean turtle musesum to assist them financially.",
        "Leading a team of 4 developers to design backend and technologies.",
      ],
    },
    {
      title: "CS Teaching Assistant",
      company_name: "National University of Singapore",
      icon: nus,
      iconBg: "#383E56",
      date: "Aug 2024 - Present",
      points: [
        "CS1101S Programming Methodology",
        "Conducting weekly 2 hour tutorials for a class of 8 students.",
        "Maintain close mentoring relations to provide additional support to students.",
        "Grading weekly coding assignments and providing constructive feedback to students.",
      ],
    },
    {
      title: "Year 2 Computer Science Student",
      company_name: "National University of Singapore",
      icon: nus,
      iconBg: "#E6DEDD",
      date: "Aug 2024 - Present",
      points: [
        "First Class Honours with 4.6 GPA",
        "Computing RAG Project director, resulting in computing's best ever performance in 2024.",
        "Key courses: CS2030S Programming Methodology 2, CS2040S Data Structures and Algorithms, CS2102 Database Systems, CS2103T Software Engineering.",
      ],
    },
    {
      title: "SJII Alumni",
      company_name: "St Joseph's Institution International",
      icon: sji,
      iconBg: "#383E56",
      date: "Jan 2015 - Jan 2020",
      points: [
        "Graduated with nominations for the Computing award and the Foo Chai Kai best scout award.",
        "Vice-chairman and treasuerer of the school's scout group.",
        "Initiated and took charge of mentorship program for juniors to help them with their studies.",
        "Wrote 4000 research paper on analysing heap data structures",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Turtogotchi",
      description:
        "Awarded Runner's up to People Choice Award out of 150 teams at DSTA Brainhack. This project aims to promote education on conservation efforts and links with the local Singaporean turtle musesum to assist them financially.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "git",
          color: "pink-text-gradient",
        },
      ],
      image: turtogotchi,
      source_code_link: "https://github.com/",
    },
    {
      name: "Big Heart Volunteering",
      description:
        "Web application that aims to revamp the volunteer experience in Singapore for NPO's by providing a platform for volunteers to find opportunities and feel welcomed and for NPO's to easily manage events and volunteers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: hack4good,
      source_code_link: "https://github.com/kohkakohla/Big-Heart-Fullstack-Web-Application",
    },
    {
      name: "Runner's High",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: run,
      source_code_link: "https://github.com/Hoodini231/RunnersHigh",
    },
    {
      name: "Train Management System",
      description:
        "Developed for managing train routes and booking train seats in real time. This project was inspired by my curosity in how bullet train system worked in Japan.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "tkinter",
          color: "pink-text-gradient",
        },
      ],
      image: TBS,
      source_code_link: "https://github.com/Hoodini231/FullStack-Train-Management-and-Booking-",
    },
    {
      name: "SAF Automation Script",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "selenium",
          color: "green-text-gradient",
        },
        {
          name: "twillio",
          color: "pink-text-gradient",
        },
      ],
      image: script,
      source_code_link: "https://github.com/Hoodini231/Ambulance-Daily-Auto-Text-report-generator",
    },
    {
      name: "Forex Monitor App",
      description:
        "A desktop app which displays the current exchange rates of various currencies and shows the user if it has gone up or down via webscraping.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "beautifulsoup4",
          color: "green-text-gradient",
        },
        {
          name: "tkinter",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Hoodini231/Currency-Forex--Desktop-Application",
    },
  ];
  

  const links = [
    {
      name: "Home",
      hash: "home",
    },
    {
      name: "About",
      hash: "about",
    },
    {
      name: "Projects",
      hash: "projects",
    },
    {
      name: "Skills",
      hash: "skills",
    },
    {
      name: "Experience",
      hash: "experience",
    },
    {
      name: "Contact",
      hash: "contact",
    },
  ] 
  
  export { services, technologies, experiences, testimonials, projects, certificates };
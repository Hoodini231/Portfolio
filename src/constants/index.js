import {
    ticTacToes,
    cardDex,
    cpfb,
    javascript,
    reactjs,
    nodejs,
    mongodb,
    aiSg1,
    dataAnalyst,
    sqlHR,
    nus,
    sji,
    lirvana,
    turtogotchi,
    hack4good,
    TBS,
    run,
    script,
    firebase,
    python,
    java,
    sql,
    nextJs,
    aws,
    gcp,
    graphQL,
    typescript,
    angular,
    spring,
    docker,
    Stanford_logo


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
      type: "language",
      icon: javascript,
    },
    {
      name: "React JS",
      type: "frontend",
      icon: reactjs,
    },
    {
      name: "Next JS",
      type: "frontend"
    },
    {
      name: "Node JS",
      type: "backend"
    },
    {
      name: "MongoDB",
      type: "backend",
      icon: mongodb,
    },
    {
      name: "SQL",
      type: "language",
      icon: sql
    },
    {
      name: "Python",
      type: "language",
      icon: python
    }, 
    {
      name: "Java",
      type: "language",
      icon: java
    },
    {
      name: "AWS",
      type: "backend",
      icon: aws
    },
    {
      name: "GCP",
      type: "backend",
      icon: gcp
    },
    {
      name: "GraphQL",
      type: "backend"
    },
    {
      name: "Angular JS",
      type: "frontend"
    },
    {
      name: "Java Spring",
      type: "backend"
    },
    {
      name: "TypeScript",
      type: "language",
      icon: typescript
    },
    {
      name: "Docker",
      type: "backend",
      icon: docker
    }
  ];
  
  const experiences = [
    {
      title: "[Incoming] Software Engineer Intern",
      company_name: "Lirvana Labs",
      location: "Palo Alto, USA",
      icon: lirvana,
      iconBg: "#383E56",
      date: "Aug 2025 - Jul 2026",
      points: [
        "NOC Silicon Valley internship",
        "Will be developing web applications using Angular JS, Java Spring boot, GCP and GraphQL",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Central Provident Fund Board",
      location: "Singapore",
      icon: cpfb,
      iconBg: "#E6DEDD",
      date: "Jan 2025 - Jul 2025",
      points: [
        "Engineered and optimized Java batch jobs using Spring Batch, JCL, and SQL, processing millions of records annually on IBM DB2 Mainframe.",
        "Resolved an average of 3-4 production issues weekly.",
        "Enhanced testing and code reliability maintaining 95%+ test coverage.",
        "Conducted data patching and root cause analysis reducing data inconsistencies."
      ],
    },
    {
      title: "CS Teaching Assistant",
      company_name: "National University of Singapore",
      location: "Singapore",
      icon: nus,
      iconBg: "#383E56",
      date: "Aug 2024 - Dec 2024",
      points: [
        "CS1101S Programming Methodology",
        "Conducting weekly 2 hour tutorials for a class of 8 students.",
        "Maintain close mentoring relations to provide additional support to students.",
        "Grading weekly coding assignments and providing constructive feedback to students.",
      ],
    }
  ];

  const education = [
    {
      title: "Penultimate Computer Science Student",
      company_name: "National University of Singapore",
      icon: nus,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      points: [
        "Second Upper Class Honours with 4.3 GPA",
        "Computing RAG Project director, resulting in computing's best ever performance in 2024 achieving Silver.",
        "Key courses: CS2030S Programming Methodology 2, CS2040S Data Structures and Algorithms, CS2102 Database Systems, CS2103T Software Engineering.",
      ],
    },
    {
      title: "Stanford MSE | NOC Silicon Valley",
      company_name: "Stanfor University / National University of Singapore",
      icon: Stanford_logo,
      iconBg: "#E6DEDD",
      date: "Aug 2025 - Present",
      points: [
        "NUS exclusive program to send top students to Silicon Valley for 1 year to engage in MSE courses at Stanford.",
        "Work-study program with start-up companies to install entrepreneurship expereicences in students ",
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
        "I am confident that Shaun will bring the same level of creativity, ownership and excellence to any future endevours.",
      name: "Chee Keong LIM",
      designation: "Senior Deputy Director",
      company: "Central Provident Fund Board",
      image: cpfb,
    }
  ];
  
  const projects = [
    {
      name:"[In-Progress] CardeDex",
      description: "A centralized Pokemon TCG platform to make collecting, purchasing and enjoying pokemon much easier. Incorporating real-time price's and price analytics for purchase desisions.",
      tags:[
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Python FASTAPI",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        }
      ],
      image: cardDex,
      source_code_link: "https://github.com/Hoodini231/cardex"
    },
    {
      name:"Accessible Tic-Tack-Toe",
      description: "A web muliplayer game that aims to make the game of tic-tack-toe more accessable to impaired individuals.",
      tags:[
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "webSockets",
          color: "pink-text-gradient",
        }
      ],
      image: ticTacToes,
      source_code_link: "https://github.com/Hoodini231/tictactoes"
    },
    {
      name: "Turtogotchi",
      description:
        "Awarded SPCA Animal Advocacy Grant, Awarded recipent of 150 teams at DSTA Brainhack. This project aims to promote education on conservation efforts and links with the local Singaporean turtle musesum to assist them financially.",
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
      source_code_link: "https://github.com/Hoodini231/Turtogatchi",
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
        "Cross platformed mobile application aimed at making running fun through gamifiation.",
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
          name: "Gemini",
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
        "Automated processing daily situational reports for ambulance crews for Singapore's Army Medical HQ",
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
      image: script
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
  
  export { technologies, experiences, testimonials, projects, certificates, education };
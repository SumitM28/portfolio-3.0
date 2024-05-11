import { SkillsData, projectDataType } from "./types";

export const skills = [
  {
    id: 1,
    name: "Programming Languages",
  },
  {
    id: 2,
    name: "Frontend Development",
  },
  {
    id: 3,
    name: "Backend Development",
  },
  {
    id: 5,
    name: "Mobile App Development",
  },
  {
    id: 4,
    name: "DevOps",
  },
  {
    id: 6,
    name: "Tools & Other",
  },
];

export const projectCategories = [
  {
    id: 1,
    name: "Websites",
  },
  {
    id: 2,
    name: "Mobile Apps",
  },
];

export const skillsData:SkillsData = {
  "Programming Languages": [
    {
      id: 1,
      name: "C++",
      img: "/images/icons/cppicon.png",
    },
    {
      id: 2,
      name: "JavaScript",
      img: "/images/icons/javascripticon.png",
    },
    {
      id: 3,
      name: "Python",
      img: "/images/icons/pythonicon.png",
    },
  ],
  "Frontend Development": [
    {
      id: 1,
      name: "HTML",
      img: "/images/icons/htmlicon.png",
    },
    {
      id: 2,
      name: "CSS",
      img: "/images/icons/cssicon.png",
    },
    {
      id: 3,
      name: "Sass",
      img: "/images/icons/sassicon.png",
    },
    {
      id: 4,
      name: "Tailwind CSS",
      img: "/images/icons/tailwindicon.png",
    },
    {
      id: 5,
      name: "Bootstrap",
      img: "/images/icons/bootstrapicon.png",
    },
    {
      id: 6,
      name: "React.js",
      img: "/images/icons/reacticon.png",
    },
    {
      id: 10,
      name: "TypeScript",
      img: "/images/icons/typescripticon.png",
    },
    {
      id: 7,
      name: "MUI",
      img: "/images/icons/materialuiicon.png",
    },
    {
      id: 8,
      name: "Next.js",
      img: "/images/icons/nextjsicon.png",
    },
    {
      id: 9,
      name: "Redux",
      img: "/images/icons/reduxicon.png",
    },
  ],
  "Backend Development": [
    {
      id: 1,
      name: "Node.js",
      img: "/images/icons/nodejsicon.png",
    },
    {
      id: 2,
      name: "Express.js",
      img: "/images/icons/expressjsicon.png",
    },
    {
      id: 3,
      name: "FastAPI",
      img: "/images/icons/fastapiicon.png",
    },
    {
      id: 4,
      name: "MongoDB",
      img: "/images/icons/mongodbicon.png",
    },
    {
      id: 5,
      name: "MySQL",
      img: "/images/icons/mysqlicon.png",
    },
    {
      id: 6,
      name: "PostgreSQL",
      img: "/images/icons/postgresqlicon.png",
    },
  ],
  "Mobile App Development": [
    {
      id: 1,
      name: "React Native",
      img: "/images/icons/reacticon.png",
    },
    {
      id: 2,
      name: "Expo",
      img: "/images/icons/expoicon.png",
    },
    {
      id: 3,
      name: "Firebase",
      img: "/images/icons/firebaseicon.png",
    },
  ],
  DevOps: [
    {
      id: 1,
      name: "Linux",
      img: "/images/icons/linuxicon.png",
    },
    {
      id: 2,
      name: "Docker",
      img: "/images/icons/dockericon.png",
    },
    {
      id: 3,
      name: "CI/CD",
      img: "/images/icons/cicdicon.png",
    },
    {
      id: 4,
      name: "AWS",
      img: "/images/icons/awsicon.png",
    },
  ],
  "Tools & Other": [
    {
      id: 1,
      name: "Git",
      img: "/images/icons/giticon.png",
    },
    {
      id: 2,
      name: "GitHub",
      img: "/images/icons/githubicon.png",
    },
    {
      id: 3,
      name: "GitLab",
      img: "/images/icons/gitlabicon.png",
    },
  ],
};

export const experiences = [
  {
    id: 1,
    role: "Full-Stack (MERN) Developer",
    company: "Todquest Enterprises",
    duration: "March - 2024 to Present",
    location: "Noida",
    responsibilties: [
      {
        id: 1,
        desc: "Optimized website performance by implementing code refactoring and bundling techniques, leading to a 30% reduction in page load times and enhancing overall user satisfaction.",
      },
      {
        id: 2,
        desc: "Conducted regular code reviews and introduced coding standards,resulting in a 25% improvement in code quality and a reduction of production defects by 50%.",
      },
      {
        id: 3,
        desc: "Collaborated closely with cross-functional teams, including product managers, UX designers, and backend engineers, to define technical solutions and deliver software products that met stakeholderrequirements.",
      },
    ],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Providentia Technologies",
    duration: "July - 2023 to Mar - 2024",
    location: "Remote",
    responsibilties: [
      {
        id: 1,
        desc: "Worked closely with backend development team to build and enhance Cloud Cost Management applications using Python and Django, AWS (EC2, S3, etc), and PostgreSQL forthe database.",
      },
      {
        id: 2,
        desc: "Collaborated with the frontend team to design and implement a microservices architecture for a major product feature, leading to a 20% reduction in server load.",
      },
    ],
  },
  {
    id: 3,
    role: "Web Developer",
    company: "TWILEARN",
    duration: "Mar - 2023 to Apr - 2023",
    location: "Remote",
    responsibilties: [
      {
        id: 1,
        desc: "Increased development speed by 30% by developing reusable React components for UI elements such as buttons, tables, items, and forms.",
      },
      {
        id: 2,
        desc: " By implementing the best SEO practices in web development, we were able to achieve a 35% increase in organic website traffic.",
      },
    ],
  },
];


export const webProjects:projectDataType[] = [
  {
    name: "Hotel Booking Website",
    category: "React, Node, Express, MongoDB, Redux, etc.",
    description:
      "This is an hotel booking project built using the MERN stack (MongoDB, Express, React, Node.js, Hooks). The project includes a backend server, a front-end client, and a database.",
    github: "https://github.com/SumitM28/Booking-App",
    live: "",
    img: "/images/projects/hotel.png",
  },

  {
    name: "E-Commerce Website",
    category: "Fullstack (MERN) Project",
    description:
      "This is an E-commerce project built using the MERN stack (MongoDB, Express, React, Node.js, Redux). The project includes a backend server, a front-end client, and a database.",
    github: "https://github.com/SumitM28/E-Commerce-App",
    live: "",
    img: "/images/projects/ecommerce.png",
  },

  {
    name: "Food Website",
    category: "Frontend Project",
    description:
      "This is a responsive Frontend website. It includes such categorynologies like HTML, CSS, JavaScript etc.",
    github: "https://github.com/SumitM28/Food-App",
    live: "https://sumit-food.netlify.app/",
    img: "/images/projects/food.png",
  },

  {
    name: "Music Player",
    category: "Frontend Project",
    description:
      "This is a responsive music player website. It includes such categorynologies like HTML, CSS, JavaScript etc.",
    github: "https://github.com/SumitM28/music-player",
    live: "https://64d60cae8e0cde4defaa22e7--poetic-starlight-e17d99.netlify.app/",
    img: "/images/projects/music.png",
  },
];

export const appProjects:projectDataType[] = [
  {
    name: "Job Search App",
    category: "Android Application",
    description:
      "This is an Job App like indeed and LinkedIn built using the React Native and expo CLI. The project includes a front-end client, which fetching data from an API (Rapid Api).",
    github: "https://github.com/SumitM28/Job-App/",
    live: "https://expo.dev/@sumitm28/Job_app?servicecategory=classic&distribution=expo-go",
    img: "/images/projects/job.jpg",
  },
  {
    name: "Uber Eats Clone",
    category: "Android Application",
    description:
      "UberEats is an on-demand food delivery like Swiggy and Zomato built using React Native and expo CLI. This project based on front-end UI. and for the information i use the static data",
    github: "https://github.com/SumitM28/uber-eats-clone",
    live: "",
    img: "/images/projects/uber.jpg",
  },
  {
    name: "Invoice Application",
    category: "Android Application",
    description:
      "This is a android application designed to help businesses and individuals create, manage, and send invoices to clients or customers. Which contains the categorynologies like React Native, React etc. ",
    github: "https://github.com/SumitM28/Invoice-application",
    live: "",
    img: "/images/projects/invoice.png",
  },
];
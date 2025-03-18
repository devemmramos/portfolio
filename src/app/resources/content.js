import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Emmanuel",
  lastName: "Ramos",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend Developer",
  avatar: "/images/em-avatar.png",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Vue", "React", "PHP", "Python"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts

  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/emmanuelrosarioramos",
  },

  {
    name: "Email",
    icon: "email",
    link: "mailto:emmanuelrosarioramos@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>With over 7 years of hands-on experience in Frontend Development</>,
  subline: (
    <>
      Hi! Kamusta? I'm Em, a Frontend Developer at <InlineCode>Ascendion Inc.</InlineCode>, where I lead the frontend development
      <br /> efforts for mini programs catering to the BFSI sector, ensuring seamless integration of bank and platform APIs.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hello I am a frontend developer with over 7 years of experience working in the field of web development.
        I have also worked extensively as a full stack developer,
        using a variety of tools and technologies to create robust and scalable web applications.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Ascendion Inc.",
        timeframe: "2023 - Present",
        role: "Senior Frontend Developer",
        achievements: [
          <>
            Architect, design, and develop scalable and secure frontend solutions that meet business requirements and industry standards.
          </>,
          <>
            Collaborate with backend developers, designers, and product managers to define technical requirements, prioritize tasks, and deliver high-quality products.
          </>,
          <>
            Evaluate and select appropriate frontend technologies, frameworks, and libraries to optimize performance, security, and user experience.
          </>,
          <>
            Implement best practices for security, including data encryption, authentication mechanisms, and protection against common vulnerabilities.
          </>,
          <>
            Conduct code reviews, provide constructive feedback, and mentor junior developers to foster a culture of continuous learning and improvement.
          </>,
          <>
            Stay updated on emerging frontend technologies, industry trends, and security threats, and incorporate them into the development process as needed.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/ec-savings/ec-savings-02.png",
            alt: "eC-Savings onboarding",
            width: 12,
            height: 9,
          },
          {
            src: "/images/projects/ec-savings/ec-savings-01.png",
            alt: "eC-Savings dashboard",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Pinion Software, Consulting and Apps Inc.",
        timeframe: "2018 - 2023",
        role: "Fullstack Developer",
        achievements: [
          <>
            Designed and implemented SPAs and MPAs, optimizing user experience and performance while integrating APIs and authentication systems.
          </>,
          <>
            Developed Mobile-Responsive Web Applications, ensuring seamless user experiences across devices and screen sizes.
          </>,
          <>
            Designed and implemented RESTful Web Services to facilitate seamless communication between front-end and back-end systems.
          </>,
          <>
            Experienced in web scraping techniques to extract, process, and analyze data from various online sources.
          </>,
        ],
        images: [
          {
            src: "/images/projects/pinion/pinion.png",
            alt: "pinion website",
            width: 21,
            height: 11,
          },
        ],
      },
      {
        company: "Greatfeat Services, Inc.",
        timeframe: "2017 - 2018",
        role: "Frontend Developer",
        achievements: [
          <>
            Collaborated with a team to enhance, maintain, develop and add new features to an existing web application.
          </>,
          <>
            Design mobile responsive features while ensuring cross browser compatibility.
          </>,
          <>
            Created a UI design for the company website and develop it into a functional website.
          </>,
          <>
            Collaborate with back-end developers and web designers to improve usability.
          </>,
          <>
            Ensure high quality graphic standards and brand consistency
          </>,
          <>
            Stay up-to-date on emerging technologies
          </>,
        ],
        images: [],
      },
      {
        company: "Tencentech, Inc.",
        timeframe: "2016 - 2017",
        role: "Mobile Application Developer",
        achievements: [
          <>
            Develop new user-facing features
          </>,
          <>
            Build reusable code and libraries for future use
          </>,
          <>
            Ensure the technical feasibility of UI/UX designs
          </>,
          <>
            Optimize application for maximum speed and scalability
          </>,
          <>
            Assure that all user input is validated before submitting to back-end
          </>,
          <>
            Collaborate with other International team members
          </>,
        ],
        images: [
          {
            src: "/images/projects/tencentech/s36.png",
            alt: "pinion website",
            width: 21,
            height: 11,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "STI College Marikina",
        description: <>Bachelor of Science in Information Technology</>,
      },

    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Vue, NuxtJS",
        description: <>Developed SPAs and MPAs using Vue and headless CMS, ensuring dynamic and scalable content management. Designed and implemented an ERP system using Nuxt.js, optimizing business processes and data management."</>
        
        ,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
      {
        title: "React, NextJS",
        description: <>Experienced in building dynamic and scalable web applications using Vue and React, integrated with headless CMS solutions like Contentful.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
      {
        title: "Laravel PHP",
        description: <>Developed APIs and webhooks using Laravel (PHP) to enable seamless integration and automation between systems.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

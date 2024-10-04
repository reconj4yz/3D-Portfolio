export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    // {
    //   id: 3,
    //   name: 'Work',
    //   href: '#work',
    // },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Refokus Clone',
      desc: 'A pixel-perfect clone of the Refokus website featuring smooth animations and scroll effects.',
      subdesc:
        'Built with React, Tailwind CSS, Framer Motion, and Locomotive Scroll to replicate the highly interactive user experience of Refokus.',
      href: 'https://refokus-three.vercel.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/refokus.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        { id: 1, name: 'React.js', path: '/assets/react.svg' },
        { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
        { id: 3, name: 'Framer Motion', path: '/assets/framer.png' },
        { id: 4, name: 'Locomotive Scroll', path: '/assets/locomotive.png' },
      ],
    },
    {
      title: 'Instagram Clone',
      desc: 'A fully functional Instagram clone, including core features like posting, following, liking, and stories.',
      subdesc:
        'This social media app is powered by Node.js and MongoDB for the backend and integrates GSAP animations and Tailwind CSS for a smooth, responsive design.',
      href: 'https://instaclone-qbv1.onrender.com/feed', 
      texture: '/textures/project/project2.mp4',
      logo: '/assets/insta.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        { id: 1, name: 'EJS', path: '/assets/ejs.svg' },
        { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
        { id: 3, name: 'GSAP', path: '/assets/gsap.png' },
        { id: 4, name: 'Node.js', path: '/assets/node.png' },
      ],
    },
    {
      title: 'Wanderlust (Airbnb Clone)',
      desc: 'A travel booking website inspired by Airbnb, featuring property listings and booking functionality.',
      subdesc:
        'Wanderlust is built using React and Next.js, with Prisma and MongoDB handling the backend. It also integrates Tailwind CSS for a sleek, user-friendly design.',
      href: '/', 
      texture: '/textures/project/project3.mp4',
      logo: '/assets/wanderlust.png',
      logoStyle: {
        backgroundColor: '#FF5F64',
        background:
          'linear-gradient(0deg, #FF5F64, #FF5F64), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        { id: 1, name: 'Ejs', path: '/assets/ejs.svg' },
        { id: 2, name: 'Node', path: '/assets/node.png' },
        { id: 3, name: 'MongoDB', path: '/assets/mongodb.png' },
        { id: 4, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      ],
    },
    {
      title: 'WhatsApp Clone',
      desc: 'A basic WhatsApp-like chat application that supports CRUD operations and real-time messaging.',
      subdesc:
        'Built using React.js, Firebase, and Socket.io for real-time communication, this app allows users to create and manage chat groups and messages in real time.',
      href: 'https://github.com/reconj4yz/Mini-Whatsapp-ChatApp-', 
      texture: '/textures/project/project4.mp4',
      logo: '/assets/chat.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        { id: 1, name: 'Ejs', path: '/assets/ejs.svg' },
        { id: 2, name: 'Node', path: '/assets/node.png' },
        { id: 3, name: 'MongoDB', path: '/assets/mongodb.png' },
        { id: 4, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      ],
    },
    {
      title: 'EduSavvy',
      desc: 'A cutting-edge educational platform offering courses, study materials, and live sessions for students.',
      subdesc:
        'EduSavvy was developed using Next.js, Prisma, and MongoDB to deliver scalable content management and real-time collaboration features.',
      href: 'https://github.com/udaysharmadev/Edusavvy', 
      texture: '/textures/project/project5.mp4',
      logo: '/assets/edusavvy.jpg',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        { id: 1, name: 'Ejs', path: '/assets/ejs.svg' },
        { id: 2, name: 'Node', path: '/assets/node.png' },
        { id: 3, name: 'MongoDB', path: '/assets/mongodb.png' },
        { id: 4, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      ],
    },
  ];
  
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Code4Cause 2.0 Hackathon',
      pos: 'Ranked 7th out of 400+ Teams',
      duration: 'September 2024',
      title: "Led my team to the final round of Code4Cause 2.0, where we developed a unique solution to tackle social issues. Gained hands-on experience in collaboration, problem-solving, and presenting our project to industry professionals and judges.",
      icon: '/assets/hwi.png',
      animation: 'victory',
      color:'bg-[#1A1A1A]',
    },
    {
      id: 2,
      name: 'Hack N Chill',
      pos: 'Finished top 10 out of 300+ Teams',
      duration: 'April 2024',
      title: "Guided a team through the Hack&Chill hackathon, developing ZenZone, a healthcare platform for mental health awareness. Focused on leadership, teamwork, and presenting our solution to a diverse panel of judges, gaining valuable feedback and presentation skills.",
      icon: '/assets/hackNchill.png',
      animation: 'clapping',
      color:'bg-[#F2E2C7]',
    },
    {
      id: 3,
      name: 'Dev Dynamos',
      pos: 'Founding member of a coding club',
      duration: '2023 - Present',
      title: "As a founding member of Dev Dynamos, I collaborated on impactful projects like ZenZone and EduSavvy. My role involved managing teams, brainstorming innovative ideas, and ensuring seamless collaboration in various hackathons and coding challenges.",
      icon: '/assets/devdynamos.png',
      animation: 'salute',
      color:'bg-[#77B2F8]',
    },
    {
      id: 4,
      name: 'Codeverse',
      pos: 'Core Member',
      duration: '2024 - Present',
      title: "A core member of the Codeverse Society, contributing to organizing coding workshops, leading technical discussions, and engaging in collaborative projects. I support initiatives that foster peer learning, focusing on coding challenges and emerging technologies.",
      icon: '/assets/codeverse.png',
      animation: 'salute',
      color:'bg-[#45EBA1]',
    }
    

    
  ];
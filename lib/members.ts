export interface Member {
  id: string
  name: string
  role: string
  image: string
  bio: string
  socials: {
    instagram?: string
    twitter?: string
    youtube?: string
    linkedin?: string
  }
}

export const members: Member[] = [
  {
    id: "1",
    name: "Midhun N M",
    role: "Captain",
    image: "/midhun.jpeg",
    bio: "Computer Science student with skills in Python, HTML, and web development. Strong interest in building simple, efficient, and user-focused solutions. Looking for opportunities to apply technical skills to real-world projects.",
    socials: {
      instagram: "https://www.instagram.com/mxdhunn/",
      linkedin: "https://www.linkedin.com/in/midhunnm/"
    }
  },

  {
    id: "2",
    name: "Avaneendra B",
    role: "CS Student — Member",
    image: "/avaneendra.jpeg",
    bio: "B.Tech CSE student proficient in frontend and backend development. Skilled in building responsive, scalable web applications and solving technical challenges within collaborative teams.",
    socials: {
      instagram: "https://www.instagram.com/avaneendra_appooz/",
      youtube: "https://www.youtube.com/@Avaneendra-Appooz",
      linkedin: "https://www.linkedin.com/in/aham-avaneendra/"
    }
  },

  {
    id: "3",
    name: "Darsana M S",
    role: "CS Student - Member",
    image: "/darshana.jpeg",
    bio: "Actively developing technical foundation and working hard to secure opportunities in the IT field. Loves learning, improving, and staying consistent.",
    socials: {
      instagram: "https://www.instagram.com/darsanaaaa__?igsh=MTdkcjk4aGFuaDIxMw==",
      linkedin: "https://www.linkedin.com/in/darsana-m-s-b33079286"
    }
  },

  {
    id: "4",
    name: "Devika Das BS",
    role: "CS Student — Member",
    image: "/devika.jpeg",
    bio: "A third-year CSE student building a strong technical base and working toward a career in the IT field. Interested in coding and committed to learning and improving consistently. Experience in arts has strengthened creativity and teamwork.",
    socials: {
      instagram: "https://www.instagram.com/_devika.bs?igsh=ajk1ZHJ5emUyaWd0",
      twitter: "#",
      linkedin: "https://linkedin.com/in/devika-das-71b851375"
    }
  },

  {
    id: "5",
    name: "Gopika Binish K",
    role: "CS Student — Member",
    image: "/gopika.jpeg",
    bio: "I am an engineering student passionate about learning and growing in my field. I am driven to achieve my goals and aspire to secure a challenging role in a reputable organization where I can contribute and excel.",
    socials: {
      instagram: "https://www.instagram.com/gopiiy_?igsh=MTZqdng3a2VhNnYydw",
      linkedin: "http://linkedin.com/in/gopikabinishk"
    }
  },

  {
    id: "6",
    name: "Gayathri C G",
    role: "Vice captain",
    image: "/gayathri.jpeg",
    bio: "Computer Science student with a passion for problem solving and innovation. Seeking opportunities to apply technical skills in software development, data analysis, and algorithm design to contribute to cutting-edge projects and advance in the field of technology.",
    socials: {
      instagram: "https://www.instagram.com/gayathri_c_g?igsh=MWJ3MXhkdGlobnNqMQ==",
      linkedin: "https://www.linkedin.com/in/gayathri-c-gangadharan-a9a7aa296"
    }
  },

  {
    id: "7",
    name: "James Kim",
    role: "CS Student — Mobile Dev",
    image: "/professional-portrait-young-korean-man-app-develop.jpg",
    bio: "Cross-platform mobile developer crafting seamless experiences for iOS and Android. Focused on performance and delightful micro-interactions.",
    socials: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },

  {
    id: "8",
    name: "Nina Patel",
    role: "CS Student — Cloud & DevOps",
    image: "/professional-portrait-young-indian-woman-cloud-eng.jpg",
    bio: "Infrastructure enthusiast automating everything from deployments to monitoring. Passionate about making teams ship faster and more reliably.",
    socials: {
      twitter: "#",
      youtube: "#",
      linkedin: "#"
    }
  },

  {
    id: "9",
    name: "Oliver Wright",
    role: "CS Student — Game Dev",
    image: "/professional-portrait-young-man-game-developer-cre.jpg",
    bio: "Game developer and graphics programmer pushing the boundaries of real-time rendering. Creating immersive worlds that tell compelling stories.",
    socials: {
      instagram: "#",
      twitter: "#",
      youtube: "#",
      linkedin: "#"
    }
  }
]

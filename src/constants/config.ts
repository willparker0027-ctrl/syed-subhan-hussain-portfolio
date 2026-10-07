type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Syed Subhan Hussain — 3D Portfolio",
    fullName: "Syed Subhan Hussain",
    email: "syedsubhanhussain.icb@gmail.com",
  },
  hero: {
    name: "Syed Subhan Hussain",
    p: ["I specialize in Cyber Security, IoT", "and Blockchain development"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a Cyber Security analyst and Computer Science (Cyber Security,
      IoT & Blockchain) undergraduate at Guru Nanak Dev Engineering College,
      Bidar. I work with tools like Wireshark, Nmap, Burp Suite and Metasploit
      for vulnerability assessment, network analysis and penetration testing —
      and I build with React, Node.js and Android. As team leader of DEFENXIA,
      I led our solution to the Smart India Hackathon finalist round. Let's
      work together to build and secure great things!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "Credentials & recognition",
      h2: "Certifications & Achievements.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};

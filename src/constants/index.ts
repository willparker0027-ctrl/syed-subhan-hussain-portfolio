import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  logo,
  herobg,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Cyber Security Analyst",
    icon: web,
  },
  {
    title: "Network Security & VAPT",
    icon: mobile,
  },
  {
    title: "IoT & Blockchain Specialist",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Cyber Security Intern",
    companyName: "Infotact Solutions",
    icon: web,
    iconBg: "#383E56",
    date: "05/06/2026 - 05/09/2026 (3 months)",
    points: [
      "Performed comprehensive vulnerability assessment using Nmap to identify open ports, services, and CVEs across laboratory systems.",
      "Analyzed 50+ network traffic dumps with Wireshark and tcpdump to trace data flow and identify anomalies.",
      "Executed controlled SQL Injection and XSS testing with Burp Suite to patch web application vulnerabilities.",
      "Configured and deployed Snort IDS to monitor network traffic and detect simulated attacks.",
    ],
  },
  {
    title: "Cyber Security Intern",
    companyName: "Syntecxhub",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "12 May 2026 - 12 June 2026 (1 month)",
    points: [
      "Hands-on cyber security training covering network security fundamentals and threat analysis.",
      "Worked with security tools for vulnerability scanning and packet-level network inspection.",
      "Practiced identifying and mitigating common security threats in controlled lab environments.",
    ],
  },
  {
    title: "Cyber Security Intern",
    companyName: "Future Interns",
    icon: backend,
    iconBg: "#383E56",
    date: "12/05/2026 - 12/06/2026 (1 month)",
    points: [
      "Cyber security internship focused on practical defensive and offensive security techniques.",
      "Conducted ethical hacking exercises including ARP poisoning and traffic sniffing to understand MITM attack vectors.",
      "Strengthened skills in Linux (Kali/Ubuntu), firewalls, and secure system configuration.",
    ],
  },
  {
    title: "Team Leader — DEFENXIA",
    companyName: "Smart India Hackathon (SIH)",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "SIH Finalist Round",
    points: [
      "Designed a solution to enhance mobile and network security architecture.",
      "Performed vulnerability scanning, packet analysis, and phishing simulations.",
      "Led a team in implementing security protocols and presenting the solution to evaluators.",
      "Reached the Smart India Hackathon finalist round.",
    ],
  },
  {
    title: "Team Leader — DEFENXIA Mobile Security App",
    companyName: "College Major Project",
    icon: web,
    iconBg: "#383E56",
    date: "Major Project",
    points: [
      "Developed an Android-based mobile security application to detect malicious activities.",
      "Implemented real-time threat detection and user alert mechanisms.",
      "Built with Java and Android SDK, integrating basic networking concepts.",
      "Conducted phishing simulations using GoPhish & API services.",
      "Winner of the Mini Project Competition for the DEFENXIA application (cash prize Rs. 3000).",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial: "Networking fundamentals and essentials certification.",
    name: "Cisco Networking Basics",
    designation: "Cisco",
    company: "Certification",
    image: logo,
  },
  {
    testimonial: "Linux system administration and essentials certification.",
    name: "Red Hat Linux Essentials",
    designation: "Red Hat",
    company: "Certification",
    image: logo,
  },
  {
    testimonial: "Ethical hacking and networking course certification.",
    name: "Ethical Hacking & Networking",
    designation: "Simplilearn",
    company: "Certification",
    image: logo,
  },
  {
    testimonial: "Full-stack web development training certification.",
    name: "MERN Stack Development",
    designation: "Zenexis Solution",
    company: "Certification",
    image: logo,
  },
  {
    testimonial: "Cloud fundamentals certification from Amazon Web Services.",
    name: "AWS Cloud Essentials",
    designation: "AWS",
    company: "Certification",
    image: logo,
  },
  {
    testimonial:
      "Led team DEFENXIA to the finalist round; winner of the Mini Project Competition (Rs. 3000 cash prize).",
    name: "Smart India Hackathon Finalist",
    designation: "Team Leader",
    company: "SIH / College",
    image: logo,
  },
];

const projects: TProject[] = [
  {
    name: "DEFENXIA — Smart India Hackathon",
    description:
      "Mobile and network security solution designed for the Smart India Hackathon. Performed vulnerability scanning, packet analysis, and phishing simulations, and led the team in implementing security protocols and presenting the solution to evaluators — reaching the SIH finalist round.",
    tags: [
      {
        name: "nmap",
        color: "blue-text-gradient",
      },
      {
        name: "wireshark",
        color: "green-text-gradient",
      },
      {
        name: "gophish",
        color: "pink-text-gradient",
      },
    ],
    image: herobg,
    sourceCodeLink: "https://github.com/syedsubhanhussain-sih",
  },
  {
    name: "DEFENXIA — Mobile Security App",
    description:
      "Android-based mobile security application (college major project) that detects malicious activities. Implemented real-time threat detection and user alert mechanisms with Java and Android SDK, integrating basic networking concepts and phishing simulations via GoPhish & API services. Winner of the Mini Project Competition.",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "gophish",
        color: "pink-text-gradient",
      },
    ],
    image: herobg,
    sourceCodeLink: "https://github.com/syedsubhanhussain-sih",
  },
  {
    name: "Cyber Security Lab & Hands-on Training",
    description:
      "Practical offensive and defensive security work: comprehensive Nmap vulnerability scanning across lab systems, analysis of 50+ network traffic dumps with Wireshark and tcpdump, controlled SQL Injection and XSS testing with Burp Suite, Snort IDS deployment, and ethical ARP poisoning / traffic sniffing experiments in a controlled environment.",
    tags: [
      {
        name: "burpsuite",
        color: "blue-text-gradient",
      },
      {
        name: "metasploit",
        color: "green-text-gradient",
      },
      {
        name: "snort",
        color: "pink-text-gradient",
      },
    ],
    image: herobg,
    sourceCodeLink: "https://github.com/syedsubhanhussain-sih",
  },
];

export { services, technologies, experiences, testimonials, projects };

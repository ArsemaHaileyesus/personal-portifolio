import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Broker Management System",
    summary: "A comprehensive Java-based solution for managing broker activities and client portfolios",
    description: "This broker management system streamlines the process of managing client accounts, tracking financial transactions, and generating reports. Built with Java and a robust database architecture, it offers a secure and efficient solution for financial institutions and independent brokers.",
    technologies: ["Java", "JavaFX", "MySQL", "JDBC", "Maven"],
    image: "https://images.pexels.com/photos/7876029/pexels-photo-7876029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubUrl: "https://github.com/username/broker-management-system",
    features: [
      "Client portfolio management with detailed transaction history",
      "Automated reporting system with customizable templates",
      "Advanced security features including role-based access control",
      "Real-time market data integration",
      "Comprehensive analytics dashboard"
    ]
  },
  {
    id: 2,
    title: "Event Management Website",
    summary: "A dynamic event management platform with user and admin interfaces for event planning and ticketing",
    description: "This full-stack event management website enables event creation, registration, ticket sales, and attendee management. The platform features responsive design, secure payment processing, and a comprehensive admin dashboard for event analytics and management.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    liveUrl: "https://event-management-demo.netlify.app",
    githubUrl: "https://github.com/username/event-management",
    features: [
      "User authentication and profile management",
      "Event creation and management interface",
      "Ticket sales and e-ticket generation",
      "Interactive event calendar and search functionality",
      "Attendee check-in system for event organizers"
    ]
  },
  {
    id: 3,
    title: "Alumni Management System",
    summary: "A PHP-based alumni network platform connecting graduates with networking and career opportunities",
    description: "This alumni management system connects graduates, facilitates networking, and shares career opportunities. Built with PHP and MySQL, it features user profiles, event management, job boards, and donation tracking to strengthen the alumni community and support institutional advancement.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Laravel"],
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubUrl: "https://github.com/username/alumni-management-system",
    features: [
      "Comprehensive alumni directory with advanced search functionality",
      "Event management for reunions and networking opportunities",
      "Job board for alumni-exclusive opportunities",
      "Donation and fundraising campaign management",
      "Mentorship program matching system"
    ]
  },
  {
    id: 4,
    title: "CRM Application",
    summary: "A modern customer relationship management application built with JavaScript, Node.js, and MongoDB",
    description: "This CRM application helps businesses manage customer interactions, track sales pipelines, and analyze customer data for improved decision-making. Built with a modern JavaScript stack, it offers real-time updates, customizable workflows, and comprehensive reporting capabilities.",
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React", "Redux"],
    image: "https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    liveUrl: "https://crm-app-demo.herokuapp.com",
    githubUrl: "https://github.com/username/crm-application",
    features: [
      "Contact and lead management with activity tracking",
      "Sales pipeline visualization and management",
      "Email integration and template management",
      "Task scheduling and reminder system",
      "Custom reporting and analytics dashboard"
    ]
  }
];
export const siteConfig = {
  name: "Keith Vargas",
  title: "Software Engineer II",
  description: "Portfolio website of Keith Vargas",
  accentColor: "#FFDE21",
  social: {
    email: "keith.vargas@outlook.com",
    linkedin: "https://linkedin.com/in/keith-vargas",
    github: "https://github.com/digitalsirkeith",
    twitter: "",
    instagram: "https://instagram.com/digitalsirkeith",
  },
  aboutMe:
    "I'm a software engineer with a passion for building scalable and efficient systems. I do full-stack development and I'm currently looking for a new opportunity to join a team that is building something great. I have experience working on API, platform solutions, database systems, and AI/ML integrations.",
  skills: ["Typescript", "React", "Node.js", "Python", "Flask", "AWS", "Docker", "Azure", "Vue.js", "PostgreSQL", "Snowflake", "Git", "GitHub Actions", "Kubernetes", "Grafana", "Terraform", "Stripe"],
  projects: [
    {
      name: "MISE Backend API",
      description:
        "Created and maintained the API documentation for Mise Systems, allowing internal iOS and Android developers to understand, test, and integrate with our backend services. Implemented Stripe payment integration for secure transaction processing.",
      link: "https://dev1.api.misesystems.com/doc/rapidoc",
      skills: ["Python", "Flask", "PostgreSQL", "PostGIS", "Azure", "Kubernetes", "OpenAPI", "Rapidoc", "Stripe"],
    },
    {
      name: "Expedock External API",
      description:
        "Part of a team developing and maintaining the API ecosystem for Expedock, allowing internal systems and external partners to interact reliably with Expedock's services (shipping, tracking, order management, etc.).",
      link: "https://app.expedock.com/docs/api",
      skills: ["Python", "Flask", "PostgreSQL", "AWS", "OpenAPI", "Redoc"],
    },
  ],
  experience: [
    {
      company: "Expedock",
      title: "Software Engineer II",
      dateRange: "March 2022 - September 2025",
      bullets: [
        "Designed and maintained REST APIs integrating legacy and third-party systems, handling high-volume data and reducing partner integration time by 40%",
        "Built and deployed a white-label website platform, enabling branded services for customers and opening new revenue streams",
        "Led a data discrepancy detection initiative and implemented automated validations and alerting, bringing invoice data error rates to 1% and shrinking manual triage by 60%",
        "Automated document processing for API-ingested documents, reducing manual effort by 70% via intelligent routing and validation",
        "Implemented Grafana alerts with Kubernetes monitoring for excessive database writes and usage, improving system reliability and proactive issue detection",
        "Wrote GitHub Actions workflows to streamline development processes, automating CI/CD pipelines and reducing deployment time",
        "Collaborated with cross-functional teams to deliver scalable solutions using modern DevOps practices",
      ],
    },
    {
      company: "MISE",
      title: "Backend API Developer",
      dateRange: "February 2022 - August 2024",
      bullets: [
        "Developed RESTful APIs for mobile applications using flask-smorest, enabling seamless data synchronization and real-time updates across iOS and Android platforms",
        "Designed and implemented database schema with PostGIS for advanced proximity search functionality, improving location-based query performance by 50%",
        "Built and deployed an Azure-powered Discord integration bot for internal team communication, automating workflow notifications and reducing manual coordination overhead",
        "Implemented Stripe payment integration for secure transaction processing, enabling seamless payment flows for mobile applications",
        "Streamlined API documentation and testing processes, implementing automated testing pipelines that reduced deployment time by 30% and improved code quality",
      ],
    },
    {
      company: "CHRG Electric Vehicle Technologies, Inc.",
      title: "Data Analyst",
      dateRange: "February 2021 - August 2021",
      bullets: [
        "Analyzed raw electric vehicle travel data to identify optimal charging station locations, using statistical analysis and geographic data processing to improve charging infrastructure efficiency",
        "Collaborated with researchers to implement data-driven recommendations for charging station placement, resulting in 30% improvement in charging accessibility for fleet operations",
      ],
    },
    {
      company: "The Coding School (TCS)",
      title: "Programming Coach and Instructor",
      dateRange: "March 2020 - February 2023",
      bullets: [
        "Mentored 50+ young students in programming fundamentals and Python development, creating interactive learning experiences that improved student engagement by 40%",
        "Developed comprehensive learning materials and curriculum for Python programming, including hands-on projects and assessment tools used by 200+ students",
        "Designed and organized programming challenges for coding competitions, fostering competitive programming skills and increasing student participation by 60%",
      ],
    },
    {
      company: "Azeus Systems Philippines Limited",
      title: "OJT Program",
      dateRange: "July 2020 - August 2020",
      bullets: [
        "Built a real-time collaborative documentation app with Vue.js and Socket.io, enabling multiple users to edit documents simultaneously",
        "Designed and implemented a responsive web application using Figma for UI/UX design, resulting in improved user experience",
      ],
    },
    {
      company: "Samsung R&D Institute Philippines",
      title: "Intern, Cloud Intelligence Team",
      dateRange: "May 2019 - July 2019",
      bullets: [
        "Developed human activity recognition and classification system using computer vision, implementing heatmap visualization for activity pattern analysis and achieving 85% accuracy in real-time detection",
        "Implemented one-shot face detection algorithm for efficient facial recognition, reducing computational overhead by 40% while maintaining high detection accuracy across diverse lighting conditions",
      ],
    },
    {
      company: "Nokia Technology Center, Manila",
      title: "Intern, 5G Feature Team",
      dateRange: "June 2017 - August 2017",
      bullets: [
        "Assisted in 5G network feature development and testing, contributing to early-stage 5G technology implementation and validation processes",
        "Developed internal web application for test server reservation using Ruby on Rails, streamlining resource allocation and reducing server setup time by 50% for engineering teams",
        "Participated in network performance analysis and optimization studies, gaining hands-on experience with telecommunications protocols and wireless communication systems",
      ],
    },
  ],
  education: [
    {
      school: "University of the Philippines Diliman",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "2015 - 2022",
      achievements: [
        "2019 Chairperson of IEEE UP Diliman Student Branch",
        "2020 Vice Chairperson of IEEE UP Diliman Student Branch",
      ],
    },
    {
      school: "National University of Singapore",
      degree: "NG Student Exchange",
      dateRange: "2018",
      achievements: [
        "Move UP Scholar",
      ],
    },
  ],
};

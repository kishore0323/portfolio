import { EducationSection } from "../interfaces/education.interface";
import { ExternalSite } from "../interfaces/external-site.interface"
import { ProjectSection } from "../interfaces/project.interface";
import { SkillSection } from "../interfaces/skill-section.interface";
import { ExperienceSection } from "../interfaces/work-experience.interface";
import { AssetPaths } from "./asset-paths.enum";

// Social media links to show
const SocialMediaLinks: ExternalSite[] = [
    {
        name: "Github",
        link: "https://github.com/kishore0323",
        simpleIconName: "GitHub",
        backgroundColor: "#181717",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/kishoreagi/",
        simpleIconName: "LinkedIn", // this icon is not available in simple icon v14
        backgroundColor: "#0066c8", // manually checked
    },
    {
        name: "LeetCode",
        link: "https://leetcode.com/kishore0323/",
        simpleIconName: "LeetCode",
        backgroundColor: "#FFA116",
    },
    {
        name: "Gmail",
        link: "mailto:kishorea0323@gmail.com",
        simpleIconName: "Gmail",
        backgroundColor: "#EA4335",
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/kishoreind/",
        simpleIconName: "Instagram",
        backgroundColor: "#FF0069",
    }
]

// Fullstack skills
const FullstackSkills: ExternalSite[] = [
    {
        name: "Java",
        link: "https://java.com",
        simpleIconName: "java",
        backgroundColor: "#ED8B00",
    },
     {
        name: "Spring",
        link: "https://spring.io",
        simpleIconName: "spring",
        backgroundColor: "#00FF7F",
    },
    {
        name: "Angular",
        link: "https://angular.dev/",
        simpleIconName: "Angular",
        backgroundColor: "#ea2848",
    },
    {
        name: "HTML5",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        simpleIconName: "HTML5",
        backgroundColor: "#E34F26",
    },
    {
        name: "CSS3",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        simpleIconName: "CSS3",
        backgroundColor: "#1572B6",
    },
    {
        name: "Hibernate",
        link: "https://hibernate.org/",
        simpleIconName: "hibernate",
        backgroundColor: "#CC6699",
    },
    {
        name: "Java",
        link: "https://nodejs.org/",
        simpleIconName: "NodeJS",
        backgroundColor: "#5FA04E",
    },
    {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        simpleIconName: "JavaScript",
        backgroundColor: "#F7DF1E",
    },
    {
        name: "Apache Kafka",
        link: "https://kafka.apache.org/",
        simpleIconName: "apachekafka",
        backgroundColor: "#000000",
    },
    {
        name: "Apache Maven",
        link: "https://maven.apache.org/",
        simpleIconName: "apachemaven",
        backgroundColor: "#000000",
    },
    {
        name: "Spring Boot",
        link: "https://spring.io/projects/spring-boot",
        simpleIconName: "springboot",
        backgroundColor: "#06B6D4",
    },
    {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        simpleIconName: "Bootstrap",
        backgroundColor: "#7952B3",
    },
    {
        name: "Kubernetes",
        link: "https://kubernetes.io/",
        simpleIconName: "kubernetes",
        backgroundColor: "#430098",
    },
];

// Fullstack section
const FullstackSection: SkillSection = {
    sectionTitle: "Fullstack Development",
    imagePath: AssetPaths.FULL_STACK_DEVELOPMENT_SVG,
    skillLinks: FullstackSkills,
    skillsList: [
        "Building responsive website front-end using Angular",
        "Developing custom and interactive 3D websites",
        "Creating application backend in Node, Express & NestJS",
        "Managing data safely with PostgreSQL, MongoDB and OracleDB",
    ]
}

// Could skills
const CloudSkills: ExternalSite[] = [
    {
        name: "GCP",
        link: "https://cloud.google.com/",
        simpleIconName: "Google Cloud",
        backgroundColor: "#4285F4",
    },
    {
        name: "AWS",
        link: "https://aws.amazon.com/",
        simpleIconName: "Amazon Web Services",
        backgroundColor: "#232F3E",
    },
    {
        name: "Firebase",
        link: "https://firebase.google.com/",
        simpleIconName: "Firebase",
        backgroundColor: "#FFCA28",
    },
    {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
        simpleIconName: "PostgreSQL",
        backgroundColor: "#336791",
    },
    {
        name: "MongoDB",
        link: "https://www.mongodb.com/",
        simpleIconName: "MongoDB",
        backgroundColor: "#47A248",
    },
    {
        name: "Docker",
        link: "https://www.docker.com/",
        simpleIconName: "Docker",
        backgroundColor: "#1488C6",
    },
    {
        name: "Jenkins",
        link: "https://jenkins.com/",
        simpleIconName: "jenkins",
        backgroundColor: "#D33834",
    },
    {
        name: "Linux",
        link: "https://www.linux.org/",
        simpleIconName: "linux",
        backgroundColor: "#FCC624",
    },
];

// Could section
const CloudSection: SkillSection = {
    sectionTitle: "Cloud Infra-Architecture",
    imagePath: AssetPaths.CLOUD_INFRASTRUCTURE_SVG,
    skillLinks: CloudSkills,
    skillsList: [
        "Experience working on multiple cloud platforms including GCP, AWS, FireBase, and Render",
        "Hosting and maintaining websites on FireBase hosting and GoDaddy along with integration of databases",
        "Setting up email triggers and Googlesheet integration for streamline client inquiry",
    ]
}

// Design skills
const DesignSkills: ExternalSite[] = [
    {
        name: "Adobe XD",
        link: "https://adobexdplatform.com/",
        simpleIconName: "Adobe XD",
        backgroundColor: "#FF2BC2",
    },
    {
        name: "Figma",
        link: "https://figma.com/",
        simpleIconName: "Figma",
        backgroundColor: "#F24E1E",
    },
    {
        name: "Adobe Illustrator",
        link: "https://www.adobe.com/au/products/illustrator.html/",
        simpleIconName: "Adobe Illustrator",
        backgroundColor: "#FF7C00",
    },
    {
        name: "Adobe Photoshop",
        link: "https://www.adobe.com/products/photoshop.html/",
        simpleIconName: "Adobe Photoshop",
        backgroundColor: "#001e36",
    },
];

// Design skills
const DigitalSolutionSkills: ExternalSite[] = [

];

// Design section
const DigitalSolutionSection: SkillSection = {
    sectionTitle: "Digital Solutions & Consultancy",
    imagePath: AssetPaths.DIGITAL_SOLUTIONS_SVG,
    skillLinks: DigitalSolutionSkills,
    skillsList: [
        "Streamlining business operations with tools like Jira, offering automated workflows, and data-driven insights.",
        "Centralizing business data within secure, interconnected platforms to facilitate informed decision-making",
        "Helping local businesses enable real-time communication and task coordination through MS Teams and Outlook",
    ]
}

// Personal projects
const PersonalProjects: ProjectSection = {
    sectionTitle: "My Projects",
    sectionSubtitle: "🚀 Showcasing innovative solutions and real-world applications built with cutting-edge technologies.",
    entities: [
        {
            title: "Global Automation Technology ",
            coverImagePath: AssetPaths.PROJECT_AI_VELOCIRAPTOR,
            liveLink: AssetPaths.PROJECT_AI_VELOCIRAPTOR_PDF,
            githubLink: "https://github.com/dhruvil-unisa/ai-velociraptor/",
            description: "🤖 A cutting-edge AI-powered Velociraptor version built with the LLM integration using a custom MCP, prompt engineering, and fine tuning.",
            techStack: ["Java", "Spring", "Kafka", "OracleDB"],
            year: 2025,
        },
        {
            title: "Lumin",
            coverImagePath: AssetPaths.PROJECT_THREEJS_IFC_VIEWER,
            liveLink: "https://dhruvilrathod.github.io/webifcviewer/",
            githubLink: "https://github.com/dhruvilrathod/three_ifc_angular",
            description: "🧱 This tool enables seamless visualization of IFC files in your browser. Toggle elements, explore real-time details by hovering, search and highlight elements, and interact with ease for a dynamic 3D experience.",
            techStack: ["Angular", "ThreeJS", "ExpressJS", "Heroku"],
            year: 2022
        },
        {
            title: "Carbon Avoidence Meter",
            coverImagePath: AssetPaths.PROJECT_CUSTOM_DROPDOWN,
            githubLink: "https://github.com/dhruvilrathod/custom-dropdown/tree/resource-tree-utility",
            description: "🌲 An Angular-based, asynchronous multi-select dropdown designed for tree-structured data with custom validation. It's a powerful replacement for jQuery's Select2.",
            techStack: ["Angular", "TypeScript", "SCSS"],
            year: 2023,
            branch: "resource-tree-utility"
        },
        {
            title: "NBS Banking",
            coverImagePath: AssetPaths.PROJECT_LMS_APP,
            githubLink: "https://github.com/dhruvilrathod/lms-asite",
            description: "📚 A production-grade frontend for a Learning Management System, designed with scalability in mind to deliver a seamless and efficient user experience.",
            techStack: ["Angular", "PrimeNG", "Tailwind", "Figma"],
            year: 2023
        },
        {
            title: "NFC Banking",
            coverImagePath: AssetPaths.PROJECT_ANGULAR_NEST_DOCKER,
            githubLink: "https://github.com/dhruvilrathod/sample-angular-nest",
            description: "🛠️ A production-grade boilerplate integrating Angular, NestJS, and Nginx for seamless fullstack development. Perfect for kickstarting robust and scalable web applications.",
            techStack: ["Angular", "NestJS", "NgINX", "Docker"],
            year: 2023
        },
        {
            title: "Hospital Management System Dashboard",
            coverImagePath: AssetPaths.PROJECT_HMS_APP,
            githubLink: "https://github.com/freelancer-dhruvil/hms-demo",
            description: "🏥 Transformed Figma designs into a fully functional, user-friendly dashboard for a Hospital Management System, ensuring precision and intuitive interface.",
            techStack: ["Angular", "PrimeNG", "PrimeFlex", "Figma"],
            year: 2024
        }
    ]
}

// Freelancing projects
const FreelancingProjects: ProjectSection = {
    sectionTitle: "Freelancing",
    sectionSubtitle: "🚀 Transforming Ideas into Digital Solutions: Tailored Websites, Custom CMS, and More!",
    entities: [
        {
            title: "South Australia Tiling",
            coverImagePath: AssetPaths.PROJECT_SA_TILING,
            liveLink: "https://southaustraliatiling.com.au/",
            description: "🚀 Built with SSR and SSG to showcase a South Australian tiling and bathroom renovation business, enhancing their online presence and visibility.",
            techStack: ["Angular 19", "SSR/SSG", "NestJS", "Firebase"],
            year: 2025
        },
        {
            hidden: true, // this project is not visible in UI but can be added by changing this flag to true
            title: "Kiwi Finance",
            coverImagePath: AssetPaths.PROJECT_KIWI_FINANCE,
            liveLink: "https://kiwifinance.com.au/",
            description: "💰 Developed a tailored website for a new Perth-based finance and mortgage broking business, combining modern design with a focus on accessibility and client engagement.",
            techStack: ["Angular", "MongoDB", "NestJS", "Firebase"],
            year: 2025
        },
        {
            title: "RAS Finance Website + CMS",
            coverImagePath: AssetPaths.PROJECT_RAS_FINANCE,
            liveLink: "https://rasfinance.com.au/",
            description: "📈 Designed a bespoke website for a leading South Australia-based finance and mortgage broking business, showcasing services with a sleek, client-focused design.",
            techStack: ["Angular", "MongoDB", "NestJS", "Firebase"],
            year: 2024
        },
        {
            title: "Acquire Conveyancing Website",
            coverImagePath: AssetPaths.PROJECT_ACQUIRE_CONVEYANCING,
            liveLink: "https://acquireconveyancing.com.au/",
            description: "🏡 Crafted a tailored website for a South Australia-based conveyancing business, delivering a professional online presence with user-friendly design and local appeal.",
            techStack: ["Angular", "Tailwind", "Firebase"],
            year: 2023
        },
    ]
}


// Job experience
const JobExperience: ExperienceSection = {
    experienceSectionTitle: "Work Experience",
    experiences: [
        {
            orgLink: "https://oracle.com/",
            orgLogoPath: AssetPaths.WORK_ORACLE_LOGO,
            orgName: "Oracle",
            positions: [
                {
                    positionName: "Senior Member of Technical Staff",
                    duration: "July 2022 - Sept 2025",
                    location: "Bengaluru, KA",
                    locationType: "Hybrid",
                    jobType: "Full-time",
                    workPoints: [
                        "Optimized a Translation-as-a-Service data pipeline using Kafka Streams, resolving critical memory bottlenecks to increase processing throughput 6x and decrease peak-load system congestion by 24%.",
                        "Reduced recurring production incidents by 40% by leading root-cause analysis on Translation REST APIs and correlating distributed logs across microservices to ship permanent hotfixes. 🏡",
                        "Architected and delivered a high-performance RBAC-based Analytics and Insights module, enabling real-time data visualization and representation of application usage and metrics to drive data-backed stakeholder decisions. 📝",
                        "Automated translation storage cleanup for deprecated products by implementing a 3-month retention policy alongside a customizable file-keeping feature which reduced data size by 60%. ⚙️",
                    ]
                }
            ]
        },
        {
            orgLink: "https://ltm.com/",
            orgLogoPath: AssetPaths.WORK_LTIMINDTREE_LOGO,
            orgName: "LTIMindtree",
            positions: [
                {
                    positionName: "Senior Product Engineer",
                    duration: "Sept 2020 - June 2022",
                    location: "Bengaluru, KA",
                    locationType: "Hybrid",
                    jobType: "Full-time",
                    workPoints: [
                        "Implemented native querying of the Dremio, Snowflake data for the faster delivery of the solution on the Fosfor platform.",   
                        "Integrated AWS S3 data source with Dremio data warehouse for ease of access to customer data in product from different sources and developed RESTful API for data ingestion and analytics.",
                        "Developed and maintained Java Maven Packages to support authentication, event logging, configuration & secrets management (with Hashicorp Vault, AWS Secrets Manager or Kubernetes Secrets) used across microservices.",
                    ]
                }
            ]
        },
        {
            orgLink: "https://www.regalix.com/",
            orgLogoPath: AssetPaths.WORK_REGALIX_LOGO,
            orgName: "Regalix",
            positions: [
                {
                    positionName: "Software Developer",
                    duration: "Sept 2018 - Nov 2020",
                    location: "Bengaluru, KA",
                    locationType: "Office",
                    jobType: "Full-time",
                    workPoints: [
                        "Designed and developed microservices based innovative proactive support platform for VMware Skyline using Java, Spring Boot, Web, Cloud, Batch, MongoDB, Angular, CI/CD, deployed on Pivotal Cloud Foundry (PCF) platform 🚀📋",
                        "Designed and developed AWS Serverless application for EagleView that integrates Salesforce FSL with Twilio services. 📂🔍",
                        "Developed ETL application to transform and migrate the data from OrientDB to MongoDB. 🐞✅",
                    ]
                }
            ]
        },
         {
            orgLink: "https://www.techurate.com/",
            orgLogoPath: AssetPaths.WORK_TECHURATE_LOGO,
            orgName: "Techurate",
            positions: [
                {
                    positionName: "Software Developer",
                    duration: "Jan 2017 - Sept 2020",
                    location: "Bengaluru, KA",
                    locationType: "Office",
                    jobType: "Full-time",
                    workPoints: [
                        "Worked on migration of the monolithic application into microservices architecture by breaking down spring mvc application into SpringBoot microservices modules based on domain driven design. 🚀📋",
                        "Implemented payment and account services for NBS and NFC banks using Java, SpringBoot, REST, SOAP, and OracleDB by integrating with Flexcube core banking services to handle secure retail and corporate payment transactions. 📂🔍",
                    ]
                }
            ]
        }
    ]
}

// Freenacing Experience
const FreelancingExperience: ExperienceSection = {
    experienceSectionTitle: "Freelancing",
    experiences: [
        {
            orgLink: "https://www.eagleview.com/",
            orgLogoPath: AssetPaths.WORK_EAGLE_VIEW_LOGO,
            orgName: "EagleView",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2025",
                    location: "Rochester, NY",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "EagleView is a geospatial technology company that captures high-resolution aerial and oblique (side-angle) images using specialized aircraft to create precise 3D property models and measurement reports.📊",
                        "Engineered real-time Sales/Marketing analytics dashboards using AWS Redshift, S3, and Data Pipeline, cutting reporting latency by 70%, and architected an AWS serverless application integrating Salesforce FSL with Twilio to automate customer support communication, reducing manual effort for EagleView 🚀",
                    ]
                }
            ]
        }
    ]
}

// Community Involvement
const CommunityInvolvement: ProjectSection = {
    sectionTitle: "Community Involvement",
    entities: [
        
    ]
}

// Achievement
const AchievementInvolvement: ProjectSection = {
    sectionTitle: "Achievements",
    entities: [
        
    ]
}

// Degrees
const BachelorsDegree: EducationSection = {
    degreeName: "Bachelor of Engineering",
    majorName: "Computer Science Engineering",
    duration: "Sept 2012 - June 2016",
    universityName: "Visvesvaraya Technological University (VTU)",
    campusName: "RGIT",
    logoImagePath: AssetPaths.EDUCATION_VTU_LOGO,
    gpa: "6.9 / 7.0",
    websiteLink: "https://www.vtu.ac.in/",
    studyPoints: [
        "Studied foundational subjects like Data Structures, Database Management Systems, Discrete Mathematics, and Operating Systems, building a strong base in computer science. 🧠💻",
        "Explored Object-Oriented Programming, Software Engineering, Computer Networks, and Microprocessor & Interfacing, bridging software development with hardware understanding. ⚙️",
        "Gained insights into Big Data Analytics, Artificial Intelligence, Data Mining, and Data Visualization, equipping skills for modern computing challenges. 🚀📊",
    ]
}

const MastersDegree: EducationSection = {
    degreeName: "Pre University College",
    majorName: "Electronics",
    duration: "May 2010 - Mar 2012",
    universityName: "Karnataka School Examination and Assessment Board (KSEAB)",
    campusName: "St. Joseph's College",
    logoImagePath: AssetPaths.EDUCATION_STJOSEPHS_LOGO,
    gpa: "6.7 / 7.0",
    websiteLink: "https://sjpuc.edu.in/",
    studyPoints: [
        "Built expertise in Security Principles, Network Infrastructure, and Risk Management, laying a solid foundation in cybersecurity fundamentals. 🔐",
        "Gained deep knowledge in Security Architecture, Network Security, and Critical Infrastructure Protection, alongside insights into Cyber Criminal Behavior and Australian Cyber Law. ⚙️🛡️",
        "Developed strategic skills through Consultancy, Enterprise Security, and hands-on labs experience with tech-giants including Cisco and FortiGate. 🚀",
    ]
}



export const AppConfig = {
    loaderSplashAnimation: false,        // enable or disable splash screen at the initialization of website
    logoName: "Kishore A",         // Signature font logo name in header
    name: "Kishore A",             // your name
    emailId: "kishorea0323@gmail.com",  // your email id

    // Google Form Contact Link
    googleFormContactLink: "https://forms.gle/82yYrSP4hkFyCPZe9",

    // Home page
    professionalTitle: "Development | Cyber Security | Freelancing",
    professionalSummary: "A results-driven software engineer with expertise in full-stack development of high-quality user-centric solutions in agile environments.",
    githubProfile: "https://github.com/kishore0323",              // Your github profile link
    portfolioRepository: "https://github.com/kishore0323/Angular-Master-Portfolio",        // Your portfolio repository link
    socialMedia: SocialMediaLinks,      // use from above
    aboutMe: [                          // all the sections you want to show under "What I do?". 
        FullstackSection,
        CloudSection,
        DigitalSolutionSection,
    ],

    // Projects page
    projectsPageTitle: "Projects & Freelancing",    // Title of projects page
    projectsPageDescription: "My projects leverage a diverse range of cutting-edge technology tools. I specialize in building data science solutions and seamlessly deploying them as web applications using robust cloud infrastructure.",
    projectSections: [                  // Define and add a custom section if needed
        PersonalProjects,
        FreelancingProjects
    ],

    // Experience page
    experiencePageTitle: "My Works, Internships and Freelancing",
    experiencePageDescription: "💼 From Corporate Giants to Creative Freelance Projects: A journey through internships, corporate, and helping local businesses.",
    experienceSections: [               // Define and add a custom section if needed
        JobExperience,
        FreelancingExperience,
    ],

    // Education page
    educationPageTitle: "Degrees and Qualifications",
    educationPageDescription: "🎓 A Journey of Continuous Learning: Building Skills, Solving Problems, and Shaping the Future 🌟",
    educationSections: [
        MastersDegree,
        BachelorsDegree,
    ],


    // Achievements Page
    achievementsPageTitle: "Achievements, Participation and Community Involvement",
    achievementsPageDescription: "🚀 Milestones, Contributions & Impact: Driving Innovation, Engaging Communities, and Making a Difference 🌍",
    achievementsSections: [
        AchievementInvolvement,
        CommunityInvolvement,
    ],
}

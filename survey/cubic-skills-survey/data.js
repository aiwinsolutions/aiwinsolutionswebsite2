const SKILLS_DATA = {
  "Competency": {
    "HW Engineering": {
      "Device Integration & Diagnostics": [
        "Hardware Diagnostics & Telemetry",
        "Peripheral Integration (NFC, Contactless, Sensors)",
        "Interface Protocols (SPI, I2C, UART)",
        "OTA Firmware Updates",
        "Field Device Troubleshooting",
        "Serial & Network Protocol Integration",
        "Device Configuration Management",
        "Integration with Back-Office Systems",
        "Diagnostic Log Analysis",
        "Remote Device Monitoring"
      ],
      "Embedded Systems Engineering": [
        "Firmware Development",
        "Embedded C/C++ Development",
        "RTOS Configuration & Optimization",
        "Device Driver Development",
        "Hardware-Software Integration",
        "Bootloader Development",
        "Memory Management (Embedded)",
        "Interrupt Handling & Timing Optimization",
        "Low-Power System Design",
        "Embedded Security Implementation"
      ],
      "Hardware Design & Architecture": [
        "Digital Circuit Design",
        "Analog Circuit Design",
        "PCB Design & Layout",
        "Microcontroller & SoC Architecture",
        "Signal Integrity Analysis",
        "Power Electronics Design",
        "High-Speed Interface Design",
        "FPGA Design & Programming",
        "Hardware Architecture Documentation",
        "Component Selection & Trade Studies"
      ],
      "Hardware Verification & Validation": [
        "Hardware Test Planning",
        "Environmental & Stress Testing",
        "Hardware-in-the-Loop Testing",
        "Compliance & Standards Testing",
        "Failure Analysis & Debugging",
        "Thermal Testing & Analysis",
        "EMI/EMC Testing",
        "Regression Testing (Hardware)",
        "Prototype Validation Testing",
        "Test Automation for Hardware"
      ],
      "Reliability & Safety Engineering": [
        "Reliability Modeling & MTBF Analysis",
        "Safety-Critical System Design",
        "Root Cause Analysis (RCA)",
        "Risk & Hazard Analysis (FMEA, FTA)",
        "Regulatory Compliance (EMC, CE, UL)",
        "Redundancy & Failover Design",
        "Lifecycle & Obsolescence Management",
        "Safety Certification Processes",
        "Quality Assurance Processes (Hardware)",
        "Field Failure Analysis"
      ]
    },
    "IT Infra and App Ops": {
      "Application Operations & Support": [
        "Production Application Support",
        "Release & Deployment Management",
        "Monitoring & Observability",
        "Batch & Job Scheduling Management",
        "Performance Tuning & Optimization",
        "Application Configuration Management",
        "Log Analysis & Troubleshooting",
        "Patch & Upgrade Management",
        "Environment Management (Dev/Test/Prod)",
        "End-User Support Escalation"
      ],
      "Devops & Reliability Engineering": [
        "Infrastructure as Code (Terraform, CloudFormation)",
        "CI/CD Pipeline Management",
        "Containerization (Docker, Kubernetes)",
        "Site Reliability Engineering (SRE) Practices",
        "Automation & Scripting (Python, Bash, PowerShell)",
        "Release Automation",
        "Blue/Green & Canary Deployments",
        "Observability Engineering",
        "Chaos Engineering",
        "Platform Engineering Practices"
      ],
      "Infrastructure Engineering": [
        "Cloud Infrastructure (AWS/Azure/GCP)",
        "Network Engineering & Administration",
        "Server & Virtualization Management",
        "Storage & Backup Management",
        "Disaster Recovery & Business Continuity",
        "Infrastructure Monitoring & Alerting",
        "Hybrid Cloud Architecture",
        "Load Balancing & Traffic Management",
        "Infrastructure Security Hardening",
        "Data Center Operations"
      ],
      "It Governance & Security Operations": [
        "Vulnerability Management",
        "IT Controls & Compliance",
        "Access & Identity Management",
        "Security Monitoring & Incident Response",
        "Risk Assessment & Mitigation",
        "Audit & Regulatory Compliance",
        "Data Protection & Encryption",
        "Policy & Standards Development",
        "Business Continuity Planning",
        "Third-Party Risk Management"
      ],
      "It Service Management": [
        "Change Management",
        "Incident management",
        "Problem management",
        "Knowledge management",
        "Service level management",
        "Availability management",
        "Capacity management",
        "Configuration Management (CMDB)",
        "Major Incident Management",
        "Service Request Management"
      ]
    },
    "Software Engineering": {
      "Advice And Guidance": [
        "Consultancy",
        "Specialist advice",
        "Methods and tools"
      ],
      "Change Analysis": [
        "Business situation analysis",
        "Feasibility assessment",
        "Requirements definition and management",
        "Business modelling",
        "User acceptance testing"
      ],
      "Change Implementation": [
        "Portfolio management",
        "Program management",
        "Project management",
        "Portfolio, program and project support",
        "Delivery management"
      ],
      "Change Planning": [
        "Business process improvement",
        "Organizational change enablement",
        "Organizational capability development",
        "Organization design and implementation",
        "Job analysis and design",
        "Organizational change management"
      ],
      "Computational Science": [
        "Scientific modelling",
        "Numerical analysis",
        "High-performance computing"
      ],
      "Content Management": [
        "Content design and authoring",
        "Content publishing",
        "Knowledge management",
        "Graphic design"
      ],
      "Data And Analytics": [
        "Data management",
        "Data modelling and design",
        "Database design",
        "Data analytics",
        "Data science",
        "Machine learning",
        "Business intelligence",
        "Data engineering",
        "Data visualization"
      ],
      "Data And Records Operations": [
        "Records management",
        "Analytical classification and coding",
        "Database administration"
      ],
      "Financial And Value Management": [
        "Financial management",
        "Investment appraisal",
        "Benefits management",
        "Budgeting and forecasting",
        "Financial analysis",
        "Cost management",
        "Demand management",
        "Measurement"
      ],
      "Governance, Risk And Compliance": [
        "Governance",
        "Risk management",
        "Artificial intelligence (AI) and data ethics",
        "Audit",
        "Quality management",
        "Quality assurance"
      ],
      "Marketing": [
        "Marketing management",
        "Market research",
        "Brand management",
        "Marketing campaign management",
        "Customer engagement and loyalty",
        "Digital marketing"
      ],
      "People Management": [
        "Performance management",
        "Employee experience",
        "Organizational facilitation",
        "Professional development",
        "Workforce planning",
        "Resourcing"
      ],
      "Sales And Bid Management": [
        "Bid/proposal management",
        "Selling",
        "Sales support"
      ],
      "Security And Privacy": [
        "Information security",
        "Information assurance",
        "Threat intelligence",
        "Information and data compliance",
        "Vulnerability research"
      ],
      "Security Services": [
        "Identity and access management",
        "Security operations",
        "Vulnerability assessment",
        "Digital forensics",
        "Cybercrime investigation",
        "Offensive cyber operations",
        "Penetration testing"
      ],
      "Service Management": [
        "Incident management",
        "Problem management",
        "Service level management",
        "Service catalogue management",
        "Availability management",
        "Continuity management",
        "Capacity management",
        "Change control",
        "Asset management",
        "Service acceptance"
      ],
      "Skills Management": [
        "Learning and development management",
        "Learning design and development",
        "Learning delivery",
        "Competency assessment",
        "Certification scheme operation",
        "Teaching",
        "Subject formation"
      ],
      "Stakeholder Management": [
        "Sourcing",
        "Supplier management",
        "Contract management",
        "Stakeholder relationship management",
        "Customer service support",
        "Business administration"
      ],
      "Strategy And Planning": [
        "Information Management",
        "Strategic planning",
        "Information systems coordination",
        "Enterprise and business architecture",
        "Solution architecture",
        "Innovation management",
        "Emerging technology monitoring",
        "Formal research",
        "Sustainability"
      ],
      "Systems Development": [
        "Functional testing",
        "Product management",
        "Systems development management",
        "Systems and software lifecycle engineering",
        "Systems design",
        "Software design",
        "Network design",
        "Infrastructure design",
        "Hardware design",
        "Programming/software development",
        "Systems integration and build",
        "Non-functional testing",
        "Process testing",
        "Software configuration",
        "Real-time/embedded systems development",
        "Safety engineering",
        "Safety assessment",
        "Radio frequency engineering",
        "Animation development"
      ],
      "Technology Management": [
        "Configuration Management",
        "Technology service management",
        "Application support",
        "Infrastructure operations",
        "System software administration",
        "Network support",
        "Systems installation and removal",
        "Release management",
        "Storage management",
        "Facilities management",
        "Deployment"
      ],
      "User Centered Design": [
        "User research",
        "Customer experience",
        "Accessibility and inclusion",
        "User experience analysis",
        "User experience design",
        "User experience evaluation"
      ]
    },
    "Systems Engineering": {
      "Core": [
        "Capability Engineering",
        "Critical Thinking",
        "General Engineering",
        "Lifecycles",
        "Systems Modeling & Analysis",
        "Systems Thinking"
      ],
      "Management": [
        "Acquisition & Supply",
        "Business & Enterprise Integration",
        "Concurrent Engineering",
        "Configuration Management",
        "Decision Management",
        "Information Management",
        "Monitoring & Control",
        "Planning",
        "Risk & Opportunity Management"
      ],
      "Professional": [
        "Coaching & Mentoring",
        "Communications",
        "Emotional Intelligence",
        "Ethics & Professionalism",
        "Facilitation",
        "Negotiation",
        "Team Dynamics",
        "Technical Leadership"
      ],
      "Systems Context": [
        "Principal and Relevant Systems",
        "Relevant Domains & Technologies",
        "System of Systems Engineering",
        "System’s Concept of Operations"
      ],
      "Technical": [
        "Cybersecurity",
        "Integration",
        "Interfaces",
        "Requirements Definition",
        "Retirement",
        "Systems Architecting",
        "Transition",
        "Utilization & Support",
        "Validation",
        "Verification",
        "Design For…"
      ]
    },
    "V&V Testing": {
      "Agile Testing": [
        "Continuous Testing",
        "Shift-Left Testing",
        "Agile Principles",
        "Test-Driven Development"
      ],
      "Automation": [
        "Automation Strategy",
        "Framework Design",
        "CI/CD Integration",
        "Scripting",
        "Tool Selection"
      ],
      "Non-Functional": [
        "Performance Testing",
        "Reliability Testing",
        "Security Testing",
        "Usability Testing",
        "Compatibility Testing"
      ],
      "Test Design": [
        "Exploratory Testing",
        "Requirements Analysis",
        "Equivalence Partitioning",
        "Boundary Value Analysis",
        "Decision Table Testing",
        "State Transition Testing",
        "Use Case Testing"
      ],
      "Test Management": [
        "Defect Management",
        "Risk-Based Testing",
        "Stakeholder Communication",
        "Test Planning",
        "Estimation",
        "Metrics & Reporting"
      ],
      "Testing Foundations": [
        "Testing Principles",
        "SDLC Integration",
        "Static Testing",
        "Test Levels",
        "Test Types"
      ],
      "Tools": [
        "Data management",
        "Test Management Tools",
        "Defect Tracking",
        "Version Control",
        "Environment Setup"
      ]
    }
  },
  "SME": {
    "General": {
      "Core Platforms": [
        "CMC",
        "NIS"
      ],
      "Customer & Account Management": [
        "CMS – Customer Management System",
        "CXS – Customer eXtended Service",
        "MSD CRM – Microsoft Dynamics CRM",
        "OAM – OneAccount Manager",
        "OMS – Order Management System",
        "ProdCat – Product Catalog"
      ],
      "Financial & Clearing": [
        "CCH – Central ClearingHouse",
        "FRM – Financial Reconciliation Manager",
        "MSD FO – Finance",
        "MSD FO – IMS"
      ],
      "Its Experience": [
        "Intelligent Congestion Management Program (ICMP)",
        "Traffic Management Platform (TMP)",
        "Product - Apollo",
        "Product - Themis",
        "Product - Gridsmart",
        "Tolling Systems"
      ],
      "Legacy Solutions": [
        "AFC - Mobile",
        "AFC - Payments",
        "CRM - Pivotal",
        "CRM - SalesForce",
        "Ventra2 Backoffice",
        "LA Legacy"
      ],
      "Notifications & Engagement": [
        "CNG – Cubic Notification Gateway"
      ],
      "Payments & Tokenization": [
        "ABP – Account-Based Processor",
        "CPA – Cubic Payment Application",
        "EMV – Cubic Payment Application",
        "IFD – Intelligent Fraud Detection",
        "PAL – Payment Abstraction Layer",
        "VTM – Virtual Token Manager (Account-Based)",
        "VTM – Virtual Token Manager (Card-Based)"
      ],
      "Program Experience": [
        "San Francisco Clipper",
        "Los Angeles Metro",
        "Chicago Ventra 3",
        "Vancouver",
        "Minneapolis Metro Transit",
        "Boston MBTA",
        "New York OMNY",
        "NJ PATCO",
        "New Jersey / New York PATH",
        "Philadelphia SEPTA",
        "Miami",
        "Baltimore",
        "Washington WMATA",
        "London TfL",
        "Sydney TfNSW",
        "Brisbane NGTS",
        "Tasmania Metro TAS",
        "New Zealand NTS",
        "Singapore LTA"
      ]
    }
  },
  "Technical": {
    "General": {
      "Back-End Engineering": [
        "Java",
        "C#",
        "Python",
        "Node.js",
        "Go",
        "RESTful API Design",
        "GraphQL",
        "Authentication & Authorization (OAuth2, JWT)"
      ],
      "Cloud & Infrastructure": [
        "AWS",
        "Azure",
        "Google Cloud Platform",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Kubernetes",
        "Docker",
        "CI/CD Pipelines",
        "Cloud Networking"
      ],
      "Data Engineering & Analytics": [
        "SQL",
        "NoSQL Databases (MongoDB, Cassandra)",
        "Apache Kafka",
        "Apache Spark",
        "Power BI",
        "Tableau",
        "ETL / ELT Pipelines",
        "Data Warehousing (Snowflake, Redshift, BigQuery)",
        "Real-Time Data Processing"
      ],
      "Embedded & Hardware Engineering": [
        "C / C++",
        "Embedded Linux",
        "RTOS",
        "Firmware Development",
        "Device Drivers",
        "Hardware/Software Integration",
        "Hardware Diagnostics & Telemetry"
      ],
      "Front-End Engineering": [
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "Angular",
        "Vue.js",
        "HTML5 / CSS3",
        "Web Accessibility (WCAG / ADA)",
        "State Management (Redux, NgRx, MobX)",
        "UI Performance Optimization"
      ],
      "Machine Learning & Ai": [
        "Python (ML Stack)",
        "R",
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
        "Anomaly Detection",
        "Fraud Detection Models",
        "Time Series Analysis",
        "MLOps / Model Deployment",
        "Feature Engineering"
      ],
      "Payments & Transaction Processing": [
        "ISO 8583",
        "EMV (Contact & Contactless)",
        "Transaction Clearing & Settlement Logic",
        "Reconciliation Engine Design",
        "PCI-DSS Compliance",
        "Tokenization & Encryption",
        "High-Volume Transaction Processing",
        "Exception Handling & Dispute Logic"
      ],
      "Systems Integration": [
        "Middleware Platforms",
        "API Integration",
        "Legacy System Integration",
        "Message Queues (RabbitMQ, ActiveMQ)",
        "Data Mapping & Transformation",
        "Batch Processing Systems",
        "Third-Party Vendor Integration",
        "Transit Agency System Interfaces"
      ]
    }
  }
};

const JOB_FAMILIES = ["General", "HW Engineering", "IT Infra and App Ops", "Software Engineering", "Systems Engineering", "V&V Testing"];

const PROFICIENCY_LEVELS = [
  { level: 1, summary: "Awareness", description: "Awareness in this area, but limited experience", signals: "Exposed to the skill through training or shadowing; can discuss basic concepts but has not applied skill independently" },
  { level: 2, summary: "Supervised Practitioner", description: "Knowledge of the skill, but requires guidance and supervision to perform tasks", signals: "Has applied skill in a limited or controlled setting with support from others" },
  { level: 3, summary: "Practitioner", description: "Deep understanding of the skill and can perform complex tasks independently", signals: "Regularly applies the skill independently on projects to high success" },
  { level: 4, summary: "Lead Practitioner", description: "Complete and comprehensive mastery of the skill and can lead, innovate, and train others", signals: "Serves as a go-to resource on skill, mentors others, sets best practices, and leads workstreams requiring skill" },
  { level: 5, summary: "Expert", description: "Expert", signals: "Recognized authority on skill, such as having published materials, presented externally, or defined standards" }
];
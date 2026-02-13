const SKILLS_DATA = {
  "Competency": {
    "System Engineering": {
      "Core Systems Engineering Foundations": [
        "Core Systems Engineering",
        "Systems Context",
        "Principal and Relevant Systems",
        "Relevant Domains & Technologies",
        "System of Systems Engineering",
        "Systems Thinking",
        "General Engineering",
        "Critical Thinking",
        "Systems Modeling & Analysis"
      ],
      "Lifecycle & Capability Engineering": [
        "System’s Concept of Operations",
        "Lifecycles",
        "Capability Engineering",
        "Design For… (DFx)",
        "Transition",
        "Utilization & Support",
        "Retirement"
      ],
      "Requirements, Architecture & Design": [
        "Requirements Definition",
        "Technical Requirements Definition & Analysis",
        "Systems Architecting",
        "Logical Decomposition",
        "Interfaces",
        "Systems Modeling & Analysis (Design & Architecture)"
      ],
      "Integration, Verification & Validation": [
        "Integration",
        "Verification",
        "Validation",
        "Product Verification and Validation"
      ],
      "Specialty Engineering Disciplines": [
        "Lifecycle Cost Analysis",
        "Electromagnetic Compatibility",
        "Environmental Engineering / Impact Analysis",
        "Logistics Engineering",
        "Manufacturing and Producibility Analysis",
        "Reliability, Availability & Maintainability",
        "Resilience Engineering",
        "System Safety Engineering",
        "System Security Engineering",
        "Cybersecurity",
        "Training Needs Analysis",
        "Usability / Human Systems Integration",
        "Value Engineering"
      ],
      "SE Management & Governance": [
        "Planning",
        "Monitoring & Control",
        "Risk & Opportunity Management",
        "Decision Management",
        "Concurrent Engineering",
        "Business & Enterprise Integration",
        "Acquisition & Supply",
        "Information Management",
        "Configuration Management"
      ],
      "Project Controls & Delivery": [
        "Project Assessment & Control",
        "Schedule Management",
        "Resource Management",
        "Earned Value Management",
        "Leading Indicators",
        "Lagging Indicators"
      ],
      "Technical Leadership & Collaboration": [
        "Technical Leadership",
        "Negotiation",
        "Team Dynamics",
        "Facilitation",
        "Emotional Intelligence",
        "Coaching & Mentoring",
        "Communications"
      ],
      "Professional & Ethical Practice": [
        "Ethics & Professionalism"
      ],
      "Chief Systems Engineer – Technical": [
        "Technical Planning",
        "Technical Requirements Definition & Analysis",
        "Logical Decomposition",
        "Product Verification and Validation",
        "Product Transition",
        "Lifecycle Management",
        "Technical Risk Management",
        "Systems Thinking (CSE)",
        "System Complexity",
        "Big Picture Thinking",
        "Abstraction",
        "Paradoxical Mindset"
      ],
      "Chief Systems Engineer – Enabling": [
        "Developing People",
        "Leading People",
        "Thinking Critically",
        "Building Trust",
        "Communicating Effectively",
        "Establishing & Maintaining Stakeholder Relationships",
        "Influencing Others",
        "Developing Strategy and Vision",
        "Fostering Agility",
        "Promoting Innovation",
        "Building Government Acumen",
        "Possessing a Macro Perspective"
      ],
      "Product & Platform Knowledge – Back Office": [
        "Account Based (ABP, Fare Manager)",
        "B2B",
        "Payment Processing",
        "Customer Services",
        "Operational Reporting",
        "Device Monitoring & Management",
        "Data Management & Analytics",
        "Financial Accounting & Reporting",
        "Fraud & Risk Management",
        "Open APIs",
        "Token Lifecycle Management",
        "Virtual Point of Sale",
        "Fares Engine"
      ],
      "Supporting Systems & Infrastructure": [
        "System Utilities",
        "On Board Infrastructure",
        "Platform Infrastructure",
        "Central Infrastructure"
      ],
      "Product Knowledge – Channels & Mobile": [
        "Customer Website",
        "Retail Website",
        "IVR",
        "Mobile Inspection",
        "Mobile Retail",
        "Mobile Traveler",
        "Mobile Wallets"
      ],
      "Product Knowledge – Devices & Components": [
        "Driver Console Units (DCU3/DCU4)",
        "HSM / Key Encryption",
        "Gates & Fare Gates",
        "Validators",
        "Inspection Devices",
        "Retail Devices",
        "POS",
        "TVMs",
        "Fareboxes",
        "Readers (TR1–TR4)"
      ],
      "Program & Market Experience": [
        "AFC End-to-End Program Experience",
        "Named City / Authority Deployments",
        "ITS Programs",
        "Legacy Solutions"
      ],
      "Methodologies & Ways of Working": [
        "MBSE",
        "SAFe",
        "Agile Systems Engineering",
        "Lean Systems Engineering"
      ],
      "Certifications & Credentials": [
        "INCOSE – CAB",
        "INCOSE – ASEP",
        "INCOSE – CSEP",
        "INCOSE – ESEP"
      ]
    },
    "Software Engineering": {
      "Core Software Engineering Foundations": [
        "Software Engineering Principles",
        "Problem Decomposition",
        "Algorithmic Thinking",
        "Data Structures",
        "Complexity Analysis",
        "Programming Paradigms (OOP, FP, Procedural)",
        "Software Design Principles (SOLID, DRY, KISS)",
        "Code Quality & Maintainability",
        "Debugging & Troubleshooting"
      ],
      "Requirements & Software Design": [
        "Requirements Analysis",
        "User Stories & Use Cases",
        "Functional Design",
        "Non-Functional Requirements",
        "API Design",
        "Data Modeling",
        "Software Architecture",
        "Design Patterns",
        "Trade-off Analysis"
      ],
      "Software Architecture & System Design": [
        "Monolithic Architecture",
        "Layered Architecture",
        "Microservices Architecture",
        "Event-Driven Architecture",
        "Distributed Systems Design",
        "Scalability Design",
        "Fault Tolerance",
        "Performance Engineering",
        "Interoperability & Integration"
      ],
      "Programming & Implementation": [
        "Backend Development",
        "Frontend Development",
        "Full-Stack Development",
        "API Implementation",
        "Database Development",
        "Asynchronous Programming",
        "Secure Coding Practices",
        "Refactoring",
        "Code Optimization"
      ],
      "Testing, Quality & Assurance": [
        "Unit Testing",
        "Integration Testing",
        "System Testing",
        "Regression Testing",
        "Test Automation",
        "Performance Testing",
        "Security Testing",
        "Test Strategy & Planning",
        "Defect Management"
      ],
      "DevOps, CI/CD & Operations": [
        "Continuous Integration",
        "Continuous Deployment",
        "Build & Release Management",
        "Infrastructure as Code",
        "Environment Management",
        "Monitoring & Logging",
        "Incident Management",
        "Reliability Engineering",
        "Operational Support"
      ],
      "Cloud, Platforms & Infrastructure": [
        "Cloud Computing Fundamentals",
        "Containerization",
        "Orchestration (e.g., Kubernetes concepts)",
        "Platform Architecture",
        "Identity & Access Management",
        "Networking Fundamentals",
        "Storage & Databases",
        "Cost Optimization",
        "Platform Security"
      ],
      "Data, Integration & APIs": [
        "API Management",
        "Data Integration",
        "Event Streaming",
        "Messaging Systems",
        "Data Persistence",
        "Data Quality",
        "Data Privacy",
        "Schema Management"
      ],
      "Security, Privacy & Compliance": [
        "Application Security",
        "Authentication & Authorization",
        "Secure Design",
        "Vulnerability Management",
        "Threat Modeling",
        "Privacy by Design",
        "Compliance Awareness",
        "Secure Operations"
      ],
      "Software Lifecycle & Delivery": [
        "Agile Software Development",
        "Scrum / Kanban Practices",
        "Iterative & Incremental Delivery",
        "Backlog Management",
        "Estimation & Planning",
        "Release Planning",
        "Change Management",
        "Technical Debt Management"
      ],
      "Technical Leadership & Collaboration": [
        "Technical Leadership",
        "Code Reviews",
        "Mentoring & Coaching",
        "Cross-functional Collaboration",
        "Stakeholder Communication",
        "Technical Decision Making",
        "Conflict Resolution",
        "Knowledge Sharing"
      ],
      "Professional Software Engineering Practice": [
        "Engineering Ethics",
        "Documentation & Knowledge Management",
        "Open-Source Awareness",
        "Regulatory Awareness",
        "Continuous Learning",
        "Time & Priority Management"
      ]
    },
    "V&V Testing": {
      "Core V&V Foundations": [
        "Verification & Validation Principles",
        "Difference Between Verification and Validation",
        "Test Engineering Fundamentals",
        "Quality Assurance vs Quality Control",
        "Test Process Models",
        "Risk-Based Testing",
        "Test Metrics & KPIs",
        "Defect Lifecycle Management"
      ],
      "Requirements & Test Design": [
        "Requirements Analysis for Testability",
        "Test Case Design",
        "Test Scenarios & Use Cases",
        "Boundary & Equivalence Analysis",
        "Negative & Edge Case Testing",
        "Traceability (Requirements ↔ Tests)",
        "Coverage Analysis",
        "Test Data Design"
      ],
      "Test Planning & Management": [
        "Test Strategy Definition",
        "Test Planning",
        "Test Estimation",
        "Test Scheduling",
        "Test Environment Planning",
        "Entry & Exit Criteria",
        "Test Readiness Reviews",
        "Test Reporting"
      ],
      "Functional & System Testing": [
        "Functional Testing",
        "System Testing",
        "End-to-End Testing",
        "Integration Testing",
        "Regression Testing",
        "Exploratory Testing",
        "User Acceptance Support",
        "Operational Scenario Testing"
      ],
      "Non-Functional Testing": [
        "Performance Testing",
        "Load Testing",
        "Stress Testing",
        "Reliability Testing",
        "Availability Testing",
        "Scalability Testing",
        "Security Testing",
        "Resilience & Failover Testing",
        "Usability Testing",
        "Accessibility Testing"
      ],
      "Automation & Tooling": [
        "Test Automation Strategy",
        "Automated Test Design",
        "UI Test Automation",
        "API Test Automation",
        "Integration Test Automation",
        "Test Framework Development",
        "Continuous Testing",
        "Test Data Automation"
      ],
      "Integration, Interfaces & Data Validation": [
        "Interface Testing",
        "Data Validation",
        "Message Validation",
        "API Contract Testing",
        "Batch & File-Based Testing",
        "Event & Streaming Validation",
        "Third-Party Integration Testing"
      ],
      "Hardware, Embedded & Field Testing": [
        "Hardware Verification",
        "Firmware Testing",
        "Device Integration Testing",
        "Environmental Testing",
        "Electromagnetic Compatibility Testing",
        "Field & On-Site Testing",
        "Installation & Commissioning Testing"
      ],
      "Test Environments & Test Data": [
        "Environment Configuration",
        "Test Environment Management",
        "Test Data Management",
        "Synthetic Data Generation",
        "Data Privacy in Testing",
        "Environment Parity & Drift Management"
      ],
      "Defect, Quality & Assurance Management": [
        "Defect Triage",
        "Root Cause Analysis",
        "Quality Gates",
        "Release Readiness Assessment",
        "Continuous Improvement",
        "Audit & Compliance Support"
      ],
      "Compliance, Safety & Regulatory Testing": [
        "Compliance Testing",
        "Safety-Critical Testing",
        "Security Compliance Testing",
        "Payment & Financial Compliance Testing",
        "Standards-Based Testing",
        "Evidence & Audit Artifacts"
      ],
      "DevOps & Continuous Testing": [
        "CI/CD Pipeline Integration",
        "Shift-Left Testing",
        "Shift-Right Testing",
        "Test Environment Provisioning",
        "Monitoring & Observability Validation",
        "Production Validation & Smoke Testing"
      ],
      "V&V Leadership & Governance": [
        "Test Governance",
        "V&V Strategy",
        "Test Risk Management",
        "Stakeholder Communication",
        "Vendor & Third-Party Testing",
        "Test Capability Maturity",
        "Mentoring & Coaching Test Teams"
      ]
    },
    "HW Engineering": {
      "Core Hardware Engineering Foundations": [
        "Hardware Engineering Principles",
        "Electronic Systems Fundamentals",
        "Digital & Analog Electronics",
        "Power Systems Fundamentals",
        "Embedded Hardware Basics",
        "Hardware Architecture Concepts",
        "Systems Thinking for Hardware",
        "Hardware Design Trade-offs",
        "Hardware Documentation & Schematics"
      ],
      "Requirements & Hardware Design": [
        "Hardware Requirements Definition",
        "Environmental Requirements Analysis",
        "Regulatory & Compliance Requirements",
        "Electrical Design",
        "Mechanical Design",
        "Electro-Mechanical Integration",
        "Power Budgeting",
        "Thermal Design",
        "Human Factors in Hardware Design",
        "Design for Maintainability"
      ],
      "Embedded & Control Hardware": [
        "Microcontroller-Based Design",
        "Processor & SoC Selection",
        "Memory & Storage Design",
        "Peripheral Interface Design",
        "Sensor Integration",
        "Actuator & Motor Control",
        "Hardware–Firmware Co-Design",
        "Boot & Secure Startup Hardware"
      ],
      "Interfaces, Communications & Connectivity": [
        "Hardware Interface Design",
        "Serial & Parallel Interfaces",
        "Network Interface Hardware",
        "Contactless & RFID Hardware",
        "Secure Element & SAM Integration",
        "Peripheral & Device Connectivity",
        "External System Interfacing"
      ],
      "Payment, Security & Trust Hardware": [
        "Secure Hardware Design",
        "Hardware-Based Cryptography",
        "Key Management Hardware",
        "Tamper Detection & Resistance",
        "Secure Enclosures",
        "Compliance with Payment Standards",
        "Trusted Execution Environments"
      ],
      "Mechanical & Industrial Design": [
        "Industrial Design for Public Use",
        "Enclosure Design",
        "Environmental Sealing (IP Ratings)",
        "Structural Integrity",
        "Vibration & Shock Resistance",
        "Thermal Management (Passive / Active)",
        "Accessibility & Ergonomics",
        "Materials Selection"
      ],
      "Manufacturing & Producibility": [
        "Design for Manufacturability (DFM)",
        "Design for Assembly (DFA)",
        "Design for Testability (DFT)",
        "Component Selection & Lifecycle",
        "Supply Chain Constraints",
        "Cost Optimization",
        "Prototyping & Pilot Builds",
        "Manufacturing Process Support"
      ],
      "Verification, Validation & Compliance": [
        "Hardware Verification Planning",
        "Electrical Verification",
        "Mechanical Verification",
        "Environmental Testing",
        "EMC / EMI Testing",
        "Safety Testing",
        "Compliance Certification Support",
        "Field Validation & Acceptance"
      ],
      "Deployment & Field Operations": [
        "Installation Planning",
        "Site Integration",
        "Power & Network Integration",
        "Commissioning",
        "Field Diagnostics",
        "Maintenance Procedures",
        "Hardware Replacement & Upgrades",
        "Decommissioning"
      ],
      "Reliability, Availability & Maintainability": [
        "Reliability Engineering",
        "Failure Mode Analysis",
        "Mean Time Between Failures (MTBF)",
        "Maintainability Analysis",
        "Spare Parts Strategy",
        "Obsolescence Management",
        "Lifecycle Support Planning"
      ],
      "Safety, Environmental & Regulatory": [
        "System Safety Engineering",
        "Electrical Safety",
        "Environmental Impact Considerations",
        "Accessibility Compliance",
        "Public Infrastructure Regulations",
        "Regional & International Standards",
        "Audit & Regulatory Support"
      ],
      "Hardware Engineering Leadership & Collaboration": [
        "Hardware Technical Leadership",
        "Cross-Discipline Collaboration",
        "Supplier & Vendor Management",
        "Engineering Reviews & Gateways",
        "Risk & Issue Management",
        "Mentoring & Coaching",
        "Technical Communication"
      ]
    },
    "IT Infra and App Ops": {
      "Core IT Operations Foundations": [
        "IT Operations Fundamentals",
        "Production Support Mindset",
        "Availability & Reliability Concepts",
        "Incident, Problem & Change Awareness",
        "Operations Readiness & Stability"
      ],
      "Environment Setup & Transition (D&B)": [
        "Infrastructure Setup Support",
        "Application Deployment Support",
        "Cloud Environment Provisioning",
        "On-Premises Environment Setup",
        "Network & Connectivity Setup",
        "Environment Segregation (Dev/Test/Prod)",
        "Go-Live & Cutover Support",
        "Transition to Operations"
      ],
      "Monitoring, Logging & Observability": [
        "Infrastructure Monitoring",
        "Application Monitoring",
        "System Health Dashboards",
        "Log Analysis",
        "Alert Correlation & Noise Reduction",
        "Performance & Capacity Monitoring"
      ],
      "Operations & Maintenance (O&M)": [
        "Day-to-Day Operational Support",
        "Preventive Maintenance",
        "Performance Tuning",
        "Configuration Changes",
        "Environment Stability Management",
        "Patch & Upgrade Execution"
      ],
      "Incident, Problem & Ticket Resolution": [
        "Incident Resolution (L2/L3)",
        "Ticket Investigation & Diagnosis",
        "Major Incident Technical Support",
        "Root Cause Analysis",
        "Problem Management",
        "Escalation Handling"
      ],
      "Application & Service Support": [
        "Application Restart & Recovery",
        "Defect Triage & Analysis",
        "Functional Issue Investigation",
        "Transaction & Batch Monitoring",
        "Integration & Interface Support"
      ],
      "Data & Integration Operations": [
        "API & Interface Monitoring",
        "Batch & Job Execution Support",
        "Data Flow Validation",
        "Data Reconciliation Support",
        "Third-Party System Coordination"
      ],
      "Security & Access Operations": [
        "Identity & Access Resolution",
        "Role & Permission Resolution",
        "Certificate & Key Management",
        "Vulnerability & Patch Management",
        "Security Incident Technical Support"
      ],
      "Backup, Recovery & Continuity": [
        "Backup & Restore Support",
        "Disaster Recovery Support",
        "Failover & High Availability Support",
        "Business Continuity Support"
      ],
      "Automation & Tooling": [
        "Operational Automation",
        "Diagnostic & Remediation Scripting",
        "Monitoring Tool Configuration",
        "Job Scheduling Tools",
        "Configuration Management Tools"
      ],
      "Release, Change & Configuration": [
        "Change Implementation",
        "Release & Deployment Support",
        "Configuration Management",
        "Rollback & Recovery Support"
      ],
      "Testing & Validation Support": [
        "Production Validation",
        "Smoke & Sanity Testing",
        "Post-Deployment Verification",
        "Defect Fix Verification"
      ],
      "Governance, Reporting & Compliance": [
        "SLA / OLA Contribution",
        "Operational Metrics & Reporting",
        "Audit & Compliance Evidence Support",
        "Operational Documentation"
      ],
      "Collaboration & Operations Leadership": [
        "Collaboration with Service Desk",
        "Coordination with Engineering Teams",
        "Vendor & Third-Party Coordination",
        "Knowledge Base & Runbooks",
        "Continuous Service Improvement"
      ]
    }
  },
  "SME": {
    "General": {
      "Core Platforms": [
        "CMC",
        "NIS"
      ],
      "Payments & Tokenization": [
        "ABP – Account-Based Processor",
        "CPA – Cubic Payment Application",
        "EMV – Cubic Payment Application",
        "PAL – Payment Abstraction Layer",
        "VTM – Virtual Token Manager (Account-Based)",
        "VTM – Virtual Token Manager (Card-Based)",
        "IFD – Intelligent Fraud Detection"
      ],
      "Financial & Clearing": [
        "CCH – Central ClearingHouse",
        "FRM – Financial Reconciliation Manager",
        "MSD FO – Finance",
        "MSD FO – IMS"
      ],
      "Customer & Account Management": [
        "OMS – Order Management System",
        "OAM – OneAccount Manager",
        "CMS – Customer Management System",
        "MSD CRM – Microsoft Dynamics CRM",
        "CXS – Customer eXtended Service",
        "ProdCat – Product Catalog"
      ],
      "Notifications & Engagement": [
        "CNG – Cubic Notification Gateway"
      ]
    }
  },
  "Technical": {
    "General": {
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
      "Data Engineering & Analytics": [
        "SQL",
        "NoSQL Databases (MongoDB, Cassandra)",
        "ETL / ELT Pipelines",
        "Apache Kafka",
        "Apache Spark",
        "Data Warehousing (Snowflake, Redshift, BigQuery)",
        "Power BI",
        "Tableau",
        "Real-Time Data Processing"
      ],
      "Machine Learning & AI": [
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
      "Embedded & Hardware Engineering": [
        "C / C++",
        "Embedded Linux",
        "RTOS",
        "Firmware Development",
        "Device Drivers",
        "Hardware/Software Integration",
        "Hardware Diagnostics & Telemetry"
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
      ]
    }
  }
};

const JOB_FAMILIES = [
  "General",
  "HW Engineering",
  "IT Infra and App Ops",
  "Software Engineering",
  "System Engineering",
  "V&V Testing"
];

const PROFICIENCY_LEVELS = [
  {
    "level": 1,
    "summary": "Awareness",
    "description": "Awareness in this area, but limited experience",
    "signals": "Exposed to the skill through training or shadowing; can discuss basic concepts but has not applied skill independently"
  },
  {
    "level": 2,
    "summary": "Supervised Practitioner",
    "description": "Knowledge of the skill, but requires guidance and supervision to perform tasks",
    "signals": "Has applied skill in a limited or controlled setting with support from others"
  },
  {
    "level": 3,
    "summary": "Practitioner",
    "description": "Deep understanding of the skill and can perform complex tasks independently",
    "signals": "Regularly applies the skill independently on projects to high success"
  },
  {
    "level": 4,
    "summary": "Lead Practitioner",
    "description": "Complete and comprehensive mastery of the skill and can lead, innovate, and train others",
    "signals": "Serves as a go-to resource on skill, mentors others, sets best practices, and leads workstreams requiring skill"
  },
  {
    "level": 5,
    "summary": "Expert",
    "description": "Expert",
    "signals": "Recognized authority on skill, such as having published materials, presented externally, or defined standards"
  }
];

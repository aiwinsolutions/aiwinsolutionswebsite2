const SKILLS_DATA = {
  "Competency": {
    "Systems Engineering": {
      "Systems Context": [
        "Principal and Relevant Systems",
        "Relevant Domains & Technologies",
        "System of Systems Engineering",
        "System’s Concept of Operations"
      ],
      "Core": [
        "Capability Engineering",
        "Critical Thinking",
        "General Engineering",
        "Lifecycles",
        "Systems Modeling & Analysis",
        "Systems Thinking"
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
      "Technical": [
        "Cybersecurity",
        "Design For…",
        "Integration",
        "Interfaces",
        "Requirements Definition",
        "Retirement",
        "Systems Architecting",
        "Transition",
        "Utilization & Support",
        "Validation",
        "Verification"
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
      ]
    },
    "Software Engineering": {
      "Strategy And Planning": [
        "Emerging technology monitoring",
        "Enterprise and business architecture",
        "Formal research",
        "Information management",
        "Information systems coordination",
        "Innovation management",
        "Solution architecture",
        "Strategic planning",
        "Sustainability"
      ],
      "Financial And Value Management": [
        "Benefits management",
        "Budgeting and forecasting",
        "Cost management",
        "Demand management",
        "Financial analysis",
        "Financial management",
        "Investment appraisal",
        "Measurement"
      ],
      "Security And Privacy": [
        "Information and data compliance",
        "Information assurance",
        "Information security",
        "Threat intelligence",
        "Vulnerability research"
      ],
      "Governance, Risk And Compliance": [
        "Artificial intelligence (AI) and data ethics",
        "Audit",
        "Governance",
        "Quality assurance",
        "Quality management",
        "Risk management"
      ],
      "Advice And Guidance": [
        "Consultancy",
        "Methods and tools",
        "Specialist advice"
      ],
      "Change Implementation": [
        "Delivery management",
        "Portfolio management",
        "Portfolio, program and project support",
        "Program management",
        "Project management"
      ],
      "Change Analysis": [
        "Business modelling",
        "Business situation analysis",
        "Feasibility assessment",
        "Requirements definition and management",
        "User acceptance testing"
      ],
      "Change Planning": [
        "Business process improvement",
        "Job analysis and design",
        "Organization design and implementation",
        "Organizational capability development",
        "Organizational change enablement",
        "Organizational change management"
      ],
      "Software Development": [
        "Animation development",
        "Card and Transaction encryption and security",
        "Card/Reader protocols and development",
        "EMV processing and certification",
        "Functional testing",
        "Hardware design",
        "Infrastructure design",
        "Network design",
        "Non-functional testing",
        "OS Drivers and Bord Firmware support development",
        "Process testing",
        "Product management",
        "Programming/software development",
        "Radio frequency engineering",
        "Real-time/embedded systems development",
        "Safety assessment",
        "Safety engineering",
        "Software configuration",
        "Software design",
        "Systems and software lifecycle engineering",
        "Systems design",
        "Systems development management",
        "Systems integration and build"
      ],
      "Data And Analytics": [
        "Business intelligence",
        "Data analytics",
        "Data engineering",
        "Data management",
        "Data modelling and design",
        "Data science",
        "Data visualization",
        "Database design",
        "Machine learning"
      ],
      "User Centered Design": [
        "Accessibility and inclusion",
        "Customer experience",
        "User experience analysis",
        "User experience design",
        "User experience evaluation",
        "User research"
      ],
      "Content Management": [
        "Content design and authoring",
        "Content publishing",
        "Graphic design",
        "Knowledge management"
      ],
      "Computational Science": [
        "High-performance computing",
        "Numerical analysis",
        "Scientific modelling"
      ],
      "Technology Management": [
        "Application support",
        "Configuration management",
        "Deployment",
        "Facilities management",
        "Infrastructure operations",
        "Network support",
        "Release management",
        "Storage management",
        "System software administration",
        "Systems installation and removal",
        "Technology service management"
      ],
      "Service Management": [
        "Asset management",
        "Availability management",
        "Capacity management",
        "Change control",
        "Continuity management",
        "Incident management",
        "Problem management",
        "Service acceptance",
        "Service catalogue management",
        "Service level management"
      ],
      "Security Services": [
        "Cybercrime investigation",
        "Digital forensics",
        "Identity and access management",
        "Offensive cyber operations",
        "Penetration testing",
        "Security operations",
        "Vulnerability assessment"
      ],
      "Data And Records Operations": [
        "Analytical classification and coding",
        "Database administration",
        "Records management"
      ],
      "People Management": [
        "Employee experience",
        "Organizational facilitation",
        "Performance management",
        "Professional development",
        "Resourcing",
        "Workforce planning"
      ],
      "Skills Management": [
        "Certification scheme operation",
        "Competency assessment",
        "Learning and development management",
        "Learning delivery",
        "Learning design and development",
        "Subject formation",
        "Teaching"
      ],
      "Stakeholder Management": [
        "Business administration",
        "Contract management",
        "Customer service support",
        "Sourcing",
        "Stakeholder relationship management",
        "Supplier management"
      ],
      "Sales And Bid Management": [
        "Bid/proposal management",
        "Sales support",
        "Selling"
      ],
      "Marketing": [
        "Brand management",
        "Customer engagement and loyalty",
        "Digital marketing",
        "Market research",
        "Marketing campaign management",
        "Marketing management"
      ]
    },
    "V&V Testing": {
      "Testing Foundations": [
        "SDLC Integration",
        "Static Testing",
        "Test Levels",
        "Test Types",
        "Testing Principles"
      ],
      "Test Design": [
        "Boundary Value Analysis",
        "Decision Table Testing",
        "Equivalence Partitioning",
        "Exploratory Testing",
        "Requirements Analysis",
        "State Transition Testing",
        "Use Case Testing"
      ],
      "Test Management": [
        "Defect Management",
        "Estimation",
        "Metrics & Reporting",
        "Risk-Based Testing",
        "Stakeholder Communication",
        "Test Planning"
      ],
      "Automation": [
        "AI/ML driven testing",
        "Automation Strategy",
        "CI/CD Integration",
        "Framework Design",
        "Scripting",
        "Test data management at scal",
        "Tool Selection"
      ],
      "Non-Functional": [
        "Accessibility testing",
        "Compatibility Testing",
        "Load testing",
        "Performance Testing",
        "Reliability Testing",
        "Security Testing",
        "Security testing",
        "Stress testing",
        "Usability Testing"
      ],
      "Agile Testing": [
        "Agile Principles",
        "Continuous Testing",
        "Shift-Left Testing",
        "Test-Driven Development"
      ],
      "Tools": [
        "Dashboard tools familiarity",
        "Data Management",
        "Defect Tracking",
        "Environment Setup",
        "Test Management Tools",
        "Test reporting",
        "Version Control"
      ]
    },
    "HW Engineering": {
      "Embedded Systems Engineering": [
        "Bootloader Development",
        "Device Driver Development",
        "Embedded C/C++ Development",
        "Embedded Security Implementation",
        "Firmware Development",
        "Hardware-Software Integration",
        "Interrupt Handling & Timing Optimization",
        "Low-Power System Design",
        "Memory Management (Embedded)",
        "RTOS Configuration & Optimization"
      ],
      "Hardware Design & Architecture": [
        "Analog Circuit Design",
        "Component Selection & Trade Studies",
        "Digital Circuit Design",
        "FPGA Design & Programming",
        "Hardware Architecture Documentation",
        "High speed designs",
        "High-Speed Interface Design",
        "Microcontroller & SoC Architecture",
        "PCB Design & Layout",
        "PCB fabrication process",
        "PCB layout knowledge",
        "PCB material selection",
        "Power Electronics Design",
        "Signal Integrity Analysis",
        "USB (designing/testing)"
      ],
      "Hardware Verification & Validation": [
        "Compliance & Standards Testing",
        "EMI/EMC Testing",
        "Environmental & Stress Testing",
        "Failure Analysis & Debugging",
        "Hardware Test Planning",
        "Hardware-in-the-Loop Testing",
        "Prototype Validation Testing",
        "Regression Testing (Hardware)",
        "Test Automation for Hardware",
        "Thermal Testing & Analysis"
      ],
      "Device Integration & Diagnostics": [
        "Device Configuration Management",
        "Diagnostic Log Analysis",
        "Field Device Troubleshooting",
        "Hardware Diagnostics & Telemetry",
        "Integration with Back-Office Systems",
        "Interface Protocols (SPI, I2C, UART)",
        "OTA Firmware Updates",
        "Peripheral Integration (NFC, Contactless, Sensors)",
        "Remote Device Monitoring",
        "Serial & Network Protocol Integration"
      ],
      "Reliability & Safety Engineering": [
        "Designing for harsh environments (Temp and shock/vibration)",
        "EMC design considerations",
        "Electrical safety considerations when designing",
        "Field Failure Analysis",
        "Lifecycle & Obsolescence Management",
        "Quality Assurance Processes (Hardware)",
        "Redundancy & Failover Design",
        "Regulatory Compliance (EMC, CE, UL)",
        "Reliability Modeling & MTBF Analysis",
        "Risk & Hazard Analysis (FMEA, FTA)",
        "Root Cause Analysis (RCA)",
        "Safety Certification Processes",
        "Safety-Critical System Design"
      ],
      "Manufacturing & Design Optimization": [
        "Component derating",
        "Design for Manufacture",
        "Design for Test",
        "Design to Cost"
      ],
      "Electronic Interfaces & Communication Protocols": [
        "Ethernet",
        "HDMI",
        "RS422/232",
        "SPI/I2C"
      ],
      "Electronic Component Engineering": [
        "PSU knowledge (maximum load)",
        "component knowledge (understanding specs)"
      ],
      "Electronics Assembly & Integration": [
        "Harness design",
        "Soldering for electronics"
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
        "IFD – Intelligent Fraud Detection",
        "PAL – Payment Abstraction Layer",
        "VTM – Virtual Token Manager (Account-Based)",
        "VTM – Virtual Token Manager (Card-Based)"
      ],
      "Financial & Clearing": [
        "CCH – Central ClearingHouse",
        "FRM – Financial Reconciliation Manager",
        "MSD FO – Finance",
        "MSD FO – IMS"
      ],
      "Customer & Account Management": [
        "CMS – Customer Management System",
        "CXS – Customer eXtended Service",
        "MSD CRM – Microsoft Dynamics CRM",
        "OAM – OneAccount Manager",
        "OMS – Order Management System",
        "ProdCat – Product Catalog"
      ],
      "Notifications & Engagement": [
        "CNG – Cubic Notification Gateway"
      ],
      "Program Experience": [
        "Baltimore",
        "Boston MBTA",
        "Brisbane NGTS",
        "Chicago Ventra 3",
        "London TfL",
        "Los Angeles Metro",
        "Miami",
        "Minneapolis Metro Transit",
        "NJ PATCO",
        "New Jersey / New York PATH",
        "New York OMNY",
        "New Zealand NTS",
        "Philadelphia SEPTA",
        "San Francisco Clipper",
        "Singapore LTA",
        "Sydney TfNSW",
        "Tasmania Metro TAS",
        "Vancouver",
        "Washington WMATA"
      ],
      "ITS Experience": [
        "Intelligent Congestion Management Program (ICMP)",
        "Product - Apollo",
        "Product - Gridsmart",
        "Product - Themis",
        "Tolling Systems",
        "Traffic Management Platform (TMP)"
      ],
      "Legacy Solutions": [
        "AFC - Mobile",
        "AFC - Payments",
        "CRM - Pivotal",
        "CRM - SalesForce",
        "LA Legacy",
        "Ventra2 Backoffice"
      ],
      "Hardware Engineering – General": [
        "EMV L1 certification",
        "Legacy product knowledge",
        "Standards/certification knowledge"
      ]
    }
  },
  "Technical": {
    "General": {
      "Front-End Engineering": [
        "Angular",
        "Flutter",
        "HTML5 / CSS3",
        "JavaScript (ES6+)",
        "Next.js",
        "React",
        "React Native",
        "SASS / SCSS",
        "State Management (Redux, NgRx, MobX)",
        "TypeScript",
        "UI Performance Optimization",
        "Vue.js",
        "Web Accessibility (WCAG / ADA)",
        "Webpack / Vite"
      ],
      "Back-End Engineering": [
        ".NET / ASP.NET",
        "Apache Kafka",
        "Authentication & Authorization (OAuth2, JWT)",
        "C",
        "C#",
        "C++",
        "COBOL",
        "Go",
        "GraphQL",
        "Groovy",
        "Hibernate / JPA",
        "Java",
        "Kotlin",
        "Node.js",
        "Objective-C",
        "PHP",
        "Python",
        "RESTful API Design",
        "RabbitMQ",
        "Ruby",
        "Rust",
        "Scala",
        "Spring / Spring Boot",
        "Swift",
        "gRPC"
      ],
      "Data Engineering & Analytics": [
        "Apache Airflow",
        "Apache Kafka",
        "Apache Spark",
        "Data Warehousing (Snowflake, Redshift, BigQuery)",
        "Databricks",
        "ETL / ELT Pipelines",
        "Hadoop",
        "MATLAB",
        "MySQL",
        "NoSQL Databases (MongoDB, Cassandra)",
        "NumPy",
        "Oracle Database",
        "Pandas",
        "PostgreSQL",
        "Power BI",
        "Real-Time Data Processing",
        "SQL",
        "Snowflake",
        "Tableau",
        "dbt"
      ],
      "Machine Learning & AI": [
        "Anomaly Detection",
        "Feature Engineering",
        "Fraud Detection Models",
        "MLOps / Model Deployment",
        "PyTorch",
        "Python (ML Stack)",
        "R",
        "Scikit-learn",
        "TensorFlow",
        "Time Series Analysis"
      ],
      "Embedded & Hardware Engineering": [
        "C / C++",
        "Device Drivers",
        "Embedded Linux",
        "Firmware Development",
        "Hardware Diagnostics & Telemetry",
        "Hardware/Software Integration",
        "RTOS"
      ],
      "Payments & Transaction Processing": [
        "EMV (Contact & Contactless)",
        "Exception Handling & Dispute Logic",
        "High-Volume Transaction Processing",
        "ISO 8583",
        "PCI-DSS Compliance",
        "Reconciliation Engine Design",
        "Tokenization & Encryption",
        "Transaction Clearing & Settlement Logic"
      ],
      "Systems Integration": [
        "API Integration",
        "Batch Processing Systems",
        "Data Mapping & Transformation",
        "Legacy System Integration",
        "Message Queues (RabbitMQ, ActiveMQ)",
        "Middleware Platforms",
        "Third-Party Vendor Integration",
        "Transit Agency System Interfaces"
      ],
      "Cloud & Infrastructure": [
        "AWS",
        "AWS EC2 / S3",
        "AWS Lambda",
        "Ansible",
        "Azure",
        "Azure DevOps",
        "Azure Functions",
        "CI/CD Pipelines",
        "Chef",
        "Cloud Networking",
        "Docker",
        "Google Cloud Compute",
        "Google Cloud Platform",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Kubernetes",
        "Linux Administration",
        "OpenShift",
        "Puppet",
        "VMware",
        "Windows Server Administration"
      ],
      "Electronics Design & PCB Engineering": [
        "Altium",
        "CADRA (Mentor Graphics)",
        "Electrical (Dassault)",
        "LT PowerCAD II"
      ],
      "Mechanical Design & Materials Engineering": [
        "AutoCAD",
        "CREO",
        "Casting design",
        "Composite Structure design",
        "Computer Aided Design (CAD)",
        "Fabric design",
        "Plastic injection molding design",
        "SOLIDWORKS",
        "Sheet metal design"
      ],
      "Hardware Engineering – General": [
        "3D Systems Geomagic Design X",
        "Shock, vibration, bump",
        "Simulation (LTSpice/HyperLynx/",
        "Tolerance Loops"
      ],
      "Manufacturing & Design Optimization": [
        "Design For Manufacturing and Assembly (DFMA)"
      ],
      "Engineering Analysis & Validation": [
        "Finite Element Analysis (FEA)",
        "Geometric Dimensioning and Tolerancing (GD&T)",
        "Thermal Analysis"
      ],
      "Systems & Documentation": [
        "Generate Systems Block Diagrams",
        "Hardware (HW) Design Definition",
        "Technical Report Writing"
      ],
      "Mechanical & Electromechanical Design": [
        "Hydraulics",
        "Mechanical Design",
        "Optical Design",
        "Pneumatics Design",
        "Robotics"
      ],
      "Reliability & Safety Engineering": [
        "ANSYS MTBF (Sherlock)",
        "EMC Test",
        "Safety in Design"
      ],
      "Engineering Tools & Visualization": [
        "3D Design SketchUp",
        "Keyshot",
        "Photoshop",
        "eDrawings (Dassault)"
      ],
      "Simulation & Engineering Analysis Tools": [
        "ANSYS Electromagnetic",
        "ANSYS Fluids",
        "ANSYS Structural",
        "Flow (Dassault)"
      ],
      "Manufacturing Processes & Tooling": [
        "CAMWorks (manufacturing - sheet metal and CNC)(Dassault)",
        "Dimension Elite 3D Printer"
      ],
      "Optical & Photonics Engineering": [
        "LensMechanix (Zemax)"
      ],
      "Engineering Methods & Calculations": [
        "Engineering Calculations",
        "PTC Windchill MathCAD"
      ],
      "Engineering Project & Delivery Methods": [
        "Scrum Master"
      ],
      "Design Quality & Risk Engineering": [
        "Design FMEA"
      ],
      "Product Lifecycle & Engineering Systems": [
        "DOORs",
        "PLM",
        "SAP"
      ],
      "Hardware Verification & Validation": [
        "Testrail"
      ],
      "Environmental & Compliance Testing": [
        "Aggressive use and abuse",
        "Ambient light visibility",
        "IK Testing",
        "IP Rating Test",
        "Solar radiation (thermal) operational",
        "Temperature and Humidity"
      ],
      "Hardware Design & Architecture": [
        "Pollutanat Materials"
      ],
      "DevOps & Platform Engineering": [
        "Artifactory",
        "Bitbucket",
        "ELK Stack (Elasticsearch, Logstash, Kibana)",
        "Git",
        "GitHub",
        "GitLab",
        "Grafana",
        "Jenkins",
        "Nexus Repository",
        "Prometheus",
        "SonarQube"
      ],
      "Cybersecurity": [
        "OWASP",
        "Public Key Infrastructure (PKI)",
        "SAST / DAST Tools",
        "SIEM (Splunk)",
        "Zero Trust Architecture"
      ],
      "Embedded Systems Engineering": [
        "Assembly",
        "CAN Bus",
        "Embedded C",
        "FreeRTOS",
        "I2C",
        "SPI",
        "UART"
      ],
      "Enterprise / Business Systems": [
        "JCL",
        "Mainframe (z/OS)",
        "SAP ABAP",
        "Salesforce",
        "ServiceNow"
      ]
    }
  }
};

const JOB_FAMILIES = [
  "General",
  "HW Engineering",
  "Software Engineering",
  "Systems Engineering",
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
    "summary": "Industry Expert",
    "description": "Industry expert on topic",
    "signals": "Recognized authority on skill, such as having published materials, presented externally, or defined standards"
  }
];

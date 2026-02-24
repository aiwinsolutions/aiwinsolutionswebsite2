const SKILLS_DATA = {
  "Competency": {
    "HW Engineering": {
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
      "Electronic Component Engineering": [
        "PSU knowledge (maximum load)",
        "component knowledge (understanding specs)"
      ],
      "Electronic Interfaces & Communication Protocols": [
        "Ethernet",
        "HDMI",
        "RS422/232",
        "SPI/I2C"
      ],
      "Electronics Assembly & Integration": [
        "Harness design",
        "Soldering for electronics"
      ],
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
      "Manufacturing & Design Optimization": [
        "Component derating",
        "Design for Manufacture",
        "Design for Test",
        "Design to Cost"
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
      ]
    },
    "Software Engineering": {
      "Advice And Guidance": [
        "Consultancy",
        "Methods and tools",
        "Specialist advice"
      ],
      "Change Analysis": [
        "Business modelling",
        "Business situation analysis",
        "Feasibility assessment",
        "Requirements definition and management",
        "User acceptance testing"
      ],
      "Change Implementation": [
        "Delivery management",
        "Portfolio management",
        "Portfolio, program and project support",
        "Program management",
        "Project management"
      ],
      "Change Planning": [
        "Business process improvement",
        "Job analysis and design",
        "Organization design and implementation",
        "Organizational capability development",
        "Organizational change enablement",
        "Organizational change management"
      ],
      "Computational Science": [
        "High-performance computing",
        "Numerical analysis",
        "Scientific modelling"
      ],
      "Content Management": [
        "Content design and authoring",
        "Content publishing",
        "Graphic design",
        "Knowledge management"
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
      "Data And Records Operations": [
        "Analytical classification and coding",
        "Database administration",
        "Records management"
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
      "Governance, Risk And Compliance": [
        "Artificial intelligence (AI) and data ethics",
        "Audit",
        "Governance",
        "Quality assurance",
        "Quality management",
        "Risk management"
      ],
      "Marketing": [
        "Brand management",
        "Customer engagement and loyalty",
        "Digital marketing",
        "Market research",
        "Marketing campaign management",
        "Marketing management"
      ],
      "People Management": [
        "Employee experience",
        "Organizational facilitation",
        "Performance management",
        "Professional development",
        "Resourcing",
        "Workforce planning"
      ],
      "Sales And Bid Management": [
        "Bid/proposal management",
        "Sales support",
        "Selling"
      ],
      "Security And Privacy": [
        "Information and data compliance",
        "Information assurance",
        "Information security",
        "Threat intelligence",
        "Vulnerability research"
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
      "Skills Management": [
        "Certification scheme operation",
        "Competency assessment",
        "Learning and development management",
        "Learning delivery",
        "Learning design and development",
        "Subject formation",
        "Teaching"
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
      "Stakeholder Management": [
        "Business administration",
        "Contract management",
        "Customer service support",
        "Sourcing",
        "Stakeholder relationship management",
        "Supplier management"
      ],
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
      "User Centered Design": [
        "Accessibility and inclusion",
        "Customer experience",
        "User experience analysis",
        "User experience design",
        "User experience evaluation",
        "User research"
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
      ]
    },
    "V&V Testing": {
      "Agile Testing": [
        "Agile Principles",
        "Continuous Testing",
        "Shift-Left Testing",
        "Test-Driven Development"
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
      "CTS Specific": [
        "Device commissioning",
        "Fare Rules",
        "Financial Reconciliation / SAP Reports / CCH",
        "Key Loading",
        "Money Room",
        "Virtual tokens (Apple and Google)",
        "vCard (configuration & Integration)"
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
      "Testing Foundations": [
        "SDLC Integration",
        "Static Testing",
        "Test Levels",
        "Test Types",
        "Testing Principles"
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
      "Hardware Engineering – General": [
        "EMV L1 certification",
        "Legacy product knowledge",
        "Standards/certification knowledge"
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
      ]
    }
  },
  "Technical": {
    "General": {
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
        "X++",
        "gRPC"
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
      "Cybersecurity": [
        "OWASP",
        "Public Key Infrastructure (PKI)",
        "SAST / DAST Tools",
        "SIEM (Splunk)",
        "Zero Trust Architecture"
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
      "Design Quality & Risk Engineering": [
        "Design FMEA"
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
        "Microsoft Dynamics CRM",
        "Microsoft Dynamics F&O",
        "Nexus Repository",
        "Prometheus",
        "SonarQube"
      ],
      "Electronics Design & PCB Engineering": [
        "Altium",
        "CADRA (Mentor Graphics)",
        "Electrical (Dassault)",
        "LT PowerCAD II"
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
      "Embedded Systems Engineering": [
        "Assembly",
        "CAN Bus",
        "Embedded C",
        "FreeRTOS",
        "I2C",
        "SPI",
        "UART"
      ],
      "Engineering Analysis & Validation": [
        "Finite Element Analysis (FEA)",
        "Geometric Dimensioning and Tolerancing (GD&T)",
        "Thermal Analysis"
      ],
      "Engineering Methods & Calculations": [
        "Engineering Calculations",
        "PTC Windchill MathCAD"
      ],
      "Engineering Project & Delivery Methods": [
        "Scrum Master"
      ],
      "Engineering Tools & Visualization": [
        "3D Design SketchUp",
        "Keyshot",
        "Photoshop",
        "eDrawings (Dassault)"
      ],
      "Enterprise / Business Systems": [
        "JCL",
        "Mainframe (z/OS)",
        "SAP ABAP",
        "Salesforce",
        "ServiceNow"
      ],
      "Environmental & Compliance Testing": [
        "Aggressive use and abuse",
        "Ambient light visibility",
        "IK Testing",
        "IP Rating Test",
        "Solar radiation (thermal) operational",
        "Temperature and Humidity"
      ],
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
      "Hardware Design & Architecture": [
        "Pollutanat Materials"
      ],
      "Hardware Engineering – General": [
        "3D Systems Geomagic Design X",
        "Shock, vibration, bump",
        "Simulation (LTSpice/HyperLynx/",
        "Tolerance Loops"
      ],
      "Hardware Verification & Validation": [
        "Testrail"
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
      "Manufacturing & Design Optimization": [
        "Design For Manufacturing and Assembly (DFMA)"
      ],
      "Manufacturing Processes & Tooling": [
        "CAMWorks (manufacturing - sheet metal and CNC)(Dassault)",
        "Dimension Elite 3D Printer"
      ],
      "Mechanical & Electromechanical Design": [
        "Hydraulics",
        "Mechanical Design",
        "Optical Design",
        "Pneumatics Design",
        "Robotics"
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
      "Mobile Development": [
        "Android",
        "React Native"
      ],
      "Optical & Photonics Engineering": [
        "LensMechanix (Zemax)"
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
      "Product Lifecycle & Engineering Systems": [
        "DOORs",
        "PLM",
        "SAP"
      ],
      "Reliability & Safety Engineering": [
        "ANSYS MTBF (Sherlock)",
        "EMC Test",
        "Safety in Design"
      ],
      "Simulation & Engineering Analysis Tools": [
        "ANSYS Electromagnetic",
        "ANSYS Fluids",
        "ANSYS Structural",
        "Flow (Dassault)"
      ],
      "Systems & Documentation": [
        "Generate Systems Block Diagrams",
        "Hardware (HW) Design Definition",
        "Technical Report Writing"
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

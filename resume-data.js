/* Edit this file to update your CV. Change text between quotes and save.
 * Keep the commas and brackets in place. See README.md for examples. */
window.resume = {
  name: "Arsenii Polenok",
  title: "Data Solutions Engineer",
  location: "Barcelona, Spain",
  email: "senya.polenok@gmail.com",
  telegram: "https://t.me/spolenoque",
  phone: "+34 661 718 893",
  linkedin: "https://www.linkedin.com/in/arsenpolenok/",
  pdf: "./assets/arsenii-polenok-cv.pdf",
  introduction: [
    "Technical Data & ML specialist with 4+ years of experience designing and delivering end-to-end data solutions. Experienced in working with complex data systems, building scalable ETL pipelines, and applying machine learning to real-world problems.",
    "Strong communicator with experience collaborating across teams and translating business needs into technical solutions.",
    "With my background in dynamic, remote start-up environments, I'm used to taking responsibility for the final result and know how to strike the right balance between perfection and shipping quickly to deliver impactful solutions in a prompt manner."
  ],
  experience: [
    {
      company: "Yandex Cloud",
      role: "Data Engineer",
      dates: "2025 – Present",
      groups: [
        { label: "Achievements to date", bullets: [
          "Set up multi-stage data delivery pipelines to the DWH for 8+ domains, processing terabyte-scale data in alignment with business requirements and system constraints.",
          "Executed a large-scale migration of a core CDM (100+ dependent processes) to improve system performance and optimize data workflows."
        ]},
        { label: "Core responsibilities", bullets: [
          "Designing and maintaining Data Quality monitoring and validation systems, improving data accuracy and reliability across data pipelines.",
          "Continuously work on resource utilization optimization by decommissioning outdated processes and improving performance of existing workflows.",
          "End-to-end incident management and solution performance monitoring, including detection, logging, root cause analysis, and resolution."
        ]},
        { label: "Extra duties", bullets: [
          "Collaboration with engineering teams to track and resolve technical issues.",
          "Access management and PR reviews, ensuring security, code quality, and compliance."
        ]}
      ]
    },
    {
      company: "Latoken",
      context: "Top-30 crypto exchange",
      role: "Data Solutions Engineer",
      dates: "2023 – 2025",
      groups: [{ label: "Achievements & responsibilities", bullets: [
        "Designed and implemented an ML-based tool, leveraging blockchain activity and trending metrics to discover new tokens with high potential of becoming popular, streamlining the listing process. Tokens listed based on the model's recommendations achieved a 450% growth.",
        "Developed and maintained data ingestion pipelines, including API integrations with blockchain data providers to collect on-chain data for 17k+ tokens across 30+ networks. Combined it with off-chain data and integrated it into the data warehouse, achieving over 3x token data coverage.",
        "Redesigned the DWH architecture in collaboration with 5 cross-functional teams to support new tokens addition logic, improving scalability and reducing query processing times.",
        "Maintained and optimized Airflow ETL pipelines, ensuring seamless daily ingestion of 1TB+ data from production databases into the analytical DWH.",
        "Calculated detailed trade-based Trading Desk PnL using 3TB+ of trades data using partitioned computing, enhancing trading strategy insights and reducing potential risks.",
        "Created 10+ automated Power BI dashboards (e.g., Exchange Rating fluctuations monitoring panel, Collected Fees reconciliation) providing actionable insights for key stakeholders.",
        "Reported directly to the CEO and represented the Data Unit in cross-functional discussions and company-wide initiatives."
      ]}]
    },
    {
      company: "CloudReports",
      context: "Analytical platform",
      role: "Backend Developer",
      dates: "2021 – 2023",
      groups: [{ label: "Achievements & responsibilities", bullets: [
        "Developed ETL/ELT connectors for 15+ cloud services (ERP, CRM, Marketplaces) and analytical DWH (BigQuery, ClickHouse).",
        "Created SQL views for system entities to prepare data for user analytics integration.",
        "Single-handedly supported 420+ working integrations.",
        "Developed a Python package that accelerated the release of new integrations by 300%.",
        "Optimized data export logic, achieving more than 5x Google Cloud resources cost reduction.",
        "Engaged with clients and data providers to analyze requirements and design optimal data delivery and integration solutions."
      ]}]
    }
  ],
  skills: [
    { category: "Areas of expertise", items: [
      "Data Ingestion: API integration, web-crawling, pipeline design",
      "Data Engineering: ELT/ETL, DWH design, large-scale data processing, streaming, workflow orchestration",
      "Machine Learning: feature engineering, predictive analytics, modeling, deployment, evaluation",
      "Data Analytics: statistics, modeling, hypothesis tests, experiments"
    ]},
    { category: "Programming languages", items: ["Python (advanced)", "SQL (advanced)", "C# (intermediate)", "R", "Go", "Rust", "PHP"] },
    { category: "Databases", items: ["Google BigQuery", "PostgreSQL", "ClickHouse", "MS SQL", "MySQL", "Redis", "Firebase", "YTSaurus"] },
    { category: "Frameworks & toolkits", items: ["Pandas", "NumPy", "Scikit-learn", "Flask", "Web3", "PyTorch", "TensorFlow", "Keras", "BeautifulSoup", "DASK", "Prefect", "NetworkX", "XGBoost", ".NET", "React"] },
    { category: "Tools & utilities", items: ["Apache Airflow", "Workflows", "Nirvana", "Google Tasks", "Git", "Selenium", "Jupyter"] },
    { category: "Platforms & environments", items: ["Google Cloud Platform", "Linux (Ubuntu)", "Docker", "Kubernetes"] },
    { category: "Technologies & concepts", items: ["Big Data", "REST", "GraphQL", "gRPC", "Data Quality", "CI/CD", "Distributed Systems", "Version control"] }
  ],
  extras: ["English (C1 Advanced)", "Always learning", "A critical thinker"],
  education: {
    school: "Financial University",
    degree: "BS · Applied Maths and Computer Science",
    specialization: "Data Analysis and Decision Making in Economics and Finance",
    location: "Moscow",
    dates: "2018 – 2022"
  }
};

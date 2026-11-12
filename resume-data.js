/* Edit this file to update your CV. Change text between quotes and save.
 * Keep the commas and brackets in place. See README.md for examples. */
window.resume = {
  name: "Arsenii Polenok",
  title: "Data Engineer | Python, GCP & BigQuery",
  location: "Spain · Remote",
  email: "arspolenoque@gmail.com",
  telegram: "https://t.me/spolenoque",
  phone: "+34 661 718 893",
  linkedin: "https://www.linkedin.com/in/arsenpolenok/",
  pdf: "./assets/arsenii-polenok-cv.pdf",
  introduction: [
    "Data Engineer with 5+ years of experience building and operating production data platforms, ETL/ELT pipelines, and analytical warehouses using Python, SQL, GCP, BigQuery, Airflow, ClickHouse, PostgreSQL, and PySpark.",
    "Experienced with terabyte-scale workflows, data quality, incident resolution, external API integrations, warehouse optimisation, and client-facing delivery.",
    "With my background in dynamic, remote start-up environments, I'm used to taking ownership of outcomes end to end and balancing high engineering standards with shipping quickly."
  ],
  experience: [
    {
      company: "Yandex Cloud",
      role: "Data Engineer",
      dates: "2025 – Present",
      groups: [{ label: "", bullets: [
        "Built and operated multi-stage production data pipelines across 8+ business domains, processing terabyte-scale data.",
        "Migrated several of the largest production pipelines to PySpark for large-scale distributed data processing.",
        "Led migration of a core data model involving 100+ dependent processes, improving performance and reducing operational complexity.",
        "Designed and maintained Data Quality monitoring and validation across production workflows.",
        "Owned end-to-end incident resolution, including detection, root-cause analysis, stakeholder communication, and permanent fixes.",
        "Continuously optimized workflow performance and resource utilization.",
        "Collaborated with engineering teams through technical troubleshooting and PR reviews, supporting engineering quality and maintainability."
      ]}]
    },
    {
      company: "LATOKEN",
      role: "Data Solutions Engineer",
      dates: "2023 – 2025",
      groups: [{ label: "", bullets: [
        "Maintained and optimized Airflow ETL pipelines processing more than 1 TB of production data per day.",
        "Developed ingestion pipelines combining on-chain and off-chain data for 17k+ tokens across 30+ blockchain networks, increasing data coverage by 3x.",
        "Redesigned DWH architecture together with 5 cross-functional teams to improve scalability and query-processing performance.",
        "Processed a 3 TB trading dataset using partitioned computation for Trading Desk PnL and analytical workloads.",
        "Built 10+ automated Power BI dashboards for operational monitoring, reconciliation, and business stakeholders.",
        "Translated loosely defined requirements into reliable production data solutions."
      ]}]
    },
    {
      company: "CloudReports",
      role: "Backend Developer",
      dates: "2021 – 2023",
      groups: [{ label: "", bullets: [
        "Developed ETL/ELT integrations for 15+ third-party ERP, CRM, and marketplace APIs, delivering data into BigQuery and ClickHouse.",
        "Supported 420+ production integrations, handling pagination, rate limits, partial failures, late or restated data, and inconsistent vendor documentation.",
        "Developed a reusable Python package that reduced development time for new integrations by 75%.",
        "Created SQL views and data models to normalize integrated data for downstream analytics.",
        "Optimized data export and processing logic, reducing Google Cloud resource costs by more than 5x.",
        "Worked directly with clients and external data providers to translate inconsistent source systems and business requirements into reliable integration solutions."
      ]}]
    }
  ],
  skills: [
    { category: "Areas of expertise", items: [
      "Data Engineering: ETL/ELT, DWH design, batch/distributed processing, workflow orchestration",
      "GCP Data Platforms: BigQuery, production pipelines, performance and cost optimisation",
      "Data Reliability: Data Quality, monitoring, incident resolution, production troubleshooting"
    ]},
    { category: "Programming languages", items: ["Python (advanced)", "SQL (advanced)", "C# (intermediate)", "Go", "R"] },
    { category: "Data processing & orchestration", items: ["Apache Spark", "PySpark", "Apache Airflow", "Prefect", "Pandas", "NumPy"] },
    { category: "Google Cloud Platform (GCP)", items: ["BigQuery", "Cloud Storage", "Workflows", "Cloud Run", "Cloud Tasks", "Firestore", "Cloud Logging / Monitoring", "Pub/Sub"] },
    { category: "Databases & warehouses", items: ["BigQuery", "ClickHouse", "PostgreSQL", "MySQL", "MS SQL", "Redis", "YTSaurus"] },
    { category: "Platforms & engineering tools", items: ["Docker", "Kubernetes", "Linux (Ubuntu)", "Git", "CI/CD"] },
    { category: "Technologies & concepts", items: ["REST APIs", "Distributed Systems", "Data Quality", "ETL/ELT", "DWH", "GCP Data Platforms", "Production Operations"] }
  ],
  extras: ["English: C1 Advanced", "Remote-first experience"],
  education: {
    school: "Financial University",
    degree: "BS · Applied Maths and Computer Science",
    specialization: "Data Analysis and Decision Making in Economics and Finance",
    location: "Moscow",
    dates: "2018 – 2022"
  }
};

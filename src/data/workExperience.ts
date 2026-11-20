import type { WorkExperience } from '../types/index';

export const workExperienceData: WorkExperience[] = [
  {
    id: '1',
    title: 'Software Engineer Intern',
    company: 'Shopify',
    location: 'Toronto, ON',
    duration: 'Jan 2027 – Incoming',
    description: [
      'Infrastructure Team',
      'Distributed systems in Go on Kubernetes',
      'Selected from 10,000+ applicants'
    ],
    achievements: [
      'Joining the Infrastructure team for Winter 2027, selected amongst over 10,000 applicants',
      'Will build and scale distributed systems in Go on Kubernetes',
      'Will write Go for fleet automation across Kubernetes clusters, compute, and stateful systems on Google Cloud'
    ],
    techStack: [
      'Go',
      'Kubernetes',
      'Google Cloud'
    ]
  },
  {
    id: '2',
    title: 'Software Engineer Intern',
    company: 'Wealthsimple',
    location: 'Toronto, ON',
    duration: 'Sept 2026 – Dec 2026',
    description: [
      'Backend & Infrastructure',
      'Workflow orchestration at scale',
      'AI tooling over financial data'
    ],
    achievements: [
      'Scaled a Kotlin and Temporal replay workflow from 30 to 100,000 accounts per request (3,000x+) using versioned S3 manifests and batched Kafka dispatch, resuming from the last heartbeat after failures; replayed 7,337 production accounts in about 81 minutes',
      'Led release cleanup with Kotlin and Temporal workflows that safely remove orphaned billion-row tables, Kafka topics, and S3 objects without touching live releases, freeing 26 TB and saving an estimated $6K/month',
      'Wrote a Go Kafka consumer that posts deposit, withdrawal, and transfer events to the book of records across 100K+ accounts, with event deduplication and a dead-letter path for failed postings',
      'Co-designed a read-only Kotlin and Spring AI MCP server that lets AI assistants investigate data freshness across billions of trade events through reusable, parameterized tools, validated with 1,422 field comparisons and 0 mismatches against the source query'
    ],
    techStack: [
      'Kotlin',
      'Go',
      'Temporal',
      'Kafka',
      'S3',
      'Spring AI',
      'MCP'
    ]
  },
  {
    id: '3',
    title: 'Software Engineer Intern',
    company: 'PointClickCare',
    location: 'Mississauga, ON',
    duration: 'Sept 2025 – Aug 2026',
    description: [
      'Data Engineering',
      'Performance Engineering',
      'AI Infrastructure'
    ],
    achievements: [
      'Built an event-driven ingestion pipeline in Java Spring Boot and Redis that embeds 3 clinician note types, indexing 30K+ notes into Qdrant across 100+ organizations, with Grafana dashboards tracking cache hits and processing time',
      'Developed a Java tool that provisions Qdrant collections from schemas, covering quantization and BM25 configuration, powering RAG semantic search for 50+ facilities',
      'Designed a SQL dead-letter table that categorizes embedding, Redis, and upsert failures, cutting the time to locate failed pipeline stages from hours to minutes',
      'Deployed a Java Qdrant migration tool as a Kubernetes Job via Helm, adopted by 2 teams, using SQL-tracked offsets to resume idempotently after failures'
    ],
    techStack: [
      'Java Spring Boot',
      'Redis',
      'Qdrant',
      'Kubernetes',
      'Helm',
      'Grafana',
      'SQL'
    ]
  },
  {
    id: '4',
    title: 'Software Developer Intern',
    company: 'Royal Bank of Canada',
    location: 'New York, NY',
    duration: 'May 2025 – Aug 2025',
    description: [
      'Amplify Program 2025',
      'Capital Markets',
      'Presented to C-Suite Executives'
    ],
    achievements: [
      'Engineered an agentic AI hedge fund platform using Python, TypeScript, Snowflake, and LangChain, with agent orchestration delivering automated insights to 4+ trading teams supporting $250M–$500M AUM',
      'Refactored a monolithic FastAPI route into three asyncio endpoints, reducing API latency by 47% through parallelized I/O',
      'Developed CI/CD pipelines with GitHub Actions, PyTest, Docker, and Kubernetes, reaching 95% test coverage'
    ],
    techStack: [
      'Python',
      'TypeScript',
      'LangChain',
      'Snowflake',
      'FastAPI',
      'Docker',
      'Kubernetes'
    ]
  },
  {
    id: '5',
    title: 'Software Engineer Intern',
    company: 'Royal Bank of Canada',
    location: 'Toronto, ON',
    duration: 'May 2024 – Aug 2024',
    description: [
      'Data Science & Analytics Team',
      'Built automation tools'
    ],
    achievements: [
      'Developed Python data validation scripts on GCP BigQuery for the IAM team, extracting statistical summaries across 5M+ identity access records and surfacing data quality anomalies',
      'Sped up a data pipeline bottleneck by 240x by optimizing search queries in a Python script using Exchange Web Services (EWS)',
      'Automated file workflows with Python, Pandas, and SQL on a GCP Compute Engine VM, processing 3000+ emails and saving 100+ hours monthly; the script is still used today and has been shared with other internal teams'
    ],
    techStack: [
      'Python',
      'GCP BigQuery',
      'Compute Engine',
      'Pandas',
      'SQL',
      'Exchange Web Services'
    ]
  },
  {
    id: '6',
    title: 'Software Engineer Co-Lead',
    company: 'McMaster Rocketry',
    location: 'Hamilton, ON',
    duration: 'Jul. 2024 – May 2025',
    description: [
      'Led software development for rocket telemetry systems',
      'Managed technical teams and project timelines'
    ],
    achievements: [
      'Worked on a serialization script in RUST to serialize rocket sensor data into binary format.',
      'Designed a similar deserialization script to re-create a CSV file from binary data displaying rocket sensor data',
      'Lead technical meetings with team going over deliverables and guiding new students to understand large code base',
      'Got the chance to collaborate with a PhD student to design a Deep Q Learning Neural Network exploring potential use cases for thrust vector control'
    ],
    techStack: [
      'Rust',
      'Python',
      'Deep Q-Learning'
    ]
  }
];

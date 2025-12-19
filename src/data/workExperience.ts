import type { WorkExperience } from '../types/index';

export const workExperienceData: WorkExperience[] = [
  {
    id: '1',
    title: 'Software Engineer Intern',
    company: 'PointClickCare',
    location: 'Toronto, ON',
    duration: 'Sept 2025 – Present',
    description: [
      'Data Engineering',
      'Performance Engineering',
      'AI Infrastructure'
    ],
    achievements: [
      'Designed a RAG pipeline using QDrant Vector Database',
      'Optimized a batch partitioning algorithm to minimize batches saving costs on embedding models',
      'Added observability metrics throughout the pipeline for caching hits, misses, api cost'
    ],
    techStack: [
      'Java Spring Boot',
      'Redis',
      'Docker',
      'Kubernetes',
      'QDrant',
      'Apache Kafka'
    ]
  },
  {
    id: '2',
    title: 'Software Developer Intern',
    company: 'RBC Amplify',
    location: 'Toronto, ON',
    duration: 'May 2025 – Aug. 2025',
    description: [
      'Amplify Program 2025',
      'Designed a patent pending solution for Capital Markets',
      'Presented to C-Suite Executives'
    ],
    achievements: [
      'Designed an agentic AI workflow to analyze hedge fund movement directly helping traders draw insights.',
      'Worked with qualitative and quantitative trading data to draw on trends and patterns with hedge fund data'
    ],
    techStack: [
      'Python',
      'TypeScript',
      'React',
      'Docker',
      'Kubernetes',
      'HashiCorp'
    ]
  },
  {
    id: '3',
    title: 'Software Engineer Intern',
    company: 'Royal Bank of Canada',
    location: 'Toronto, ON',
    duration: 'May 2024 – Aug. 2024',
    description: [
      'Data Science & Analytics Team',
      'Built automation tools'
    ],
    achievements: [
      'Created an automation script to process incoming email attachments, distributing them to a NAS drive for a larger data pipeline',
      'Notable outcomes:',
      'Script is still used today',
      'Has processed over 3000 emails',
      'Script has been redistributed to internal teams within RBC for further usage'
    ],
    techStack: [
      'Python',
      'Exchange Web Services'
    ]
  },
  {
    id: '4',
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

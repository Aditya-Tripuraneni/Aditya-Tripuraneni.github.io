import type { OpenSourceContribution } from '../types/index';

export const openSourceData: OpenSourceContribution[] = [
  {
    id: 'mem0',
    project: 'mem0',
    repoUrl: 'https://github.com/mem0ai/mem0',
    stars: '69k',
    summary: 'Universal memory layer for AI agents. Added a Baidu vector store provider to the TypeScript SDK.',
    pullRequests: [
      {
        number: 5790,
        title: 'feat(mem0-ts): add Baidu vector store provider',
        url: 'https://github.com/mem0ai/mem0/pull/5790'
      }
    ]
  },
  {
    id: 'code-review-graph',
    project: 'code-review-graph',
    repoUrl: 'https://github.com/tirth8205/code-review-graph',
    stars: '33k',
    summary: 'Local-first code intelligence graph for MCP and CLI. Added MiMo Code as a supported platform.',
    pullRequests: [
      {
        number: 688,
        title: 'feat(platform): add MiMo Code MCP support',
        url: 'https://github.com/tirth8205/code-review-graph/pull/688'
      }
    ]
  },
  {
    id: 'intellagent',
    project: 'intellagent',
    repoUrl: 'https://github.com/plurai-ai/intellagent',
    stars: '1.3k',
    summary: 'Framework for diagnosing and optimizing agents with simulated interactions. Added Ollama tool-calling support and expanded the test suite.',
    pullRequests: [
      {
        number: 97,
        title: 'Support for Ollama models with tooling',
        url: 'https://github.com/plurai-ai/intellagent/pull/97'
      },
      {
        number: 100,
        title: 'Unit tests for the agent graphs module',
        url: 'https://github.com/plurai-ai/intellagent/pull/100'
      },
      {
        number: 101,
        title: 'Unit tests for the utils folder',
        url: 'https://github.com/plurai-ai/intellagent/pull/101'
      },
      {
        number: 102,
        title: 'Unit and integration tests for the dialog manager',
        url: 'https://github.com/plurai-ai/intellagent/pull/102'
      }
    ]
  }
];

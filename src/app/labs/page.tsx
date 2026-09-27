import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Labs & Research',
  'Active computational experiments, proto-systems, and security research from KNOuX: Knoux-Quill, knoux-security, and foundational research.',
  '/labs'
);

interface LabExperiment {
  id: string;
  code: string;
  name: string;
  repo: string;
  status: 'active-research' | 'experimental' | 'proto-system';
  tagline: string;
  statement: string;
  vector: string;
  techStack: string[];
}

const experiments: LabExperiment[] = [
  {
    id: 'lab-quill',
    code: 'LAB-EXP-01',
    name: 'Knoux-Quill',
    repo: 'daynightae-cmyk/Knoux-Quill',
    status: 'active-research',
    tagline: 'AI-Assisted Technical Markdown & Knowledge Extraction Engine',
    statement: 'Investigating high-density algorithmic documentation workflows. Explores deterministic markdown parsing, automated architectural diagram generation, and semantic entity graph extraction from raw codebases.',
    vector: 'NATURAL LANGUAGE PROCESSING • COMPILER DESIGN',
    techStack: ['TypeScript', 'AST Parser', 'Markdown AST (mdast)', 'LLM Embedding Mesh'],
  },
  {
    id: 'lab-sec',
    code: 'LAB-EXP-02',
    name: 'knoux-security',
    repo: 'daynightae-cmyk/knoux-security',
    status: 'active-research',
    tagline: 'Application Security Scanner & Vulnerability Inspector',
    statement: 'A zero-dependency security audit harness engineered to scan code repositories for exposed credentials, entropy anomalies in token strings, dependency vulnerabilities, and OWASP Top 10 configuration drifts.',
    vector: 'DEFENSIVE CYBERSECURITY • STATIC ANALYSIS',
    techStack: ['Go', 'Static Analysis Engine', 'Regex Entropy Scanner', 'SARIF Report Format'],
  },
  {
    id: 'lab-core',
    code: 'LAB-EXP-03',
    name: 'knoux (Core Proto-System)',
    repo: 'daynightae-cmyk/knoux',
    status: 'proto-system',
    tagline: 'Foundational Research & Mathematical Shader Geometry',
    statement: 'The primordial laboratory where KNOuX particle mathematics, deterministic shader geometry, and experimental computational models were first formulated and stress-tested before graduating to production systems.',
    vector: 'SPATIAL MATHEMATICS • GPU SHADER COMPUTATION',
    techStack: ['GLSL Shaders', 'Three.js', 'Vector Mathematics', 'Procedural Topography'],
  },
];

export default function LabsPage() {
  return (
    <main id="main-content">
      <PageIntro
        index="08"
        label="Labs"
        title="Curiosity is"
        italic="a working method."
        description="A transparent index of active research, prototypes, and open computational experiments verified from our source repositories."
      />

      <section className="section-shell labs-grid-section">
        <div className="section-header-split">
          <div>
            <p className="eyebrow">ACTIVE RESEARCH TRACKS</p>
            <h2>Verified Proto-Systems & Security Tools</h2>
          </div>
          <p className="section-statement">
            These initiatives represent our frontier work in progress. When an experiment matures into an enterprise utility or commercial platform, it graduates to the KNOuX Software or Web systems catalog.
          </p>
        </div>

        <div className="labs-stack">
          {experiments.map((exp) => (
            <article key={exp.id} className="lab-experiment-card">
              <div className="lab-card-top">
                <div className="lab-meta-badge">
                  <span className="lab-code">{exp.code}</span>
                  <span className="lab-vector">{exp.vector}</span>
                </div>
                <span className={`lab-status ${exp.status}`}>
                  {exp.status.replace('-', ' ').toUpperCase()}
                </span>
              </div>

              <div className="lab-card-body">
                <h3 className="lab-title">{exp.name}</h3>
                <p className="lab-tagline">{exp.tagline}</p>
                <p className="lab-statement">{exp.statement}</p>

                <div className="lab-tech-strip">
                  <span className="section-micro-label">TECHNOLOGY / ARCHITECTURE:</span>
                  <div className="lab-tags">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="lab-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lab-card-footer">
                <a
                  href={`https://github.com/${exp.repo}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-text"
                >
                  VIEW REPOSITORY ON GITHUB <span>↗</span>
                </a>
                <span className="repo-source">daynightae-cmyk/{exp.name}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Outro Callout */}
      <section className="page-outro section-shell">
        <p className="eyebrow">RESEARCH COLLABORATION</p>
        <h2>Interested in testing an experimental prototype or contributing research?</h2>
        <div className="outro-actions">
          <Link href="/contact?scope=labs" className="button-primary">
            <span>INQUIRE ABOUT LAB EXPERIMENTS</span>
            <span>↗</span>
          </Link>
          <Link href="/engineering" className="button-text">
            SEE OUR ENGINEERING PHILOSOPHY <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

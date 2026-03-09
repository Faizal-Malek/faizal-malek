import { useState } from 'react';
import type { CVData } from './types/CVData';
import { defaultCVData } from './types/CVData';
import { professionalTemplate } from './templates/professional';
import { modernTemplate } from './templates/modern';
import {
  User,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Plus,
  Trash2,
  Download,
  Layout,
  FileText,
  UserCircle,
  Link as LinkIcon,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ChevronRight,
  Maximize2,
  Minimize2
} from 'lucide-react';
// @ts-ignore
import html2pdf from 'html2pdf.js';

type TemplateKey = 'professional' | 'modern';

function App() {
  const [cvData, setCVData] = useState<CVData>(defaultCVData);
  const [activeTab, setActiveTab] = useState<string>('personal');
  const [template, setTemplate] = useState<TemplateKey>('professional');
  const [zoom, setZoom] = useState(0.7);

  const tabs = [
    { id: 'personal', label: 'Personal Details', icon: <UserCircle size={20} /> },
    { id: 'summary', label: 'Executive Summary', icon: <FileText size={20} /> },
    { id: 'experience', label: 'Work Experience', icon: <Briefcase size={20} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
    { id: 'projects', label: 'Key Projects', icon: <Code size={20} /> },
    { id: 'skills', label: 'Technical Skills', icon: <Award size={20} /> },
  ];

  const updatePersonalInfo = (field: string, value: string) => {
    setCVData({
      ...cvData,
      personalInfo: { ...cvData.personalInfo, [field]: value }
    });
  };

  const addItem = (section: keyof CVData, newItem: any) => {
    setCVData({
      ...cvData,
      [section]: [...((cvData[section] || []) as any[]), newItem]
    });
  };

  const removeItem = (section: keyof CVData, index: number) => {
    const list = [...((cvData[section] || []) as any[])];
    list.splice(index, 1);
    setCVData({ ...cvData, [section]: list });
  };

  const updateArrayItem = (section: keyof CVData, index: number, field: string, value: any) => {
    const list = [...((cvData[section] || []) as any[])];
    list[index] = { ...list[index], [field]: value };
    setCVData({ ...cvData, [section]: list });
  };

  const handleGeneratePDF = () => {
    const htmlString = template === 'professional' ? professionalTemplate(cvData) : modernTemplate(cvData);
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const content = doc.body;

    const opt = {
      margin: 0,
      filename: `${cvData.personalInfo.fullName || 'CV'}_Generated.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const }
    };

    html2pdf().from(content).set(opt).save();
  };

  const fillFaizalSample = () => {
    setCVData({
      personalInfo: {
        fullName: 'Faizal Malek',
        title: 'Full-Stack Developer | Web3 Specialist',
        location: 'Centurion, South Africa',
        email: 'faizalmalek03@icloud.com',
        phone: '076 020 5904',
        github: 'https://github.com/Faizal-Malek',
        linkedin: 'https://za.linkedin.com/in/faizal-malek-663a77245',
        portfolio: 'https://faizal-malek.vercel.app',
      },
      summary: 'Highly motivated Full-Stack Developer with a strong focus on building production-grade applications, exploring Web3 technologies, and implementing DevOps practices. Experienced in developing enterprise-grade client management systems and real-time analytics dashboards.',
      coreCompetencies: ['React Ecosystem', 'TypeScript', 'Cloud-Native', 'Firebase', 'DevOps', 'Web3', 'Node.js'],
      experience: [
        {
          jobTitle: 'Software Developer',
          company: 'Libex Marketplace',
          location: 'Centurion, SA',
          startDate: 'Feb 2023',
          endDate: 'Present',
          responsibilities: [
            'Architected and developed the Libertas Client Portal',
            'Built DeFi marketplace platforms and Web3 integration solutions',
            'Implemented custom analytics engines for enterprise dashboards'
          ],
          technologies: 'React, Next.js, TypeScript, Firebase, Docker'
        }
      ],
      education: [
        {
          institution: 'IIE Rosebank College',
          degree: 'Bachelor\'s Degree in Software Development',
          startYear: '2020',
          endYear: '2023',
          coursework: 'ASP.NET, Java, C#, PHP, HTML, JavaScript, Android Studio'
        }
      ],
      certifications: [
        {
          name: 'Algorithmic Toolbox',
          issuer: 'University of California San Diego',
          date: 'March 2025'
        },
        {
          name: 'Google IT Support Professional Certificate',
          issuer: 'Google',
          date: '2024',
          credentialId: 'U3EN51RQNY96'
        }
      ],
      projects: [
        {
          name: 'Urban Tokenization Survey',
          type: 'Full-Stack Platform',
          description: 'Full-stack survey platform with advanced analytics dashboard.',
          liveUrl: 'https://urban-tokenization-survey.vercel.app',
          githubUrl: 'https://github.com/Faizal-Malek/urban-tokenization-survey',
          techStack: 'React, TypeScript, Node.js, Express, MongoDB'
        }
      ],
      skills: [
        { category: 'Programming Languages', items: 'TypeScript • JavaScript • Java • Python • PHP • C#' },
        { category: 'Frontend & Backend', items: 'React • Next.js • Node.js • Firebase • MongoDB • PostgreSQL' }
      ],
      softSkills: ['Communication', 'Problem-Solving', 'Collaboration', 'Adaptability'],
      additionalInfo: {
        languages: 'English (Fluent)',
        availability: 'Open to full-time opportunities',
        interests: 'Web3, Cloud-Native, Open Source'
      }
    });
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Top Navbar */}
      <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-indigo-600 rounded-xl flex items-center justify-center text-white">
            <Sparkles size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
              Antigravity CV Builder
            </h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Premium Document Architect</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={fillFaizalSample}
            className="btn-outline-premium !py-2 !px-4 text-sm"
          >
            <Sparkles size={16} className="text-primary-500" />
            Auto-Fill Profile
          </button>

          <div className="h-8 w-[1px] bg-slate-200"></div>

          <button
            onClick={handleGeneratePDF}
            className="btn-premium !py-2 !px-6 text-sm"
          >
            <Download size={18} />
            Export PDF
          </button>
        </div>
      </header>

      <main className="flex-grow flex overflow-hidden">
        {/* Sidebar Nav */}
        <aside className="w-72 bg-white border-r border-slate-200 p-6 flex flex-col gap-2 z-10 overflow-y-auto">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Builder Sections</div>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className={activeTab === tab.id ? 'text-primary-600' : 'text-slate-400'}>
                {tab.icon}
              </span>
              <span className="text-sm">{tab.label}</span>
              {activeTab === tab.id && <ChevronRight size={16} className="ml-auto" />}
            </div>
          ))}

          <div className="mt-auto pt-8">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Visual Theme</div>
            <div className="space-y-3">
              <button
                onClick={() => setTemplate('professional')}
                className={`w-full p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${template === 'professional' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-slate-50 border-slate-100 text-slate-600'
                  }`}
              >
                <div className={`w-3 h-3 rounded-full ${template === 'professional' ? 'bg-primary-600' : 'bg-slate-300'}`}></div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold leading-none">Professional</span>
                  <span className="text-[10px] opacity-70">Classic Clean</span>
                </div>
              </button>
              <button
                onClick={() => setTemplate('modern')}
                className={`w-full p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${template === 'modern' ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-slate-50 border-slate-100 text-slate-600'
                  }`}
              >
                <div className={`w-3 h-3 rounded-full ${template === 'modern' ? 'bg-indigo-600' : 'bg-slate-300'}`}></div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold leading-none">Modern</span>
                  <span className="text-[10px] opacity-70">Creative Gradient</span>
                </div>
              </button>
            </div>
          </div>
        </aside>

        {/* Central Form Area */}
        <section className="flex-1 bg-white overflow-y-auto p-12 scroll-smooth">
          <div className="max-w-3xl mx-auto space-y-12 pb-24">
            {activeTab === 'personal' && (
              <div className="section-card">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center">
                    <UserCircle size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Personal Details</h2>
                    <p className="text-slate-500 text-sm">How can employers reach you?</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide px-1">Full Name</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="e.g. Faizal Malek"
                      value={cvData.personalInfo.fullName}
                      onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide px-1">Professional Title</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="e.g. Senior Software Developer"
                      value={cvData.personalInfo.title}
                      onChange={(e) => updatePersonalInfo('title', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide px-1 flex items-center gap-2">
                      <MapPin size={12} /> Location
                    </label>
                    <input type="text" className="input-field" placeholder="City, Country" value={cvData.personalInfo.location || ''} onChange={(e) => updatePersonalInfo('location', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide px-1 flex items-center gap-2">
                      <Phone size={12} /> Phone Number
                    </label>
                    <input type="text" className="input-field" placeholder="+27 ..." value={cvData.personalInfo.phone || ''} onChange={(e) => updatePersonalInfo('phone', e.target.value)} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide px-1 flex items-center gap-2">
                    <Mail size={12} /> Email Address
                  </label>
                  <input type="email" className="input-field" placeholder="hello@example.com" value={cvData.personalInfo.email || ''} onChange={(e) => updatePersonalInfo('email', e.target.value)} />
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide px-1 flex items-center gap-2">
                      <LinkIcon size={12} /> GitHub
                    </label>
                    <input type="text" className="input-field text-xs" value={cvData.personalInfo.github || ''} onChange={(e) => updatePersonalInfo('github', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide px-1 flex items-center gap-2">
                      <LinkIcon size={12} /> LinkedIn
                    </label>
                    <input type="text" className="input-field text-xs" value={cvData.personalInfo.linkedin || ''} onChange={(e) => updatePersonalInfo('linkedin', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide px-1 flex items-center gap-2">
                      <LinkIcon size={12} /> Portfolio
                    </label>
                    <input type="text" className="input-field text-xs" value={cvData.personalInfo.portfolio || ''} onChange={(e) => updatePersonalInfo('portfolio', e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'summary' && (
              <div className="section-card">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Executive Summary</h2>
                    <p className="text-slate-500 text-sm">Tell your professional story in a few sentences.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide px-1">Professional Bio</label>
                  <textarea
                    rows={8}
                    className="input-field resize-none leading-relaxed"
                    placeholder="Write a compelling summary of your career accomplishments..."
                    value={cvData.summary}
                    onChange={(e) => setCVData({ ...cvData, summary: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide px-1">Core Competencies</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="e.g. React, Web3, System Architecture, Team Leadership (comma separated)"
                    value={(cvData.coreCompetencies || []).join(', ')}
                    onChange={(e) => setCVData({ ...cvData, coreCompetencies: e.target.value.split(',').map(s => s.trim()) })}
                  />
                  <p className="text-[10px] text-slate-400 font-medium px-1">These will appear as highlighted badges under your summary.</p>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="section-card">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Work Experience</h2>
                      <p className="text-slate-500 text-sm">Your professional journey and impact.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => addItem('experience', { jobTitle: '', company: '', location: '', startDate: '', endDate: '', responsibilities: [] })}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-sm font-bold hover:bg-emerald-100 transition-all active:scale-95"
                  >
                    <Plus size={18} /> Add Role
                  </button>
                </div>

                <div className="space-y-6">
                  {cvData.experience.map((exp, idx) => (
                    <div key={idx} className="item-row">
                      <button
                        className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors p-2"
                        onClick={() => removeItem('experience', idx)}
                      >
                        <Trash2 size={18} />
                      </button>

                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Job Title</label>
                          <input type="text" className="input-field !bg-transparent" value={exp.jobTitle} onChange={(e) => updateArrayItem('experience', idx, 'jobTitle', e.target.value)} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Company</label>
                          <input type="text" className="input-field !bg-transparent" value={exp.company} onChange={(e) => updateArrayItem('experience', idx, 'company', e.target.value)} />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Start Date</label>
                          <input type="text" className="input-field !bg-transparent" value={exp.startDate} onChange={(e) => updateArrayItem('experience', idx, 'startDate', e.target.value)} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">End Date</label>
                          <input type="text" className="input-field !bg-transparent" value={exp.endDate} onChange={(e) => updateArrayItem('experience', idx, 'endDate', e.target.value)} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Key Responsibilities (One per line)</label>
                        <textarea
                          rows={4}
                          className="input-field !bg-transparent resize-none leading-normal"
                          value={exp.responsibilities.join('\n')}
                          onChange={(e) => updateArrayItem('experience', idx, 'responsibilities', e.target.value.split('\n'))}
                        />
                      </div>
                    </div>
                  ))}

                  {cvData.experience.length === 0 && (
                    <div className="p-12 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-center opacity-70">
                      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-4">
                        <Briefcase size={32} />
                      </div>
                      <h3 className="font-bold text-slate-600">No experience added yet</h3>
                      <p className="text-sm text-slate-400 max-w-xs mt-2">Add your work history to show employers your past impact and professional growth.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="section-card">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Education</h2>
                      <p className="text-slate-500 text-sm">Your academic foundation.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => addItem('education', { institution: '', degree: '', startYear: '', endYear: '', coursework: '' })}
                    className="flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-xl text-sm font-bold hover:bg-amber-100 transition-all"
                  >
                    <Plus size={18} /> Add Education
                  </button>
                </div>

                <div className="space-y-6">
                  {cvData.education.map((edu, idx) => (
                    <div key={idx} className="item-row">
                      <button className="remove-btn absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors p-2" onClick={() => removeItem('education', idx)}><Trash2 size={18} /></button>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Institution</label>
                          <input type="text" className="input-field !bg-transparent" value={edu.institution} onChange={(e) => updateArrayItem('education', idx, 'institution', e.target.value)} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Degree / Qualification</label>
                          <input type="text" className="input-field !bg-transparent" value={edu.degree} onChange={(e) => updateArrayItem('education', idx, 'degree', e.target.value)} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Start Year</label>
                            <input type="text" className="input-field !bg-transparent" value={edu.startYear} onChange={(e) => updateArrayItem('education', idx, 'startYear', e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">End Year</label>
                            <input type="text" className="input-field !bg-transparent" value={edu.endYear} onChange={(e) => updateArrayItem('education', idx, 'endYear', e.target.value)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="section-card">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center">
                      <Code size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Key Projects</h2>
                      <p className="text-slate-500 text-sm">Showcase your best builds and contributions.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => addItem('projects', { name: '', type: '', description: '', techStack: '', liveUrl: '', githubUrl: '' })}
                    className="flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-600 rounded-xl text-sm font-bold hover:bg-pink-100 transition-all"
                  >
                    <Plus size={18} /> Add Project
                  </button>
                </div>

                <div className="space-y-6">
                  {cvData.projects.map((proj, idx) => (
                    <div key={idx} className="item-row">
                      <button className="remove-btn absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors p-2" onClick={() => removeItem('projects', idx)}><Trash2 size={18} /></button>

                      <div className="grid grid-cols-2 gap-6 mb-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Project Name</label>
                          <input type="text" className="input-field !bg-transparent" value={proj.name} onChange={(e) => updateArrayItem('projects', idx, 'name', e.target.value)} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Project Type</label>
                          <input type="text" className="input-field !bg-transparent" placeholder="e.g. Open Source" value={proj.type} onChange={(e) => updateArrayItem('projects', idx, 'type', e.target.value)} />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Short Description</label>
                          <textarea rows={3} className="input-field !bg-transparent resize-none leading-relaxed" value={proj.description} onChange={(e) => updateArrayItem('projects', idx, 'description', e.target.value)} />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Live Demo URL</label>
                            <input type="text" className="input-field !bg-transparent text-xs" value={proj.liveUrl || ''} onChange={(e) => updateArrayItem('projects', idx, 'liveUrl', e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Source Code URL</label>
                            <input type="text" className="input-field !bg-transparent text-xs" value={proj.githubUrl || ''} onChange={(e) => updateArrayItem('projects', idx, 'githubUrl', e.target.value)} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Tech Stack</label>
                          <input type="text" className="input-field !bg-transparent" placeholder="React, Node.js, ..." value={proj.techStack} onChange={(e) => updateArrayItem('projects', idx, 'techStack', e.target.value)} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="section-card">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center">
                      <Award size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Technical Skills</h2>
                      <p className="text-slate-500 text-sm">Categorize and list your core strengths.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => addItem('skills', { category: '', items: '' })}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-xl text-sm font-bold hover:bg-purple-100 transition-all"
                  >
                    <Plus size={18} /> Add Category
                  </button>
                </div>

                <div className="space-y-6">
                  {cvData.skills.map((skill, idx) => (
                    <div key={idx} className="item-row">
                      <button className="remove-btn absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors p-2" onClick={() => removeItem('skills', idx)}><Trash2 size={18} /></button>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Category</label>
                          <input type="text" className="input-field !bg-transparent" placeholder="e.g. Frontend" value={skill.category} onChange={(e) => updateArrayItem('skills', idx, 'category', e.target.value)} />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Items (Dot Separated)</label>
                          <input type="text" className="input-field !bg-transparent" placeholder="React • Next.js • Tailwind" value={skill.items} onChange={(e) => updateArrayItem('skills', idx, 'items', e.target.value)} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-slate-100 space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide px-1">Soft Skills</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="e.g. Communication, Problem Solving, Teamwork (comma separated)"
                    value={(cvData.softSkills || []).join(', ')}
                    onChange={(e) => setCVData({ ...cvData, softSkills: e.target.value.split(',').map(s => s.trim()) })}
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Right Preview Side-Panel */}
        <aside className="w-[600px] border-l border-slate-200 flex flex-col z-30 shadow-2xl overflow-hidden bg-slate-100">
          <div className="h-14 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Layout size={16} className="text-primary-500" />
              Live Preview
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-slate-50 rounded-lg border border-slate-200 p-1">
                <button
                  onClick={() => setZoom(Math.max(0.4, zoom - 0.1))}
                  className="p-1 hover:bg-white hover:shadow-sm rounded transition-all text-slate-400 hover:text-slate-600"
                >
                  <Minimize2 size={14} />
                </button>
                <span className="text-[10px] font-bold text-slate-500 min-w-[32px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={() => setZoom(Math.min(1.2, zoom + 0.1))}
                  className="p-1 hover:bg-white hover:shadow-sm rounded transition-all text-slate-400 hover:text-slate-600"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-auto preview-wrapper p-8 scroll-smooth flex justify-center">
            <div
              id="cv-preview-container"
              className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] origin-top mb-12"
              style={{
                width: '210mm',
                minHeight: '297mm',
                transform: `scale(${zoom})`,
                transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              dangerouslySetInnerHTML={{ __html: template === 'professional' ? professionalTemplate(cvData) : modernTemplate(cvData) }}
            />
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;

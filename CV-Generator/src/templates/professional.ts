import type { CVData } from '../types/CVData';

export const professionalTemplate = (data: CVData): string => {
  const renderExperience = () => data.experience.map(exp => `
    <div class="job-section">
      <div class="job-title">
        <h3>${exp.jobTitle}${exp.isPartTime ? ' <span style="font-weight: 400; font-size: 12px;">(Part-time)</span>' : ''}</h3>
        <span class="date">${exp.startDate} – ${exp.endDate}</span>
      </div>
      <div class="company">${exp.company} | ${exp.location}</div>
      <ul>
        ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
      </ul>
      ${exp.technologies ? `<div class="tech-stack">Technologies: ${exp.technologies}</div>` : ''}
    </div>
  `).join('');

  const renderEducation = () => data.education.map(edu => `
    <div class="job-title">
      <h3>${edu.institution}</h3>
      <span class="date">${edu.startYear} – ${edu.endYear}</span>
    </div>
    <div class="company">${edu.degree}</div>
    ${edu.coursework ? `<p style="font-size: 12px; margin-top: 8px;"><strong>Relevant Coursework:</strong> ${edu.coursework}</p>` : ''}
  `).join('');

  const renderCertifications = () => data.certifications.map(cert => `
    <div class="cert-item">
      <div class="cert-name">${cert.name}</div>
      <div class="cert-issuer">${cert.issuer} – ${cert.date}${cert.credentialId ? ` (Credential ID: ${cert.credentialId})` : ''}</div>
    </div>
  `).join('');

  const renderProjects = () => data.projects.map(proj => `
    <div class="project">
      <h4>${proj.name}${proj.type ? ` | ${proj.type}` : ''}</h4>
      <p>${proj.description}</p>
      ${(proj.liveUrl || proj.githubUrl) ? `
        <div class="project-links">
          ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank">Live Demo</a>` : ''}
          ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank">GitHub</a>` : ''}
          ${!proj.githubUrl && proj.liveUrl ? '<span style="color: #9ca3af;">| Private Repository</span>' : ''}
        </div>
      ` : ''}
      <div class="tech-stack">Tech Stack: ${proj.techStack}</div>
    </div>
  `).join('');

  const renderSkills = () => data.skills.map(skill => `
    <div class="skill-category">
      <h4>${skill.category}</h4>
      <div class="skill-list">${skill.items}</div>
    </div>
  `).join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.personalInfo.fullName} - CV</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: #1f2937;
          background: white;
          padding: 40px;
          max-width: 210mm;
          margin: 0 auto;
        }
        
        header {
          border-bottom: 3px solid #3b82f6;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        
        h1 {
          font-size: 32px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 8px;
        }
        
        .subtitle {
          font-size: 16px;
          color: #3b82f6;
          font-weight: 600;
          margin-bottom: 15px;
        }
        
        .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          font-size: 12px;
          color: #4b5563;
        }
        
        .contact-info a {
          color: #3b82f6;
          text-decoration: none;
        }
        
        h2 {
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin-top: 30px;
          margin-bottom: 15px;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        h3 {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
          margin-top: 20px;
          margin-bottom: 5px;
        }
        
        h4 {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }
        
        .job-title {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
        }
        
        .company {
          font-style: italic;
          color: #6b7280;
          font-size: 14px;
        }
        
        .date {
          font-size: 12px;
          color: #9ca3af;
        }
        
        ul {
          margin-left: 20px;
          margin-bottom: 15px;
        }
        
        li {
          margin-bottom: 8px;
          font-size: 13px;
        }
        
        .summary {
          background: #f9fafb;
          padding: 15px;
          border-left: 4px solid #3b82f6;
          margin-bottom: 25px;
          font-size: 13px;
        }
        
        .tech-stack {
          font-weight: 600;
          color: #3b82f6;
          font-size: 12px;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .skill-category h4 {
          color: #3b82f6;
          font-size: 13px;
          margin-bottom: 8px;
        }
        
        .skill-list {
          font-size: 12px;
          color: #4b5563;
        }
        
        .project {
          margin-bottom: 20px;
          padding-left: 15px;
          border-left: 3px solid #e5e7eb;
        }
        
        .project-links {
          font-size: 12px;
          margin-top: 5px;
        }
        
        .project-links a {
          color: #3b82f6;
          text-decoration: none;
          margin-right: 15px;
        }
        
        .cert-item {
          margin-bottom: 10px;
        }
        
        .cert-name {
          font-weight: 600;
          color: #111827;
        }
        
        .cert-issuer {
          color: #6b7280;
          font-size: 12px;
        }
        
        .competencies {
          background: #eff6ff;
          padding: 10px 15px;
          border-radius: 5px;
          margin-bottom: 15px;
          font-weight: 600;
          color: #1e40af;
          font-size: 12px;
        }
        
        @media print {
          body { padding: 20px; }
          h2 { page-break-after: avoid; }
          .project, .job-section { page-break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <header>
        <h1>${data.personalInfo.fullName.toUpperCase()}</h1>
        <div class="subtitle">${data.personalInfo.title}</div>
        <div class="contact-info">
          <span>📍 ${data.personalInfo.location}</span>
          <span>📧 ${data.personalInfo.email}</span>
          <span>📱 ${data.personalInfo.phone}</span>
          ${data.personalInfo.github ? `<span><a href="${data.personalInfo.github}" target="_blank">GitHub</a></span>` : ''}
          ${data.personalInfo.linkedin ? `<span><a href="${data.personalInfo.linkedin}" target="_blank">LinkedIn</a></span>` : ''}
          ${data.personalInfo.portfolio ? `<span><a href="${data.personalInfo.portfolio}" target="_blank">Portfolio</a></span>` : ''}
        </div>
      </header>

      <section>
        <h2>Professional Summary</h2>
        <div class="summary">${data.summary}</div>
        ${data.coreCompetencies.length > 0 ? `
          <div class="competencies">
            <strong>Core Competencies:</strong> ${data.coreCompetencies.join(' | ')}
          </div>
        ` : ''}
      </section>

      ${data.experience.length > 0 ? `
        <section>
          <h2>Professional Experience</h2>
          ${renderExperience()}
        </section>
      ` : ''}

      ${data.education.length > 0 ? `
        <section>
          <h2>Education</h2>
          ${renderEducation()}
        </section>
      ` : ''}

      ${data.certifications.length > 0 ? `
        <section>
          <h2>Certifications</h2>
          ${renderCertifications()}
        </section>
      ` : ''}

      ${data.projects.length > 0 ? `
        <section>
          <h2>Key Projects</h2>
          ${renderProjects()}
        </section>
      ` : ''}

      ${data.skills.length > 0 ? `
        <section>
          <h2>Technical Skills</h2>
          <div class="skills-grid">
            ${renderSkills()}
          </div>
        </section>
      ` : ''}

      ${data.softSkills.length > 0 ? `
        <section>
          <h2>Soft Skills</h2>
          <p style="font-size: 13px;">${data.softSkills.join(' • ')}</p>
        </section>
      ` : ''}

      ${(data.additionalInfo.languages || data.additionalInfo.availability || data.additionalInfo.interests) ? `
        <section>
          <h2>Additional Information</h2>
          <ul style="font-size: 13px;">
            ${data.additionalInfo.languages ? `<li><strong>Languages:</strong> ${data.additionalInfo.languages}</li>` : ''}
            ${data.additionalInfo.availability ? `<li><strong>Availability:</strong> ${data.additionalInfo.availability}</li>` : ''}
            ${data.additionalInfo.interests ? `<li><strong>Interests:</strong> ${data.additionalInfo.interests}</li>` : ''}
          </ul>
        </section>
      ` : ''}

      <footer style="margin-top: 30px; text-align: center; font-size: 11px; color: #9ca3af; border-top: 1px solid #e5e7eb; padding-top: 15px;">
        <em>References available upon request</em>
      </footer>
    </body>
    </html>
  `;
};

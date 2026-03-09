import type { CVData } from '../types/CVData';

export const modernTemplate = (data: CVData): string => {
  const renderExperience = () => data.experience.map(exp => `
    <div class="experience-item">
      <div class="timeline-dot"></div>
      <div class="experience-content">
        <div class="experience-header">
          <h3>${exp.jobTitle}${exp.isPartTime ? ' <span class="part-time">(Part-time)</span>' : ''}</h3>
          <span class="date-badge">${exp.startDate} – ${exp.endDate}</span>
        </div>
        <div class="company-name">${exp.company} • ${exp.location}</div>
        <ul class="responsibilities">
          ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>
        ${exp.technologies ? `<div class="tech-badges">${exp.technologies.split(', ').map(t => `<span class="badge">${t}</span>`).join('')}</div>` : ''}
      </div>
    </div>
  `).join('');

  const renderEducation = () => data.education.map(edu => `
    <div class="education-item">
      <h3>${edu.institution}</h3>
      <div class="degree">${edu.degree}</div>
      <span class="year">${edu.startYear} – ${edu.endYear}</span>
      ${edu.coursework ? `<p class="coursework">${edu.coursework}</p>` : ''}
    </div>
  `).join('');

  const renderProjects = () => data.projects.map(proj => `
    <div class="project-card">
      <div class="project-header">
        <h4>${proj.name}</h4>
        ${proj.type ? `<span class="project-type">${proj.type}</span>` : ''}
      </div>
      <p>${proj.description}</p>
      <div class="project-footer">
        <div class="tech-badges small">${proj.techStack.split(', ').map(t => `<span class="badge small">${t}</span>`).join('')}</div>
        <div class="project-links">
          ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank">🔗 Demo</a>` : ''}
          ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank">📁 Code</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  const renderSkills = () => data.skills.map(skill => `
    <div class="skill-group">
      <h4>${skill.category}</h4>
      <div class="skill-tags">${skill.items.split(' • ').map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
          font-family: 'Poppins', sans-serif;
          line-height: 1.7;
          color: #2d3748;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 40px;
        }
        
        .cv-container {
          max-width: 210mm;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px;
          text-align: center;
        }
        
        h1 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 8px;
          letter-spacing: 2px;
        }
        
        .subtitle {
          font-size: 16px;
          opacity: 0.9;
          margin-bottom: 20px;
          font-weight: 300;
        }
        
        .contact-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 13px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .contact-item a {
          color: white;
          text-decoration: none;
        }
        
        main {
          padding: 40px;
        }
        
        section {
          margin-bottom: 35px;
        }
        
        h2 {
          font-size: 22px;
          font-weight: 600;
          color: #667eea;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        h2::before {
          content: '';
          width: 4px;
          height: 30px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }
        
        .summary-box {
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
          padding: 20px 25px;
          border-radius: 12px;
          font-size: 14px;
          margin-bottom: 15px;
        }
        
        .competencies {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .competency-badge {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .experience-item {
          position: relative;
          padding-left: 30px;
          margin-bottom: 25px;
          border-left: 2px solid #e2e8f0;
        }
        
        .timeline-dot {
          position: absolute;
          left: -7px;
          top: 5px;
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
        }
        
        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        h3 {
          font-size: 16px;
          font-weight: 600;
          color: #2d3748;
        }
        
        .part-time {
          font-weight: 400;
          font-size: 12px;
          color: #718096;
        }
        
        .date-badge {
          background: #edf2f7;
          color: #4a5568;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 11px;
          font-weight: 500;
        }
        
        .company-name {
          color: #667eea;
          font-size: 14px;
          margin-bottom: 10px;
        }
        
        .responsibilities {
          margin-left: 20px;
          font-size: 13px;
          color: #4a5568;
        }
        
        .responsibilities li {
          margin-bottom: 6px;
        }
        
        .tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 12px;
        }
        
        .badge {
          background: #edf2f7;
          color: #667eea;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 500;
        }
        
        .badge.small {
          font-size: 10px;
          padding: 3px 8px;
        }
        
        .education-item {
          background: #f7fafc;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 15px;
        }
        
        .degree {
          color: #667eea;
          font-size: 14px;
        }
        
        .year {
          font-size: 12px;
          color: #718096;
        }
        
        .coursework {
          font-size: 12px;
          color: #4a5568;
          margin-top: 10px;
        }
        
        .cert-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .cert-name {
          font-weight: 600;
          color: #2d3748;
        }
        
        .cert-issuer {
          font-size: 12px;
          color: #718096;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .project-card {
          background: #f7fafc;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        
        h4 {
          font-size: 14px;
          font-weight: 600;
          color: #2d3748;
        }
        
        .project-type {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 3px 10px;
          border-radius: 10px;
          font-size: 10px;
        }
        
        .project-card p {
          font-size: 12px;
          color: #4a5568;
          margin-bottom: 12px;
        }
        
        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .project-links a {
          color: #667eea;
          text-decoration: none;
          font-size: 12px;
          margin-left: 10px;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .skill-group h4 {
          color: #667eea;
          margin-bottom: 10px;
        }
        
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        
        .skill-tag {
          background: #edf2f7;
          color: #4a5568;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 11px;
        }
        
        .soft-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .soft-skill-tag {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
        }
        
        footer {
          text-align: center;
          padding: 30px;
          background: #f7fafc;
          font-size: 12px;
          color: #718096;
        }
        
        @media print {
          body { background: white; padding: 0; }
          .cv-container { box-shadow: none; border-radius: 0; }
        }
      </style>
    </head>
    <body>
      <div class="cv-container">
        <header>
          <h1>${data.personalInfo.fullName.toUpperCase()}</h1>
          <div class="subtitle">${data.personalInfo.title}</div>
          <div class="contact-grid">
            <div class="contact-item">📍 ${data.personalInfo.location}</div>
            <div class="contact-item">📧 ${data.personalInfo.email}</div>
            <div class="contact-item">📱 ${data.personalInfo.phone}</div>
            ${data.personalInfo.github ? `<div class="contact-item"><a href="${data.personalInfo.github}" target="_blank">GitHub</a></div>` : ''}
            ${data.personalInfo.linkedin ? `<div class="contact-item"><a href="${data.personalInfo.linkedin}" target="_blank">LinkedIn</a></div>` : ''}
            ${data.personalInfo.portfolio ? `<div class="contact-item"><a href="${data.personalInfo.portfolio}" target="_blank">Portfolio</a></div>` : ''}
          </div>
        </header>

        <main>
          <section>
            <h2>About Me</h2>
            <div class="summary-box">${data.summary}</div>
            ${data.coreCompetencies.length > 0 ? `
              <div class="competencies">
                ${data.coreCompetencies.map(c => `<span class="competency-badge">${c}</span>`).join('')}
              </div>
            ` : ''}
          </section>

          ${data.experience.length > 0 ? `
            <section>
              <h2>Experience</h2>
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
              ${data.certifications.map(cert => `
                <div class="cert-item">
                  <div>
                    <div class="cert-name">${cert.name}</div>
                    <div class="cert-issuer">${cert.issuer}</div>
                  </div>
                  <span class="date-badge">${cert.date}</span>
                </div>
              `).join('')}
            </section>
          ` : ''}

          ${data.projects.length > 0 ? `
            <section>
              <h2>Projects</h2>
              <div class="projects-grid">
                ${renderProjects()}
              </div>
            </section>
          ` : ''}

          ${data.skills.length > 0 ? `
            <section>
              <h2>Skills</h2>
              <div class="skills-grid">
                ${renderSkills()}
              </div>
            </section>
          ` : ''}

          ${data.softSkills.length > 0 ? `
            <section>
              <h2>Soft Skills</h2>
              <div class="soft-skills">
                ${data.softSkills.map(s => `<span class="soft-skill-tag">${s}</span>`).join('')}
              </div>
            </section>
          ` : ''}
        </main>

        <footer>
          <em>References available upon request</em>
        </footer>
      </div>
    </body>
    </html>
  `;
};

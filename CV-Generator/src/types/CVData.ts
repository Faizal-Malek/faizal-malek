export interface CVData {
    personalInfo: {
        fullName: string;
        title: string;
        location: string;
        email: string;
        phone: string;
        github?: string;
        linkedin?: string;
        portfolio?: string;
    };
    summary: string;
    coreCompetencies: string[];
    experience: {
        jobTitle: string;
        company: string;
        location: string;
        startDate: string;
        endDate: string;
        isPartTime?: boolean;
        responsibilities: string[];
        technologies?: string;
    }[];
    education: {
        institution: string;
        degree: string;
        startYear: string;
        endYear: string;
        coursework?: string;
    }[];
    certifications: {
        name: string;
        issuer: string;
        date: string;
        credentialId?: string;
    }[];
    projects: {
        name: string;
        type: string;
        description: string;
        liveUrl?: string;
        githubUrl?: string;
        techStack: string;
    }[];
    skills: {
        category: string;
        items: string;
    }[];
    softSkills: string[];
    additionalInfo: {
        languages?: string;
        availability?: string;
        interests?: string;
    };
}

export const defaultCVData: CVData = {
    personalInfo: {
        fullName: '',
        title: '',
        location: '',
        email: '',
        phone: '',
        github: '',
        linkedin: '',
        portfolio: '',
    },
    summary: '',
    coreCompetencies: [],
    experience: [],
    education: [],
    certifications: [],
    projects: [],
    skills: [],
    softSkills: [],
    additionalInfo: {},
};

export interface ITemplate {
    personalInfo: IPersonalInfo;
    education: IEducation[];
    skills: ISkills[];
    workHistory: IWorkExperience[];
    achievementTitle: string[];
    achievementSummary?: string;
}

export interface IPersonalInfo {
    name: string;
    occupation: string;
    description?: string;
    summary: string;
    contact: string;
    address?: string;
    city: string;
    dob: Date;
    bloodGrp?: string;
}

export interface IEducation {
    degree: string;
    college: string;
    passoutYear: number;
}

export interface ISkills {
    proficiency: string;
    level: number;
}

export interface IWorkExperience {
    companyName: string;
    jobRole: string;
    joiningDate: any;
    releaseDate: any;
    taskDescription: string[];
    location: string;
}

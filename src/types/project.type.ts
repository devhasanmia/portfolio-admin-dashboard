export interface IProject {
    _id: string
    thumbnail: string
    title: string
    description: string
    technologies: string[]
    liveLink: string
    githubLink: string
    status: string
    contributors: string[]
    projectType: string
    featured: boolean
    createdAt: string
    updatedAt: string
    __v: number
}

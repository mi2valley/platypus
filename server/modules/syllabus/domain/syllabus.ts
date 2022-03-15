import { SyllabusSection } from './syllabus-section'
import type { SyllabusCode } from './syllabus-code'

export interface Syllabus {
    id?: string,
    name: string,
    instructor: string,
    location: string,
    institution?: string,
    officeHours: string,
    classHours: string,
    email: string,
    descriptionHtml: string,
    sections: SyllabusSection[]
    additionalHtml?: string,
    code?: SyllabusCode,
    owners: string[],
}
export class Course {
    public id: string;
    public name: string;
    public length: number;
    public subject: string;

    constructor(courseInfo: any) {
        this.id = courseInfo.id;
        this.name = courseInfo.name;
        this.length = courseInfo.length;
        this.subject = courseInfo.subject;
    }
}

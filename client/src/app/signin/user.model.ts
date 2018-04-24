export class User {
    public firstName?: string;
    public lastName?: string;

    constructor(userInfo: any) {
        this.firstName = userInfo.firstName;
        this.lastName = userInfo.lastName;
    }
}

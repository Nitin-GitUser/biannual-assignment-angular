export class Users {
    constructor(
        public email: string = '',
        public password: string = '',
        public admin: boolean = false
    ) { }
}

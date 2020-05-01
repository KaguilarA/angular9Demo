export class User {
  constructor(
    public firstName: string,
    public firstSurname: string,
    public email: string,
    public password: string,
    public role: number,
    public googleTokenLogin: boolean = false,
    public secondName?: string,
    public secondSurname?: string,
    public img?: string,
    // tslint:disable-next-line: variable-name
    public _id?: string,
  ) {}
}

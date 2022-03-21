export default class UserDTO {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public registry: number,
    public role: number,
    public token: string,
    public createdAt: string,
    public updatedAt: string
  ) {}
}

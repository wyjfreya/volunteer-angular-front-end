import { User } from './user';

export class LoginResponse {
    isSuccessful: number;
    message: String;
    obj: User;
}

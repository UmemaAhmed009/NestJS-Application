import { IsEmail, IsNotEmpty, IsString } from "class-validator";
//the dto is now validated and it has an email and a password.
export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
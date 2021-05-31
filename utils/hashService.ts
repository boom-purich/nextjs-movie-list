import bcrypt from 'bcrypt';

export class HashService {

    password: string;

    constructor(plainText: string) {
        this.password = plainText;
    }

    hashingPlainText():string {
        return bcrypt.hashSync(this.password, parseInt(process.env.SALT_ROUND))
    }

    comparePassword(password:string,hash:string):boolean {
        return bcrypt.compareSync(password,hash);
    }

}
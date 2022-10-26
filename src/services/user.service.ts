import UserModel, {UserDocument, UserInput} from '../models/user.model'

export async function createUser(input: UserInput) {
    try {
        const user = await UserModel.create(input)
        return user.toJSON()
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function findUserByEmail(email: string) {
    try {
        const user = await UserModel.findOne({email: email}) || null
        return user.toJSON()
}
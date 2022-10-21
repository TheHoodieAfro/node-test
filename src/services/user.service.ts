import UserModel, {UserDocument, UserInput} from '../models/user.model'

export async function createUser(input: UserInput) {
    try {
        const user = await UserModel.create(input)
        return user.toJSON()
    } catch (error: any) {
        throw new Error(error)
    }
}
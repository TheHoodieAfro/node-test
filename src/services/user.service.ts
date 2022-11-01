import UserModel, {UserDocument, UserInput} from '../models/user.model'

class UserService {

    async createUser(input: UserInput) {
        try {
            const user = await UserModel.create(input)
            return user.toJSON()
        } catch (error: any) {
            throw new Error(error)
        }
    }
    
    async updateUser(id: string, input: UserInput) {
        try {
            const user = await UserModel.findOneAndUpdate({_id: id}, input, {new: true})
            return user?.toJSON()
        } catch (error: any) {
            throw new Error(error)
        }
    }
    
    async findUserByEmail(email: string) {
        try {
            const user = await UserModel.findOne({email: email})
            return user
        }catch (error: any) {
            throw new Error(error)
        }
    }

    async findUserById(id: string) {
        try {
            const user = await UserModel.findOne({_id: id})
            return user
        }catch (error: any) {
            throw new Error(error)
        }
    }

    async deleteUser(id: string) {
        try {
            const user = await UserModel.deleteOne({_id: id})
            return user
        }catch (error: any) {
            throw new Error(error)
        }
    }
}

export default new UserService()
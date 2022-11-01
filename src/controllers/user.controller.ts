import { Request, Response } from "express";
import UserService from "../services/user.service";
import debug from "debug";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import { UserDocument } from "../models/user.model";

const debuglog: debug.IDebugger = debug("app");

class UserController {
  async createUserHandler(req: Request, res: Response) {
    try {
      debuglog("********************************");
      debuglog(req);
      const userExist = await UserService.findUserByEmail(req.body.email);
      if (userExist !== null) {
        return res.status(409).send("user already exists");
      }
      req.body.password = await bcrypt.hash(req.body.password, 10);

      const user = await UserService.createUser(req.body);

      return res.send(user);
    } catch (error: any) {
      debuglog(error);

      return res.status(409).send(error.message);
    }
  }

  async updateUserHandler(req: Request, res: Response) {
    try {
      const userExist = await UserService.findUserById(req.params.id);

      if (userExist == null) {
        return res.status(409).send("user does not exists");
      }

      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      }

      //req.body.password = await bcrypt.hash(req.body.password, 10)

      const user = await UserService.updateUser(req.params.id, req.body);

      return res.send(user);
    } catch (error: any) {
      debuglog(error);

      return res.status(409).send(error.message);
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const userExist = await UserService.findUserById(req.params.id);

      if (userExist == null) {
        return res.status(409).send("user does not exists");
      }

      userExist.password = ""
      return res.send(userExist);
    } catch (error: any) {
      debuglog(error);

      return res.status(409).send(error.message);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const userExist = await UserService.findUserById(req.params.id);

      if (userExist == null) {
        return res.status(409).send("user does not exists");
      }

      let user = await UserService.deleteUser(req.params.id)
      return res.send(user);
    } catch (error: any) {
      debuglog(error);

      return res.status(409).send(error.message);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const user = await UserService.findUserByEmail(req.body.email);
      if (
        user !== null &&
        (await bcrypt.compare(req.body.password, user.password))
      ) {
        const token = jwt.sign(
          { user_id: user._id, email: user.email },
          process.env.TOKENSECRET as Secret,
          { expiresIn: "2h" }
        );

        return res
          .status(200)
          .send({ email: user.email, name: user.name, token });
      }

      return res.status(401).send("user or password incorrect");
    } catch (error: any) {
      debuglog(error);

      return res.status(409).send(error.message);
    }
  }
}
export default new UserController();

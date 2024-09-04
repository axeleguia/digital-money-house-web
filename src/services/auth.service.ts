import redisService from "@/services/common/redis.service";
import {
  AuthResponseType,
  LoginRequestType,
  LoginResponseType,
} from "@/types/login.types";
import {
  RegisterRequestType,
  RegisterResponseType,
} from "@/types/register.types";
import { v4 as uuidv4 } from "uuid";
import apiService from "./api.service";

const TWO_HOURS = 60 * 60 * 2;

export class AuthService {
  authenticate = async (
    loginRequest: LoginRequestType
  ): Promise<AuthResponseType> => {
    const loginResponse = await apiService.login(loginRequest);
    return this.buildAuthResponse(loginRequest.email, loginResponse);
  };

  register = async (
    registerRequest: RegisterRequestType
  ): Promise<RegisterResponseType> => {
    return await apiService.register(registerRequest);
  };

  buildAuthResponse = (
    email: string,
    loginResponse: LoginResponseType
  ): AuthResponseType => {
    const sessionId = uuidv4();
    const now = new Date();
    const expireAt = new Date(now.getTime() + TWO_HOURS * 1000).getTime();
    redisService.setEx(sessionId, loginResponse.token, TWO_HOURS);
    return {
      sessionId: sessionId,
      email: email,
      expireAt: expireAt,
    };
  };
}
const authService = new AuthService();
export default authService;

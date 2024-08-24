import { AccessDeniedError } from "@/interfaces/http-error";
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

const ONE_DAY = 60 * 60 * 24;

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
    const expireAt = new Date(now.getTime() + ONE_DAY * 1000).getTime();
    redisService.setEx(sessionId, loginResponse.token, ONE_DAY);
    return {
      sessionId: sessionId,
      email: email,
      expireAt: expireAt,
    };
  };

  getAccessToken = async (sessionId: string) => {
    if (!sessionId)
      throw new AccessDeniedError("Session ID is not valid anymore", "");
    const accessToken = (await apiService.getRedisValue({ key: sessionId }))
      .value;
    if (!accessToken)
      throw new AccessDeniedError("Access Token is not valid anymore", "");
    return accessToken;
  };
}
const authService = new AuthService();
export default authService;

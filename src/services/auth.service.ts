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
import { LogoutRequestType, LogoutResponseType } from "@/types/logout.types";

const TEN_MINUTES = 60 * 10;

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

  logout = async (
    logoutRequest: LogoutRequestType
  ): Promise<LogoutResponseType> => {
    return await apiService.logoutInternal({ token: logoutRequest.token });
  };

  buildAuthResponse = (
    email: string,
    loginResponse: LoginResponseType
  ): AuthResponseType => {
    const sessionId = uuidv4();
    const now = new Date();
    const expireAt = new Date(now.getTime() + TEN_MINUTES * 1000).getTime();
    redisService.setEx(sessionId, loginResponse.token, TEN_MINUTES);
    return {
      sessionId: sessionId,
      email: email,
      expireAt: expireAt,
    };
  };

  getAccessToken = async (sessionId: string) => {
    if (!sessionId)
      throw new AccessDeniedError("Session ID is not valid anymore");
    const accessToken = (await apiService.getRedisValue({ key: sessionId }))
      .value;
    if (!accessToken)
      throw new AccessDeniedError("Access Token is not valid anymore");
    return accessToken;
  };
}
const authService = new AuthService();
export default authService;

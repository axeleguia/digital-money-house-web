import redisService from "@/common/redis.service";
import { AccessDeniedError } from "@/interfaces/http-error";
import {
  AuthResponseType,
  LoginRequestType,
  LoginResponseType,
} from "@/types/login.types";
import { RegisterRequest, RegisterResponse } from "@/types/register.types";
import { v4 as uuidv4 } from "uuid";
import apiService from "./api.service";

const TEN_MINUTES = 60 * 10;

export class AuthService {
  authenticate = async (
    loginRequest: LoginRequestType
  ): Promise<AuthResponseType> => {
    const loginResponse = await apiService.login(loginRequest);
    return this.buildAuthResponse(loginRequest.email, loginResponse);
  };

  register = async (
    registerRequest: RegisterRequest
  ): Promise<RegisterResponse> => {
    return await apiService.register(registerRequest);
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
    const accessToken = await redisService.get(sessionId);
    if (!accessToken)
      throw new AccessDeniedError("Access Token is not valid anymore");
    return accessToken;
  };
}
const authService = new AuthService();
export default authService;

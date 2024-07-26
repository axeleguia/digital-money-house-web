import httpExternalService from "@/common/http-external.service";
import httpInternalService from "@/common/http-internal.service";
import {
  LoginInternalResponseType,
  LoginRequestType,
  LoginResponseType,
} from "@/types/login.types";
import { LogoutRequestType, LogoutResponseType } from "@/types/logout.types";
import { RegisterRequest, RegisterResponse } from "@/types/register.types";

class ApiService {
  login = async (loginRequest: LoginRequestType) =>
    httpExternalService.httpPost<LoginRequestType, LoginResponseType>(
      "/login",
      loginRequest
    );
  register = async (registerRequest: RegisterRequest) =>
    httpExternalService.httpPost<RegisterRequest, RegisterResponse>(
      "/users",
      registerRequest
    );
  logout = async (logoutRequest: LogoutRequestType) =>
    httpExternalService.httpPost<LogoutRequestType, LogoutResponseType>(
      "/logout",
      logoutRequest
    );

  loginInternal = async (loginRequest: LoginRequestType) =>
    httpInternalService.httpPost<LoginRequestType, LoginInternalResponseType>(
      "/auth/login",
      loginRequest
    );
  registerInternal = async (registerRequest: RegisterRequest) =>
    httpInternalService.httpPost<RegisterRequest, RegisterResponse>(
      "/auth/register",
      registerRequest
    );
}

const apiService = new ApiService();
export default apiService;

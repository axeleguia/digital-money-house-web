import httpExternalService from "@/services/common/http-external.service";
import httpInternalService from "@/services/common/http-internal.service";
import { GetAccountResponseType } from "@/types/account.types";
import {
  LoginInternalResponseType,
  LoginRequestType,
  LoginResponseType,
} from "@/types/login.types";
import { LogoutRequestType, LogoutResponseType } from "@/types/logout.types";
import { RedisRequestType, RedisResponseType } from "@/types/redis.types";
import {
  RegisterRequestType,
  RegisterResponseType,
} from "@/types/register.types";
import {
  GetUserRequestType,
  GetUserResponseType,
  PatchUserRequestType,
  PatchUserResponseType,
} from "@/types/user.types";
import httpProxyService from "./common/http-proxy.service";

class ApiService {
  // Internal Routes

  loginInternal = async (loginRequest: LoginRequestType) =>
    httpInternalService.httpPost<LoginRequestType, LoginInternalResponseType>(
      "/auth/login",
      loginRequest
    );

  logoutInternal = async (logoutRequest: LogoutRequestType) =>
    httpExternalService.httpPost<LogoutRequestType, LogoutResponseType>(
      "/auth/logout",
      logoutRequest
    );

  registerInternal = async (registerRequest: RegisterRequestType) =>
    httpInternalService.httpPost<RegisterRequestType, RegisterResponseType>(
      "/auth/register",
      registerRequest
    );

  getRedisValue = async (redisRequest: RedisRequestType) =>
    httpInternalService.httpGet<RedisRequestType, RedisResponseType>(
      "/redis",
      redisRequest
    );

  // Digital Money Back 1.0

  login = async (loginRequest: LoginRequestType) =>
    httpExternalService.httpPost<LoginRequestType, LoginResponseType>(
      "/login",
      loginRequest
    );

  register = async (registerRequest: RegisterRequestType) =>
    httpExternalService.httpPost<RegisterRequestType, RegisterResponseType>(
      "/users",
      registerRequest
    );

  getAccount = async () =>
    httpProxyService.httpGet<{}, GetAccountResponseType>("/account", {});

  getUser = async ({ id }: GetUserRequestType) =>
    httpProxyService.httpGet<{}, GetUserResponseType>(`/users/${id}`);

  patchUser = async (userRequest: PatchUserRequestType) =>
    httpProxyService.httpPatch<{}, PatchUserResponseType>(
      `/users/${userRequest.id}`,
      userRequest
    );
}

const apiService = new ApiService();
export default apiService;

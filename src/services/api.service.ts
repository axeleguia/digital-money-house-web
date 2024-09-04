import httpExternalService from "@/services/common/http-external.service";
import httpInternalService from "@/services/common/http-internal.service";
import { GetAccountResponseType } from "@/types/account.types";
import {
  LoginInternalResponseType,
  LoginRequestType,
  LoginResponseType,
} from "@/types/login.types";
import { LogoutResponseType } from "@/types/logout.types";
import { RedisResponseType } from "@/types/redis.types";
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
import {
  PostAccountDepositsRequestType,
  PostAccountDepositsResponseType,
} from "@/types/account-deposits.types";

class ApiService {
  // Internal Routes

  loginInternal = async (loginRequest: LoginRequestType) =>
    httpInternalService.httpPost<LoginRequestType, LoginInternalResponseType>(
      "/auth/login",
      loginRequest
    );

  logoutInternal = async () =>
    httpInternalService.httpPost<{}, LogoutResponseType>("/auth/logout");

  registerInternal = async (registerRequest: RegisterRequestType) =>
    httpInternalService.httpPost<RegisterRequestType, RegisterResponseType>(
      "/auth/register",
      registerRequest
    );

  getRedisValue = async (key: string) =>
    httpInternalService.httpGet<RedisResponseType>(`/redis?key=${key}`);

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
    httpProxyService.httpGet<GetAccountResponseType>("/account");

  getAccountCards = async ({ account_id }: GetAccountCardsRequestType) =>
    httpProxyService.httpGet<GetAccountCardsResponseType[]>(
      `/accounts/${account_id}/cards`
    );

  postAccountCards = async (
    account_id: number,
    cardRequest: PostAccountCardsRequestType
  ) =>
    httpProxyService.httpPost<
      PostAccountCardsRequestType,
      PostAccountCardsResponseType
    >(`/accounts/${account_id}/cards`, cardRequest);

  deleteAccountCards = async (account_id: number, card_id: number) =>
    httpProxyService.httpDelete<{ account_id: number; card_id: number }, any>(
      `/accounts/${account_id}/cards/${card_id}`
    );

  postAccountDeposits = async (
    account_id: number,
    depositRequest: PostAccountDepositsRequestType
  ) =>
    httpProxyService.httpPost<
      PostAccountDepositsRequestType,
      PostAccountDepositsResponseType
    >(`/accounts/${account_id}/deposits`, depositRequest);

  getUser = async ({ user_id }: GetUserRequestType) =>
    httpProxyService.httpGet<GetUserResponseType>(`/users/${user_id}`);

  patchUser = async (userRequest: PatchUserRequestType) =>
    httpProxyService.httpPatch<PatchUserRequestType, PatchUserResponseType>(
      `/users/${userRequest.id}`,
      userRequest
    );
}

const apiService = new ApiService();
export default apiService;

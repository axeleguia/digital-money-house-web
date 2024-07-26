import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
  HttpError,
} from "@/interfaces/http-error";

export class HttpService {
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  httpGet = async <TRequest, TResponse>(
    endpoint: string,
    params?: URLSearchParams,
  ): Promise<TResponse> => {
    const response = await fetch(
      `${this.baseUrl}${endpoint}${params ? `?${params}` : ""}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      },
    );
    if (!response.ok) {
      const httpError = (await response.json()) as HttpError;
      this.handleHttpError(response.status, httpError.error, endpoint);
    }
    const data = (await response.json()) as TResponse;
    return data;
  };

  httpPost = async <TRequest, TResponse>(
    endpoint: string,
    body?: TRequest,
  ): Promise<TResponse> => {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      const httpError = (await response.json()) as HttpError;
      this.handleHttpError(response.status, httpError.error, response.url);
    }
    const data = (await response.json()) as TResponse;
    return data;
  };

  handleHttpError = (
    statusCode: number,
    error: string,
    endpoint: string,
  ): HttpError => {
    const status: any = {
      400: new BadRequestError(error, endpoint),
      401: new UnauthorizedError(error, endpoint),
      404: new NotFoundError(error, endpoint),
      500: new InternalServerError(error, endpoint),
    };
    throw status[statusCode] || new Error("Failed to retrieve: " + endpoint);
  };
}

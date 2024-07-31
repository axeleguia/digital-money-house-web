import { HttpService } from "./http.service";
const BASE_URL = "https://digitalmoney.digitalhouse.com/api";

class HttpExternalService extends HttpService {
  constructor() {
    super(BASE_URL);
  }
}
const httpExternalService = new HttpExternalService();
export default httpExternalService;

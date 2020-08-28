import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export abstract class ApiService {
  protected readonly APPLICATION_JSON_HTTP_HEADER = new HttpHeaders({
    'content-type': 'application/json',
  });

  protected baseUrl: string;

  constructor(protected http: HttpClient) {
    this.baseUrl = environment.apiBaseUrl;
  }
}

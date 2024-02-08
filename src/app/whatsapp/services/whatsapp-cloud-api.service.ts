import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { API } from '../../common/api-resource';
import { HttpClient } from '@angular/common/http';
import { WhatsappCloudAPIRequest } from '../interfaces/whatsapp-cloud-api-request.interface';
import { WhatsappCloudAPIResponse} from '../interfaces/whatsapp-cloud-api-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhatsappCloudApiService {
  private apiUrl = environment.apiUrl + API.consumeTemplate;

  constructor(private http: HttpClient) { }

  sendMessage(whatsappCloudApiRequest: WhatsappCloudAPIRequest): Observable<WhatsappCloudAPIResponse> {
    console.log(whatsappCloudApiRequest);
    return this.http.post<WhatsappCloudAPIResponse>(this.apiUrl, whatsappCloudApiRequest);
  }
  



}

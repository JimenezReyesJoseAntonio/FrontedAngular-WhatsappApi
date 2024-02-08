import { TestBed } from '@angular/core/testing';

import { WhatsappCloudApiService } from './whatsapp-cloud-api.service';

describe('WhatsappCloudApiService', () => {
  let service: WhatsappCloudApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatsappCloudApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

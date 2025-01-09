import { Injectable } from '@angular/core';
import { catchError, map, Observable, take } from 'rxjs';
import { AdventureStep } from '../../models/adventure-step.interface';
import { HTTPService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class AdventureService {
  constructor(private httpService: HTTPService) {}

  fetchAdventures$(): Observable<AdventureStep[]> {
    return this.httpService.GET<AdventureStep[]>('../../../assets/media/adventure.json').pipe(
      take(1),
      map(adventure => adventure.body!),
      catchError(() => [])
    );
  }
}

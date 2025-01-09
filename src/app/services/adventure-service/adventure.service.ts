import { Injectable } from '@angular/core';
import { catchError, map, Observable, take } from 'rxjs';
import { AdventureModel } from '../../models/adventure-model.interface';
import { HTTPService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class AdventureService {
  constructor(private httpService: HTTPService) {}

  fetchAdventures$(): Observable<AdventureModel> {
    return this.httpService.GET<AdventureModel>('../../../assets/media/adventure.json').pipe(
      take(1),
      map(adventure => adventure.body!),
      catchError(() => [])
    );
  }
}

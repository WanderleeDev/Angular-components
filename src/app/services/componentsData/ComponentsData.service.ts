import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDataLink } from 'app/interfaces/IDataCard.interface';

@Injectable({
  providedIn: 'root'
})
export class ComponentsDataService {
  private dataComponents$ = new BehaviorSubject<IDataLink[]>(
    [
      {
        title: 'navbars',
        numberComponents: 0,
        icon: 'url-del-icono-2'
      },
      {
        title: 'cards',
        numberComponents: 0,
        icon: 'url-del-icono-4'
      },
      {
        title: 'sliders',
        numberComponents: 0,
        icon: 'url-del-icono-5'
      },
      {
        title: 'footers',
        numberComponents: 0,
        icon: 'url-del-icono-6'
      },
      {
        title: 'headers',
        numberComponents: 0,
        icon: 'url-del-icono-6'
      },
      {
        title: 'lists',
        numberComponents: 0,
        icon: 'url-del-icono-6'
      },
      {
        title: 'others',
        numberComponents: 0,
        icon: 'url-del-icono-3'
      }
    ]
  );

  public getDataComponents$(): Observable<IDataLink[]> {
    return this.dataComponents$.asObservable();
  }
}

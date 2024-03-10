import { DOCUMENT } from '@angular/common';
import { inject, Injector } from '@angular/core';
import { GplAppConfigProviderToken } from '@itdl/game-portal/common/config';
import {
    IInjectorProvider,
    ODataResponse,
    odataResponseValue,
    ServerSideDataEMPTY,
    ServerSideDataEmptyArray,
} from '@itdl/shared/common';
import { HttpService } from '@itdl/shared/http';
import { Observable } from 'rxjs';

import { Entity } from './entity.abstract';
import { ODataQuery } from './query/query';

export abstract class EntityApiService<TEntity extends Entity<unknown>, TEntityToCreate = TEntity>
    implements IInjectorProvider
{
    protected abstract getApiUrl(): string;
    protected apiUrl!: string;

    readonly injector = inject(Injector);
    private readonly window = inject(DOCUMENT).defaultView;
    private readonly appConfig = inject(GplAppConfigProviderToken).config;
    private readonly httpService: HttpService = inject(HttpService);

    constructor() {
        if (!this.window) throw new Error('Window is not defined!');
        this.apiUrl = `${this.appConfig.apiUrl}${this.getApiUrl()}`;
    }

    @ServerSideDataEmptyArray()
    public getAllOData(oDataQuery: string): Observable<TEntity[]> {
        return this.httpService
            .get<ODataResponse<TEntity[]>>(`${this.apiUrl}/${ODataQuery.create(oDataQuery).query}`)
            .pipe(odataResponseValue());
    }

    @ServerSideDataEmptyArray()
    public getAll(): Observable<TEntity[]> {
        return this.httpService.get<ODataResponse<TEntity[]>>(this.apiUrl).pipe(odataResponseValue());
    }

    @ServerSideDataEMPTY()
    public getByIdOData(id: string, oDataQuery: string): Observable<TEntity[]> {
        return this.httpService.post<TEntity[], ODataQuery>(
            `${this.apiUrl}/odata/${id}`,
            ODataQuery.create(oDataQuery),
        );
    }

    @ServerSideDataEMPTY()
    public getById(id: string): Observable<TEntity> {
        return this.httpService.get<TEntity>(`${this.apiUrl}/${id}`);
    }

    @ServerSideDataEMPTY()
    public create(entity: TEntityToCreate): Observable<TEntity> {
        return this.httpService.post<TEntity, TEntityToCreate>(this.apiUrl, entity);
    }

    @ServerSideDataEMPTY()
    public update(entity: TEntity): Observable<TEntity> {
        return this.httpService.put<TEntity, TEntity>(`${this.apiUrl}/${entity.id}`, entity);
    }

    @ServerSideDataEMPTY()
    public delete(id: string): Observable<TEntity> {
        return this.httpService.delete<TEntity>(`${this.apiUrl}/${id}`);
    }
}

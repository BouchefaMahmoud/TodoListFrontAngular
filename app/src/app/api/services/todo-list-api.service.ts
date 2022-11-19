/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddTodoListCommand } from '../models/add-todo-list-command';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoListApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTodoListGet
   */
  static readonly ApiTodoListGetPath = '/api/TodoList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoListGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Todo>>> {

    const rb = new RequestBuilder(this.rootUrl, TodoListApiService.ApiTodoListGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Todo>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoListGet$Plain(params?: {
  }): Observable<Array<Todo>> {

    return this.apiTodoListGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Todo>>) => r.body as Array<Todo>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoListGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Todo>>> {

    const rb = new RequestBuilder(this.rootUrl, TodoListApiService.ApiTodoListGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Todo>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoListGet$Json(params?: {
  }): Observable<Array<Todo>> {

    return this.apiTodoListGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Todo>>) => r.body as Array<Todo>)
    );
  }

  /**
   * Path part for operation apiTodoListPost
   */
  static readonly ApiTodoListPostPath = '/api/TodoList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoListPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoListPost$Plain$Response(params?: {
    body?: AddTodoListCommand
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TodoListApiService.ApiTodoListPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoListPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoListPost$Plain(params?: {
    body?: AddTodoListCommand
  }): Observable<string> {

    return this.apiTodoListPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoListPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoListPost$Json$Response(params?: {
    body?: AddTodoListCommand
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TodoListApiService.ApiTodoListPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoListPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoListPost$Json(params?: {
    body?: AddTodoListCommand
  }): Observable<string> {

    return this.apiTodoListPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiTodoListIdGet
   */
  static readonly ApiTodoListIdGetPath = '/api/TodoList/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoListIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoListIdGet$Plain$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Todo>> {

    const rb = new RequestBuilder(this.rootUrl, TodoListApiService.ApiTodoListIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Todo>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoListIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoListIdGet$Plain(params: {
    id: string;
  }): Observable<Todo> {

    return this.apiTodoListIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Todo>) => r.body as Todo)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoListIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoListIdGet$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Todo>> {

    const rb = new RequestBuilder(this.rootUrl, TodoListApiService.ApiTodoListIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Todo>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoListIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoListIdGet$Json(params: {
    id: string;
  }): Observable<Todo> {

    return this.apiTodoListIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Todo>) => r.body as Todo)
    );
  }

  /**
   * Path part for operation apiTodoListIdPut
   */
  static readonly ApiTodoListIdPutPath = '/api/TodoList/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoListIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoListIdPut$Response(params: {
    id: number;
    body?: string
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TodoListApiService.ApiTodoListIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoListIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoListIdPut(params: {
    id: number;
    body?: string
  }): Observable<void> {

    return this.apiTodoListIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiTodoListIdDelete
   */
  static readonly ApiTodoListIdDeletePath = '/api/TodoList/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoListIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoListIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TodoListApiService.ApiTodoListIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoListIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoListIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiTodoListIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

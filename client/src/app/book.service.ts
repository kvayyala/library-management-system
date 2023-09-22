import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book';
import { Observable, of } from 'rxjs';

const URL = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }

  list(limit = 12, skip = 0) {
    if (limit > 100) {
      limit = 100;
    }

    return this.http.get<Book[]>(`${URL}/books?limit=${limit}?skip=${skip}`);
  }

  search(query: string, limit = 12, skip = 0): Observable<Book[]> {
    if (limit > 100) {
      limit = 100;
    }

    // TODO: query will be url encoded?
    return this.http.get<Book[]>(`${URL}/books/search?term=${query}&limit=${limit}&skip=${skip}`);
  }
}

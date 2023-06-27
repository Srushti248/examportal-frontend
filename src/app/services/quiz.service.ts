import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http: HttpClient) { }

  //all quiz list

  public quizees(){

    return this._http.get(`${baseUrl}/quiz/`);

  }
  //adding quiz
  public addQuiz(quiz){

    return this._http.post(`${baseUrl}/quiz/`,quiz);

  }
  //deleting quiz
  public deleteQuiz(qid){

    return this._http.delete(`${baseUrl}/quiz/${qid}`);

  }

  //getting the single quiz

  public getQuiz(qid){

    return this._http.get(`${baseUrl}/quiz/${qid}`);

  }

  public updateQuiz(quiz){

    return this._http.put(`${baseUrl}/quiz/`,quiz);

  }

  public getQuizeesOfCategory(cid){

    return this._http.get(`${baseUrl}/quiz/category/${cid}`);
  }

  public getActiveQuizzes(){

    return this._http.get(`${baseUrl}/quiz/active/`);
  }
  public getActiveQuizzesOfCategory(cid){

    return this._http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }
}

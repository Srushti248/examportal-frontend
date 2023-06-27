import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qid = null;
  qTitle = null;

  questions = [];



  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService
  ) { }

  ngOnInit(): void {

    this.qid = this._route.snapshot.params.qid;
    this.qTitle = this._route.snapshot.params.title;
    this._question.getQuestionsOfQuiz(this.qid).subscribe((data: any) => {
      console.log(data);
      this.questions = data;
    },
      (error) => {
        console.log(error);
      }
    );
  }

  //to delete question
  deleteQuestion(qid) {

    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,

    }).then((result) => {

      if (result.isConfirmed) {
        //  delete code execute
        this._question.deleteQuestion(qid).subscribe((data: any) => {

           this.questions=this.questions.filter((q)=>q.quesId!=qid)

          Swal.fire('success', 'Question deleted', 'success');
        },

          (error) => {

            Swal.fire('Error', 'error in deleting question', 'error');
          }

        );
      }

    });

  }

}




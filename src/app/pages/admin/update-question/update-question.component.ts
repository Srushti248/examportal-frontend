import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  qid;
  qTitle;
  question={

    quiz:{},
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',


  }
  

  constructor(private _route: ActivatedRoute, private _question:QuestionService) { }

  ngOnInit(): void {

    this.qid=this._route.snapshot.params.qid;
    this.qTitle=this._route.snapshot.params.title;
    this.question.quiz['qid']=this.qid;
  }

  formSubmit(){

    if(this.question.content.trim()=='' || this.question.content== null){
      return;
    }
    if(this.question.option1.trim()=='' || this.question.content== null){
     return;
   }
   if(this.question.option2.trim()=='' || this.question.content== null){
     return;
   }
   if(this.question.option3.trim()=='' || this.question.content== null){
     return;
   }
   if(this.question.option4.trim()=='' || this.question.content== null){
     return;
   }
   
    this._question.addQuestion(this.question).subscribe((_data:any)=>{

      Swal.fire('success','question added succesfully', 'success');

      this.question.content='';
      this.question.option1='';
      this.question.option2='';
      this.question.option3='';
      this.question.option4='';
      this.question.answer='';

    },
    (error)=>{
        debugger;

        Swal.fire('error', 'error in data loading', 'error');
      }
    
    );
  }

}


 

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private _quiz:QuizService, private _cat:CategoryService) { }

  qid=0;
  quiz;
  categories;

  ngOnInit(): void {

    this.qid=this._route.snapshot.params.qid;

    this._quiz.getQuiz(this.qid).subscribe((data:any)=>{

      this.quiz=data;
      console.log(this.quiz);


    },

    (error)=>{
      console.log(error);
    }
    
    
    );

    this._cat.categories().subscribe((data:any)=>{

      this.categories=data;
    },

    (error)=>{

      alert('error in loading data');
    }
    
    
    );
  }

  //update form submit

  public updateData(){

    //alert('testing');

   this._quiz.updateQuiz(this.quiz).subscribe((data:any)=>{

    Swal.fire('success','updated succesfully','success');
   },

   (error)=>{
    Swal.fire('error','server error','error');
   }
   
   );
  };


}
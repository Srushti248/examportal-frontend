import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes = [

    // {
    //   qid: 13,
    //   title: 'basics of java',
    //   description: 'The word Core describes the basic concept of something, and here, the phrase Core Java defines the basic Java that covers the basic concept of Java programming language',
    //   maxMarks: '50',
    //   numberOfQuestions: '20',
    //   active: '',
    //   category: {
    //     'title': 'programming',
    //   }

    // },
    // {
    //   qid: 13,
    //   title: 'basics of java',
    //   description: 'The word Core describes the basic concept of something, and here, the phrase Core Java defines the basic Java that covers the basic concept of Java programming language',
    //   maxMarks: '50',
    //   numberOfQuestions: '20',
    //   active: '',
    //   category: {
    //     'title': 'programming',

    //   }

   // },

  ]

  constructor(private _quiz:QuizService) { }

  ngOnInit(): void {

    this._quiz.quizees().subscribe((data:any)=>{

      this.quizzes=data;
      console.log(this.quizzes)
    },
    
    (error)=>{
      console.log('error');
     Swal.fire('Error!!','Server error','error');
    }
    
    );
  }

  deleteQuiz(qid){

    Swal.fire({
      icon:'info',
      title:'Are you sure ?',
      confirmButtonText:'Delete',
      showCancelButton:true,
      
    }).then((result)=>{

      if(result.isConfirmed){
    //  delete code execute
    this._quiz.deleteQuiz(qid).subscribe((data:any)=>{

      this.quizzes=this.quizzes.filter((quiz)=>quiz.qid!=qid)

     Swal.fire('success','quiz deleted','success');
    },

    (error)=>{

      Swal.fire('Error','error in deleting quiz','error');
    }
    
    );
  }

    });







   
  
  }

}

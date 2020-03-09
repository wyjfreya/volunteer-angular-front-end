import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Register } from '../common/register';
import { HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  currentId: number;
  isAddComment: boolean = false;
  isAddFeedback: boolean = false;
  register: Register = new Register();

  constructor(private registerService: RegisterService, private route: ActivatedRoute) { }

  ngOnInit() {
    const hasCurrentId: boolean = this.route.snapshot.paramMap.has('id');
    this.currentId = +this.route.snapshot.paramMap.get('id');
    
    const url: String = this.route.snapshot.url.toString();
    if(url.includes("Feedback")) {
      this.isAddFeedback = true;
    }
    if (url.includes("Comment")) { 
      this.isAddComment = true;

    }
    this.getThisRegister(this.currentId);
  }

  getThisRegister(id) {
    this.registerService.getRegister(id).subscribe (
      data => {
        this.register = data;
        console.log(this.register);
      }
    )

  }
  
  // 添加表单
  onSubmit(commentForm: NgForm) {
    let tmp = commentForm.value;
    if (this.isAddComment) {
      this.updateComment(tmp);
    } else if (this.isAddFeedback) {
      this.updateFeedback(tmp);
    }
  }

  // 添加评价
  updateComment(comment: Register) {
    //console.log(data.value);
    this.registerService.updateComment(comment).subscribe(
      (data: HttpResponse<Register>) => {
        alert("填写评价成功！");
      },
      //handle errors here
      (err: HttpResponse<Register>) => {
        alert("填写失败，请检查数据！");

      }
    ); 
  }

  // 添加评价
  updateFeedback(feedback: Register) {
    //console.log(data.value);
    this.registerService.updateFeedback(feedback).subscribe(
      (data: HttpResponse<Register>) => {
        alert("填写反馈成功！");
      },
      //handle errors here
      (err: HttpResponse<Register>) => {
        alert("填写失败，请检查数据！");

      }
    ); 
  }

  isComment() {
    return this.isAddComment;
  }

  isFeedback() {
    return this.isAddFeedback;
  }

}

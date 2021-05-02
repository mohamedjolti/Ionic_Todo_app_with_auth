import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  todo:Todo=new Todo();
  constructor(public todoservice:TodoService,public route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.todoservice.getTodo(id).subscribe(data=>{
      this.todo=data;
    })
  }

}

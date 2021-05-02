import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginPage } from '../login/login.page';
import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public todos:Todo[];
  title:string;
  deleting:boolean=false;
  todo:Todo;
  editing:boolean=false;
  login:LoginPage

  constructor(public todoService: TodoService,public auth:AuthService) {}
   ngOnInit():void{
    this.auth.checkIfLogin();
    this.todoService.getTodos().subscribe(data=>{
      this.todos=data;
      console.log(data);
      
    })

  }
 
  getIcon(todo){
    if(todo.completed) return 'checkmark-circle';
    else return 'stopwatch';
  }
  createTodo(){
    console.log(this.title);
    
    let todo:Todo={
      title:this.title,
      userId:500,
      completed:false,
      id:10,
    }
    this.todoService.setTodos(todo).subscribe(data=>{
      this.todos=[data,...this.todos]
      console.log(data);
      this.title=""
    });
  }
  delete(todo:Todo){
    if(this.deleting==false){
    this.deleting=true;
        this.todoService.deleteTodo(todo).subscribe(data=>{
          this.todos=this.todos.filter(tod=>tod.id!==todo.id )
          this.deleting=false
        })
      }
  }
  edit(todo:Todo){
    this.editing=true;
    this.todo=todo;
  }
  update(){
    this.todoService.editTodo(this.todo).subscribe(todo=>{
       this.todos.forEach(tod=>{
         if(tod.id==todo.id){
            tod=todo
         }
       })
       this.todo=new Todo;
       this.editing=false
       console.log(todo);
    })
  
    
  }
  logout(){
    this.auth.logout()
  }
}

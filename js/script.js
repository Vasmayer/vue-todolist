/* 
Descrizione:
Rifare l'esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente
    (se done era uguale a false, impostare true e viceversa)
Buon lavoro e buon weekend ragazzi!
 */

Vue.config.devtools = true;

var root = new Vue({
    el: '#root',
    data:{
      all:false,
      addtodo:'',
      todos:[
       {
            text:"Andare a fare la spesa",
            done:false
       },
       {
            text:"Andare al lavoro",
            done:true
       },
       {
            text:"Studiare i nuovi concetti",
            done:false
       },
       {
            text:"Uscire con gli amici",
            done:false
       }
      ]
    },
    methods:
    {
      removeTodo(index)
      {
         if(this.todos.lenght !== 0) this.todos.splice(index,1);
      },
      addTodo()
      {
         if(this.addtodo.trim())
         {
            const objectTodo =
            {
               text: this.addtodo,
               done:false
            };
            this.todos.push(objectTodo);
         }
      
         this.addtodo = '';
      },
       toggleTodo(index)
      {
             this.todos[index].done = !this.todos[index].done
      } ,
      toggleAllTodos(index)
      {
            this.all = !this.all
               const newArray = this.todos.map((todo)=>{

                  if(this.all)
                  {
                     todo.done = true;

                  }
                  else
                  {
                     todo.done = false;
                  }

                  return todo;
               });

               this.todos = newArray;
 
      } ,
      deleteTodos()
      {
         this.todos = '';
      }
      
    },
     
  })
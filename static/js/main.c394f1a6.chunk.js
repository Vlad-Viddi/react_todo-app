(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(8),c=a.n(l),o=(a(15),a(16),a(1)),r=a(9),i=a(2),u=a(3),m=a(6),k=a(5),d=function(e){Object(m.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={input:""},e.addTask=function(){var t=e.state.input;t.trim()&&(e.props.addTask(t),e.setState({input:""}))},e.inputChange=function(t){return e.setState({input:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.addTask()},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.input;return s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{type:"text",value:e,onChange:this.inputChange,className:"new-todo",placeholder:"What needs to be done?"}))}}]),a}(s.a.Component),p=a(4),f=a.n(p),g=function(e){var t=e.task,a=e.toggleCompleteTask,n=e.deleteTask;return s.a.createElement("li",{key:t.id,className:f()({completed:t.completed})},s.a.createElement("div",{className:"view"},s.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.completed,id:t.id,onChange:function(){return a(t.id)}}),s.a.createElement("label",null,t.title),s.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return n(t.id)}})),s.a.createElement("input",{type:"text",className:"edit"}))},h=function(e){var t=e.visibleTasks,a=e.toggleCompleteTask,n=e.deleteTask;return s.a.createElement("ul",{className:"todo-list"},t.map((function(e){return s.a.createElement(g,{key:e.id,task:e,toggleCompleteTask:a,deleteTask:n})})))},T=function(e){var t=e.addTask,a=e.isAnyActiveTasks,n=e.tasks,l=e.toggleAllTasksCompleted,c=e.visibleTasks,o=e.toggleCompleteTask,r=e.deleteTask;return s.a.createElement(s.a.Fragment,null,s.a.createElement("header",{className:"header"},s.a.createElement("h1",null,"todos"),s.a.createElement(d,{addTask:t})),s.a.createElement("section",{className:"main"},s.a.createElement("input",{checked:n.length>0&&0===a(),onChange:l,type:"checkbox",id:"toggle-all",className:"toggle-all"}),s.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),s.a.createElement(h,{visibleTasks:c,toggleCompleteTask:o,deleteTask:r})))},v=function(e){var t=e.tasksToShow,a=e.actualFilter,n=e.toggleActiveTasks;return s.a.createElement("li",null,s.a.createElement("a",{href:"#/".concat(a),className:f()({selected:a===t}),onClick:function(){return n(a)}},a))},b=function(e){var t=e.tasks,a=e.clearCompleted,n=e.filteringBtns,l=e.tasksToShow,c=e.toggleActiveTasks,o=e.countActiveTAsks;return s.a.createElement("footer",{className:"footer",hidden:0===t.length},s.a.createElement("span",{className:"todo-count"},o()," items left"),s.a.createElement("ul",{className:"filters"},n.map((function(e){return s.a.createElement(v,{tasksToShow:l,key:e,actualFilter:e,toggleActiveTasks:c})}))),s.a.createElement("button",{type:"button",className:"clear-completed",onClick:a},"Clear completed"))},E={all:"all",completed:"completed",active:"active"},A=function(e){Object(m.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={tasks:[],tasksToShow:"all",filters:E},e.addTask=function(t){e.setState((function(e){return{tasks:[].concat(Object(r.a)(e.tasks),[{id:0!==e.tasks.length?e.tasks.length:0,title:t,completed:!1}])}}))},e.toggleCompleteTask=function(t){e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id!==t?e:Object(o.a)(Object(o.a)({},e),{},{completed:!e.completed})}))}}))},e.deleteTask=function(t){e.setState((function(e){return{tasks:e.tasks.filter((function(e){return e.id!==t}))}}))},e.clearCompleted=function(){e.setState((function(e){return{tasks:e.tasks.filter((function(e){return!1===e.completed}))}}))},e.filterTodos=function(t){var a=e.state,n=a.tasks,s=a.filters;switch(t){case s.active:return n.filter((function(e){return!e.completed}));case s.completed:return n.filter((function(e){return e.completed}));default:return n}},e.isAnyActiveTasks=function(){return e.state.tasks.filter((function(e){return!e.completed})).length},e.toggleAllTasksCompleted=function(){e.state.tasks.every((function(e){return e.completed}))?e.setState((function(e){return{tasks:e.tasks.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{completed:!1})}))}})):e.setState((function(e){return{tasks:e.tasks.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{completed:!0})}))}}))},e.toggleActiveTasks=function(t){e.setState({tasksToShow:t})},e.countActiveTAsks=function(){return e.state.tasks.filter((function(e){return!1===e.completed})).length},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.tasksToShow,n=this.filterTodos(a);return s.a.createElement("section",{className:"todoapp"},s.a.createElement(T,{addTask:this.addTask,tasks:t,toggleAllTasksCompleted:this.toggleAllTasksCompleted,isAnyActiveTasks:this.isAnyActiveTasks,visibleTasks:n,toggleCompleteTask:this.toggleCompleteTask,deleteTask:this.deleteTask}),s.a.createElement(b,{tasks:t,filteringBtns:["all","active","completed"],tasksToShow:a,clearCompleted:this.clearCompleted,toggleActiveTasks:this.toggleActiveTasks,countActiveTAsks:this.countActiveTAsks}))}}]),a}(s.a.Component);c.a.render(s.a.createElement(A,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.c394f1a6.chunk.js.map
(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),o=(a(15),a(16),a(5)),s=a(6),i=a(1),u=a(2),m=a(4),p=a(3),d=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={input:""},e.addTask=function(){var t=e.state.input;t.trim()&&(e.props.addTask(t),e.setState({input:""}))},e.inputChange=function(t){return e.setState({input:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.addTask()},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.input;return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",value:e,onChange:this.inputChange,className:"new-todo",placeholder:"What needs to be done?"}))}}]),a}(l.a.Component),f=a(9),h=a.n(f),k=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.task,a=e.toggleCompleteTask,n=e.deleteTask;return l.a.createElement("li",{key:t.id,className:h()({completed:t.completed})},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",id:t.id,onClick:function(){return a(t.id)}}),l.a.createElement("label",{htmlFor:t.id},t.title),l.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return n(t.id)}})),l.a.createElement("input",{type:"text",className:"edit"}))}}]),a}(l.a.Component),b=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.tasks,a=e.toggleCompleteTask,n=e.deleteTask;return l.a.createElement("ul",{className:"todo-list"},t.map((function(e){return l.a.createElement(k,{task:e,toggleCompleteTask:a,deleteTask:n})})))}}]),a}(l.a.Component),g=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={tasks:[{id:0,title:"go Home",completed:!1}]},e.addTask=function(t){e.setState((function(e){var a=e.tasks;return a.push({id:0!==a.length?a.length:0,title:t,completed:!1}),a}))},e.toggleCompleteTask=function(t){e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id!==t?e:Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed})}))}}))},e.deleteTask=function(t){var a=e.state.tasks.map((function(e){return e.id})).indexOf(t);e.setState((function(e){var t=e.tasks;return delete t[a],t}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.tasks,t=e.filter((function(e){return!e.completed})),a=e.filter((function(e){return e.completed})),n=[].concat(Object(o.a)(t),Object(o.a)(a));return l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement(d,{addTask:this.addTask})),l.a.createElement("section",{className:"main"},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all"}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement(b,{tasks:n,toggleCompleteTask:this.toggleCompleteTask,deleteTask:this.deleteTask})),l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},e.filter((function(e){return!1===e.completed})).length," items left"),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:"selected"},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active"},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed"},"Completed"))),l.a.createElement("button",{type:"button",className:"clear-completed"},"Clear completed")))}}]),a}(l.a.Component);c.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.7609facb.chunk.js.map
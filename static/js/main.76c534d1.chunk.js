(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{31:function(t,e,n){t.exports=n(59)},58:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(29),l=n.n(r),c=n(18),d=n(7),i=n(8),p=n(10),s=n(9),u=n(13),m=n(1);var h={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},f=function(){return a.a.createElement("header",{style:h},a.a.createElement("h1",null,"TodoList"),a.a.createElement(u.b,{to:"/todo-app/"},"Home")," | ",a.a.createElement(u.b,{to:"/todo-app/about"},"About"))},b=function(t){Object(p.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted"}},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title,o=t.completed;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{id:e,type:"checkbox",checked:o,onChange:this.props.toggleComplete.bind(this,e)})," ",a.a.createElement("label",{htmlFor:e,style:{textDecoration:o?"line-through":"none"}},n),a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),className:"delBtn"},"x")))}}]),n}(o.Component),g=function(t){Object(p.a)(n,t);var e=Object(s.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(b,{key:e.id,todo:e,toggleComplete:t.props.toggleComplete,delTodo:t.props.delTodo})}))}}]),n}(a.a.Component),y=function(t){Object(p.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onSubmit=function(e){e.preventDefault(),""!==t.state.title&&(t.props.addTodo(t.state.title),t.setState({title:""}))},t.onChange=function(e){return t.setState({title:e.target.value})},t}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",paddding:"5px"},placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",vallue:"Submit",className:"btn",style:{flex:"1"}}))}}]),n}(o.Component);function v(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is a TodoList app made with react."))}var E=n(14),j=n.n(E),O=(n(58),function(t){Object(p.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.toggleComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){j.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(n){return t.setState({todos:Object(c.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodo=function(e){j.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){e.data.id=t.state.todos.length+1,t.setState({todos:[].concat(Object(c.a)(t.state.todos),[e.data])})}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;j.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(u.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(f,null),a.a.createElement(m.a,{exact:!0,path:"/todo-app/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{addTodo:t.addTodo}),a.a.createElement(g,{todos:t.state.todos,toggleComplete:t.toggleComplete,delTodo:t.delTodo}))}}),a.a.createElement(m.a,{path:"/todo-app/about",component:v})))}}]),n}(a.a.Component));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.76c534d1.chunk.js.map
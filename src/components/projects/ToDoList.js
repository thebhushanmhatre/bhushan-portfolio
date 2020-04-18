import React, { Component } from "react";
import TodoItems from "./TodoItems"
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class ToDoList extends Component {
	constructor(props){
		super(props);

		this.state = {
			items : []
		};

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	addItem(e) {
		e.preventDefault();

		// One can Skip this IF Statement by Addding required* in Input Statement
		if (this.userInput.value !== "") {
			var newItem = {
				text: this.userInput.value,
				key: Date.now()
			};

			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				};
			});
			this.userInput.value = "";
		}
	}

	deleteItem(key){
		var filteredItems = this.state.items.filter(function(item){
			return (item.key !== key);
		});
		this.setState({items:filteredItems });
	}

	render() {
		return (
			<div style={{background:'skyblue',padding:'20px', height:'85vh', borderRadius: '15px'}} className="container">
				<Breadcrumb className="offset-md-1 col-md-10" >
	        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
	        <BreadcrumbItem><a href="/project">Projects</a></BreadcrumbItem>
	        <BreadcrumbItem active>ToDo List App</BreadcrumbItem>
	      </Breadcrumb>
				<div className="todoListMain text-center">
					<div className="header">
						<form  className="m-3" onSubmit={this.addItem}>
							<input ref={a => {this.userInput = a}} placeholder="Enter Tasks . . ." />
							<button className="m-1" type="submit"> ADD </button>
						</form>
					</div>
					<TodoItems style={{background:'skyblue',padding:'20px', height:'100vh'}} entries={this.state.items} delete={this.deleteItem} />
				</div>
			</div>
		);
	}
}

export default ToDoList;



// Addding Items 	--> ToDoList
// Displaying Items --> TodoItems.js
// Styling Items    --> TodoItems.css
// Removing Items   --> 
// Animating Items  -->
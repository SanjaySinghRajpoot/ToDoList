import React from "react";

export const AddTodo = (props) => {
  
  const submitTodo = () => {
       
  }
  
  
    return (
    <div className="container my-3">
        <h3>Add To do's</h3>
      <form onSubmit={submitTodo}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Title
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            Try to give it a proper heading 
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Content
          </label>
          <input
            type="desc"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

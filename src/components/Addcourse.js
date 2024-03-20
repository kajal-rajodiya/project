import React from "react";
import { Button, Container, FormGroup } from "reactstrap";

const Addcourse = () => {
  return (
    <div>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <form>
        <FormGroup>
          <label htmlFor="userId">Course Id: </label>
          <br/>
          <input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">Course title: </label>
          <br />
          <input
            type="text"
            placeholder="Enter title here"
            id="title"
          />
        </FormGroup>
        <FormGroup>
        <label htmlFor="userId" style={{ marginRight: "10px" }}>
            Course Description: 
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter Description here"
            name="userId"
            id="description"
            style={{ height: "200px", resize: "none" }}

          />
        </FormGroup>
        <Container className="text-center">
          <Button color="success">Add Course</Button>
          <Button color="warning ms-2">Clear</Button>
        </Container>
      </form>
    </div>
  );
};

export default Addcourse;
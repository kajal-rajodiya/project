import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardFooter,
    Button,
    Container,
    CardText,
} from "reactstrap";
const Course=({course})=>{
   return(
    <Card className="text-center">
        <CardBody>
            <CardSubtitle className="font-weight-bold">
                {course.title} 
                <CardText>
                    {course.description}
                    </CardText>
                </CardSubtitle>
                <Container className="text-center">
                    <Button color="danger ">Delete</Button>
                    <Button color="warning ms-4">Update</Button>
                </Container>
           
        </CardBody>
    </Card>
   )
};
export default Course;
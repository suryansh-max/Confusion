import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardTitle, CardBody,  Breadcrumb, BreadcrumbItem } from 'reactstrap';
import CommentForm from './CommentForm';


function RenderComments({ comments , addComment , dishId }) {

    const list = comments.map((com) => { return( <p>-- {com.comment} author: {com.author} , {com.date} </p> ); });
   
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h4">Comments:</CardTitle>
                <CardText>{list}</CardText>
                <CommentForm 
                addComment={addComment} 
                dishId={dishId}/>  
            </CardBody>
        </Card>
    )
}

function RenderDish({ dish }) {

    if (dish != null) {
        return (
            <div className="m-1">
                <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading> {dish.name} </CardTitle>
                        <CardText>{dish.description}</CardText>
                       
                    </CardBody>
                  
                </Card>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}



const DishDetail = (props) => {

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb className="bc">

                    <BreadcrumbItem className><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments}
                    addComment={props.addComment}
                    dishId={props.dish.id} />
                    
                </div>
            </div>
        </div>
    );
}

export default DishDetail;
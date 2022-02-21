import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';



function RenderMenuItems ({dish}) {
  return (
      <Card>
          <Link to={`/menu/${dish.id}`} >
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
          </Link>
      </Card>
  );
}


const Menu = (props) => {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 m-1 col-md-5">
        <RenderMenuItems dish={dish} />
      </div>
    );
  });

  if ( props.dishes.isLoading ){
    return(
    <div className="container">
        <div className="row">
            <Loading />
            {console.log("menu component check 1" ,  props.dishes.isLoading)}
        </div>
    </div>
    );
}
else if ( props.dishes.err ){
    return(
        <div className="container">
        <div className="row">
            <h4>{props.dishes.err}</h4>
        </div>
    </div>
    );
}
else
  return (
    <div className="container">
    <div className="row">
        <Breadcrumb className="bc">
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>Menu</h3>
            <hr />
        </div>                
    </div>
    <div className="row">
        {menu}
    </div>
</div>
  );
}

export default Menu;
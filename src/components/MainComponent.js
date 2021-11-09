import React, { Component } from 'react';
import { Redirect, Route, Switch ,withRouter } from 'react-router';

import Menu from './MenuComponent';
import Header from './Header';
import Footer from './Footer';
import DishDetail from './DishDetailComponent';
import { Home } from './HomeComponent';
import About from './AboutusComponent';
import Contact from './ContactComponent';

import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return{
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );



        }

        const MenuPage = () => {
            return (
                <Menu dishes={this.props.dishes} />
            );
        };
    
        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
            );
        };

        const Aboutus = () => {
            return(
                <About leaders={this.props.leaders} />
            );
        }
        return (
            <div>
                <Header />

                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={MenuPage} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route path="/about" component={Aboutus} />
                    <Redirect to="/home" />

                </Switch>




                <Footer />
            </div>
          
          );
        }
    }
    export default withRouter(connect(mapStateToProps)(Main));
    
    
    {/* <Route path="/aboutus" component={Aboutus} /> */}
// onClick={(dishId) => this.onDishSelect(dishId)} />
{/* <Route exact path="/menu" component={() =>  <Menu dishes={this.props.dishes} />} /> */ }


{/* <DishDetail
                selectedDish={this.props.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]}
                    comments={this.props.comments} /> */}

                    // onDishSelect = (dishId) => {
                    //     this.setState({ selectedDish: dishId });
                    // }
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Menu from './MenuComponent';
import Header from './Header';
import Footer from './Footer';
import DishDetail from './DishDetailComponent';
import { Home } from './HomeComponent';
import About from './AboutusComponent';
import Contact from './ContactComponent';

import { LEADERS } from '../shared/leaders';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';





class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );



        }

        const MenuPage = () => {
            return (
                <Menu dishes={this.state.dishes} />
            );
        };
    
        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
            );
        };

        const Aboutus = () => {
            return(
                <About leaders={this.state.leaders} />
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
    export default Main;
    
    
    {/* <Route path="/aboutus" component={Aboutus} /> */}
// onClick={(dishId) => this.onDishSelect(dishId)} />
{/* <Route exact path="/menu" component={() =>  <Menu dishes={this.state.dishes} />} /> */ }


{/* <DishDetail
                selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
                    comments={this.state.comments} /> */}

                    // onDishSelect = (dishId) => {
                    //     this.setState({ selectedDish: dishId });
                    // }
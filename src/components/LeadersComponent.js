import React from 'react';

const Leaders = (props) => {
    const RenderLeaders = props.leaders.map(
      (leader) =>{
          return(
              <div className="row">
                  <div className="col-12 m-1 col-md-2 m-1">
                  
                 <img className="leader" src={leader.image} alt="leader image" />
                  </div>
                  <div className="col-12 m-1 col-md-9 m-1">
                      <h4>{leader.name}</h4>
                      <h5>{leader.designation}</h5>
                      <hr></hr>
                      <p>{leader.description}</p>
                  </div>
              </div>
          );
      }
    );
       
    return(
        <div className="container">
            {RenderLeaders}
        </div>
    );
}

export default Leaders;
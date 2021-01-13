

const Card = (props) => {
    let { chick } = props;
    return (
        
      <div className="card">
        <img src={chick ? chick.imgUrl : ""} alt="" />
        <div className="card-body">
          <h5 className="card-title">
            {chick ? chick.race : ""}
          </h5>
          <p className="card-text">
            est une poule {chick ? chick.type : ""}
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={ props.onChickNext }
          >
            Next
          </button>
        </div>
      </div>
    );

    
}


 


export default Card;

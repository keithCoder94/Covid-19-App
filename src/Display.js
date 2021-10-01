import React from "react";

function Display (props){

  function onDelete(e){
    props.onDelete(e)

  }
  return (
    <div className="container bg-dark mb-2 ml-2">
     
      <div className="row">

        {props.data.map(item=>(
        <div className="col-sm-6 mt-4 mb-4" key={item.id}>
            
      <div className='flip-card'>
        <div className="flip-card-inner">
            <div className="flip-card-front">
           
               <h2>Visitor Summary</h2>

               <h3>ID Number :{item.id}</h3>
               <h3>Name :{item.firstName}</h3>

            </div>
            
            <div className="flip-card-back">

              <h5>Saved Covid Info.</h5>

              <h5>ID Number :{item.id}</h5>

              <h5>FirstName :{item.firstName}</h5>

              <h5>LastName :{item.lastName}</h5>

              <h5>Age :{item.age}</h5>

              <h5>Gender :{item.gender}</h5>

              <h5>Temperature :{item.temperature}</h5>

              <h5>Location :{item.location}</h5>

              <h5>Traveled :{item.traveled ?  'yes' : 'no' }</h5>

              <h5>Symptoms :{item.symptoms ? 'yes' : 'no' }</h5>

              <h5>Infected :{item.infected ? 'yes' : 'no' }</h5>
        


               <button onClick={()=>onDelete(item.id)}
                type="button" 
                className="btn btn-block" >
                  Delete
              </button> 
              <br /><br /><hr />
             </div>

           </div>
          </div>  
        </div>
       ))}

    </div>
    </div>
  )
}

export default Display 
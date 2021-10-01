import React, {Component} from "react"
import Form from './Form'
import Display from './Display'
import Search from './Search'
import  './App.css'



class App extends Component {
    state = {
            covList: []
        } 

    handleSubmit = (id, firstName, lastName, age, gender, temperature, location, traveled, symptoms, infected)=>{
    
        let obj={
            id:id,
           firstName:firstName,
           lastName:lastName,
           age:age, 
           gender:gender, 
           temperature:temperature,
           location:location, 
           traveled:traveled,
           symptoms:symptoms,
           infected:infected,
        
        }

        if(id === ""){
            alert("Please enter FirstName")

          }else if(firstName === ""){

          alert("Please enter FirstName")
        }

        else if(lastName === ""){
          alert("please fill out form")
        }

        else if(age === ""){
          alert("please fill out form")
        }

        else if(gender === ""){
          alert("please fill out form")
        }

        else if(temperature === ""){
          alert("please fill out form")
        }

        else if(location === ""){
          alert("please fill out form")
        }
      
        else{
          this.setState({
            covList:[...this.state.covList, obj]
          }) 
        }
        }

        handleDelete = id =>{
            this.setState({
                covList: this.state.covList.filter(record =>record.id !==id)
            })
            console.log(this.state.covList)
          }
    
    render() {
     
        return (
            <div>
               <Form handleSubmit={this.handleSubmit}/>
               <Display  data={this.state.covList} onDelete={this.handleDelete}/>
               <Search />
              
            </div>

            
        )
    }
}

export default App

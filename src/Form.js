import React, { useState } from 'react';

function Form(props) {
  
  const [id, setID] = useState('')
  const handleChangeID = e => { 
      setID(e.target.value); 
  };

  const [firstName, setfName] = useState('');
  const handleChangefName = e => { 
      e.preventDefault()
      setfName(e.target.value); 
      
  };
  
  const [lastName, setlName] = useState('');
  const handleChangelName = e => { 
      setlName(e.target.value); 
  };

  const [age, setAge] = useState('');
  const handleChangeAge = e => { 
      e.preventDefault()
      setAge(e.target.value); 
      
  };

  const [gender, setGen] = useState('');
  const handleChangeGender = (e) => {
    e.preventDefault()
      setGen(e.target.value); 
}
 

const [temperature, setTemp] = useState('');
  const handleChangeTemp = e => { 
    e.preventDefault()
    setTemp(e.target.value); 
    
};

const [location, setLoc] = useState('');
  const handleChangeLoc = e => { 
    e.preventDefault()
    setLoc(e.target.value); 
    
};

const [traveled, setTrav] = useState('');
const handleChangeTrav = (e) => {
    e.preventDefault()
    setTrav(e.target.checked);

}

const [symptoms, setSym] = useState('');
const handleChangeSym = (e) => {
    e.preventDefault()
    setSym(e.target.checked);
}

const [infected, setInfect] = useState('');
const handleChangeInfect = (e) => {
    e.preventDefault()
    setInfect(e.target.checked);
}

  
  const handleSubmit = e => { 
      e.preventDefault()
      props.handleSubmit(id, firstName, lastName, age, gender, temperature, location, traveled, symptoms,infected ); 

  };


  return (
    <main>
    <form className='covForm' onSubmit= {handleSubmit}>
      <h1>Covid 19 Info Tracking App</h1>


        <label>
           Identity No : 
        </label>
        <input 
            className='inID'
            name="id" 
            value={id} 
            onChange={handleChangeID} 
            placeholder="ID Number" 
        />
        <br /><br />


        <label>
           Name :
           </label>
        <input 
            className='inFN'
            name="firstName" 
            value={firstName} 
            onChange={handleChangefName} 
            placeholder="First Name" 
        />
        <br /><br />
        

        <label>
           Surname :
        </label>
        <input 
            className='inLN'
            name="lastName" 
            value={lastName}
            onChange={handleChangelName} 
            placeholder="Last Name" 
        />
        <br /><br />
        

        <label>
           Age :
        </label>
        <input 
            className='inA'
            name="age" 
            value={age}
            onChange={handleChangeAge} 
            placeholder="Age" 
        />
        <br /><br /><br />
        

        <label>
            <input 
                className='inG'
                type="radio" 
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleChangeGender}
            /> Male
        </label>
        
        <br /><br />
        

        <label>
            <input 
                className='inG'
                type="radio" 
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleChangeGender}
            /> Female
            <br /><br />
        </label>
        
        <br />


        <label>
           Temperature :
        </label>
        <input 
                className='inT'
                type="text" 
                name="temperature"
                value={temperature}                      
                onChange={handleChangeTemp}
                placeholder='Temperature'
            /> 
            <br /><br /><br />

        
        <label>
           Location :
        </label>
        <select 
            value={location} 
            name="location" 
            onChange={handleChangeLoc}
        >
          
            <option value="">-- Please Choose a location --</option>

            <option value="kimberley">Kimberley</option>

            <option value="taung">Taung</option>

            <option value="east london">East London</option>

            <option value="bloemfontein">Bloemfontein</option>

            <option value="johannesburg">Johannesburg</option>

            <option value="cape town">Cape Town</option>

            <option value="durban">Durban</option>

        </select>
        
        
        <br /><br /><br />
        
        <label>
            <input
                className='chk' 
                type="checkbox"
                name="traveled"
                value='no'
                checked={traveled}  
                onChange={handleChangeTrav}
            /> Have you ever traveled anywhere in the last 30days?
        </label>
        <br /><br />
        
        <label>
            <input 
                className='chk'
                type="checkbox"
                name="symptoms"
                value='no'
                checked={symptoms}
                onChange={handleChangeSym}
            /> Have you ever experienced any Covid symptoms?
        </label>
        <br /><br />
        
        <label>
            <input 
                className='chk'
                type="checkbox"
                name="infected"
                value='no'
                checked={infected}
                onChange={handleChangeInfect}
            /> Ever been in contact with a Covid infected person?
        </label>
        <br /><br /><br />
        
        <button>Submit</button>
      </form>

      </main>
  );
}

export default Form;
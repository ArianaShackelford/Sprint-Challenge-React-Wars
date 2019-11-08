import React, {useState, useEffect} from 'react';
import axios from 'axios';


const PeopleList =() => {

    const [people, setPeople] = useState([])

    useEffect(() =>{
      axios.get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response.data.results);
        setPeople(response.data.response)
      })
      .catch(error => {
        console.log('The data is not being returned', error)
      })
    }, [])
return (
    <div>This is the PeopleList</div>
)

};
export default PeopleList;
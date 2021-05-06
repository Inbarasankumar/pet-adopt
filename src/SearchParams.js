import React,{useState ,useEffect} from 'react';
import Pet,{ANIMALS} from '@frontendmasters/pet';
import useDropDown from './useDropDown';

const SearchParams =()=>{
    
    const [location , setLocation] = useState('Seattle , WA');
    const [breeds, setBreeds] = useState([]);
    const [animal,AnimalDropDown] = useDropDown('Animal','dog',ANIMALS);
    const [breed,BreedDropDown,setBreed] = useDropDown('Breed','',breeds);


    useEffect(()=>{
        setBreeds([]);
        setBreed('');
        Pet.breeds(animal).then(({breeds})=>
            {
                const breedString = breeds.map(({name})=> name);
                setBreeds(breedString)
            }),console.error

    },[animal,setBreeds,setBreed])
    return(
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                <input id="lcoation" type="text" value={location} placeholder="location" onChange={e =>setLocation(e.target.value)}></input>
                </label>

                <button type="submit">Search</button>

                <AnimalDropDown></AnimalDropDown>
                <BreedDropDown></BreedDropDown>
            </form>    
        </div>
    )
}

export default SearchParams;
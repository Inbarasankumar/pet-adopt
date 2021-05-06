import React,{useState ,useEffect} from 'react';
import Pet,{ANIMALS} from '@frontendmasters/pet';
import useDropDown from './useDropDown';
import PetList from './PetList';
const SearchParams =()=>{
    
    const [location , setLocation] = useState('Seattle , WA');
    const [breeds, setBreeds] = useState([]);
    const [animal,AnimalDropDown] = useDropDown('Animal','dog',ANIMALS);
    const [breed,BreedDropDown,setBreed] = useDropDown('Breed','',breeds);
    const [pets,setpets] = useState([]);

    async function requestPets(){
        const {animals} = await Pet.animals({
            location,
            breed,
            type:animal
        })
        setpets(animals || [])
        
    }

    useEffect(()=>{
        setBreeds([]);
        setBreed('');
        Pet.breeds(animal).then(({breeds})=>
            {
                const breedString = breeds.map(({name})=> name);
                setBreeds(breedString)
            }),console.error

    },[animal,setBreeds,setBreed])

    function handleSubmitForm(e){
        e.preventDefault();
        requestPets();
    }
    return(
        <div className="search-params">
            <form onSubmit={(e)=> handleSubmitForm(e)}>
                <label htmlFor="location">
                    Location
                <input id="lcoation" type="text" value={location} placeholder="location" onChange={e =>setLocation(e.target.value)}></input>
                </label>
                <AnimalDropDown></AnimalDropDown>
                <BreedDropDown></BreedDropDown>

                <button type="submit">Search</button>
            </form>   
            <PetList pets={pets}></PetList>
 
        </div>
    )
}

export default SearchParams;
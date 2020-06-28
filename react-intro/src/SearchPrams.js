import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./useDropDown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, updateBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDown, updateBreed] = useDropDown("Breed", "", breeds);
  useEffect(() => {
    updateBreeds([]);
    updateBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      updateBreeds(breedStrings);
    }, console.error);
  }, [animal, updateBreeds, updateBreed]);

  return (
    <div className="search-params">
      <h2> {location}</h2>
      <h2>{animal}</h2>
      <h2>{breed}</h2>

      <form>
        <label htmlFor="location">
          Location:
          <input
            placeholder="Location"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropDown />
        <BreedDropDown />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

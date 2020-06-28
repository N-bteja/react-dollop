import React, { useState } from "react";
const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  return (
    <div className="search-params">
      <h2> {location}</h2>

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
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

import React from 'react'

function SearchFilter({
    setsearch,
    setFillter,
    search,
    fillter,
    Country,
    setCountry
}) {
    function handleInputChange(event){
        event.preventDefault()
        setsearch(event.target.value)

    }
    function handleSelectChange(event){
        setFillter(event.target.value)
    }
    const sortCountries = (value) => {
        const sortCountry = [...Country].sort((a, b) => {
          return value === "asc"
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common);
        });
        setCountry(sortCountry);
      };

  return (
    <section className="section-searchFilter container">
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => sortCountries("des")}>Desc</button>
      </div>

      <div>
        <select
          className="select-section"
          value={fillter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  )
}

export default SearchFilter
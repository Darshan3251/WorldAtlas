import React, { useEffect, useTransition, useState } from "react";
import { IoLogoSoundcloud } from "react-icons/io5";
import { getCounteyData } from "../api/Postapi";
import { Loader } from "../components/UI/Loader";
import {CountryCard} from '../components/layout/CountryCard'
import SearchFilter from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [Country, setCountry] = useState([]);
  const [search, setsearch] = useState('')
  const [fillter, setFillter] = useState('all')


  useEffect(() => {
    startTransition(async () => {
      const res = await getCounteyData();
      setCountry(res.data);
    });
  }, []);

  if (isPending) return <Loader />;
  // console.log(search);
  // console.log(fillter );
  const searchCountry=(country)=>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country;
  }
  const filterRegion = (country) => {
    if (fillter === "all") return country;
    return country.region === fillter;
  };

  const filterCountries = Country.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <div>
      <section className="country-section">
      <SearchFilter
        setsearch={setsearch}
        setFillter={setFillter}
        search={search}
        fillter={fillter}
        Country={Country}
        setCountry={setCountry}
      />
    
        <ul className="grid grid-four-cols">
          {filterCountries.map((curcountry,index) => {
            return <CountryCard country={curcountry} key={index}/>;
          })}
        </ul>
      </section>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import { getPets } from "../api/api";
const Pets = () => {
  const [Pets, setPets] = useState(null);
  async function fetchData() {
    try {
      const res = await getPets();
      if (res.status === 200) {
        setPets(res.data);
      }
    } catch (error) {}
  }
  console.log(pets);
  useEffect(() => {
    fetchData();
  }, []);
  if (pets === null) {
    return <>No Pets Available</>;
  }
  const img = "https://loremflickr.com/640/480/cats";
  const name = "Bespoke Fresh Mouse";
  const price = "101.00";

  return (
    <>
      <div className="w-screen h-full flex justify-start items-start flex-row flex-wrap mt-14 gap-y-20 gap-x-2">
        {pets.map((pet, index) => (
          <PetCard
            img={pet.img}
            name={pet.name}
            price={pet.price}
            key={pet._id}
          />
        ))}
      </div>
    </>
  );
};
export default Pets;

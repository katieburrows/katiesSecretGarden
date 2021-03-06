import Plant from './components/Plant';
import { useState } from 'react';
import Form from './components/Form';

const data = [
  {
    plantName: "snow pea",
    type: "annual",
    numberPlanted: 5,
    hoursOfSunlight: 8,
    isWatered: true,
    isHealthy: true,
    isAlive: true
  },
  {
    plantName: "bell pepper",
    type: "perennial",
    numberPlanted: 15,
    hoursOfSunlight: 6,
    isWatered: false,
    isHealthy: false,
    isAlive: true
  },
  {
    plantName: "onion",
    type: "biennial",
    numberPlanted: 108,
    hoursOfSunlight: 13,
    isWatered: true,
    isHealthy: true,
    isAlive: true
  },
  {
    plantName: "cucumber",
    type: "annual",
    numberPlanted: 1,
    hoursOfSunlight: 9,
    isWatered: false,
    isHealthy: false,
    isAlive: false
  },
  {
    plantName: "lettuce",
    type: "annual",
    numberPlanted: 5,
    hoursOfSunlight: 8,
    isWatered: true,
    isHealthy: false,
    isAlive: false
  },
];

const Garden = () => {
  const [veg, setVeg] = useState(data);
  
  //To add a new plant, we created this method that takes in a plantObject as an argument, passes into the veg state method using a spread operator, and adds it to the top
  const addVeg = function(plantObject) {
    setVeg([plantObject, ...veg])
    //console.log(plantObject);
  }

  const deleteVeg = function(plantName) {
    const remainingVeg = veg.filter(item => item.plantName !== plantName)
    setVeg(remainingVeg);
  }

  return (
    <>
      <ul>
        {veg.map(({ plantName, type, numberPlanted, hoursOfSunlight, isWatered, isHealthy, isAlive }) => (
          <Plant
            key={plantName}
            plantName={plantName}
            type={type}
            numberPlanted={numberPlanted}
            hoursOfSunlight={hoursOfSunlight}
            isWatered={isWatered}
            isHealthy={isHealthy}
            isAlive={isAlive}
            deleteVeg={deleteVeg}
          />
        ))}
      </ul>

      <Form
      //Similar to giving the Plant component access to the deleteVeg method, we gave the Form component access to the addVeg method, because that is where the user input is
        addVeg={addVeg}
      />
    </>
  );
};


export default Garden;

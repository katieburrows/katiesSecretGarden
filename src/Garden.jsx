import Plant from './components/Plant';

const veg = [
  {
    plantName: "snow pea",
    type: "annual",
    isWatered: true,
    numberPlanted: 5,
    hoursOfSunlight: 8,
    isHealthy: true,
    isAlive: true
  },
  {
    plantName: "bell pepper",
    type: "perennial",
    isWatered: false,
    numberPlanted: 15,
    hoursOfSunlight: 6,
    isHealthy: false,
    isAlive: true
  },
  {
    plantName: "onion",
    type: "biennial",
    isWatered: true,
    numberPlanted: 108,
    hoursOfSunlight: 13,
    isHealthy: true,
    isAlive: true
  },
  {
    plantName: "cucumber",
    type: "annual",
    isWatered: false,
    numberPlanted: 1,
    hoursOfSunlight: 9,
    isHealthy: false,
    isAlive: false
  },
  {
    plantName: "lettuce",
    type: "annual",
    isWatered: true,
    numberPlanted: 5,
    hoursOfSunlight: 8,
    isHealthy: false,
    isAlive: false
  },
];

const Garden = () => {
  return (
    <ul>
      {veg.map(({ plantName, type, isWatered, numberPlanted, hoursOfSunlight, isHealthy, isAlive }) => (
        <Plant
          key={plantName}
          plantName={plantName}
          type={type}
          isWatered={isWatered}
          numberPlanted={numberPlanted}
          hoursOfSunlight={hoursOfSunlight}
          isHealthy={isHealthy}
          isAlive={isAlive} 
        />
      ))}
    </ul>
  );
};
export default Garden;
const Plant = ({
    //received props (JS parameters)
    plantName,
    plantType,
    numberPlanted,
    hoursOfSunlight,
    isWatered,
    isHealthy,
    isAlive,
    deleteVeg
}) => {
    return (
        <li>
            <h2>{plantName}</h2>

            <section>
                <ul>
                    <li>Type: {plantType}</li>
                    <button onClick = { () => deleteVeg(plantName)}>delete</button>
                    <li>Number Planted: {numberPlanted}</li>
                    <li>Daily hours of sunlight: {hoursOfSunlight}</li>
                    <li>Currently Watered: {isWatered.toString()}</li>
                    <li>Plant is Healthy: {isHealthy.toString()}</li>
                    <li>Plant is Alive: {isAlive.toString()}</li>
                </ul>
            </section>
        </li>
    );
};


export default Plant;

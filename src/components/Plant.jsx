const Plant = ({
    plantName,
    type,
    isWatered,
    numberPlanted,
    hoursOfSunlight,
    isHealthy,
    isAlive,
    deleteVeg
}) => {
    return (
        <li>
            <h2>{plantName}</h2>

            <section>
                <ul>
                    <li>Type: {type}</li>
                    <button onClick = { () => deleteVeg(plantName)}>delete</button>
                    <li>Currently Watered: {isWatered.toString()}</li>
                    <li>Number Planted: {numberPlanted}</li>
                    <li>Daily hours of sunlight: {hoursOfSunlight}</li>
                    <li>Plant is Healthy: {isHealthy.toString()}</li>
                    <li>Plant is Alive: {isAlive.toString()}</li>
                </ul>
            </section>
        </li>
    );
};

export default Plant;
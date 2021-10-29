import { useState } from "react";

const Form = () => {
    // const [this will be the state variable, this is the setter method for the state variable] = useState(this is the starting value for the state variable);
    //this is the React way to create a variable.
    const [plantName, setPlantName] = useState("");
    const [plantType, setPlantType] = useState("");
    const [numberPlanted, setNumberPlanted] = useState(0);
    const [hoursOfSunlight, setHoursOfSunlight] = useState(0);
    const [isWatered, setIsWatered] = useState(false);
    const [isHealthy, setIsHealthy] = useState(true);
    const [isAlive, setIsAlive] = useState(true);

    const handleRadio = event => {
        const nameAttr = event.target.name;
        //stores either boolean true or boolean false after it's evaluated.
        const valueAttr = (event.target.value === "true");

        switch (nameAttr) {
            case "isWatered":
                setIsWatered(valueAttr);
                break;
            case "isHealthy":
                setIsHealthy(valueAttr);
                break;
            case "isAlive":
                setIsAlive(valueAttr);
                break;
            default:
                console.log(`Sarah said default is UNNECESSARY "in this case"`);
        }
        
    }
    return (
        <form>
            <label>
                Plant Name:
                <input onChange={(event) => setPlantName(event.target.value)} type="text" name="name" value={plantName} />
            </label>
            <label htmlFor="type">
                Type:
                <select onChange = {(event) => setPlantType(event.target.value)} id = "type" value={plantType}>
                <option value="selectOne">
                        Select One
                    </option>
                    <option value="annual">
                        Annual
                    </option>
                    <option value="perennial">
                        Perennial
                    </option>
                    <option value="Biennial">
                        Biennial 
                    </option>
                </select>
            </label>
            <label>
                Did you water it:
                {/* for our onChange, we do not need to pass in the event parameter, because when onChange is triggered it automatically passes in the event info.  If I did want to write it out explicitly it would need to look like this:
                
                    <input onChange={(event) => handleRadio(event)} />

                */}
                <input onChange={handleRadio} type="radio"  name="isWatered" value="true" checked={(isWatered)}/>True
                <input onChange={handleRadio} type="radio"  name="isWatered" value="false" checked={(!isWatered)}/>False
            </label>
            <label>
                How many did you plant (0-1000):
                <input onChange={(event) => setNumberPlanted(parseInt(event.target.value))} type="number" id="numberPlanted" name="numberPlanted" min="0" max="1000" value={numberPlanted} />
            </label>
            <label>
                Hours of sunlight needed (0-24):
                <input onChange = {(event) => setHoursOfSunlight(parseInt(event.target.value))}type="number" id="hoursOfSunlight" name="hoursOfSunlight" min="0" max="24" value={hoursOfSunlight}/>
            </label>
            <label>
                Is it healthy:
                <input onChange={handleRadio} type="radio"  name="isHealthy" value="true" checked={(isHealthy)}/>True
                <input onChange={handleRadio} type="radio"  name="isHealthy" value="false" checked={(!isHealthy)}/>False
            </label>
            <label>
                Is it alive:
                <input onChange={handleRadio} type="radio" name="isAlive" value="true" checked={(isAlive)}/>True
                <input onChange={handleRadio} type="radio" name="isAlive" value="false" checked={(!isAlive)}/>False
            </label>

            <input type="submit" value="Submit" />
        </form>
    );
};

export default Form;
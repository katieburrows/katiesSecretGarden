import { useState } from "react";

//After creating the addVeg method, we passed it in as a prop via destructuring
const Form = ({addVeg}) => {
    // react way to create a variable: const [state variable, setter method for the state variable] = useState(starting value for the state variable);
    const [plantName, setPlantName] = useState("");
    const [plantType, setPlantType] = useState("");
    const [numberPlanted, setNumberPlanted] = useState(0);
    const [hoursOfSunlight, setHoursOfSunlight] = useState(0);
    const [isWatered, setIsWatered] = useState(false);
    const [isHealthy, setIsHealthy] = useState(true);
    const [isAlive, setIsAlive] = useState(true);

    const handleRadio = event => {
        const nameAttr = event.target.name;
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
 
    //we created this event handler method to perform the following: prevent the page from reloading immediately when the form is submitted, unless certain conditions are met, so that it doesn't cause issues
    const handleSubmit = event => {
        event.preventDefault();
        //we set the condition that the plant name only needed to be filled out for the form submission to be succesful, thus updating state of each property
        if(plantName){
            addVeg({
                plantName: plantName,
                type: plantType,
                numberPlanted: numberPlanted,
                hoursOfSunlight: hoursOfSunlight,
                isWatered: isWatered,
                isHealthy: isHealthy,
                isAlive: isAlive,
            })
            //then we decided that the input fields should reset to their original values
            setPlantName("");
            setPlantType("");
            setNumberPlanted(0);
            setHoursOfSunlight(0);
            setIsWatered(false);
            setIsHealthy(true);
            setIsAlive(true);
        } else {
            //finally, in the case that the plant name was not filled out, we'd have an alert pop up with instructions for the user (there are better forms of doing this, check with sarah later)
            alert("You must enter a plant name to submit");
        }
    }

    return (
         //after passing in the addVeg nethod, we brainstormed how to handle the subnission of a new plant, so we did the following: attached an onSubmit event handler to the form, and defined what it would do (see handleSubmit method above)
        <form onSubmit={handleSubmit}>
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
                How many did you plant (0-1000):
                <input onChange={(event) => setNumberPlanted(parseInt(event.target.value))} type="number" id="numberPlanted" name="numberPlanted" min="0" max="1000" value={numberPlanted} />
            </label>
            <label>
                Hours of sunlight needed (0-24):
                <input onChange = {(event) => setHoursOfSunlight(parseInt(event.target.value))}type="number" id="hoursOfSunlight" name="hoursOfSunlight" min="0" max="24" value={hoursOfSunlight}/>
            </label>
            <label>
                Did you water it:
                <input onChange={handleRadio} type="radio"  name="isWatered" value="true" checked={(isWatered)}/>True
                <input onChange={handleRadio} type="radio"  name="isWatered" value="false" checked={(!isWatered)}/>False
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

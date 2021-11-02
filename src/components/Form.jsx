import { useState } from "react";

const defaultValues = {
    plantName: "",
    plantType: "",
    numberPlanted: 0,
    hoursOfSunlight: 0,
    isWatered: false,
    isHealthy: true,
    isAlive: true,
}
//After creating the addVeg method, we passed it in as a prop via destructuring
const Form = ({ addVeg }) => {
    // react way to create a variable: const [state variable, setter method for the state variable] = useState(starting value for the state variable);
    const [plant, setPlant] = useState(defaultValues);

    const { plantName, plantType, numberPlanted, hoursOfSunlight, isWatered, isHealthy, isAlive } = plant;

    //this runs every time we type or hit buttons into the form field.
    const handleInput = event => {
        //this line is saying:  event.target.name, event.target.value
        //we're choosing to have name and type be const variables because they won't change in the life cycle (during the running of the function) of the handleInput function.
        const { name, type } = event.target;
        //value has to be a let variable because it may change.  When we get to the radio buttons we have to take the "true" string and convert it into a boolean, so it can't be a const.

        let { value } = event.target;
        console.log(`state name ${name}, state value ${value}`);

        if (type === "radio") {
            value = (value === "true");
        }
        if (type === "number") {
            value = (parseInt(value));
        }
        setPlant({ ...plant, [name]: value });
    }

    //we created this event handler method to perform the following: prevent the page from reloading immediately when the form is submitted, unless certain conditions are met, so that it doesn't cause issues
    const handleSubmit = event => {
        event.preventDefault();

        //we set the condition that the plant name only needed to be filled out for the form submission to be successful, thus updating state of each property
        if (plantName) {
            addVeg(plant)
            //then we decided that the input fields should reset to their original values
            setPlant(defaultValues);
        } else {
            //finally, in the case that the plant name was not filled out, we'd have an alert pop up with instructions for the user (there are better forms of doing this, check with sarah later)
            alert("You must enter a plant name to submit");
        }
    }

    return (
        //after passing in the addVeg method, we brainstormed how to handle the submission of a new plant, so we did the following: attached an onSubmit event handler to the form, and defined what it would do (see handleSubmit method above)
        <form onSubmit={handleSubmit}>
            <label>
                Plant Name:
                <input onChange={handleInput} type="text" name="plantName" value={plantName} />
            </label>
            <label htmlFor="type">
                Type:
                <select onChange={handleInput} id="type" name="plantType" value={plantType}>
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
                <input onChange={handleInput} type="number" id="numberPlanted" name="numberPlanted" min="0" max="1000" value={numberPlanted} />
            </label>
            <label>
                Hours of sunlight needed (0-24):
                <input onChange={handleInput} type="number" id="hoursOfSunlight" name="hoursOfSunlight" min="0" max="24" value={hoursOfSunlight} />
            </label>
            <label>
                Did you water it:
                <input onChange={handleInput} type="radio" name="isWatered" value="true" checked={(isWatered)} />True
                <input onChange={handleInput} type="radio" name="isWatered" value="false" checked={(!isWatered)} />False
            </label>
            <label>
                Is it healthy:
                <input onChange={handleInput} type="radio" name="isHealthy" value="true" checked={(isHealthy)} />True
                <input onChange={handleInput} type="radio" name="isHealthy" value="false" checked={(!isHealthy)} />False
            </label>
            <label>
                Is it alive:
                <input onChange={handleInput} type="radio" name="isAlive" value="true" checked={(isAlive)} />True
                <input onChange={handleInput} type="radio" name="isAlive" value="false" checked={(!isAlive)} />False
            </label>

            <input type="submit" value="Submit" />
        </form>
    );
};


export default Form;

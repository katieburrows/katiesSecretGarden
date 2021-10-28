const Form = () => {
    return (
        <form>
            <label>
                Plant Name:
                <input type="text" name="name" />
            </label>
            <label for="type">
                Type:
                <select id = "type" >
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
                <input type="radio" id = "true" name="water" value="isWatered"/>True
                <input type="radio" id = "false" name="water" value="isWatered"/>False
            </label>
            <label>
                How many did you plant (0-1000):
                <input type="number" id="numberPlanted" name="numberPlanted" min="0" max="1000" />
            </label>
            <label>
                Hours of sunlight needed (0-24):
                <input type="number" id="hoursOfSunlight" name="hoursOfSunlight" min="0" max="24" />
            </label>
            <label>
                Is it healthy:
                <input type="radio" id = "true" name="isHealthy" value="isHealthy"/>True
                <input type="radio" id = "false" name="isHealthy" value="isWatered"/>False
            </label>
            <label>
                Is it alive:
                <input type="radio" id = "true" name="isAlive" value="isAlive"/>True
                <input type="radio" id = "false" name="isAlive" value="isAlive"/>False
            </label>

            <input type="submit" value="Submit" />
        </form>
    );
};

export default Form;
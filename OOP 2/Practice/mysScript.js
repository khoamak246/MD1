class Battery {
    Energy;
    DecreaseEnergy;
    constructor(Energy, DecreaseEnergy) {
        this.Energy = Energy;
        this.DecreaseEnergy = DecreaseEnergy;
    }

    setEnergy(Energy){
        return this.Energy = Energy;
    }
    getEnergy(){
      return this.Energy;
    }

    setDecreaseEnergy(DecreaseEnergy) {
        return this.DecreaseEnergy = DecreaseEnergy;
    }
    getDecreaseEnergy() {
        return this.DecreaseEnergy;
    }
}

class Flashlight {
    Status;
    Battery;
    Light;
    TurnOn;
    TurnOff;
    constructor(Status, Battery, Light, TurnOn, TurnOff) {
        this.Status = Status;
        this.Battery = Battery;
        this.Light = Light;
        this.TurnOn = TurnOn;
        this.TurnOff = TurnOff;
    }

    setStatus(Status) {
        this.Status = Status;
        return this.setLight(this.Status);
    }
    getStatus() {
        return this.Status;
    }
    setBattery(Battery) {
        return this.Battery = Battery;
    }
    getBattery() {
        return this.Battery;
    }
    setLight(Light) {
        if (Light) {
            return alert("Den dang sang");
        } else {
            return  alert("Den tat");
        }
    }

    getLight(){
        return this.Light;
    }
    setTurnOn(TurnOn) {
        this.TurnOn = TurnOn;
        return this.setStatus(this.TurnOn);
    }
    getTurnOn() {
        return this.TurnOn;
    }
    setTurnOff(TurnOff) {
        return this.TurnOff = TurnOff;
    }
    getTurnOff() {
        return this.TurnOff;
    }
}

let battery = new Battery(10);


let flashlight = new Flashlight();
flashlight.setBattery(battery.getEnergy());
flashlight.setTurnOn(true);
//

// flashlight.setStatus(flashlight.getTurnOn());
//
// flashlight.setLight(flashlight.getStatus());


document.write("Battery is: " + flashlight.getBattery() + "%" + "<br>");
flashlight.getLight();
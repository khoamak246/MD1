class SwitchButton {
    Status;
    SwitchOn;
    SwitchOff;
    ConnectToLamp;
    constructor(Status, SwitchOn, SwitchOff, ConnectToLamp) {
        this.Status = Status;
        this.SwitchOn = SwitchOn;
        this.SwitchOff = SwitchOff;
        this.ConnectToLamp = ConnectToLamp;
    }
    setStatus(Status){
        if (Status){
            return alert("Cong tac On")
        } else {
            return alert("Cong tac Off")
        }
    }
    getStatus(){
        return this.Status;
    }
    setSwitchOn(SwitchOn) {
        this.SwitchOn = SwitchOn;
        return this.setStatus(SwitchOn);
    }
    getSwitchOn() {
        return this.SwitchOn;
    }
    setConnectToLamp(ConnectToLamp) {
        return this.ConnectToLamp = ConnectToLamp;
    }
    getConnectToLamp() {
        return this.ConnectToLamp;
    }
}
class ElectricLamp {
    Status;
    TurnOn;
    TurnOff;
    constructor(Status, TurnOn, TurnOff) {
        this.Status = Status;
        this.TurnOn = TurnOn;
        this.TurnOff = TurnOff;
    }
    setStatus(Status) {
        if (Status){
            return alert("Cong tac da On - Den sang")
        } else {
            return alert("Cong tac dang Off - Den tat")
        }
    }
    getStatus() {
        return this.Status;
    }

    setTurnOn(TurnOn) {
        this.TurnOn = TurnOn;
        return this.setStatus(TurnOn);
    }
    getTurnOn() {
        return  this.TurnOn
    }
    setTurnOff(TurnOff) {
        return this.TurnOff;
    }
    getTurnOff() {
        return this.TurnOff;
    }
}

let On = true;
let switchButton = new SwitchButton();
switchButton.setConnectToLamp("Da connect voi den")
alert(switchButton.getConnectToLamp());
switchButton.setSwitchOn(On);
switchButton.getStatus();


let Lamp = new ElectricLamp();
Lamp.setTurnOn(On);
Lamp.getStatus();


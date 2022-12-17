class RemoteTV {
    Code;
    ChangeChanel;
    Volume_Chanel;
    constructor(Code, ChangeChanel, Volume_Chane) {
        this.Code = Code;
        this.ChangeChanel = ChangeChanel;
        this.Volume_Chanel = Volume_Chane;
    }
    setCode(Code) {
        if (Code === false) {
            return this.Code = "Button OFF pressed"
        } else {
            return  this.Code = "Button OFF not pressed"
        }
    }
    getCode() {
        return this.Code;
    }
    setChangeChanel(ChangeChanel) {
        return this.ChangeChanel = ChangeChanel;
    }
    getChangeChanel(){
        return this.ChangeChanel;
    }
    setVolume_Chanel(Volume_Chanel){
        return this.Volume_Chanel = Volume_Chanel;
    }
    getVolume_Chanel() {
        return this.Volume_Chanel;
    }
}

class  Television {
    On_Showing_Chanel;
    Current_Volume;
    Status;
    Change_Chanel;
    Change_Volume;
    constructor(On_Showing_Chanel, Current_Volume, Status, Change_Chanel, Change_Volume) {
        this.On_Showing_Chanel = On_Showing_Chanel;
        this.Current_Volume = Current_Volume;
        this.Status = Status;
        this.Change_Chanel = Change_Chanel;
        this.Change_Volume = Change_Volume;
    }
    setOn_Showing_Chanel(On_Showing_Chanel){
        return this.On_Showing_Chanel = On_Showing_Chanel;
    }
    getOn_Showing_Chanel() {
        return this.On_Showing_Chanel;
    }
    setCurrent_Volume(Current_Volume){
        return this.Current_Volume = Current_Volume;
    }
    getCurrent_Volume(){
        return this.Current_Volume;
    }
    setStatus(Status){
        if (Status) {
            return this.Status = "TV On"
        } else {
            return this.Status = "TV Off"
        }
    }
    getStatus() {
        return this.Status;
    }
    setChange_Chanel(Change_Chanel) {
        return this.Change_Chanel = Change_Chanel;
    }
    getChange_Chanel() {
        return this.Change_Chanel;
    }
    setChange_Volume(Change_Volume) {
        return this.Change_Volume = Change_Volume;
    }
    getChange_Volume() {
        return this.Change_Volume;
    }
}

let TV = new Television();
TV.setStatus(true);
alert(TV.getStatus())
let Remote = new RemoteTV();
let ChanelShowing = 7;
Remote.setChangeChanel(ChanelShowing);
TV.setChange_Chanel(ChanelShowing);
TV.setOn_Showing_Chanel(ChanelShowing);
alert("Button 7 had been pressed: " + Remote.getChangeChanel());
alert("TV change to chanel : " + TV.getChange_Chanel());
alert("Current Chanel " + TV.getOn_Showing_Chanel() + " Chanel ")

let nextChanel = 3;
Remote.setChangeChanel(nextChanel);
TV.setChange_Chanel(nextChanel);
TV.setOn_Showing_Chanel(nextChanel);
alert("Button had been pressed: " + Remote.getChangeChanel());
alert("Change chanel to chanel " + TV.getChange_Chanel());
alert("On showing chanel: " + TV.getOn_Showing_Chanel());

let Turn_Up = 2;
Remote.setVolume_Chanel(Turn_Up);
TV.setChange_Volume(Turn_Up);
TV.setCurrent_Volume(Turn_Up);
alert("Volume button had been pressed: " + Remote.getVolume_Chanel());
alert("Am luong tang len: " + TV.getChange_Volume());
alert("Am luong hien tai: " + TV.getChange_Volume());


let Turn_Off = false;
Remote.setCode(Turn_Off);
TV.setStatus(Turn_Off);
alert(Remote.getCode());
alert(TV.getStatus());
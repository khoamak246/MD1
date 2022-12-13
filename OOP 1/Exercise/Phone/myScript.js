class Mobile {
    energy;
    write_message_repo;
    take_message_repo;
    sent_message_repo;
    check_on_off;
    turn_on_off;
    charging;
    write_message;
    take_message;
    sent_message;
    take_message_repo_seen;
    sent_message_repo_seen;
    energy_use;
    able_toUse;
    constructor(
        energy,
        write_message_repo,
        take_message_repo,
        sent_message_repo,
        check_on_off,
        turn_on_off,
        charging,
        write_message,
        take_message,
        sent_message,
        take_message_repo_seen,
        sent_message_repo_seen,
        energy_use,
        able_toUse
        ) {
        this.energy = energy;
        this.write_message_repo = write_message_repo;
        this.take_message_repo = take_message_repo;
        this.sent_message_repo = sent_message_repo;
        this.check_on_off = check_on_off;
        this.turn_on_off = turn_on_off;
        this.charging = charging;
        this.write_message = write_message;
        this.take_message = take_message;
        this.sent_message = sent_message;
        this.take_message_repo_seen = take_message_repo_seen;
        this.sent_message_repo_seen = sent_message_repo_seen;
        this.energy_use = energy_use;
        this.able_toUse = able_toUse;
    }
    setEnergy(energy){
        return this.energy = energy;
    }
    getEnergy(){
        return this.energy;
    }
    setWrite_message_repo(write_message_repo) {
        return this.setwrite_message_repo = write_message_repo;
    }
    getWrite_message_repo() {
        return this.write_message_repo;
    }
    setTake_message_repo(write_message_repo) {
        return this.take_message_repo = write_message_repo;
    }
    getTake_message_repo() {
        return this.take_message_repo;
    }
    setSent_message_repo(sent_message_repo){
        return this.sent_message_repo = sent_message_repo;
    }
    getSent_message_repo(){
        return this.sent_message_repo;
    }
    setCheck_on_off(check_on_off){
        return this.check_on_off = check_on_off;
    }
    getCheck_on_off() {
        return this.check_on_off;
    }
    setTurn_on_off(turn_on_off) {
        return this.turn_on_off = turn_on_off;
    }
    getTurn_on_off(){
        return this.turn_on_off;
    }
    setCharging(charging){
        return this.charging = charging;
    }
    getCharging() {
        return this.charging;
    }
    setWrite_message(write_message) {
        return this.write_message = write_message;
    }
    getWrite_message() {
        return this.write_message;
    }
    setTake_message(take_message){
        return this.take_message = take_message;
    }
    getTake_message(){
        return this.take_message;
    }
    setSent_message(sent_message){
        return this.sent_message = sent_message;
    }
    getSent_message() {
        return this.sent_message;
    }
    setTake_message_repo_seen(take_message_repo_seen){
        return this.take_message_repo_seenb = take_message_repo_seen;
    }
    getTake_message_repo_seen() {
        return this.take_message_repo_seen;
    }
    setSent_message_repo_seen(sent_message_repo_seen){
        return this.sent_message_repo_seen = sent_message_repo_seen;
    }
    getSent_message_repo_seen(sent_message_repo_seenv){
        return this.sent_message_repo_seen;
    }
    setEnergy_use(energy_use){
        return this.energy_use = energy_use;
    }
    getEnergy_use() {
        return this.energy_use;
    }
    setAble_toUse(able_toUse){
        return this.able_toUse = able_toUse;
    }
    getAble_toUse() {
        return this.able_toUse;
    }
}
let Iphone = new Mobile();
let WriteMessage = "Hello Nokia";
Iphone.setWrite_message(WriteMessage);
Iphone.setWrite_message_repo(WriteMessage);
Iphone.setSent_message(WriteMessage);
Iphone.setSent_message_repo_seen(WriteMessage);
let Message = Iphone.getSent_message();
window.alert(Message);

let Nokia = new Mobile();
Nokia.setTake_message_repo(WriteMessage);
Nokia.setTake_message_repo_seen(WriteMessage);
Nokia.setTake_message(WriteMessage);
let TakeMessage = "Tôi đã nhận được " + Nokia.getTake_message_repo();
window.alert(TakeMessage);


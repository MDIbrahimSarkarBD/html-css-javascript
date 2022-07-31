class IS_Date{
    dates = new Date();
    y = this.dates.getFullYear();
    m = this.dates.getMonth(); 
    d = this.dates.getDate(); 
    fullDate = "";
    constructor() {
        this.fullDate =  this.y+"/"+ this.m +"/" + this.d;
    }
}

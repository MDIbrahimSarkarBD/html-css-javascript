class ThemeChange{
        
    constructor(buttonID, themeColor){

        this.buttontID = document.getElementById(buttonID); 
        this.themeName = themeColor;
        // Check button click UI visualizer
        this.storageHas() == true ? this.themeAdd(this.themeName) : this.themeRemove(this.themeName) ;
        this.storageHas() == true ? this.buttontID.checked  = true : this.buttontID.checked = false ;
        this.click();
    }

    click(){
        var self =  this;
        if (this.buttontID) {
            this.buttontID.onclick = function (theme) {
                
                if (self.buttontID.checked) {
                    self.themeAdd(self.themeName);
                    self.storageAdd("theme", self.themeName);
                    
                }else{
                    self.themeRemove(self.themeName);
                    self.storageRemove("theme");
                }
        
            }
        }
        
    }


    // theme class add CSS class 
    themeAdd(className){
        document.body.classList.add(className);
    }

    // theme class remove CSS class 
    themeRemove(className){
        document.body.classList.remove(className);
    }

    // browser localstorage remove add 
    storageAdd(name, value){
        localStorage.setItem(name, value);
        this.themeHas = true;
        
    }

    // browser localstorage remove Item 
    storageRemove(name){
        localStorage.removeItem(name);
        this.themeHas = false;
        return localStorage.removeItem(name);
    }

    // theme browser localstorag checker on boolean
    storageHas(){
        this.themeHas = localStorage.getItem("theme") == null ? false : true;
        return this.themeHas ;
    }

}


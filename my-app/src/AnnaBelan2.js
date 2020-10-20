
export default class ClickEvents {

   constructor() {

       this.lvl = 1
       this.IPR = 100
       this.IPRmax = 200
       this.BUILDING_TYPES = {
           "manufactorum": "manufactorum.jpg",
           "supply_depo": "supple_depo.jpg",
           "administratum": "administratum.jpg",
           "slot_for_building": "slot_for_buildin.jpg",
       }
       return
   }


    topbarclick() {
        let hidden = document.querySelector('.topbarmenu');
        hidden.classList.toggle('hidden')
    }



    leftbarclick() {
        let hidden = document.querySelector('.leftbarmenu');
        hidden.classList.toggle('hidden')
    }



    static  centerbarclick() {
        let hidden = document.querySelector('.centerbarmenu');
        hidden.classList.toggle('hidden')
    }



    static rightbarclick() {
        let hidden = document.querySelector('.rightbarmenu');
        hidden.classList.toggle('hidden')
    }



    static bottombarclick() {
        let hidden = document.querySelector('.bottombarmenu');
        hidden.classList.toggle('hidden')
    }



   static doBeforeChange(imgSrc) {
        let length = imgSrc.split('/').length;
        imgSrc = imgSrc.split('/')[length - 1];
        switch (imgSrc) {
            case this.BUILDING_TYPES.administratum:
                this.IPR -= 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(this.IPR) + "/" + this.IPRmax;
                break;
            case this.BUILDING_TYPES.supply_depo:
                this.IPR -= 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(this.IPR) + "/" + this.IPRmax;
                break;
            case this.BUILDING_TYPES.manufactorum:
                this.IPRmax -= 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(this.IPR) + "/" + Math.round(this.IPRmax);
                break;
            default:
                break;
        }
    }



    getValue_topbar(value) {
        this.doBeforeChange(document.querySelector('.topbarpicture').src);
        let hidden = document.querySelector('.topbarmenu');
        switch (value) {
            case "Administratum":
                document.querySelector('.topbarpicture').src = this.BUILDING_TYPES.administratum;
                this.IPR += 70;
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(this.IPR) + "/" + this.IPRmax;
                hidden.classList.toggle('hidden');
                break;
            case "Manufactorum":
                document.querySelector('.topbarpicture').src = this.BUILDING_TYPES.manufactorum;
                hidden.classList.toggle('hidden');
                break;
            case "Supply_depo":
                document.querySelector('.topbarpicture').src = this.BUILDING_TYPES.supply_depo;
                this.IPRmax += 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(this.IPR) + "/" + Math.round(this.IPRmax);
                hidden.classList.toggle('hidden');
                break;
            case "slot_for_building":
                document.querySelector('.topbarpicture').src = this.BUILDING_TYPES.slot_for_building;
                hidden.classList.toggle('hidden');
                break;
        }
    }



    getValue_leftbar(value) {
        this.doBeforeChange(document.querySelector('.leftbarpicture').src);
        let hidden = document.querySelector('.leftbarmenu');
        switch (value) {
            case "Administratum":
                document.querySelector('.leftbarpicture').src = this.BUILDING_TYPES.administratum;
                hidden.classList.toggle('hidden');
                break;
            case "Manufactorum":
                document.querySelector('.leftbarpicture').src = this.BUILDING_TYPES.manufactorum;
                hidden.classList.toggle('hidden');
                break;
            case "Supply_depo":
                this.IPRmax += 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(this.IPR) + "/" + Math.round(this.IPRmax);
                document.querySelector('.leftbarpicture').src = this.BUILDING_TYPES.supply_depo;
                hidden.classList.toggle('hidden');
                break;
            case "slot_for_building":
                document.querySelector('.leftbarpicture').src = this.BUILDING_TYPES.slot_for_building;
                hidden.classList.toggle('hidden');
                break;
        }
    };



    getValue_centerbar(value) {

        this.doBeforeChange(document.querySelector('.centerbarpicture').src);
        let hidden = document.querySelector('.centerbarmenu');

        switch (value) {
            case "Administratum":
                document.querySelector('.centerbarpicture').src = this.BUILDING_TYPES.administratum;
                hidden.classList.toggle('hidden');
                break;
            case "Manufactorum":
                document.querySelector('.centerbarpicture').src = this.BUILDING_TYPES.manufactorum;
                hidden.classList.toggle('hidden')
                break;
            case "Supply_depo":
                this.IPRmax += 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(this.IPR) + "/" + Math.round(this.IPRmax);
                document.querySelector('.centerbarpicture').src = this.BUILDING_TYPES.supply_depo;
                hidden.classList.toggle('hidden')
                break;
            case "slot_for_building":
                document.querySelector('.centerbarpicture').src = this.BUILDING_TYPES.slot_for_building;
                hidden.classList.toggle('hidden')
                break;
        }
    }



    getValue_rightbar(value) {
        this.doBeforeChange(document.querySelector('.rightbarpicture').src);
        let hidden = document.querySelector('.rightbarmenu');

        switch (value) {
            case "Administratum":
                document.querySelector('.rightbarpicture').src = this.BUILDING_TYPES.administratum;
                hidden.classList.toggle('hidden')
                break;
            case "Manufactorum":
                document.querySelector('.rightbarpicture').src = this.BUILDING_TYPES.manufactorum;
                hidden.classList.toggle('hidden')
                break;
            case "Supply_depo":
                this.IPRmax += 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(this.IPR) + "/" + Math.round(this.IPRmax);
                document.querySelector('.rightbarpicture').src = this.BUILDING_TYPES.supply_depo;
                hidden.classList.toggle('hidden')
                break;
            case "slot_for_building":
                document.querySelector('.rightbarpicture').src = this.BUILDING_TYPES.slot_for_building;
                hidden.classList.toggle('hidden')
                break;
        }
    }



   static getValue_bottombar(value) {
      //  this.doBeforeChange(document.querySelector('.bottombarpicture').src);
        //let hidden = document.querySelector('.bottombarmenu')
    debugger
        switch (value) {
            case "Administratum":
                document.querySelector('.bottombarpicture').src = this.BUILDING_TYPES.administratum;
                //hidden.classList.toggle('hidden')
                break;
            case "Manufactorum":
                document.querySelector('.bottombarpicture').src = this.BUILDING_TYPES.manufactorum;
                //hidden.classList.toggle('hidden')
                break;
            case "Supply_depo":
                this.IPRmax += 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(this.IPR) + "/" + Math.round(this.IPRmax);
                document.querySelector('.bottombarpicture').src = this.BUILDING_TYPES.supply_depo;
                //hidden.classList.toggle('hidden')
                break;
            case "slot_for_building":
                document.querySelector('.bottombarpicture').src = this.BUILDING_TYPES.slot_for_building;
                //hidden.classList.toggle('hidden')
                break;
        }

    }



   static lvlupclick() {
        this.IPR += 50
        this.IPRmax += 100
        this.lvl +=1
        document.querySelector('.lvl').innerHTML = "Lvl:" + Math.round(this.lvl)
        document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(this.IPR) + "/" + this.IPRmax
    }
}
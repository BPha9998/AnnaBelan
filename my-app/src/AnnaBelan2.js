    let lvl = 1
    let IPR = 100
    let IPRmax = 200
    let BUILDING_TYPES = {
        "manufactorum": "manufactorum.jpg",
        "supply_depo": "supple_depo.jpg",
        "administratum": "administratum.jpg",
        "slot_for_building": "slot_for_building.jpg",
    }


export default class ClickEvents {
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
            case BUILDING_TYPES.administratum:
                IPR -= 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(IPR) + "/" + IPRmax;
                break;
            case BUILDING_TYPES.supply_depo:
                IPR -= 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(IPR) + "/" + IPRmax;
                break;
            case BUILDING_TYPES.manufactorum:
                IPRmax -= 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(IPR) + "/" + Math.round(IPRmax);
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
                document.querySelector('.topbarpicture').src = BUILDING_TYPES.administratum;
                IPR += 70;
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(IPR) + "/" + IPRmax;
                hidden.classList.toggle('hidden');
                break;
            case "Manufactorum":
                document.querySelector('.topbarpicture').src = BUILDING_TYPES.manufactorum;
                hidden.classList.toggle('hidden');
                break;
            case "Supply_depo":
                document.querySelector('.topbarpicture').src = BUILDING_TYPES.supply_depo;
                IPRmax += 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(IPR) + "/" + Math.round(IPRmax);
                hidden.classList.toggle('hidden');
                break;
            case "slot_for_building":
                document.querySelector('.topbarpicture').src = BUILDING_TYPES.slot_for_building;
                hidden.classList.toggle('hidden');
                break;
        }
    }



    getValue_leftbar(value) {
        this.doBeforeChange(document.querySelector('.leftbarpicture').src);
        let hidden = document.querySelector('.leftbarmenu');
        switch (value) {
            case "Administratum":
                document.querySelector('.leftbarpicture').src = BUILDING_TYPES.administratum;
                hidden.classList.toggle('hidden');
                break;
            case "Manufactorum":
                document.querySelector('.leftbarpicture').src = BUILDING_TYPES.manufactorum;
                hidden.classList.toggle('hidden');
                break;
            case "Supply_depo":
                IPRmax += 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(IPR) + "/" + Math.round(IPRmax);
                document.querySelector('.leftbarpicture').src = BUILDING_TYPES.supply_depo;
                hidden.classList.toggle('hidden');
                break;
            case "slot_for_building":
                document.querySelector('.leftbarpicture').src = BUILDING_TYPES.slot_for_building;
                hidden.classList.toggle('hidden');
                break;
        }
    };



    getValue_centerbar(value) {

        this.doBeforeChange(document.querySelector('.centerbarpicture').src);
        let hidden = document.querySelector('.centerbarmenu');

        switch (value) {
            case "Administratum":
                document.querySelector('.centerbarpicture').src = BUILDING_TYPES.administratum;
                hidden.classList.toggle('hidden');
                break;
            case "Manufactorum":
                document.querySelector('.centerbarpicture').src = BUILDING_TYPES.manufactorum;
                hidden.classList.toggle('hidden')
                break;
            case "Supply_depo":
                IPRmax += 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(IPR) + "/" + Math.round(IPRmax);
                document.querySelector('.centerbarpicture').src = BUILDING_TYPES.supply_depo;
                hidden.classList.toggle('hidden')
                break;
            case "slot_for_building":
                document.querySelector('.centerbarpicture').src = BUILDING_TYPES.slot_for_building;
                hidden.classList.toggle('hidden')
                break;
        }
    }



    getValue_rightbar(value) {
        this.doBeforeChange(document.querySelector('.rightbarpicture').src);
        let hidden = document.querySelector('.rightbarmenu');

        switch (value) {
            case "Administratum":
                document.querySelector('.rightbarpicture').src = BUILDING_TYPES.administratum;
                hidden.classList.toggle('hidden')
                break;
            case "Manufactorum":
                document.querySelector('.rightbarpicture').src = BUILDING_TYPES.manufactorum;
                hidden.classList.toggle('hidden')
                break;
            case "Supply_depo":
                IPRmax += 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(IPR) + "/" + Math.round(IPRmax);
                document.querySelector('.rightbarpicture').src = BUILDING_TYPES.supply_depo;
                hidden.classList.toggle('hidden')
                break;
            case "slot_for_building":
                document.querySelector('.rightbarpicture').src = BUILDING_TYPES.slot_for_building;
                hidden.classList.toggle('hidden')
                break;
        }
    }



    static getValue_bottombar(e) { debugger
        this.doBeforeChange(document.querySelector('.bottombar-image').src);
        let hidden = document.querySelector('.bottombarmenu')
        switch (e.target.value) {
            case 'Administratum':
                document.querySelector('.bottombar-image').src = BUILDING_TYPES.administratum
                hidden.classList.toggle('hidden')
                IPR += 200
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(IPR) + "/" + IPRmax
            break;
            case "Manufactorum":
                debugger
                document.querySelector('.bottombar-image').src = BUILDING_TYPES.manufactorum;
                hidden.classList.toggle('hidden')
                break;
            case "Supply_depo":
                IPRmax += 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(IPR) + "/" + Math.round(IPRmax);
                document.querySelector('.bottombar-image').src = BUILDING_TYPES.supply_depo;
                hidden.classList.toggle('hidden')
                break;
            case "slot_for_building":
                document.querySelector('.bottombar-image').src = BUILDING_TYPES.slot_for_building;
                hidden.classList.toggle('hidden')
                break;
            default:
        }

    }



   static lvlupclick() {
        IPR += 50
        IPRmax += 100
        lvl +=1
        document.querySelector('.lvl').innerHTML = "Lvl:" + Math.round(lvl)
        document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(IPR) + "/" + IPRmax
    }
}
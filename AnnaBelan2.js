
let BUILDING_TYPES = {
        "manufactorum": "manufactorum.jpg",
        "supply_depo": "supple_depo.jpg",
        "administratum": "administratum.jpg",
        "slot_for_building": "slot_for_buildin.jpg"
    }
    let lvl = 1
    let IPR = 100
    let IPRmax = 200

function upbarclick() {
        let hidden = document.querySelector('.topbarmenu');
        hidden.classList.toggle('hidden')
    }

    function leftbarclick() {
        let hidden = document.querySelector('.leftbarmenu');
        hidden.classList.toggle('hidden')
    }

    function centerbarclick() {
        let hidden = document.querySelector('.centerbarmenu');
        hidden.classList.toggle('hidden')
    }

    function rightbarclick() {
        let hidden = document.querySelector('.rightbarmenu');
        hidden.classList.toggle('hidden')
    }

    function downbarclick() {
        let hidden = document.querySelector('.bottombarmenu');
        hidden.classList.toggle('hidden')
    }

    function doBeforeChange(imgSrc) {
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

    function getValue_topbar(value) {
        doBeforeChange(document.querySelector('.topbarpicture').src);
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

    const getValue_leftbar = value => {
        doBeforeChange(document.querySelector('.leftbarpicture').src);
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

    function getValue_centerbar(value) {

        doBeforeChange(document.querySelector('.centerbarpicture').src);
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

    function getValue_rightbar(value) {
        doBeforeChange(document.querySelector('.rightbarpicture').src);
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

    function getValue_bottombar(value) {
        doBeforeChange(document.querySelector('.bottombarpicture').src);
        let hidden = document.querySelector('.bottombarmenu')

        switch (value) {
            case "Administratum":
                document.querySelector('.bottombarpicture').src = BUILDING_TYPES.administratum;
                hidden.classList.toggle('hidden')
                break;
            case "Manufactorum":
                document.querySelector('.bottombarpicture').src = BUILDING_TYPES.manufactorum;
                hidden.classList.toggle('hidden')
                break;
            case "Supply_depo":
                IPRmax += 100
                document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(IPR) + "/" + Math.round(IPRmax);
                document.querySelector('.bottombarpicture').src = BUILDING_TYPES.supply_depo;
                hidden.classList.toggle('hidden')
                break;
            case "slot_for_building":
                document.querySelector('.bottombarpicture').src = BUILDING_TYPES.slot_for_building;
                hidden.classList.toggle('hidden')
                break;
        }

    }

    function lvlupclick() {
        IPR += 50
        IPRmax += 100
        lvl++
        document.querySelector('.lvl').innerHTML = "Lvl:" + Math.round(lvl)
        document.querySelector('.ipr').innerHTML = "IPR:" + Math.round(IPR) + "/" + IPRmax
    }

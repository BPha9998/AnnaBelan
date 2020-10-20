import React from 'react';
import './AnnaBelan2.css';
import ClickEvents from './AnnaBelan2.js';

function block() {
  return (
        <div className="block">
          <div className="name"> Name:тут будет имя <p className="lvl" >Lvl:1 </p> </div>
        <div className="fraction">fraction: тут будет фракция </div>
        <div className="post">Post<pre className="br">PR 1111/2222</pre></div>
        <div className="units">Units<p className="unitsinfo">тут дожны быть юниты</p></div>
        <div className="industry">Industry <span  className="pri" >IPR: 100/ 200</span></div>
      <div className="building">
        <div className="hidden building-menu-position topbarmenu" >
          <form>
            <label >Build in top bar</label>
            <br/>
              <select className="topbarbuilding" onChange={ClickEvents.getValue_topbar} >
                <option value="slot_for_building">Slot for build</option>
                <option value="Administratum">Administratum</option>
                <option value="Manufactorum">Manufactorum</option>
                <option value="Supply_depo">Supply depo</option>
              </select>
          </form>
        </div>
        <div className="hidden building-menu-position leftbarmenu" >
          <form >
            <label >Build in left bar</label>
            <br/>
              <select className="leftbarbuild" onChange={ClickEvents.getValue_leftbar} >
                <option value="slot_for_building">Slot for build</option>
                <option value="Administratum">Administratum</option>
                <option value="Manufactorum">Manufactorum</option>
                <option value="Supply_depo">Supply depo</option>

              </select>
          </form>
        </div>
        <div className="hidden building-menu-position centerbarmenu" >
          <form>
            <label >Build in center bar</label>
            <br/>
              <select className="centerbarbuild" onChange={ClickEvents.getValue_centerbar}>
                <option value="slot_for_building">Slot for build</option>
                <option value="Administratum">Administratum</option>
                <option value="Manufactorum">Manufactorum</option>
                <option value="Supply_depo">Supply depo</option>
              </select>
          </form>
        </div>
        <div className="hidden building-menu-position rightbarmenu" >
          <form >
            <label >Build in rightbar</label>
            <br/>
              <select className="rightbarbuild" onChange={ClickEvents.getValue_rightbar} >
                <option value="slot_for_building">Slot for build</option>
                <option value="Administratum">Administratum</option>
                <option value="Manufactorum">Manufactorum</option>
                <option value="Supply_depo">Supply depo</option>
              </select>
          </form>
        </div>
        <div className="hidden building-menu-position bottombarmenu" >
          <form>
            <label>Build in botton bar</label>
            <br/>
              <select className="downbarbuild" onChange={ClickEvents.getValue_bottombar} >
                <option value="slot_for_building">Slot for build</option>
                <option value="Administratum">Administratum</option>
                <option value="Manufactorum">Manufactorum</option>
                <option value="Supply_depo">Supply depo</option>
              </select>
          </form>
        </div>
        <div className="topbar" onClick={ClickEvents.topbarclick} >
          <img className= "topbar-image"  src="https://placehold.it/70x70"/>
        </div>

        <div className="centerbuild">
          <div className="leftbar"  onClick={ClickEvents.leftbarclick}>
            <img className= "leftbar-image" src="https://placehold.it/70x70"/>
          </div>

          <div className="centerbar" onClick={ClickEvents.centerbarclick} >
            <img className= "centerbar-image" src="https://placehold.it/70x70"/>
          </div>

          <div className="rightbar" onClick={ClickEvents.rightbarclick}>
            <img className= "rightbar-image" src="https://placehold.it/70x70"/>
          </div>

        </div>
        <div className="bottombar" onClick={ClickEvents.bottombarclick}>
          <img className= "bottombar-image" src="https://placehold.it/70x70"/>
        </div>
      </div>
      <div className="lvlup">
        <button title="тут должна быть стоимость улучшения" onClick={ClickEvents.lvlupclick}>lvlup</button>
      </div>

      </div>
  );
}

export default block;

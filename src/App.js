import "./App.css"
import Navbar from "./components/Navbar";
import {useState} from "react";
function App() {
    const [hoveredDivs, setHoveredDivs] = useState({});
    const handleMouseEnter = (id) => { setHoveredDivs((prev) => ({ ...prev, [id]: true })); };
    const handleMouseLeave = (id) => { setHoveredDivs((prev) => ({ ...prev, [id]: false })); };
    return (
      <>
          <div id="container">
              <div className="playoff"> <Navbar></Navbar>
                  <h2>2021-2022 NBA Playoffs Match-up Chart</h2>
                  <hr/>
                  <div className="round1" onMouseEnter={() => handleMouseEnter("round1")} onMouseLeave={() => handleMouseLeave("round1")}>
                      <img width="" height="" alt=""  className={`${hoveredDivs["round1"] ? 'bg-zinc-500' : ''}`} />
                      <div className={`${hoveredDivs["round1"] ? 'hidden' : 'block'}`}>
                      <div className="team west1"><a href="#" target="_blank"><img src="Images/Suns.png" width="" height=""  alt=""/> <span>PHX</span></a></div>
                      <div className="team west2"><a href="#" target="_blank"><img src="Images/Pelicans.png" width="" height=""  alt=""/> NOP</a></div>
                      <p><a href="#" target="_blank"> PHX 4:2 NOP</a></p>
                      </div>
                      <div className={`${hoveredDivs["round1"] ? 'block' : 'hidden'} absolute top-0 left-0 w-[130px] text-[10px] flex flex-col p-4 text-white `}>
                          <span className="font-bold">SUNS VS PELICANS </span>
                          <div className="flex justify-between"><span>5-02</span><span>89-101</span></div>

                      </div>
                          {/*添加连接线条*/}
                      <div className="connector-left-1" style={{top: "75px", left: "100%"}}></div>
                      <div className="vertical-left-1" style={{top: "75px", left: "calc(100% + 11px)"}}></div>
                      <div className="connector-left-2" style={{top: "235px", left: "100%"}}></div>
                      <div className="vertical-left-2" style={{top: "157px", left: "calc(100% + 11px)"}}></div>
                      <div className="connector-left-3" style={{top: "155px", left: "108.5%"}}></div>
                  </div>
                  <div className="round2">
                      <img width="" height="" alt="" />
                      <div className="team west3"><a href="#" target="_blank"><img src="Images/Mavericks.png" width="" height=""  alt=""/> DAL</a></div>
                      <div className="team west4"><a href="#" target="_blank"><img src="Images/Jazz.png" width="" height=""  alt=""/> UTA</a></div>
                      <p><a href="#" target="_blank"> DAL 4:2 UTA</a></p>
                  </div>
                  <div className="round3">
                      <img width="" height="" alt="" />
                      <div className="team west5"><a href="#" target="_blank"><img src="Images/Warriors.png" width="" height=""  alt=""/> GSW</a></div>
                      <div className="team west6"><a href="#" target="_blank"><img src="Images/Nuggets.png" width="" height=""  alt=""/> DEN</a></div>
                      <p><a href="#" target="_blank"> GSW 4:1 DEN</a></p>
                       {/*添加连接线条*/}
                      <div className="connector-left-4" style={{top: "75px", left: "100%"}}></div>
                      <div className="vertical-left-3" style={{top: "75px", left: "calc(100% + 11px)"}}></div>
                      <div className="connector-left-5" style={{top: "235px", left: "100%"}}></div>
                      <div className="vertical-left-4" style={{top: "157px", left: "calc(100% + 11px)"}}></div>
                      <div className="connector-left-6" style={{top: "155px", left: "108.5%"}}></div>

                  </div>
                  <div className="round4">
                      <img width="" height="" alt="" />
                      <div className="team west7"><a href="#" target="_blank"><img src="Images/Grizzlies.png" width="" height=""  alt=""/> MEM</a></div>
                      <div className="team west8"><a href="#" target="_blank"><img src="Images/Timberwolves.png" width="" height=""  alt=""/> MSP</a></div>
                      <p><a href="#" target="_blank"> MEM 4:2 MSP</a></p>
                  </div>
                  <div className="round5">
                      <img width="" height="" alt="" />
                      <div className="team west9"><a href="#" target="_blank"><img src="Images/Suns.png" width="" height=""  alt=""/> PHX</a></div>
                      <div className="team west10"><a href="#" target="_blank"><img src="Images/Mavericks.png" width="" height=""  alt=""/> DAL</a></div>
                      <p><a href="#" target="_blank"> PHX 3:4 DAL</a></p>
                       {/*添加连接线条*/}
                      <div className="connector-middle-1" style={{top: "80px", left: "100%"}}></div>
                      <div className="vertical-middle-1" style={{top: "80px", left: "calc(100% + 20px)"}}></div>
                  </div>
                  <div className="round6">
                      <img width="" height="" alt="" />
                      <div className="team west11"><a href="#" target="_blank"><img src="Images/Warriors.png" width="" height=""  alt=""/> GSW</a></div>
                      <div className="team west12"><a href="#" target="_blank"><img src="Images/Grizzlies.png" width="" height=""  alt=""/> MEM</a></div>
                      <p><a href="#" target="_blank"> GSW 4:2 MEM</a></p>
                       {/*添加连接线条*/}
                      <div className="connector-middle-2" style={{top: "70px", left: "100%"}}></div>
                      <div className="vertical-middle-2" style={{top: "-25px", left: "calc(100% + 20px)"}}></div>
                  </div>
                  <div className="round7">
                      <img width="" height="" alt="" />
                      <div className="team west13"><a href="#" target="_blank"><img src="Images/Mavericks.png" width="" height=""  alt=""/> DAL</a></div>
                      <div className="team west14"><a href="#" target="_blank"><img src="Images/Warriors.png" width="" height=""  alt=""/> GSW</a></div>
                      <p><a href="#" target="_blank"> DAL 1: 4 GSW</a></p>
                  </div>
                  <div className="round8">
                      <img width="" height="" alt="" />
                      <div className="team east13"><a href="#" target="_blank"><img src="Images/Heat.png" width="" height=""  alt=""/> MIA</a></div>
                      <div className="team east14"><a href="#" target="_blank"><img src="Images/Celtics.png" width="" height=""  alt=""/> BOS</a></div>
                      <p><a href="#" target="_blank"> MIA 3:4 BOS</a></p>
                  </div>
                  <div className="round9">
                      <img width="" height="" alt="" />
                      <div className="team east9"><a href="#" target="_blank"><img src="Images/Heat.png" width="" height=""  alt=""/> MIA</a></div>
                      <div className="team east10"><a href="#" target="_blank"><img src="Images/76ers.png" width="" height=""  alt=""/> PHI</a></div>
                      <p><a href="#" target="_blank"> MIA 4:2 PHI</a></p>
                       {/*添加连接线条*/}
                      <div className="connector-middle-3" style={{top: "80px", left: "-15%"}}></div>
                      <div className="vertical-middle-3" style={{top: "80px", left: "calc(-15%)"}}></div>

                  </div>
                  <div className="round10">
                      <img width="" height="" alt="" />
                      <div className="team east11"><a href="#" target="_blank"><img src="Images/Bucks.png" width="" height=""  alt=""/> MIL</a></div>
                      <div className="team east12"><a href="#" target="_blank"><img src="Images/Celtics.png" width="" height=""  alt=""/> BOS</a></div>
                      <p><a href="#" target="_blank"> MIL 3:4 BOS</a></p>
                       {/*添加连接线条*/}
                      <div className="connector-middle-4" style={{top: "70px", left: "-15%"}}></div>
                      <div className="vertical-middle-4" style={{top: "-25px", left: "calc(-15%)"}}></div>
                  </div>
                  <div className="round11">
                      <img width="" height="" alt="" />
                      <div className="team east1"><a href="#" target="_blank"><img src="Images/Heat.png" width="" height=""  alt=""/> MIA</a></div>
                      <div className="team east2"><a href="#" target="_blank"><img src="Images/Hawks.png" width="" height=""  alt=""/> ATL</a></div>
                      <p><a href="#" target="_blank"> MIA 4:1 ATL</a></p>
                       {/*添加连接线条*/}
                      <div className="connector-right-1" style={{top: "75px", left: "-10%"}}></div>
                      <div className="vertical-right-1" style={{top: "75px", left: "calc(-10%)"}}></div>
                      <div className="connector-right-2" style={{top: "235px", left: "-10%"}}> </div>
                      <div className="vertical-right-2" style={{top: "157px", left: "calc(-10%)"}}> </div>
                      <div className="connector-right-3" style={{top: "155px", left: "-17.5%"}}></div>
                  </div>
                  <div className="round12">
                      <img width="" height="" alt=""/>
                      <div className="team east3"><a href="#" target="_blank"><img src="Images/76ers.png" width="" height="" alt=""/> PHI</a></div>
                      <div className="team east4"><a href="#" target="_blank"><img src="Images/Raptors.png" width="" height=""  alt=""/> TOR</a></div>
                      <p><a href="#" target="_blank"> PHI 4:2 TOR</a></p>
                  </div>
                  <div className="round13">
                      <img width="" height="" alt=""/>
                      <div className="team east5"><a href="#" target="_blank"><img src="Images/Bucks.png" width="" height=""  alt=""/> MIL</a></div>
                      <div className="team east6"><a href="#" target="_blank"><img src="Images/Bulls.png" width="" height=""  alt=""/> CHI</a></div>
                      <p><a href="#" target="_blank"> MIL 4:1 CHI</a></p>
                       {/*添加连接线条*/}
                      <div className="connector-right-4" style={{top: "75px", left: "-10%"}}></div>
                      <div className="vertical-right-3" style={{top: "75px", left: "calc(-10%)"}}></div>
                      <div className="connector-right-5" style={{top: "235px", left: "-10%"}}></div>
                      <div className="vertical-right-4" style={{top: "157px", left: "calc(-10%)"}}></div>
                      <div className="connector-right-6" style={{top: "155px", left: "-17.5%"}}></div>
                  </div>
                  <div className="round14">
                      <img width="" height="" alt=""/>
                      <div className="team east7"><a href="#" target="_blank"><img src="Images/Celtics.png" width="" height=""  alt=""/> BOS</a></div>
                      <div className="team east8"><a href="#" target="_blank"><img src="Images/Nets.png" width="" height=""  alt=""/> BKN</a></div>
                      <p><a href="#" target="_blank"> BOS 4:0 BKN</a></p>
                  </div>
                  <div className="round15">
                      <img width="" height="" alt=""/>
                      <div className="team runner-up"><a href="#" target="_blank"><img src="Images/Celtics.png" width="" height=""  alt=""/> BOS</a></div>
                      <div className="team champion"><a href="#" target="_blank"><img src="Images/Warriors.png" width="" height=""  alt=""/> GSW</a></div>
                      <p><a href="#" target="_blank"> BOS 2:4 GSW</a></p>
                      {/*添加连接线条*/}
                      <div className="connector-final-left" style={{top: "180px", left: "-13%"}}></div>
                      <div className="connector-final-right" style={{top: "180px", left: "48%"}}></div>
                      <div className="vertical-final" style={{top: "154px", left: "calc(100% + -65px)"}}></div>
                  </div>
              </div>
          </div>
          </>
  );
}

export default App;

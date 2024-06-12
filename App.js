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
                          <div className="flex justify-between"><span>4-18</span><span>110-99</span></div>
                          <div className="flex justify-between"><span>4-20</span><span>114-125</span></div>
                          <div className="flex justify-between"><span>4-23</span><span>114-111</span></div>
                          <div className="flex justify-between"><span>4-25</span><span>103-118</span></div>
                          <div className="flex justify-between"><span>4-27</span><span>112-97</span></div>
                          <div className="flex justify-between"><span>4-29</span><span>115-109</span></div>
                      </div>
                          {/*添加连接线条*/}
                      <div className="connector-left-1" style={{top: "75px", left: "100%"}}></div>
                      <div className="vertical-left-1" style={{top: "75px", left: "calc(100% + 11px)"}}></div>
                      <div className="connector-left-2" style={{top: "235px", left: "100%"}}></div>
                      <div className="vertical-left-2" style={{top: "157px", left: "calc(100% + 11px)"}}></div>
                      <div className="connector-left-3" style={{top: "155px", left: "108.5%"}}></div>
                  </div>

                  <div className="round2" onMouseEnter={() => handleMouseEnter("round2")} onMouseLeave={() => handleMouseLeave("round2")}>
                      <img width="" height="" alt="" className={`${hoveredDivs["round2"] ? 'bg-zinc-500' : ''}`}/>
                      <div className={`${hoveredDivs["round2"] ? 'hidden' : 'block'}`}>
                          <div className="team west3"><a href="#" target="_blank"><img src="Images/Mavericks.png" width="" height=""  alt=""/> DAL</a></div>
                          <div className="team west4"><a href="#" target="_blank"><img src="Images/Jazz.png" width="" height=""  alt=""/> UTA</a></div>
                          <p><a href="#" target="_blank"> DAL 4:2 UTA</a></p>
                      </div>
                      <div className={`${hoveredDivs["round2"] ? 'block' : 'hidden'} absolute top-0 left-0 w-[130px] text-[10px] flex flex-col p-4 text-white `}>
                          <span className="font-bold">MAVERICKS VS JAZZ </span>
                          <div className="flex justify-between"><span>4-17</span><span>93-99</span></div>
                          <div className="flex justify-between"><span>4-19</span><span>110-104</span></div>
                          <div className="flex justify-between"><span>4-22</span><span>126-118</span></div>
                          <div className="flex justify-between"><span>4-24</span><span>99-100</span></div>
                          <div className="flex justify-between"><span>4-26</span><span>102-77</span></div>
                          <div className="flex justify-between"><span>4-29</span><span>98-96</span></div>
                      </div>
                  </div>

                  <div className="round3" onMouseEnter={() => handleMouseEnter("round3")} onMouseLeave={() => handleMouseLeave("round3")}>
                      <img width="" height="" alt="" className={`${hoveredDivs["round3"] ? 'bg-zinc-500' : ''}`}/>
                      <div className={`${hoveredDivs["round3"] ? 'hidden' : 'block'}`}>
                          <div className="team west5"><a href="#" target="_blank"><img src="Images/Warriors.png" width="" height=""  alt=""/> GSW</a></div>
                          <div className="team west6"><a href="#" target="_blank"><img src="Images/Nuggets.png" width="" height=""  alt=""/> DEN</a></div>
                          <p><a href="#" target="_blank"> GSW 4:1 DEN</a></p>
                      </div>
                      <div className={`${hoveredDivs["round3"] ? 'block' : 'hidden'} absolute top-0 left-0 w-[130px] text-[10px] flex flex-col p-4 text-white `}>
                          <span className="font-bold">WARRIORS VS NUGGETS </span>
                          <div className="flex justify-between"><span>4-17</span><span>123-107</span></div>
                          <div className="flex justify-between"><span>4-19</span><span>126-106</span></div>
                          <div className="flex justify-between"><span>4-22</span><span>118-113</span></div>
                          <div className="flex justify-between"><span>4-25</span><span>121-126</span></div>
                          <div className="flex justify-between"><span>4-28</span><span>102-98</span></div>
                      </div>
                       {/*添加连接线条*/}
                      <div className="connector-left-4" style={{top: "75px", left: "100%"}}></div>
                      <div className="vertical-left-3" style={{top: "75px", left: "calc(100% + 11px)"}}></div>
                      <div className="connector-left-5" style={{top: "235px", left: "100%"}}></div>
                      <div className="vertical-left-4" style={{top: "157px", left: "calc(100% + 11px)"}}></div>
                      <div className="connector-left-6" style={{top: "155px", left: "108.5%"}}></div>
                  </div>

                  <div className="round4" onMouseEnter={() => handleMouseEnter("round4")} onMouseLeave={() => handleMouseLeave("round4")}>
                      <img width="" height="" alt="" className={`${hoveredDivs["round4"] ? 'bg-zinc-500' : ''}`}/>
                      <div className={`${hoveredDivs["round4"] ? 'hidden' : 'block'}`}>
                          <div className="team west7"><a href="#" target="_blank"><img src="Images/Grizzlies.png" width="" height=""  alt=""/> MEM</a></div>
                          <div className="team west8"><a href="#" target="_blank"><img src="Images/Timberwolves.png" width="" height=""  alt=""/> MSP</a></div>
                          <p><a href="#" target="_blank"> MEM 4:2 MSP</a></p>
                      </div>
                      <div className={`${hoveredDivs["round4"] ? 'block' : 'hidden'} absolute top-0 left-0 w-[130px] text-[10px] flex flex-col p-4 text-white `}>
                          <span className="font-bold">GRIZZLIES VS TIMBERWOLVES </span>
                          <div className="flex justify-between"><span>4-17</span><span>117-130</span></div>
                          <div className="flex justify-between"><span>4-20</span><span>124-96</span></div>
                          <div className="flex justify-between"><span>4-22</span><span>104-95</span></div>
                          <div className="flex justify-between"><span>4-24</span><span>118-119</span></div>
                          <div className="flex justify-between"><span>4-27</span><span>111-109</span></div>
                          <div className="flex justify-between"><span>4-30</span><span>114-106</span></div>
                      </div>
                  </div>

                  <div className="round5" onMouseEnter={() => handleMouseEnter("round5")} onMouseLeave={() => handleMouseLeave("round5")}>
                      <img width="" height="" alt="" className={`${hoveredDivs["round5"] ? 'bg-zinc-500' : ''}`} />
                      <div className={`${hoveredDivs["round5"] ? 'hidden' : 'block'}`}>
                          <div className="team west9"><a href="#" target="_blank"><img src="Images/Suns.png" width="" height=""  alt=""/> PHX</a></div>
                          <div className="team west10"><a href="#" target="_blank"><img src="Images/Mavericks.png" width="" height=""  alt=""/> DAL</a></div>
                          <p><a href="#" target="_blank"> PHX 3:4 DAL</a></p>
                      </div>
                      <div className={`${hoveredDivs["round5"] ? 'block' : 'hidden'} absolute top-0 left-0 w-[130px] text-[10px] flex flex-col p-4 text-white`}>
                          <span className="font-bold">SUNS VS MAVERICKS </span>
                          <div className="flex justify-between"><span>5-03</span><span>121-114</span></div>
                          <div className="flex justify-between"><span>5-05</span><span>129-109</span></div>
                          <div className="flex justify-between"><span>5-07</span><span>94-103</span></div>
                          <div className="flex justify-between"><span>5-09</span><span>101-111</span></div>
                          <div className="flex justify-between"><span>5-11</span><span>110-80</span></div>
                          <div className="flex justify-between"><span>5-13</span><span>86-113</span></div>
                          <div className="flex justify-between"><span>5-16</span><span>90-123</span></div>
                      </div>
                       {/*添加连接线条*/}
                      <div className="connector-middle-1" style={{top: "80px", left: "100%"}}></div>
                      <div className="vertical-middle-1" style={{top: "80px", left: "calc(100% + 20px)"}}></div>
                  </div>

                  <div className="round6" onMouseEnter={() => handleMouseEnter("round6")} onMouseLeave={() => handleMouseLeave("round6")}>
                      <img width="" height="" alt="" className={`${hoveredDivs["round6"] ? 'bg-zinc-500' : ''}`} />
                      <div className={`${hoveredDivs["round6"] ? 'hidden' : 'block'}`}>
                          <div className="team west11"><a href="#" target="_blank"><img src="Images/Warriors.png" width="" height=""  alt=""/> GSW</a></div>
                          <div className="team west12"><a href="#" target="_blank"><img src="Images/Grizzlies.png" width="" height=""  alt=""/> MEM</a></div>
                          <p><a href="#" target="_blank"> GSW 4:2 MEM</a></p>
                      </div>
                      <div className={`${hoveredDivs["round6"] ? 'block' : 'hidden'} absolute top-0 left-0 w-[130px] text-[10px] flex flex-col p-4 text-white `}>
                          <span className="font-bold">WARRIORS VS GRIZZLIES </span>
                          <div className="flex justify-between"><span>5-02</span><span>116-117</span></div>
                          <div className="flex justify-between"><span>5-04</span><span>106-101</span></div>
                          <div className="flex justify-between"><span>5-08</span><span>112-142</span></div>
                          <div className="flex justify-between"><span>5-10</span><span>98-101</span></div>
                          <div className="flex justify-between"><span>5-12</span><span>134-95</span></div>
                          <div className="flex justify-between"><span>5-14</span><span>96-110</span></div>
                      </div>
                       {/*添加连接线条*/}
                      <div className="connector-middle-2" style={{top: "70px", left: "100%"}}></div>
                      <div className="vertical-middle-2" style={{top: "-25px", left: "calc(100% + 20px)"}}></div>
                  </div>

                  <div className="round7" onMouseEnter={() => handleMouseEnter("round7")} onMouseLeave={() => handleMouseLeave("round7")}>
                      <img width="" height="" alt="" className={`${hoveredDivs["round7"] ? 'bg-zinc-500' : ''}`} />
                      <div className={`${hoveredDivs["round7"] ? 'hidden' : 'block'}`}>
                          <div className="team west13"><a href="#" target="_blank"><img src="Images/Mavericks.png" width="" height=""  alt=""/> DAL</a></div>
                          <div className="team west14"><a href="#" target="_blank"><img src="Images/Warriors.png" width="" height=""  alt=""/> GSW</a></div>
                          <p><a href="#" target="_blank"> DAL 1: 4 GSW</a></p>
                      </div>
                      <div className={`${hoveredDivs["round7"] ? 'block' : 'hidden'} absolute top-0 left-0 w-[130px] text-[10px] flex flex-col p-4 text-white `}>
                          <span className="font-bold">MAVERICKS VS WARRIORS </span>
                          <div className="flex justify-between"><span>5-19</span><span>87-112</span></div>
                          <div className="flex justify-between"><span>5-21</span><span>117-126</span></div>
                          <div className="flex justify-between"><span>5-23</span><span>100-109</span></div>
                          <div className="flex justify-between"><span>5-25</span><span>119-109</span></div>
                          <div className="flex justify-between"><span>5-27</span><span>110-120</span></div>
                      </div>
                  </div>

                  <div className="round8" onMouseEnter={() => handleMouseEnter("round8")} onMouseLeave={() => handleMouseLeave("round8")}>
                      <img width="" height="" alt="" className={`${hoveredDivs["round8"] ? 'bg-zinc-500' : ''}`} />
                      <div className={`${hoveredDivs["round8"] ? 'hidden' : 'block'}`}>
                          <div className="team east13"><a href="#" target="_blank"><img src="Images/Heat.png" width="" height=""  alt=""/> MIA</a></div>
                          <div className="team east14"><a href="#" target="_blank"><img src="Images/Celtics.png" width="" height=""  alt=""/> BOS</a></div>
                          <p><a href="#" target="_blank"> MIA 3:4 BOS</a></p>
                      </div>
                      <div className={`${hoveredDivs["round8"] ? 'block' : 'hidden'} absolute top-0 left-0 w-[130px] text-[10px] flex flex-col p-4 text-white `}>
                          <span className="font-bold">HEAT VS CELTICS </span>
                          <div className="flex justify-between"><span>5-18</span><span>118-107</span></div>
                          <div className="flex justify-between"><span>5-20</span><span>102-127</span></div>
                          <div className="flex justify-between"><span>5-22</span><span>109-103</span></div>
                          <div className="flex justify-between"><span>5-24</span><span>82-102</span></div>
                          <div className="flex justify-between"><span>5-26</span><span>80-93</span></div>
                          <div className="flex justify-between"><span>5-28</span><span>111-103</span></div>
                          <div className="flex justify-between"><span>5-30</span><span>96-100</span></div>
                      </div>
                  </div>

                  <div className="round9" onMouseEnter={() => handleMouseEnter("round9")} onMouseLeave={() => handleMouseLeave("round9")}>
                      <img width="" height="" alt="" className={`${hoveredDivs["round9"] ? 'bg-zinc-500' : ''}`}/>
                      <div className={`${hoveredDivs["round9"] ? 'hidden' : 'block'}`}>
                          <div className="team east9"><a href="#" target="_blank"><img src="Images/Heat.png" width="" height=""  alt=""/> MIA</a></div>
                          <div className="team east10"><a href="#" target="_blank"><img src="Images/76ers.png" width="" height=""  alt=""/> PHI</a></div>
                          <p><a href="#" target="_blank"> MIA 4:2 PHI</a></p>
                      </div>
                      <div className={`${hoveredDivs["round9"] ? 'block' : 'hidden'} absolute top-0 left-0 w-[130px] text-[10px] flex flex-col p-4 text-white `}>
                          <span className="font-bold">HEAT VS 76ERS</span>
                          <div className="flex justify-between"><span>5-03</span><span>106-92</span></div>
                          <div className="flex justify-between"><span>5-05</span><span>119-103</span></div>
                          <div className="flex justify-between"><span>5-07</span><span>79-99</span></div>
                          <div className="flex justify-between"><span>5-09</span><span>108-116</span></div>
                          <div className="flex justify-between"><span>5-11</span><span>120-85</span></div>
                          <div className="flex justify-between"><span>5-13</span><span>99-90</span></div>
                      </div>
                       {/*添加连接线条*/}
                      <div className="connector-middle-3" style={{top: "80px", left: "-15%"}}></div>
                      <div className="vertical-middle-3" style={{top: "80px", left: "calc(-15%)"}}></div>
                  </div>

                  <div className="round10" onMouseEnter={() => handleMouseEnter("round10")} onMouseLeave={() => handleMouseLeave("round10")}>
                      <img width="" height="" alt="" className={`${hoveredDivs["round10"] ? 'bg-zinc-500' : ''}`}/>
                      <div className={`${hoveredDivs["round10"] ? 'hidden' : 'block'}`}>
                          <div className="team east11"><a href="#" target="_blank"><img src="Images/Bucks.png" width="" height=""  alt=""/> MIL</a></div>
                          <div className="team east12"><a href="#" target="_blank"><img src="Images/Celtics.png" width="" height=""  alt=""/> BOS</a></div>
                          <p><a href="#" target="_blank"> MIL 3:4 BOS</a></p>
                      </div>
                      <div className={`${hoveredDivs["round10"] ? 'block' : 'hidden'} absolute top-0 left-0 w-[130px] text-[10px] flex flex-col p-4 text-white `}>
                          <span className="font-bold">BUCKS VS CELTICS</span>
                          <div className="flex justify-between"><span>5-02</span><span>89-101</span></div>
                          <div className="flex justify-between"><span>5-04</span><span>109-86</span></div>
                          <div className="flex justify-between"><span>5-08</span><span>101-103</span></div>
                          <div className="flex justify-between"><span>5-10</span><span>116-108</span></div>
                          <div className="flex justify-between"><span>5-12</span><span>107-110</span></div>
                          <div className="flex justify-between"><span>5-14</span><span>108-95</span></div>
                          <div className="flex justify-between"><span>5-16</span><span>109-81</span></div>
                      </div>
                       {/*添加连接线条*/}
                      <div className="connector-middle-4" style={{top: "70px", left: "-15%"}}></div>
                      <div className="vertical-middle-4" style={{top: "-25px", left: "calc(-15%)"}}></div>
                  </div>

                  <div className="round11" onMouseEnter={() => handleMouseEnter("round11")} onMouseLeave={() => handleMouseLeave("round11")}>
                      <img width="" height="" alt="" className={`${hoveredDivs["round11"] ? 'bg-zinc-500' : ''}`} />
                      <div className={`${hoveredDivs["round11"] ? 'hidden' : 'block'}`}>
                          <div className="team east1"><a href="#" target="_blank"><img src="Images/Heat.png" width="" height=""  alt=""/> MIA</a></div>
                          <div className="team east2"><a href="#" target="_blank"><img src="Images/Hawks.png" width="" height=""  alt=""/> ATL</a></div>
                          <p><a href="#" target="_blank"> MIA 4:1 ATL</a></p>
                      </div>
                      <div className={`${hoveredDivs["round11"] ? 'block' : 'hidden'} absolute top-0 left-0 w-[130px] text-[10px] flex flex-col p-4 text-white `}>
                          <span className="font-bold">HEAT VS HAWKS</span>
                          <div className="flex justify-between"><span>4-18</span><span>115-91</span></div>
                          <div className="flex justify-between"><span>4-20</span><span>115-105</span></div>
                          <div className="flex justify-between"><span>4-23</span><span>110-111</span></div>
                          <div className="flex justify-between"><span>4-25</span><span>110-86</span></div>
                          <div className="flex justify-between"><span>4-27</span><span>97-94</span></div>
                      </div>
                       {/*添加连接线条*/}
                      <div className="connector-right-1" style={{top: "75px", left: "-10%"}}></div>
                      <div className="vertical-right-1" style={{top: "75px", left: "calc(-10%)"}}></div>
                      <div className="connector-right-2" style={{top: "235px", left: "-10%"}}> </div>
                      <div className="vertical-right-2" style={{top: "157px", left: "calc(-10%)"}}> </div>
                      <div className="connector-right-3" style={{top: "155px", left: "-17.5%"}}></div>
                  </div>

                  <div className="round12" onMouseEnter={() => handleMouseEnter("round12")} onMouseLeave={() => handleMouseLeave("round12")}>
                      <img width="" height="" alt="" className={`${hoveredDivs["round12"] ? 'bg-zinc-500' : ''}`}/>
                      <div className={`${hoveredDivs["round12"] ? 'hidden' : 'block'}`}>
                          <div className="team east3"><a href="#" target="_blank"><img src="Images/76ers.png" width="" height="" alt=""/> PHI</a></div>
                          <div className="team east4"><a href="#" target="_blank"><img src="Images/Raptors.png" width="" height=""  alt=""/> TOR</a></div>
                          <p><a href="#" target="_blank"> PHI 4:2 TOR</a></p>
                      </div>
                      <div className={`${hoveredDivs["round12"] ? 'block' : 'hidden'} absolute top-0 left-0 w-[130px] text-[10px] flex flex-col p-4 text-white `}>
                          <span className="font-bold">76ERS VS RAPTORS</span>
                          <div className="flex justify-between"><span>4-17</span><span>131-111</span></div>
                          <div className="flex justify-between"><span>4-19</span><span>112-97</span></div>
                          <div className="flex justify-between"><span>4-21</span><span>104-101</span></div>
                          <div className="flex justify-between"><span>4-24</span><span>102-110</span></div>
                          <div className="flex justify-between"><span>4-26</span><span>88-103</span></div>
                          <div className="flex justify-between"><span>4-29</span><span>132-97</span></div>
                      </div>
                  </div>

                  <div className="round13" onMouseEnter={() => handleMouseEnter("round13")} onMouseLeave={() => handleMouseLeave("round13")}>
                      <img width="" height="" alt="" className={`${hoveredDivs["round13"] ? 'bg-zinc-500' : ''}`}/>
                      <div className={`${hoveredDivs["round13"] ? 'hidden' : 'block'}`}>
                          <div className="team east5"><a href="#" target="_blank"><img src="Images/Bucks.png" width="" height=""  alt=""/> MIL</a></div>
                          <div className="team east6"><a href="#" target="_blank"><img src="Images/Bulls.png" width="" height=""  alt=""/> CHI</a></div>
                          <p><a href="#" target="_blank"> MIL 4:1 CHI</a></p>
                      </div>
                      <div className={`${hoveredDivs["round13"] ? 'block' : 'hidden'} absolute top-0 left-0 w-[130px] text-[10px] flex flex-col p-4 text-white `}>
                          <span className="font-bold">BUCKS VS BULLS</span>
                          <div className="flex justify-between"><span>4-18</span><span>93-86</span></div>
                          <div className="flex justify-between"><span>4-21</span><span>110-114</span></div>
                          <div className="flex justify-between"><span>4-23</span><span>111-81</span></div>
                          <div className="flex justify-between"><span>4-25</span><span>119-95</span></div>
                          <div className="flex justify-between"><span>4-28</span><span>116-100</span></div>
                      </div>
                       {/*添加连接线条*/}
                      <div className="connector-right-4" style={{top: "75px", left: "-10%"}}></div>
                      <div className="vertical-right-3" style={{top: "75px", left: "calc(-10%)"}}></div>
                      <div className="connector-right-5" style={{top: "235px", left: "-10%"}}></div>
                      <div className="vertical-right-4" style={{top: "157px", left: "calc(-10%)"}}></div>
                      <div className="connector-right-6" style={{top: "155px", left: "-17.5%"}}></div>
                  </div>

                  <div className="round14" onMouseEnter={() => handleMouseEnter("round14")} onMouseLeave={() => handleMouseLeave("round14")}>
                      <img width="" height="" alt="" className={`${hoveredDivs["round14"] ? 'bg-zinc-500' : ''}`}/>
                      <div className={`${hoveredDivs["round14"] ? 'hidden' : 'block'}`}>
                          <div className="team east7"><a href="#" target="_blank"><img src="Images/Celtics.png" width="" height=""  alt=""/> BOS</a></div>
                          <div className="team east8"><a href="#" target="_blank"><img src="Images/Nets.png" width="" height=""  alt=""/> BKN</a></div>
                          <p><a href="#" target="_blank"> BOS 4:0 BKN</a></p>
                      </div>
                      <div className={`${hoveredDivs["round14"] ? 'block' : 'hidden'} absolute top-0 left-0 w-[130px] text-[10px] flex flex-col p-4 text-white `}>
                          <span className="font-bold">CELTICS VS NETS</span>
                          <div className="flex justify-between"><span>4-18</span><span>115-114</span></div>
                          <div className="flex justify-between"><span>4-21</span><span>114-107</span></div>
                          <div className="flex justify-between"><span>4-24</span><span>109-103</span></div>
                          <div className="flex justify-between"><span>4-26</span><span>116-112</span></div>
                      </div>
                  </div>

                  <div className="round15" onMouseEnter={() => handleMouseEnter("round15")} onMouseLeave={() => handleMouseLeave("round15")}>
                      <img width="" height="" alt="" className={`${hoveredDivs["round15"] ? 'bg-zinc-500' : ''}`}/>
                      <div className={`${hoveredDivs["round15"] ? 'hidden' : 'block'}`}>
                          <div className="team runner-up"><a href="#" target="_blank"><img src="Images/Celtics.png" width="" height=""  alt=""/> BOS</a></div>
                          <div className="team champion"><a href="#" target="_blank"><img src="Images/Warriors.png" width="" height=""  alt=""/> GSW</a></div>
                          <p><a href="#" target="_blank"> BOS 2:4 GSW</a></p>
                      </div>
                      <div className={`${hoveredDivs["round15"] ? 'block' : 'hidden'} absolute top-0 left-0 w-[130px] text-[10px] flex flex-col p-4 text-white `}>
                          <span className="font-bold">CELTICS VS WARRIORS</span>
                          <div className="flex justify-between"><span>6-03</span><span>108-120</span></div>
                          <div className="flex justify-between"><span>6-06</span><span>107-88</span></div>
                          <div className="flex justify-between"><span>6-09</span><span>100-116</span></div>
                          <div className="flex justify-between"><span>6-11</span><span>107-97</span></div>
                          <div className="flex justify-between"><span>6-14</span><span>104-94</span></div>
                          <div className="flex justify-between"><span>6-17</span><span>130-90</span></div>
                      </div>
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

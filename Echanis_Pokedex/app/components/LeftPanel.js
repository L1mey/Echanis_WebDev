export default function LeftPanel({ spriteSrc, loading, pokeName }) {
  return (
    <div id="left-panel" className="box-border h-full w-1/2 grid border-[3px] border-black border-r-0 rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[7px] bg-pokeRed"
      style={{ gridTemplateRows: "23% 50% 27%" }}>

      {/* Top Lights */}
      <div className="relative flex justify-start items-center">
        <svg height="100" width="225" className="absolute z-10">
          <polyline points="0,75 70,75 90,38 224,38" style={{ fill: "none", stroke: "black", strokeWidth: 3 }} />
        </svg>
        <div className="flex justify-start items-center">
          <div className="flex justify-center items-center ml-[5px] w-[60px] h-[60px] border border-black rounded-full bg-white">
            <div className="w-[50px] h-[50px] rounded-full border border-black bg-[#3298cb]">
              <div className="w-[15px] h-[15px] relative top-[7px] left-[10px] rounded-full bg-[#85bdfe]"></div>
            </div>
          </div>
          <div className="ml-[15px] mt-[10px] w-[70px] flex self-start justify-around">
            <div className="border border-black w-4 h-4 rounded-full bg-[#ff0000]">
              <div className="w-[5px] h-[5px] relative top-[3px] left-[3px] rounded-full bg-[#fe98cb]"></div>
            </div>
            <div className="border border-black w-4 h-4 rounded-full bg-[#fecb65]">
              <div className="w-[5px] h-[5px] relative top-[3px] left-[3px] rounded-full bg-[#fefecb]"></div>
            </div>
            <div className="border border-black w-4 h-4 rounded-full bg-[#32cb65]">
              <div className="w-[5px] h-[5px] relative top-[3px] left-[3px] rounded-full bg-[#98fe00]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Center Screen */}
      <div className="flex justify-center items-center">
        <div className="w-[150px] h-[150px] border border-black bg-white grid"
          style={{ borderRadius: "0 0 0 17%", gridTemplateRows: "10% 72% 18%" }}>
          <div className="w-1/2 mt-[2px] flex justify-self-center justify-center items-center gap-[7px]">
            <div className="border border-black w-[5px] h-[5px] rounded-full bg-red-600"></div>
            <div className="border border-black w-[5px] h-[5px] rounded-full bg-red-600"></div>
          </div>
          <div id="main-screen"
            className={`h-full w-4/5 justify-self-center bg-pokeScreen border-2 border-black rounded-[5%] ${loading ? "animate-pulse" : ""}`}
            style={spriteSrc && !loading ? { backgroundImage: `url(${spriteSrc})` } : {}}
          ></div>
          <div className="flex mt-[5px] w-3/4 justify-self-center justify-between items-center">
            <div className="border-2 border-black w-3 h-3 rounded-full bg-red-600 relative">
              <div className="w-1 h-1 absolute top-[2.5px] left-[2px] rounded-full bg-[#fe98cb]"></div>
            </div>
            <div className="flex flex-col gap-[2px]">
              <div className="w-[18px] h-[2px] bg-black"></div>
              <div className="w-[18px] h-[2px] bg-black"></div>
              <div className="w-[18px] h-[2px] bg-black"></div>
              <div className="w-[18px] h-[2px] bg-black"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="grid" style={{ gridTemplateRows: "40% 60%" }}>
        <div className="flex items-start justify-start">
          <div className="w-[25px] h-[25px] rounded-full border-2 border-black bg-pokeBtn ml-[7px]"></div>
          <div className="flex w-[100px] justify-around ml-[7px]">
            <div className="w-[35px] h-[2px] rounded-[50px] border-2 border-black bg-[#ff0000]"></div>
            <div className="w-[35px] h-[2px] rounded-[50px] border-2 border-black bg-[#85bdfe]"></div>
          </div>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "27% 35% 38%" }}>
          <div className="flex justify-self-center justify-between text-xl h-full w-1/2">
            <div>.</div><div>.</div>
          </div>
          <div className="w-[80px] h-[30px] rounded-[5px] border-2 border-black bg-[#3ab47d] flex justify-center items-center">
            <span className="font-pixel w-full text-center" style={{ fontSize: "8.5px" }}>{pokeName}</span>
          </div>
          <div className="relative top-[-30px] flex flex-col justify-center items-center">
            <div className="w-[52px] h-[52px] flex justify-center items-center relative">
              <div className="absolute z-10 w-[5px] h-[5px] rounded-full border-2 border-black"></div>
              <div className="absolute rotate-90 bg-pokeBtn rounded-[5px] h-3 w-[52px] border-2 border-black"></div>
              <div className="absolute bg-pokeBtn rounded-[5px] h-3 w-[52px] border-2 border-black"></div>
            </div>
            <div className="flex justify-center items-center text-center">
              <div className="border-2 border-black w-[7px] h-[7px] rounded-full mr-[3px] mt-[10px] bg-red-600 relative">
                <div className="w-[2.5px] h-[2.5px] absolute top-[1.5px] left-[1.5px] rounded-full bg-[#fe98cb]"></div>
              </div>
              <div className="flex items-center justify-center text-xl">
                <div>.</div><div>.</div><div>.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
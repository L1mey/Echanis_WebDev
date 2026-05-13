export default function RightPanel({ pokeAbout, pokeType, pokeId }) {
  return (
    <div id="right-panel" className="box-border relative h-full w-1/2 grid border-b-[3px] border-black rounded-br-[10px] bg-pokeRed"
      style={{ gridTemplateRows: "24% repeat(4, 19%)" }}>

      {/* Top shape */}
      <div>
        <svg height="100%" width="100%">
          <polyline points="0,0 0,40 138,40 158,75 250,75 250,0 0,0" style={{ fill: "#f2f2f2", stroke: "none" }} />
          <polyline points="0,40 138,40 158,75 250,75" style={{ fill: "none", stroke: "black", strokeWidth: 3 }} />
        </svg>
      </div>

      {/* About — Height & Weight */}
      <div className="flex justify-center items-center">
        <div className="font-pixel w-[146px] h-[64px] bg-pokeGray border-2 border-black rounded-[4px] flex items-center justify-start pl-2 leading-loose"
          style={{ fontSize: "xx-small" }}>
          {pokeAbout}
        </div>
      </div>

      {/* Blue squares */}
      <div className="flex justify-center items-center">
        <div className="w-[146px] h-[60px] grid gap-[2px]"
          style={{ gridTemplateColumns: "repeat(5,1fr)", gridTemplateRows: "repeat(2,1fr)" }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="rounded-[2px] border border-black bg-pokeBlue" style={{ boxShadow: "inset -2px -2px #3298cb" }}></div>
          ))}
        </div>
      </div>

      {/* Center buttons */}
      <div className="flex justify-around items-center">
        <div className="grid gap-1">
          <div className="flex items-center">
            <div className="border-2 border-black w-[7px] h-[7px] rounded-full mr-[10px] mt-[10px] bg-red-600 relative">
              <div className="w-[2.5px] h-[2.5px] absolute top-[1px] left-[1px] rounded-full bg-[#fe98cb]"></div>
            </div>
            <div className="border-2 border-black w-[7px] h-[7px] rounded-full mr-[10px] mt-[10px] bg-red-600 relative">
              <div className="w-[2.5px] h-[2.5px] absolute top-[1px] left-[1px] rounded-full bg-[#fe98cb]"></div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[25px] h-[25px] rounded-[5px] border-2 border-black bg-white" style={{ boxShadow: "inset -2px -2px gray" }}></div>
            <div className="w-[25px] h-[25px] rounded-[5px] border-2 border-black bg-white" style={{ boxShadow: "inset -2px -2px gray" }}></div>
          </div>
        </div>
        <div className="grid gap-1">
          <div className="flex gap-[10px]">
            <div className="w-[35px] h-[2px] border-2 border-black bg-pokeBtn"></div>
            <div className="w-[35px] h-[2px] border-2 border-black bg-pokeBtn"></div>
          </div>
          <div className="justify-self-end w-[25px] h-[25px] rounded-full border-2 border-black ml-[7px] bg-[#fecb65] relative">
            <div className="w-[7px] h-[7px] absolute top-[3px] left-[5px] rounded-full bg-[#fefecb]"></div>
          </div>
        </div>
      </div>

      {/* Bottom screens — Type & ID */}
      <div className="flex justify-around items-center">
        <div className="font-pixel w-[64px] h-[25px] bg-pokeGray border-2 border-black rounded-[4px] flex items-center justify-center text-center"
          style={{ fontSize: "xx-small" }}>{pokeType}</div>
        <div className="font-pixel w-[64px] h-[25px] bg-pokeGray border-2 border-black rounded-[4px] flex items-center justify-center text-center"
          style={{ fontSize: "xx-small" }}>{pokeId}</div>
      </div>
    </div>
  );
}
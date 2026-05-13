export default function Pokeball({ onClick }) {
  return (
    <div className="ball-shake overflow-hidden w-[60px] h-[60px] border-2 border-black rounded-full relative" onClick={onClick}>
      <div className="absolute w-full top-0 h-[42%] bg-pokeRed"></div>
      <div className="absolute w-full bottom-0 h-[42%] bg-pokeBg"></div>
      <div className="absolute bg-white border-2 border-black rounded-full w-[20%] h-[20%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>
      <div className="bg-black h-full w-full"></div>
    </div>
  );
}
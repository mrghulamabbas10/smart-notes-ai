import FiltersIcon from "../assets/filters";

export default function RightSidebar() {
  return (
    <div className="hidden lg:flex fixed right-0 bottom-[76px] w-[88px] flex-col items-center pt-8 pb-8 z-30">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
          <button className="w-[43px] h-[43px] rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow mb-2">
            <FiltersIcon />
          </button>
          <span className="text-xs font-medium text-black text-center">
            Prefrences
          </span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <button className="w-[43px] h-[43px] rounded-full bg-[#A9E8FB] border border-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M5.6839 8.5555C6.4747 8.5555 7.2326 8.2201 7.7923 7.6235C8.3513 7.0268 8.6655 6.2173 8.6655 5.3732V2.6939C8.6655 1.5572 8.0971 0.5065 7.1744 -0.062C6.2523 -0.6304 5.1154 -0.6304 4.1934 -0.062C3.2707 0.5064 2.7022 1.5571 2.7022 2.6939V5.3738V5.3732C2.7022 6.2173 3.0165 7.0268 3.5755 7.6235C4.1351 8.2201 4.893 8.5555 5.6839 8.5555ZM3.6437 2.6939C3.6437 1.4912 4.557 0.5165 5.6839 0.5165C6.8108 0.5165 7.724 1.4912 7.724 2.6939V5.3738V5.3732C7.724 6.5759 6.8108 7.5506 5.6839 7.5506C4.557 7.5506 3.6437 6.5759 3.6437 5.3732V2.6939ZM9.6759 8.3344C9.5135 8.5894 9.3281 8.8268 9.1233 9.0447C8.3289 9.8989 7.278 10.4277 6.1546 10.5382V11.5701H6.939C7.1991 11.5701 7.4098 11.795 7.4098 12.0726C7.4098 12.3502 7.1991 12.575 6.939 12.575H4.4287C4.1686 12.575 3.958 12.3502 3.958 12.0726C3.958 11.795 4.1686 11.5701 4.4287 11.5701H5.2131V10.532C3.7944 10.3907 2.5062 9.5893 1.6919 8.3413C1.543 8.1115 1.596 7.7968 1.8113 7.6379C2.0261 7.4784 2.3209 7.5356 2.4704 7.7648C3.1324 8.7822 4.1833 9.4342 5.3397 9.544C6.4954 9.6539 7.6381 9.2111 8.4584 8.3344C8.6202 8.1617 8.7673 7.9733 8.8974 7.7716C8.9639 7.6536 9.0733 7.5694 9.1998 7.5393C9.3258 7.5098 9.4582 7.5368 9.5653 7.614C9.6724 7.6919 9.7447 7.8125 9.7659 7.9488C9.7865 8.085 9.7541 8.2245 9.6759 8.3344Z"
                fill="black"
              />
            </svg>
          </button>

          <div className="w-6 flex flex-col gap-[3px] ">
            {Array.from({ length: 30 }).map((_, i) => {
              const colors = [
                "#C6E4B8",
                "#C2E4BB",
                "#AFE0BB",
                "#B3E2B9",
                "#BADDD5",
                "#9FDBCB",
                "#97D3CA",
                "#89D1D4",
                "#82C6D6",
                "#74C5E7",
                "#6BC2E7",
                "#64A9CD",
                "#74D1E1",
                "#60C8DC",
                "#51C7D4",
                "#58D0D3",
                "#56D5CA",
                "#52DAC3",
                "#50D7B9",
                "#40E599",
                "#4DE3A3",
                "#55DCA7",
              ];
              return (
                <div
                  key={i}
                  className="w-6 h-0.5 rounded"
                  style={{ backgroundColor: colors[i] }}
                />
              );
            })}
          </div>

          <span className="text-xs font-medium text-black text-center mt-1">
            Mic Test
          </span>
        </div>
      </div>
    </div>
  );
}

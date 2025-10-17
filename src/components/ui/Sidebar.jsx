import { FiSearch } from "react-icons/fi";
import DeleteIcon from "../assets/delet";

export default function Sidebar({ isOpen, onClose }) {
  const encounters = [
    { name: "Ms. Child Female", time: "07:07 PM", count: 3, date: "Today" },
    { name: "Tahoora", time: "03:42 AM", date: "09/10/2025" },
    {
      name: "Ahmad",
      time: "02:17 AM",
      count: 4,
      date: "09/10/2025",
      hasReply: true,
    },
    { name: "Mati Ul Hassan", time: "07:05 PM", date: "08/10/2025" },
    { name: "M. Faizan", time: "07:07 PM", count: 3, date: "08/10/2025" },
    { name: "Noman Habib", time: "07:07 PM", count: 3, date: "08/10/2025" },
    { name: "Ms Rachel", time: "07:05 PM", date: "08/10/2025" },
    { name: "Fatima Tariq", time: "07:05 PM", date: "08/10/2025" },
  ];

  const groupedEncounters = encounters.reduce((acc, e) => {
    if (!acc[e.date]) acc[e.date] = [];
    acc[e.date].push(e);
    return acc;
  }, {});

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 bottom-0 left-0 w-[300px] z-40 flex-col transition-transform duration-300 ease-in-out
       ${
         isOpen
           ? "flex translate-x-5 mt-2 rounded-2xl bg-white pt-4 pb-6 h-[85%]"
           : "hidden -translate-x-full pt-8 pb-6"
       } 
        lg:translate-x-0 lg:flex`}
      >
        <div className="px-7">
          <h1 className="text-base font-bold leading-4 text-black mb-8 lg:block hidden">
            SMART
            <br />
            NOTES AI
          </h1>

          <div className="flex items-center gap-2 mb-5">
            <button className="w-[201px] h-[49px] rounded-[25px] bg-primary text-white text-[13px] font-medium hover:bg-primary/90 transition-colors">
              + New Encounter
            </button>

            <button className="w-[49px] h-[49px] rounded-full bg-transparent border border-black/10 flex items-center justify-center hover:bg-white transition-colors">
              <FiSearch />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 space-y-4 custom-scrollbar">
          {Object.entries(groupedEncounters).map(([date, items]) => (
            <div key={date}>
              <div className="text-xs font-medium text-gray-400 tracking-[0.6px] mb-3">
                {date}
              </div>
              <div className="space-y-2">
                {items.map((encounter, idx) => (
                  <div key={idx} className="relative">
                    {encounter.hasReply && (
                      <div className="absolute left-[13px] top-[60px] w-0 h-0">
                        <div className="w-[2px] h-[13px] bg-[#E5E6EA]" />
                        <svg
                          width="14"
                          height="9"
                          viewBox="0 0 14 9"
                          fill="none"
                          className="absolute left-[1px] top-[12px]"
                        >
                          <path
                            d="M12.5866 7.99624C13.1368 7.9484 13.5441 7.46358 13.4962 6.91337C13.4484 6.36316 12.9636 5.95591 12.4134 6.00376L12.5 7L12.5866 7.99624ZM12.5 7L12.4134 6.00376C10.595 6.16188 7.89433 6.01137 5.69495 5.10102C4.60517 4.64995 3.68557 4.03199 3.04147 3.21943C2.40884 2.42134 2 1.38417 2 0H1H0C0 1.81583 0.549495 3.29532 1.47415 4.46182C2.38735 5.61384 3.624 6.40838 4.93005 6.94898C7.52234 8.02196 10.5716 8.17146 12.5866 7.99624L12.5 7Z"
                            fill="#E5E6EA"
                          />
                        </svg>
                        <div className="absolute left-5 top-0 w-[203px] h-[53px] rounded-2xl bg-gray-100 flex items-center px-4">
                          <div>
                            <div className="text-[13px] font-medium text-black tracking-[0.13px]">
                              {encounter.name}
                            </div>
                            <div className="flex gap-3 text-[11px] text-gray-400 font-medium">
                              <span>10:53 PM</span>
                              <span>19/09/25</span>
                            </div>
                          </div>
                          <button className="absolute top-3 right-2 w-[30px] h-[30px] rounded-full bg-white border border-black/10 flex items-center justify-center">
                            <DeleteIcon />
                          </button>
                        </div>
                      </div>
                    )}
                    <div
                      className={`w-full h-[60px] rounded-[21px] bg-white flex items-center px-[22px] relative group hover:shadow-sm transition-shadow ${
                        encounter.hasReply ? "mb-[65px]" : ""
                      }`}
                    >
                      <div className="flex-1">
                        <div className="text-sm font-medium text-black">
                          {encounter.name}
                        </div>
                        <div className="text-[11px] font-medium text-gray-400">
                          {encounter.time}
                        </div>
                      </div>

                      {encounter.count && (
                        <div className="flex items-center gap-2">
                          <div className="h-[29px] px-3 rounded-[21px] bg-[#DFEDF6] flex items-center justify-center">
                            <span className="text-xs font-medium text-black">
                              {encounter.count}
                            </span>
                            <svg
                              width="5"
                              height="3"
                              viewBox="0 0 5 3"
                              fill="none"
                              className="ml-2"
                            >
                              <path
                                d="M0.589583 0L2.5 1.85502L4.41042 0L5 0.572488L2.5 3L0 0.572488L0.589583 0Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                        </div>
                      )}

                      <button className="w-[29px] h-[29px] rounded-full border border-black/10 flex items-center justify-center ml-2 opacity-100 transition-opacity">
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="px-7 pt-4 flex items-center justify-between gap-2">
          <button className="w-8 h-8 rounded flex items-center justify-center bg-[#919EAB] opacity-50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15.1602 7.41L10.5802 12L15.1602 16.59L13.7502 18L7.75016 12L13.7502 6L15.1602 7.41Z"
                fill="#C4CDD5"
              />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded border border-primary bg-white flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">1</span>
            </button>

            <button className="w-8 h-8 rounded border border-[#DFE3E8] bg-white flex items-center justify-center hover:border-primary transition-colors">
              <span className="text-sm text-[#212B36]">2</span>
            </button>

            <button className="w-8 h-8 rounded border border-[#DFE3E8] bg-white flex items-center justify-center hover:border-primary transition-colors">
              <span className="text-sm text-[#212B36]">3</span>
            </button>
          </div>

          <button className="w-8 h-8 rounded border border-[#DFE3E8] bg-white flex items-center justify-center hover:border-primary transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M8.83984 7.41L13.4198 12L8.83984 16.59L10.2498 18L16.2498 12L10.2498 6L8.83984 7.41Z"
                fill="#C4CDD5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

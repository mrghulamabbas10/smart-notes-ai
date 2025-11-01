import StarFlowerIcon from "../assets/star-flower-icon";
import { features } from "../features/data";

export default function KeyCapabilities() {
  return (
    <section id="features" className="md:px-8 px-2">
      <div className="max-w-4xl text-center mb-16 mx-auto">
        <h2 className="text-[#012025] text-center text-4xl md:text-[56px] font-bold leading-[1.12] tracking-[-1px] px-4">
          Key Capabilities – Designed for Better Care
        </h2>
        <p className="text-[#454140] mt-3">
          Simplifying documentation so providers can focus on care.
        </p>
      </div>
      <div className="bg-[#EAF7FF] py-16 w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="contents ">
              {/* Text Block */}
              <div className="flex flex-col justify-center gap-4 p-4 sm:p-6 lg:p-8">
                <div className="px-5 rounded-full py-2 bg-white w-fit">
                  {feature.tag}
                </div>

                <h3 className="font-urbanist text-3xl font-bold leading-tight text-[#012025] sm:text-4xl lg:text-[42px]">
                  {feature.title}
                </h3>

                <p className="font-urbanist text-lg font-medium leading-relaxed text-[#717A7C] sm:text-xl">
                  {feature.description}
                </p>

                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                    <div>
                        <StarFlowerIcon />
                    </div>
                      <p className="text-[#717A7C] text-base lg:text-xl">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <img src={feature.image} alt={feature.tag} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

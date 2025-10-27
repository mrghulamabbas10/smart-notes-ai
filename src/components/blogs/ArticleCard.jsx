export default function ArticleCard({
  image,
  title,
  description,
  readTime,
  date,
  category,
  tags,
  moreTagsCount,
  variant = "default",
}) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`bg-white rounded-[25px] border border-black/20 overflow-hidden flex flex-col ${
        isFeatured ? "shadow-[0_55px_60px_0_rgba(0,0,0,0.1)]" : ""
      }`}
    >
      <div className="relative">
        <div
          className={`mx-auto mt-6 sm:mt-10 rounded-[10px] sm:rounded-[22px] overflow-hidden ${
            isFeatured
              ? "border-[15px] sm:border-[22px] border-[#D4ECFB] w-[calc(100%-3rem)] sm:w-[calc(100%-8rem)]"
              : "border-[10px] sm:border-[15px] border-[#D4ECFB] w-[calc(100%-3rem)] sm:w-[calc(100%-7rem)]"
          }`}
        >
          <img src={image} alt={title} className="w-full h-auto object-cover" />
        </div>
      </div>

      <div
        className={`p-6 sm:p-8 md:p-10 flex flex-col flex-1 ${
          isFeatured ? "sm:p-12 md:p-14" : ""
        }`}
      >
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="px-4 py-2 rounded-full bg-[#A9E8FB] text-[#1457EA] text-xs sm:text-sm font-bold">
            {category}
          </span>
          <span className="text-[#454140] text-xs sm:text-sm">
            {readTime} · {date}
          </span>
        </div>

        <h2
          className={`font-bold text-[#120A0B] mb-4 leading-tight ${
            isFeatured
              ? "text-2xl sm:text-3xl lg:text-4xl"
              : "text-xl sm:text-2xl lg:text-3xl"
          }`}
        >
          {title}
        </h2>

        <p
          className={`text-[#454140] mb-6 flex-1 ${
            isFeatured
              ? "text-base sm:text-lg lg:text-xl leading-relaxed"
              : "text-base sm:text-lg leading-relaxed"
          }`}
        >
          {description}
        </p>

        <div className="relative mb-6">
          <div className="absolute -left-2 sm:left-5 top-1/2 -translate-y-1/2 w-[155px] h-[52px] rounded-[27px] bg-[rgba(65,144,255,0.46)] blur-[21px]" />
          <button className="relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#BAD3FF] to-[#1457EA] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-shadow">
            Read More
          </button>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F1F5F8] text-[#454140] text-xs sm:text-sm"
            >
              {tag}
            </span>
          ))}
          {moreTagsCount && (
            <span className="text-[#454140] text-xs sm:text-sm">
              +{moreTagsCount} more
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

import ArticleCard from "./ArticleCard";
import { articles } from "./data";

export default function Index() {
  return (
    <div className="md:-mt-[25vw] -mt-[40vw] relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-7">
            <ArticleCard
              variant="featured"
              image={articles.featured.image}
              title={articles.featured.title}
              description={articles.featured.description}
              readTime={articles.featured.readTime}
              date={articles.featured.date}
              category={articles.featured.category}
              tags={articles.featured.tags}
              moreTagsCount={articles.featured.moreTagsCount}
            />
          </div>

          <div className="lg:col-span-5 space-y-6 lg:space-y-8">
            {articles.articles.map((article, index) => (
              <ArticleCard
                key={index}
                image={article.image}
                title={article.title}
                description={article.description}
                readTime={article.readTime}
                date={article.date}
                category={article.category}
                tags={article.tags}
                moreTagsCount={article.moreTagsCount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

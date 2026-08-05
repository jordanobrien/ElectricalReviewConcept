import { Link } from "react-router";
import { articles } from "../data/articles";
import { getPrimaryTopicTitle } from "../utils/topicColors";

function HeroStory({ index, size }: { index: number; size: "large" | "small" }) {
  const article = articles[index];

  return (
    <Link
      to={`/article/${article.id}`}
      className={`group relative block overflow-hidden bg-[#17131f] ${size === "large" ? "min-h-[390px]" : "min-h-[245px]"}`}
    >
      <img
        src={article.imageUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/85">
          {getPrimaryTopicTitle(article.topics, article.category)}
        </span>
        <h2 className={`${size === "large" ? "text-[28px] md:text-[38px]" : "text-[20px] md:text-[24px]"} max-w-[94%] leading-[1.08] text-white`} style={{ fontWeight: 750 }}>
          {article.headline}
        </h2>
      </div>
    </Link>
  );
}

export function HeroBanner() {
  return (
    <section className="bg-white py-3 md:py-5">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-3 px-4 md:px-8 lg:grid-cols-2">
        <div className="grid gap-3">
          <HeroStory index={0} size="large" />
          <HeroStory index={1} size="small" />
        </div>
        <div className="grid gap-3">
          <HeroStory index={2} size="small" />
          <HeroStory index={3} size="large" />
        </div>
      </div>
    </section>
  );
}

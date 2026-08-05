import { ModernArchivePage } from "../components/ModernArchivePage";
import { deepDiveArticles } from "../data/deepDiveArticles";
import { getPrimaryTopicTitle } from "../utils/topicColors";

export function DeepDivesArchivePage() {
  return <ModernArchivePage title="Analysis" introduction="Detailed guides that connect engineering decisions to dependable operating outcomes." collectionTitle="Latest Analysis" items={deepDiveArticles.map((article) => ({ id: article.id, to: `/analysis/${article.id}`, format: "Analysis", category: getPrimaryTopicTitle(article.topics, article.category), title: article.headline, summary: article.summary, imageUrl: article.heroImageUrl, date: article.publishDate, author: { name: article.author } }))} />;
}

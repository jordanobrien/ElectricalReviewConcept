import { ModernArchivePage } from "../components/ModernArchivePage";
import { deepDiveArticles } from "../data/deepDiveArticles";
import { getPrimaryTopicTitle } from "../utils/topicColors";

export function DeepDivesArchivePage() {
  return <ModernArchivePage title="Analysis" introduction="In-depth reporting on the issues, technologies and decisions shaping the data centre industry." collectionTitle="Latest Analysis" items={deepDiveArticles.map((article) => ({ id: article.id, to: `/analysis/${article.id}`, format: "Analysis", category: getPrimaryTopicTitle(article.topics, article.category), title: article.headline, summary: article.summary, imageUrl: article.heroImageUrl, date: article.publishDate, author: { name: article.author } }))} />;
}

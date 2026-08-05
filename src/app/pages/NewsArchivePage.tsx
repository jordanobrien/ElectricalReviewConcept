import { ModernArchivePage } from "../components/ModernArchivePage";
import { articles } from "../data/articles";
import { getPrimaryTopicTitle } from "../utils/topicColors";

export function NewsArchivePage() {
  return <ModernArchivePage title="News" introduction="Reporting on the technologies, projects and decisions shaping critical digital infrastructure." collectionTitle="Latest News" items={articles.map((article) => ({ id: article.id, to: `/article/${article.id}`, format: "News", category: getPrimaryTopicTitle(article.topics, article.category), title: article.headline, summary: article.summary, imageUrl: article.imageUrl, date: article.publishDate, author: { name: article.author } }))} />;
}

import { ModernArchivePage } from "../components/ModernArchivePage";
import { opinionArticles } from "../data/opinionArticles";
import { getPrimaryTopicTitle } from "../utils/topicColors";

export function OpinionArchivePage() {
  return <ModernArchivePage title="Opinion" introduction="Ideas, arguments and informed perspectives from leaders across the data centre sector." collectionTitle="Latest Opinion" items={opinionArticles.map((article) => ({ id: article.id, to: `/opinion/${article.id}`, format: "Opinion", category: getPrimaryTopicTitle(article.topics, article.category), title: article.title, summary: article.summary, imageUrl: article.imageUrl, date: article.publishedDate, author: { name: article.author.name, company: article.author.company, imageUrl: article.author.imageUrl } }))} />;
}

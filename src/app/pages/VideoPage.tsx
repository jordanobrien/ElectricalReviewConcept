import { ArrowLeft, Eye, Play } from "lucide-react";
import { Link, useParams } from "react-router";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { videos } from "../data/videos";
import { getPrimaryTopicTitle } from "../utils/topicColors";

export function VideoPage() {
  const { id } = useParams<{ id: string }>();
  const video = id ? videos.find((item) => item.id === id) : undefined;
  if (!video) return <div className="min-h-screen bg-white"><Navigation /><main className="mx-auto max-w-[1440px] px-4 py-20 md:px-8"><h1 className="text-[48px] text-[var(--navy-deep)]" style={{ fontWeight: 750 }}>Video not found</h1><Link to="/videos" className="mt-6 inline-block text-[#5a6eb4]">Return to video</Link></main><Footer /></div>;
  const related = videos.filter((item) => item.id !== video.id).slice(0, 3);
  return <div className="min-h-screen bg-white"><Navigation /><main>
    <section className="bg-[#0d1018] py-4 text-white md:py-6"><div className="mx-auto max-w-[1440px] px-4 md:px-8"><div className="relative aspect-[16/9] overflow-hidden bg-black"><img src={video.thumbnail} alt="" className="absolute inset-0 h-full w-full object-cover opacity-85" /><div className="absolute inset-0 bg-black/15" /><button type="button" aria-label="Play video" className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#5a6eb4] shadow-2xl transition-transform hover:scale-110 md:h-24 md:w-24"><Play size={28} fill="currentColor" className="ml-1" /></button></div><div className="max-w-[1050px] py-9 md:py-12"><div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60"><span className="text-[#9eacd9]">{getPrimaryTopicTitle(video.topics, video.category)}</span><span>{video.publishDate}</span><span className="flex items-center gap-1.5"><Eye size={14} />{video.views} views</span></div><h1 className="mt-5 text-[38px] leading-[1.01] md:text-[58px]" style={{ fontWeight: 750 }}>{video.title}</h1><p className="mt-6 max-w-[820px] text-[17px] leading-[1.7] text-white/72">{video.description}</p></div></div></section>
    <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-20"><div className="mb-8 border-b border-gray-200 pb-6"><h2 className="text-[34px] text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>Watch next</h2></div><div className="grid gap-6 md:grid-cols-3">{related.map((item) => <Link key={item.id} to={`/video/${item.id}`} className="group"><div className="relative aspect-[16/10] overflow-hidden"><img src={item.thumbnail} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /><span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[#5a6eb4]"><Play size={16} fill="currentColor" /></span></div><span className="mt-5 block text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">{getPrimaryTopicTitle(item.topics, item.category)}</span><h3 className="mt-2 text-[23px] leading-[1.1] text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>{item.title}</h3></Link>)}</div></section>
    <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-8"><Link to="/videos" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]"><ArrowLeft size={15} />Back to video</Link></div>
  </main><Footer /></div>;
}

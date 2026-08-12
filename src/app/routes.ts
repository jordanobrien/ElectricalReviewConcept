import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./pages/ArticlePage";
import { DeepDiveArticlePage } from "./pages/DeepDiveArticlePage";
import { PressReleasePage } from "./pages/PressReleasePage";
import { EventPage } from "./pages/EventPage";
import { DownloadPage } from "./pages/DownloadPage";
import { OpinionArticlePage } from "./pages/OpinionArticlePage";
import { VideoPage } from "./pages/VideoPage";
import { NewsArchivePage } from "./pages/NewsArchivePage";
import { DeepDivesArchivePage } from "./pages/DeepDivesArchivePage";
import { OpinionArchivePage } from "./pages/OpinionArchivePage";
import { PressReleaseArchivePage } from "./pages/PressReleaseArchivePage";
import { EventsArchivePage } from "./pages/EventsArchivePage";
import { DownloadsArchivePage } from "./pages/DownloadsArchivePage";
import { VideosArchivePage } from "./pages/VideosArchivePage";
import { MagazinesPage } from "./pages/MagazinesPage";
import { AboutPage } from "./pages/AboutPage";
import { AdvertisePage } from "./pages/AdvertisePage";
import { ContactPage } from "./pages/ContactPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { NewsletterPage } from "./pages/NewsletterPage";
import { TopicHubPage } from "./pages/TopicHubPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SubmitPressReleasePage } from "./pages/SubmitPressReleasePage";
import { CompanyProfileSetupPage } from "./pages/CompanyProfileSetupPage";
import { SubmitPressReleaseFormPage } from "./pages/SubmitPressReleaseFormPage";
import { PaymentPage } from "./pages/PaymentPage";
import { PressReleaseDashboardPage } from "./pages/PressReleaseDashboardPage";
import { DigitalMediaPackPage } from "./pages/DigitalMediaPackPage";
import { PressReleaseBrandPage } from "./pages/PressReleaseBrandPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/news",
    Component: NewsArchivePage,
  },
  {
    path: "/analysis",
    Component: DeepDivesArchivePage,
  },
  {
    path: "/deep-dives",
    Component: DeepDivesArchivePage,
  },
  {
    path: "/opinion-articles",
    Component: OpinionArchivePage,
  },
  {
    path: "/press-releases",
    Component: PressReleaseArchivePage,
  },
  {
    path: "/press-release-brands/:brandId",
    Component: PressReleaseBrandPage,
  },
  {
    path: "/events",
    Component: EventsArchivePage,
  },
  {
    path: "/downloads",
    Component: DownloadsArchivePage,
  },
  {
    path: "/videos",
    Component: VideosArchivePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/advertise",
    Component: AdvertisePage,
  },
  {
    path: "/digital-media-pack",
    Component: DigitalMediaPackPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/terms",
    Component: TermsPage,
  },
  {
    path: "/privacy",
    Component: PrivacyPage,
  },
  {
    path: "/newsletter",
    Component: NewsletterPage,
  },
  {
    path: "/magazines",
    Component: MagazinesPage,
  },
  {
    path: "/topic/:topicId",
    Component: TopicHubPage,
  },
  {
    path: "/article/:id",
    Component: ArticlePage,
  },
  {
    path: "/analysis/:id",
    Component: DeepDiveArticlePage,
  },
  {
    path: "/deep-dive/:id",
    Component: DeepDiveArticlePage,
  },
  {
    path: "/press-release/:id",
    Component: PressReleasePage,
  },
  {
    path: "/event/:id",
    Component: EventPage,
  },
  {
    path: "/download/:id",
    Component: DownloadPage,
  },
  {
    path: "/opinion/:id",
    Component: OpinionArticlePage,
  },
  {
    path: "/video/:id",
    Component: VideoPage,
  },
  {
    path: "/submit-press-release",
    Component: SubmitPressReleasePage,
  },
  {
    path: "/payment",
    Component: PaymentPage,
  },
  {
    path: "/press-release-dashboard",
    Component: PressReleaseDashboardPage,
  },
  {
    path: "/company-profile-setup",
    Component: CompanyProfileSetupPage,
  },
  {
    path: "/submit-press-release-form",
    Component: SubmitPressReleaseFormPage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

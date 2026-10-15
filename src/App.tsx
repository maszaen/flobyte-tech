import { Component, type ReactNode } from "react";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import {
  CookieConsentBanner,
  ScrollToTop,
  SiteFooter,
  SiteHeader,
} from "./components/chrome";
import { ServerErrorContent } from "./components/errors";
import {
  AboutPage,
  CareersPage,
  ContactPage,
  FAQPage,
  ProjectsPage,
  ServicesPage,
} from "./pages/core";
import {
  ApproachPage,
  HowWeWorkPage,
  IndustriesPage,
  PartnersPage,
  TechnologyPage,
  TestimonialsPage,
} from "./pages/company";
import {
  CareerDetailPage,
  ProjectDetailPage,
  ServiceDetailPage,
} from "./pages/details";
import { HomePage } from "./pages/home";
import {
  AccessibilityPage,
  DisclosurePage,
  LegalDocPage,
  SecurityPage,
} from "./pages/legal";
import {
  BlogArticlePage,
  BlogPage,
  ChangelogPage,
  DocsPage,
  GuidesPage,
  ResourcesPage,
  SitemapPage,
  StatusPage,
} from "./pages/resources";
import {
  ConsultationPage,
  CookiePreferencesPage,
  MaintenancePage,
  NotFoundPage,
  QuotePage,
  SearchPage,
  ServerErrorPage,
  ThankYouPage,
} from "./pages/utility";

/** Catches unexpected render errors and shows the branded 500 experience. */
class AppErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ServerErrorContent
          onRetry={() => {
            this.setState({ hasError: false });
          }}
        />
      );
    }
    return this.props.children;
  }
}

function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <AppErrorBoundary>
          <Outlet />
        </AppErrorBoundary>
      </main>
      <SiteFooter />
      <CookieConsentBanner />
    </div>
  );
}

/** Bare layout for the maintenance preview — no full site chrome. */
function BareLayout() {
  return (
    <main id="main-content" className="min-h-screen">
      <Outlet />
    </main>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          {/* Core company pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/faq" element={<FAQPage />} />

          {/* Service detail pages (validated slugs) */}
          <Route path="/services/:slug" element={<ServiceDetailPage />} />

          {/* Company & business */}
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/how-we-work" element={<HowWeWorkPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/careers/:slug" element={<CareerDetailPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />

          {/* Resources & knowledge */}
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />

          {/* Legal, privacy, security */}
          <Route path="/legal/:slug" element={<LegalDocPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/security/disclosure" element={<DisclosurePage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />

          {/* Utility & conversion */}
          <Route path="/contact/quote" element={<QuotePage />} />
          <Route path="/contact/consultation" element={<ConsultationPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cookie-preferences" element={<CookiePreferencesPage />} />

          {/* Error previews + catch-all */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/500" element={<ServerErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Maintenance preview without site chrome */}
        <Route element={<BareLayout />}>
          <Route path="/maintenance" element={<MaintenancePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

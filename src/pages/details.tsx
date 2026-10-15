import { Link, useParams } from "react-router-dom";
import { NotFoundContent } from "../components/errors";
import { PageHeader, TwoColumn } from "../components/layouts";
import {
  CheckList,
  FinalCTA,
  KeyValueList,
  RelatedLinkList,
  Section,
  SectionHeader,
  ServiceCard,
} from "../components/sections";
import { Alert, Badge, ButtonLink, Divider, ImagePlaceholder } from "../components/ui";
import { careers, getCareer } from "../data/careers";
import { getProject, projects } from "../data/projects";
import { getService } from "../data/services";
import { usePageMeta } from "../lib/usePageMeta";

/* ------------------------------- Service detail ------------------------------- */

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;

  usePageMeta(
    service ? service.name : "Service not found",
    service ? service.description : "The requested service page does not exist."
  );

  if (!service) {
    return (
      <NotFoundContent
        title="Service not found"
        message="This service page doesn't exist. Browse the full catalog on the Services page."
      />
    );
  }

  const related = service.related
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PageHeader
        title={service.name}
        lead={service.tagline}
        crumbs={[{ label: "Services", to: "/services" }, { label: service.name }]}
        meta={<Badge mono>services/{service.slug}</Badge>}
        actions={<ButtonLink to="/contact/quote" variant="primary">Request a quote</ButtonLink>}
      />
      <Section>
        <TwoColumn
          main={
            <div className="max-w-2xl space-y-10">
              <p className="text-[15px] leading-relaxed text-fg">{service.description}</p>

              <div>
                <SectionHeader title="Core capabilities" />
                <CheckList items={service.capabilities} />
              </div>

              <div>
                <SectionHeader title="Typical use cases" />
                <ul className="space-y-2.5">
                  {service.useCases.map((u) => (
                    <li
                      key={u}
                      className="rounded-md border border-line bg-surface px-4 py-2.5 text-sm text-fg"
                    >
                      {u}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionHeader
                  title="What you get"
                  description="Typical deliverables — confirmed per project in the written proposal."
                />
                <CheckList items={service.deliverables} columns={1} />
              </div>
            </div>
          }
          aside={
            <>
              <div className="rounded-md border border-line bg-surface p-4">
                <h2 className="text-sm font-semibold">Start a conversation</h2>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  Describe your project and we'll respond with questions and an
                  honest assessment — no obligation.
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  <ButtonLink to="/contact/quote" variant="primary" size="sm">
                    Request a quote
                  </ButtonLink>
                  <ButtonLink to="/contact/consultation" size="sm">
                    Book a consultation
                  </ButtonLink>
                </div>
              </div>
              <RelatedLinkList
                title="Related reading"
                items={[
                  { label: "How We Work", to: "/how-we-work" },
                  { label: "Technology Stack", to: "/technology" },
                  { label: "FAQ", to: "/faq" },
                ]}
              />
            </>
          }
        />
      </Section>

      {related.length > 0 && (
        <Section bordered tinted>
          <SectionHeader title="Related services" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} compact />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}

/* ------------------------------- Project detail ------------------------------- */

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  usePageMeta(
    project ? project.name : "Project not found",
    project ? project.summary : "The requested project page does not exist."
  );

  if (!project) {
    return (
      <NotFoundContent
        title="Project not found"
        message="This case study doesn't exist. See all case studies on the Projects page."
      />
    );
  }

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[index - 1];
  const next = projects[index + 1];
  const relatedServices = project.services
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PageHeader
        title={project.name}
        lead={project.summary}
        crumbs={[{ label: "Projects", to: "/projects" }, { label: project.name }]}
        meta={
          <div className="flex flex-wrap gap-2">
            <Badge tone="accent">{project.sector}</Badge>
            <Badge tone="warning">Illustrative sample — not real client work</Badge>
          </div>
        }
      />
      <Section>
        <TwoColumn
          main={
            <div className="max-w-2xl space-y-8">
              <ImagePlaceholder
                path={`/assets/projects/${project.slug}-hero.jpg`}
                alt={`${project.name} hero image placeholder`}
                ratio="21/9"
              />
              <div className="prose-flo">
                <h2>The engagement</h2>
                <p>{project.description}</p>
              </div>
              <div>
                <SectionHeader title="Outcomes" />
                <CheckList items={project.outcomes} columns={1} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <ImagePlaceholder
                  path={`/assets/projects/${project.slug}-screen-1.jpg`}
                  alt={`${project.name} interface screenshot placeholder`}
                  ratio="4/3"
                />
                <ImagePlaceholder
                  path={`/assets/projects/${project.slug}-screen-2.jpg`}
                  alt={`${project.name} interface screenshot placeholder`}
                  ratio="4/3"
                />
              </div>
            </div>
          }
          aside={
            <>
              <KeyValueList
                items={[
                  { key: "Sector", value: project.sector },
                  { key: "Status", value: "Illustrative sample" },
                  {
                    key: "Stack",
                    value: (
                      <span className="flex flex-wrap gap-1.5">
                        {project.stack.map((s) => (
                          <Badge key={s} mono>
                            {s}
                          </Badge>
                        ))}
                      </span>
                    ),
                  },
                  {
                    key: "Services",
                    value: (
                      <span className="flex flex-col gap-1">
                        {relatedServices.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="text-accent hover:underline"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </span>
                    ),
                  },
                ]}
              />
              <Alert tone="accent">
                This case study is an illustrative sample demonstrating a
                typical engagement. Real references are available on request.
              </Alert>
            </>
          }
        />
        <Divider className="my-10" />
        <nav aria-label="Project navigation" className="flex items-center justify-between gap-4">
          {prev ? (
            <Link to={`/projects/${prev.slug}`} className="text-sm font-medium text-accent hover:underline">
              ← {prev.name}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/projects/${next.slug}`} className="text-right text-sm font-medium text-accent hover:underline">
              {next.name} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </Section>
      <FinalCTA
        title="Facing a similar challenge?"
        description="We'll tell you honestly whether this approach fits your situation."
      />
    </>
  );
}

/* -------------------------------- Career detail -------------------------------- */

export function CareerDetailPage() {
  const { slug } = useParams();
  const role = slug ? getCareer(slug) : undefined;

  usePageMeta(
    role ? `${role.title} — Careers` : "Role not found",
    role ? role.summary : "The requested role does not exist."
  );

  if (!role) {
    return (
      <NotFoundContent
        title="Role not found"
        message="This opening doesn't exist or has been filled. See current openings on the Careers page."
      />
    );
  }

  const others = careers.filter((c) => c.slug !== role.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        title={role.title}
        lead={role.summary}
        crumbs={[{ label: "Careers", to: "/careers" }, { label: role.title }]}
        meta={
          <div className="flex flex-wrap gap-2">
            <Badge tone="accent">{role.team}</Badge>
            <Badge>{role.type}</Badge>
            <Badge>{role.location}</Badge>
            <Badge tone="warning">Sample listing</Badge>
          </div>
        }
        actions={<ButtonLink to="/contact" variant="primary">Apply via contact</ButtonLink>}
      />
      <Section>
        <TwoColumn
          main={
            <div className="max-w-2xl space-y-8">
              <div>
                <SectionHeader title="What you'll do" />
                <CheckList items={role.responsibilities} columns={1} />
              </div>
              <div>
                <SectionHeader title="What we're looking for" />
                <CheckList items={role.requirements} columns={1} />
              </div>
              <div>
                <SectionHeader title="Nice to have" />
                <CheckList items={role.niceToHave} columns={1} />
              </div>
              <Alert tone="accent" title="How to apply">
                Send a short note and whatever best shows your work (CV,
                portfolio, repositories) via the contact form. Mention the
                role title — a cover letter is optional, specificity isn't.
              </Alert>
            </div>
          }
          aside={
            <RelatedLinkList
              title="Other open roles"
              items={others.map((c) => ({
                label: c.title,
                to: `/careers/${c.slug}`,
                description: `${c.team} · ${c.location}`,
              }))}
            />
          }
        />
      </Section>
    </>
  );
}

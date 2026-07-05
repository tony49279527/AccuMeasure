import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, CheckCircle, Clock, Tag } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { getProductById } from "@/lib/products";
import { blogArticleJsonLd, faqPageJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} | AccuMeasureTech Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const relatedProducts = post.relatedProductIds
    .map((id) => getProductById(id))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <div>
      <JsonLd data={[blogArticleJsonLd(post), faqPageJsonLd(post.faqs)]} />

      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title },
            ]}
          />
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-4 text-sm text-muted mb-6">
              <span className="inline-flex items-center gap-2 text-primary font-medium">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.dateModified)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                By AccuMeasure Engineering Team
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-muted max-w-3xl">{post.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-start">
            <article className="max-w-3xl">
              <div className="space-y-12">
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-2xl font-bold text-dark mb-4">
                      {section.heading}
                    </h2>
                    <div className="space-y-4 text-muted leading-7">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-6 space-y-3">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3 text-muted">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <section className="mt-14 border-t border-border pt-10">
                <h2 className="text-2xl font-bold text-dark mb-6">Buyer FAQ</h2>
                <div className="space-y-4">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="bg-bg-light rounded-xl p-6">
                      <h3 className="font-semibold text-dark mb-2">{faq.question}</h3>
                      <p className="text-muted text-sm leading-6">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="bg-white rounded-xl border border-border p-6">
                <h2 className="font-semibold text-dark mb-4">Related Products</h2>
                <div className="space-y-4">
                  {relatedProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      className="block border-b border-border last:border-0 pb-4 last:pb-0 group"
                    >
                      <div className="text-xs font-mono font-bold text-primary mb-1">
                        {product.model}
                      </div>
                      <h3 className="font-medium text-dark group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-muted mt-1 line-clamp-2">
                        {product.tagline}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-primary text-white rounded-xl p-6">
                <h2 className="font-semibold mb-3">Need model selection help?</h2>
                <p className="text-white/80 text-sm mb-5">
                  Send your medium, tank or pipe size, output signal, and target quantity.
                  We&apos;ll recommend a configuration within 24 hours.
                </p>
                <Link href="/contact" className="btn-outline-white w-full">
                  Ask an Engineer <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-bg-light rounded-xl p-6">
                <h2 className="font-semibold text-dark mb-4">More Guides</h2>
                <div className="space-y-3">
                  {relatedPosts.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="block text-sm text-muted hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

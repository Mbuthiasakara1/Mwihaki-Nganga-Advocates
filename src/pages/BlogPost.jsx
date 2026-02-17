import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { getPost, getRelatedPosts, urlFor } from '../lib/sanity'
import './BlogPost.css'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-KE', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

// Rich text component renderers
const components = {
  types: {
    image: ({ value }) => (
      <figure className="bp-image">
        <img
          src={urlFor(value).width(900).quality(85).url()}
          alt={value.caption || ''}
          className="bp-image__img"
        />
        {value.caption && <figcaption className="bp-image__caption">{value.caption}</figcaption>}
      </figure>
    ),
  },
  block: {
    h2: ({ children }) => <h2 className="bp-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="bp-h3">{children}</h3>,
    normal: ({ children }) => <p className="bp-p">{children}</p>,
    blockquote: ({ children }) => <blockquote className="bp-quote">{children}</blockquote>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noreferrer" className="bp-link">
        {children}
      </a>
    ),
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <span style={{ textDecoration: 'underline' }}>{children}</span>,
  },
}

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    getPost(slug).then((data) => {
      if (!data) { navigate('/blog'); return }
      setPost(data)
      setLoading(false)
      getRelatedPosts(data.category, data._id).then(setRelated)
    })
  }, [slug])

  if (loading) return (
    <div className="blog-loading">
      <div className="blog-loading__spinner" />
      <p>Loading article...</p>
    </div>
  )

  return (
    <main className="bp-page">

      {/* COVER HERO */}
      <section className="bp-hero">
        {post.coverImage && (
          <img
            src={urlFor(post.coverImage).width(1600).quality(80).url()}
            alt={post.title}
            className="bp-hero__image"
          />
        )}
        <div className="bp-hero__overlay" />
        <div className="bp-hero__content">
          <p className="bp-hero__breadcrumb">
            <Link to="/">Home</Link> <span>/</span>
            <Link to="/blog">Blog</Link> <span>/</span>
            {post.category}
          </p>
          <span className="blog-tag">{post.category}</span>
          <h1 className="bp-hero__title">{post.title}</h1>
          <div className="bp-hero__meta">
            <span>By {post.author}</span>
            <span className="bp-hero__dot">·</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="bp-article">
        <div className="bp-article__inner">
          <p className="bp-excerpt">{post.excerpt}</p>
          <div className="bp-body">
            <PortableText value={post.body} components={components} />
          </div>
        </div>
      </article>

      {/* RELATED POSTS */}
      {related.length > 0 && (
        <section className="bp-related">
          <div className="bp-related__inner">
            <span className="section-label">
              <span className="label-line" /> MORE FROM {post.category.toUpperCase()}
            </span>
            <div className="bp-related__grid">
              {related.map((r) => (
                <Link to={`/blog/${r.slug.current}`} className="blog-card" key={r._id}>
                  <div className="blog-card__image-wrap">
                    {r.coverImage && (
                      <img
                        src={urlFor(r.coverImage).width(600).quality(75).url()}
                        alt={r.title}
                        className="blog-card__image"
                        loading="lazy"
                      />
                    )}
                    <span className="blog-tag blog-card__tag">{r.category}</span>
                  </div>
                  <div className="blog-card__content">
                    <p className="blog-card__date">{formatDate(r.publishedAt)}</p>
                    <h3 className="blog-card__title">{r.title}</h3>
                    <p className="blog-card__excerpt">{r.excerpt}</p>
                    <div className="blog-card__footer">
                      <span className="blog-card__author">By {r.author}</span>
                      <span className="blog-card__arrow">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BACK LINK */}
      <div className="bp-back">
        <Link to="/blog" className="bp-back__link">← Back to all articles</Link>
      </div>

    </main>
  )
}
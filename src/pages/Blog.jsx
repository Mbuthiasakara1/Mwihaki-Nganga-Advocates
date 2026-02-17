// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { getPosts, urlFor } from '../lib/sanity'
// import './Blog.css'

// function formatDate(dateStr) {
//   return new Date(dateStr).toLocaleDateString('en-KE', {
//     year: 'numeric', month: 'long', day: 'numeric',
//   })
// }

// export default function Blog() {
//   const [posts, setPosts] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     getPosts().then((data) => {
//       setPosts(data)
//       setLoading(false)
//     })
//   }, [])

//   const featured = posts[0]
//   const rest = posts.slice(1)

//   return (
//     <main className="blog-page">

//       {/* HERO */}
//       <section className="blog-hero">
//         <div className="blog-hero__inner">
//           <p className="blog-hero__breadcrumb">
//             <Link to="/">Home</Link> <span>/</span> Blog
//           </p>
//           <h1 className="blog-hero__title">Insights & Updates</h1>
//           <p className="blog-hero__sub">
//             Legal perspectives from the advocates of Mwihaki Nganga &amp; Company.
//           </p>
//         </div>
//       </section>

//       {loading ? (
//         <div className="blog-loading">
//           <div className="blog-loading__spinner" />
//           <p>Loading articles...</p>
//         </div>
//       ) : posts.length === 0 ? (
//         <div className="blog-empty">
//           <p>No articles published yet. Check back soon.</p>
//         </div>
//       ) : (
//         <>
//           {/* FEATURED POST */}
//           {featured && (
//             <section className="blog-featured">
//               <div className="blog-featured__inner">
//                 <Link to={`/blog/${featured.slug.current}`} className="blog-featured__card">
//                   <div className="blog-featured__image-wrap">
//                     {featured.coverImage && (
//                       <img
//                         src={urlFor(featured.coverImage).width(1200).quality(80).url()}
//                         alt={featured.title}
//                         className="blog-featured__image"
//                       />
//                     )}
//                     <div className="blog-featured__overlay" />
//                   </div>
//                   <div className="blog-featured__content">
//                     <div className="blog-featured__meta">
//                       <span className="blog-tag">{featured.category}</span>
//                       <span className="blog-featured__date">{formatDate(featured.publishedAt)}</span>
//                     </div>
//                     <h2 className="blog-featured__title">{featured.title}</h2>
//                     <p className="blog-featured__excerpt">{featured.excerpt}</p>
//                     <div className="blog-featured__footer">
//                       <span className="blog-featured__author">By {featured.author}</span>
//                       <span className="blog-featured__read">Read Article →</span>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </section>
//           )}

//           {/* POST GRID */}
//           {rest.length > 0 && (
//             <section className="blog-grid-section">
//               <div className="blog-grid-inner">
//                 <div className="blog-grid">
//                   {rest.map((post) => (
//                     <Link
//                       to={`/blog/${post.slug.current}`}
//                       className="blog-card"
//                       key={post._id}
//                     >
//                       <div className="blog-card__image-wrap">
//                         {post.coverImage && (
//                           <img
//                             src={urlFor(post.coverImage).width(600).quality(75).url()}
//                             alt={post.title}
//                             className="blog-card__image"
//                             loading="lazy"
//                           />
//                         )}
//                         <span className="blog-tag blog-card__tag">{post.category}</span>
//                       </div>
//                       <div className="blog-card__content">
//                         <p className="blog-card__date">{formatDate(post.publishedAt)}</p>
//                         <h3 className="blog-card__title">{post.title}</h3>
//                         <p className="blog-card__excerpt">{post.excerpt}</p>
//                         <div className="blog-card__footer">
//                           <span className="blog-card__author">By {post.author}</span>
//                           <span className="blog-card__arrow">→</span>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           )}
//         </>
//       )}

//     </main>
//   )
// }

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPosts, urlFor } from '../lib/sanity'
import './Blog.css'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-KE', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

const CATEGORIES = [
  'All',
  'Dispute Resolution',
  'Banking & Finance',
  'Real Estate',
  'Corporate Law',
  'Family Law',
  'Employment Law',
  'Immigration Law',
  'Constitutional Law',
  'Firm News',
]

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState('All')

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  const filtered = active === 'All'
    ? posts
    : posts.filter((p) => p.category === active)

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <main className="blog-page">

      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-hero__inner">
          <p className="blog-hero__breadcrumb">
            <Link to="/">Home</Link> <span>/</span> Blog
          </p>
          <h1 className="blog-hero__title">Insights &amp; Updates</h1>
          <p className="blog-hero__sub">
            Legal perspectives from the advocates of Mwihaki Nganga &amp; Company.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <div className="blog-filter">
        <div className="blog-filter__inner">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`blog-filter__btn ${active === cat ? 'blog-filter__btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="blog-loading">
          <div className="blog-loading__spinner" />
          <p>Loading articles...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="blog-empty">
          <p>No articles in this category yet.</p>
        </div>
      ) : (
        <div className="blog-content">

          {/* FEATURED — editorial split */}
          {featured && (
            <section className="blog-featured">
              <div className="blog-featured__inner">
                <Link to={`/blog/${featured.slug.current}`} className="blog-featured__card">

                  {/* Image — left */}
                  <div className="blog-featured__image-wrap">
                    {featured.coverImage && (
                      <img
                        src={urlFor(featured.coverImage).width(900).quality(85).url()}
                        alt={featured.title}
                        className="blog-featured__image"
                      />
                    )}
                  </div>

                  {/* Content — right */}
                  <div className="blog-featured__content">
                    <div className="blog-featured__top">
                      <span className="blog-tag">{featured.category}</span>
                      <span className="blog-featured__label">Featured Article</span>
                    </div>
                    <h2 className="blog-featured__title">{featured.title}</h2>
                    <p className="blog-featured__excerpt">{featured.excerpt}</p>
                    <div className="blog-featured__footer">
                      <div className="blog-featured__meta">
                        <span className="blog-featured__author">{featured.author}</span>
                        <span className="blog-featured__dot">·</span>
                        <span className="blog-featured__date">{formatDate(featured.publishedAt)}</span>
                      </div>
                      <span className="blog-featured__cta">
                        Read Article
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>

                </Link>
              </div>
            </section>
          )}

          {/* GRID */}
          {rest.length > 0 && (
            <section className="blog-grid-section">
              <div className="blog-grid-inner">
                <div className="blog-grid">
                  {rest.map((post) => (
                    <Link
                      to={`/blog/${post.slug.current}`}
                      className="blog-card"
                      key={post._id}
                    >
                      {/* Image */}
                      <div className="blog-card__image-wrap">
                        {post.coverImage && (
                          <img
                            src={urlFor(post.coverImage).width(600).quality(80).url()}
                            alt={post.title}
                            className="blog-card__image"
                            loading="lazy"
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="blog-card__content">
                        <div className="blog-card__top">
                          <span className="blog-tag">{post.category}</span>
                          <span className="blog-card__date">{formatDate(post.publishedAt)}</span>
                        </div>
                        <h3 className="blog-card__title">{post.title}</h3>
                        <p className="blog-card__excerpt">{post.excerpt}</p>
                        <div className="blog-card__footer">
                          <span className="blog-card__author">{post.author}</span>
                          <span className="blog-card__read">
                            Read Article
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

        </div>
      )}

    </main>
  )
}
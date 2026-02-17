// src/lib/sanity.js
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'c9tmgja4',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

// Fetch all published posts — newest first
export async function getPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      category,
      excerpt,
      author,
      publishedAt,
      coverImage
    }`
  )
}

// Fetch a single post by slug
export async function getPost(slug) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      excerpt,
      author,
      publishedAt,
      coverImage,
      body
    }`,
    { slug }
  )
}

// Fetch related posts — same category, exclude current
export async function getRelatedPosts(category, currentId) {
  return client.fetch(
    `*[_type == "post" && category == $category && _id != $currentId] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      category,
      excerpt,
      author,
      publishedAt,
      coverImage
    }`,
    { category, currentId }
  )
}
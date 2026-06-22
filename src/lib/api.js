const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://monocad-api.vercel.app'

async function fetcher(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    cache: 'no-store'
  })
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`)
  return res.json()
}

export async function getHeroData() {
  const data = await fetcher('/hero')
  return Array.isArray(data) ? data[0] : data
}

export async function getAboutData() {
  const data = await fetcher('/about')
  return Array.isArray(data) ? data[0] : data
}

export async function getServicesData() {
  return fetcher('/services')
}

export async function getProjectsData() {
  return fetcher('/projects')
}

export async function getTestimonialsData() {
  return fetcher('/testimonials')
}

export async function getCtaData() {
  const data = await fetcher('/cta')
  return Array.isArray(data) ? data[0] : data
}

export async function getFooterData() {
  const data = await fetcher('/footer')
  return Array.isArray(data) ? data[0] : data
}
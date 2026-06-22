const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://monocad-api.vercel.app'

async function fetcher(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    cache: 'no-store' // atau 'force-cache' kalau datanya jarang berubah
  })
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`)
  return res.json()
}

export async function getHeroData() {
  return fetcher('/hero')
}

export async function getAboutData() {
  return fetcher('/about')
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
  return fetcher('/cta')
}

export async function getFooterData() {
  return fetcher('/footer')
}
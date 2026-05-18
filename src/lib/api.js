import { supabase } from "./supabase";

export async function getHeroData() {
    const {data, error} = await supabase
    .from('hero')
    .select('*')
    .single()

    if (error) console.error('Error fetching hero:', error)
      return data 
  }

export async function getAboutData() {
    const {data, error} = await supabase
    .from('about')
    .select('*')
    .single()

    if (error) console.error('Error fetching about:', error)
      return data 
  }

export async function getServicesData() {
    const {data, error} = await supabase
    .from('services')
    .select('*')
    .order('sort_order')

    if (error) console.error('Error fetching services:', error)
      return data 
}

export async function getProjectsData() {
    const {data, error} = await supabase
    .from('projects')
    .select('*')
    .order('sort_order')

    if (error) console.error('Error fetching projects:', error)
      return data 
}

export async function getTestimonialsData() {
    const {data, error} = await supabase
    .from('testimonials')
    .select('*')
    .order('sort_order')

    if (error) console.error('Error fetching testimonials:', error)
      return data 
}

export async function getCtaData() {
    const {data, error} = await supabase
    .from('cta')
    .select('*')
    .single()

    if (error) console.error('Error fetching cta:', error)
      return data 
}

export async function getFooterData() {
    const {data, error} = await supabase
    .from('footer')
    .select('*')
    .single()

    if (error) console.error('Error fetching footer:', error)
      return data 
}
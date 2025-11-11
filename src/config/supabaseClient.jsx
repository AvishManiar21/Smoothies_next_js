import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables!')
    console.error('VITE_SUPABASE_URL:', supabaseUrl)
    console.error('VITE_SUPABASE_ANON_KEY:', supabaseKey ? 'Present' : 'Missing')
}

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

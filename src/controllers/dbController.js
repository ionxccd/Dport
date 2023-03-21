import { createClient } from '@supabase/supabase-js'
const supabase = createClient(import.meta.env.VITE_URL, import.meta.env.VITE_KEY);

export const getLast6 = async () => {
    const { data, error } = await supabase
    .from('projects')
    .select()
    .order('id',  { ascending: false })
    .limit(6);

    return data;
  }

export const getProjects = async () => {
    const { data, error } = await supabase
    .from('projects')
    .select()
    .order('id',  { ascending: false })

    return data;
  }


export const insertProjects = async () => {
    const { error } = await supabase
    .from('projects')
    .insert({ 
        title: 'Financial Timeline',
        desc:"A personal finance that tracks income and expenses.",
        url:"https://play.google.com/store/apps/details?id=com.ionxccd.finalFinincal&hl=en_US&gl=US",
        type:"App",
        tags:["React Native"],
        date:"May 18, 2022"
     })
}

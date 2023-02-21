import { createClient } from '@supabase/supabase-js'

let url = "https://ptfbhpfztoubcujdxmwx.supabase.co";
let anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0ZmJocGZ6dG91YmN1amR4bXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY3NTAyNjUsImV4cCI6MTk5MjMyNjI2NX0.S6Ps8_BYheQVu2nO23mt1Snjc4_bxZKSyF1azEsLWdY";
const supabase = createClient(url, anonKey)

export const fun1 = () => {
    console.log("kdjwd")
}

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
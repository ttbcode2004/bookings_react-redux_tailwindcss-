import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qrowgtcmtoillbzntzhl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyb3dndGNtdG9pbGxiem50emhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5MjMxMDYsImV4cCI6MjAzNzQ5OTEwNn0.fnNJn44EixrfK3dNXA2rezrjlD3bQmfXczVVYjbwv_M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

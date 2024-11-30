import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://meqebmzftbgdbivqvekz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lcWVibXpmdGJnZGJpdnF2ZWt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5Mjc0NDYsImV4cCI6MjA0ODUwMzQ0Nn0.KtvqkG8KPH30rFDrQ5RtnmicUMuG-juYvCRfSBqA1sQ';

export const supabase = createClient(supabaseUrl, supabaseKey);

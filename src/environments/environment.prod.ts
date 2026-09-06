// src/environments/environment.prod.ts
declare const process: any; // Add this to avoid TypeScript errors

export const environment = {
  production: true,
//  supabaseUrl: 'https://ywmmsjudizjoojufwejo.supabase.co',
//  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3bW1zanVkaXpqb29qdWZ3ZWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzUxMjcsImV4cCI6MjA2MjExMTEyN30._ihqLNXF8k7YPM82qtFnsDH80Sz5jHNaxNNhZpVC1hA'
  // Use process.env variables for production
  supabaseUrl: process.env['SUPABASE_DATABASE_URL'],
  supabaseKey: process.env['SUPABASE_ANON_KEY'],
  supabaseServiceRoleKey: process.env['SUPABASE_SERVICE_ROLE_KEY'],
  supabaseJwtSecret: process.env['SUPABASE_JWT_SECRET']
};

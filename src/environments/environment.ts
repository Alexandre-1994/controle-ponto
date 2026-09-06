// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

declare const process: any; // Add this to avoid TypeScript errors

export const environment = {
  production: false,
  // Use process.env with fallback values for local development
  supabaseUrl: process.env['SUPABASE_DATABASE_URL'] || 'http://localhost:54321',
  supabaseKey: process.env['SUPABASE_ANON_KEY'] || 'your-local-anon-key',
  supabaseServiceRoleKey: process.env['SUPABASE_SERVICE_ROLE_KEY'] || 'your-local-service-role-key',
  supabaseJwtSecret: process.env['SUPABASE_JWT_SECRET'] || 'your-local-jwt-secret'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

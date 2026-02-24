import { execSync } from 'child_process';

try {
  console.log('Running StudioCMS database migration...');
  execSync('npx studiocms migrate', {
    stdio: 'inherit',
    cwd: '/vercel/share/v0-project',
    env: process.env,
  });
  console.log('Migration completed successfully!');
} catch (error) {
  console.error('Migration failed:', error.message);
  process.exit(1);
}

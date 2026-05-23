import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'README.md',
  'CHANGELOG.md',
  'DEPLOYMENT_GUIDE.md',
  'GO_TO_MARKET.md',
  'BRAND_GUIDELINES.md',
  'SECURITY.md',
  'scripts/test-baseline.js',
  'scripts/build-baseline.js',
];

const missingFiles = requiredFiles.filter((file) => !existsSync(file));

const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
const requiredScripts = ['test', 'test:baseline', 'build', 'build:baseline', 'lint'];
const missingScripts = requiredScripts.filter((script) => !packageJson.scripts?.[script]);

if (missingFiles.length > 0 || missingScripts.length > 0) {
  if (missingFiles.length > 0) {
    console.error(`Missing required files: ${missingFiles.join(', ')}`);
  }
  if (missingScripts.length > 0) {
    console.error(`Missing required npm scripts: ${missingScripts.join(', ')}`);
  }
  process.exit(1);
}

console.log('Revvel baseline checks passed.');

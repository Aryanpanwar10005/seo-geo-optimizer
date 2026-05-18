#!/bin/bash

echo "=== Checking core files exist ==="
ls -la bin/install.js
ls -la package.json
ls -la README.md
ls -la skill/SEO_GEO_SKILL.md

echo "=== Checking repository structure ==="
tree -L 2 -I 'node_modules' || find . -maxdepth 2 -type f -name "*.js" -o -name "*.json" -o -name "*.md" | grep -v "node_modules"

echo "=== Searching for 'antigravity' in install.js ==="
grep -n "antigravity" bin/install.js

echo "=== Showing IDE array (should contain antigravity entry) ==="
grep -A 100 "const ides" bin/install.js | head -120

echo "=== Checking required Node.js imports ==="
head -20 bin/install.js | grep -E "(require\('path'\)|require\('os'\)|require\('fs'\))"

echo "=== Checking help text includes --antigravity flag ==="
grep -A 20 "function showHelp" bin/install.js | grep -i antigravity

echo "=== Checking package.json keywords ==="
cat package.json | grep -A 20 '"keywords"'

echo "=== Verify version is still 2.0.0 ==="
grep '"version"' package.json

echo "=== Searching for Antigravity in README ==="
grep -n -i "antigravity" README.md

echo "=== Showing Antigravity installation section ==="
grep -A 20 "### Antigravity" README.md

echo "=== Checking if Antigravity is in Supported IDEs table ==="
grep -B 5 -A 20 "Supported IDEs" README.md | grep -i antigravity

echo "=== Testing --help flag ==="
node bin/install.js --help 2>&1 | grep -i antigravity

echo "=== Testing --antigravity flag (dry run check) ==="
node -e "
const install = require('./bin/install.js');
console.log('✓ install.js loads successfully');
"

echo "=== Testing home directory path expansion ==="
node -e "
const path = require('path');
const os = require('os');
const targetPath = path.join(os.homedir(), '.gemini', 'GEMINI.md');
console.log('Antigravity target path:', targetPath);
console.log('Home directory:', os.homedir());
console.log('✓ Path expansion works correctly');
"

echo "=== Counting 'antigravity' mentions across all files ==="
grep -r -i "antigravity" . --exclude-dir=node_modules --exclude-dir=.git | wc -l

echo "=== Listing all files mentioning antigravity ==="
grep -r -l -i "antigravity" . --exclude-dir=node_modules --exclude-dir=.git

echo "=== Checking all IDE flags are consistent ==="
grep -E "flag: '--[a-z]+'" bin/install.js

echo "=== Verifying no duplicate IDE entries ==="
grep -E "name: '[a-z]+'" bin/install.js | sort | uniq -d

echo "=== FINAL VALIDATION REPORT ==="
echo ""
echo "1. bin/install.js antigravity entry:"
node bin/validate-install.js
echo ""
echo "2. package.json keywords:"
grep -q "antigravity" package.json && echo "✓ Found" || echo "⚠️  NOT FOUND (optional)"
echo ""
echo "3. README.md Antigravity section:"
grep -q -i "Antigravity" README.md && echo "✓ Found" || echo "❌ NOT FOUND"
echo ""
echo "4. Version check (must be 2.0.0):"
grep -q '"version": "2.0.0"' package.json && echo "✓ Correct" || echo "❌ WRONG VERSION"
echo ""
echo "5. Skill file untouched:"
wc -c skill/SEO_GEO_SKILL.md
echo ""
echo "=== END VALIDATION ==="

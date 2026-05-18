const fs = require('fs');
const path = require('path');
const os = require('os');

function validateInstallScript() {
  console.log("=== RUNNING ROBUST INTEGRATION VALIDATOR (bin/install.js) ===");

  const filePath = path.resolve(__dirname, '../bin/install.js');
  if (!fs.existsSync(filePath)) {
    console.error(`❌ ERROR: File not found at ${filePath}`);
    process.exit(1);
  }

  // Ensure the file is read as UTF-8
  const content = fs.readFileSync(filePath, 'utf8');

  // Define the real, expected pattern checks for 'antigravity' integration
  const checks = {
    ideTargetConfig: {
      name: "Antigravity IDE target configuration",
      pattern: /antigravity:\s*\{\s*name:\s*['"]antigravity['"]/i,
      desc: "JSON-style target entry key 'antigravity' and name property"
    },
    cliOptionFlag: {
      name: "CLI --antigravity option flag support",
      pattern: /--antigravity/i,
      desc: "Help text option or argument parsing containing --antigravity"
    },
    fallbackPath: {
      name: "Fallback path expansion in homedir",
      pattern: /fallback:\s*path\.join\(os\.homedir\(\),\s*['"]\.gemini['"],\s*['"]GEMINI\.md['"]\)/,
      desc: "Antigravity fallback path resolving to ~/.gemini/GEMINI.md"
    },
    conditionalCheck: {
      name: "Installer conditional check rules",
      pattern: /ideKey\s*===\s*['"]antigravity['"]/i,
      desc: "Conditional branch handling specific to antigravity IDE logic"
    }
  };

  const resultsMap = {};
  const rawGrepResults = {};
  let anyFailed = false;

  console.log("\n🔍 Running presence-check regex scans...");

  for (const [key, check] of Object.entries(checks)) {
    const match = content.match(check.pattern);
    rawGrepResults[key] = !!match;

    // Propagate the raw grep results directly into the summary resultsMap
    resultsMap[key] = {
      name: check.name,
      passed: !!match,
      matchedLine: match ? match[0].trim() : null,
      desc: check.desc
    };

    if (match) {
      console.log(`✅ FOUND: ${check.name}`);
      console.log(`   Pattern matched: "${match[0].trim()}"`);
    } else {
      console.error(`❌ MISSING: ${check.name}`);
      console.error(`   Expected pattern: ${check.pattern}`);
      console.error(`   Diagnostic: Could not find matches for "${check.desc}"`);
      anyFailed = true;
    }
  }

  // Integration assertion: compare raw grep results to produced summary to prevent regressions
  console.log("\n🧪 Running integration assertion compare...");
  for (const key of Object.keys(checks)) {
    if (rawGrepResults[key] !== resultsMap[key].passed) {
      console.error(`❌ REGRESSION ASSERTION FAILED: rawGrepResults['${key}'] (${rawGrepResults[key]}) does not match resultsMap['${key}'].passed (${resultsMap[key].passed})`);
      process.exit(1);
    }
  }
  console.log("✅ Integration assertions passed: Raw grep results match produced summary map.");

  // Print final summary report
  console.log("\n📊 FINAL SUMMARY REPORT (bin/install.js):");
  console.log("-----------------------------------------");
  for (const [key, result] of Object.entries(resultsMap)) {
    const status = result.passed ? "✅ PASS" : "❌ FAIL";
    console.log(`[${status}] ${result.name} - ${result.desc}`);
    if (!result.passed) {
      console.log(`   Reason: Missing expected integration pattern.`);
    }
  }
  console.log("-----------------------------------------");

  if (anyFailed) {
    console.error("❌ One or more robust validation checks failed inside bin/install.js.");
    process.exit(1);
  } else {
    console.log("🎉 All robust integration validation checks for Google Antigravity passed!");
  }
}

if (require.main === module) {
  validateInstallScript();
}

module.exports = {
  validateInstallScript,
  validatePresence: validateInstallScript
};

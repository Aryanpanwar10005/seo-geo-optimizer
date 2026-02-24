#!/usr/bin/env node

/**
 * SEO & GEO Optimizer — Universal AI IDE Skill Installer
 * Author: Aryan Panwar — https://github.com/Aryanpanwar10005
 *
 * Usage:
 *   npx seo-geo-optimizer            → auto-detects your IDE and installs
 *   npx seo-geo-optimizer --cursor   → force install for Cursor
 *   npx seo-geo-optimizer --windsurf → force install for Windsurf
 *   npx seo-geo-optimizer --copilot  → force install for GitHub Copilot
 *   npx seo-geo-optimizer --lovable  → force install for Lovable
 *   npx seo-geo-optimizer --bolt     → force install for Bolt
 *   npx seo-geo-optimizer --all      → install for all supported IDEs
 *   npx seo-geo-optimizer --help     → show help
 */

const fs    = require('fs');
const path  = require('path');
const https = require('https');

const REPO_RAW       = 'https://raw.githubusercontent.com/Aryanpanwar10005/seo-geo-optimizer/main/skill/SEO_GEO_SKILL.md';
const SKILL_FILENAME = 'SEO_GEO_SKILL.md';
const VERSION        = '1.0.0';

const IDE_TARGETS = {
  cursor: {
    name:      'Cursor',
    detection: ['.cursor', '.cursorrules'],
    primary:   '.cursor/rules/seo-geo-optimizer.mdc',
    fallback:  '.cursorrules',
    note:      'Activates automatically in all Cursor AI and Composer sessions.'
  },
  windsurf: {
    name:      'Windsurf',
    detection: ['.windsurf', '.windsurfrules'],
    primary:   '.windsurf/rules/seo-geo-optimizer.md',
    fallback:  '.windsurfrules',
    note:      'Activates automatically in all Cascade AI sessions.'
  },
  copilot: {
    name:      'GitHub Copilot',
    detection: ['.github/copilot-instructions.md', '.github'],
    primary:   '.github/copilot-instructions.md',
    fallback:  null,
    note:      'Activates in all Copilot Chat sessions in VS Code.'
  },
  lovable: {
    name:      'Lovable',
    detection: ['lovable.config.js', 'lovable.config.ts'],
    primary:   '.ai/seo-geo-optimizer.md',
    fallback:  null,
    note:      'Paste the file contents into your Lovable project system prompt to activate.'
  },
  bolt: {
    name:      'Bolt',
    detection: ['bolt.config.js', '.bolt'],
    primary:   '.bolt/prompt',
    fallback:  null,
    note:      'Appended to your Bolt project prompt file.'
  },
  generic: {
    name:      'Generic / Any AI IDE',
    detection: [],
    primary:   'seo-geo-optimizer.md',
    fallback:  null,
    note:      'Paste the file contents into your AI assistant system prompt or context window.'
  }
};

const c = {
  reset:  '\x1b[0m',
  bold:   '\x1b[1m',
  green:  '\x1b[32m',
  blue:   '\x1b[34m',
  yellow: '\x1b[33m',
  cyan:   '\x1b[36m',
  red:    '\x1b[31m',
  gray:   '\x1b[90m',
  white:  '\x1b[97m',
};

const log = {
  info:    (msg) => console.log(`${c.blue}ℹ${c.reset}  ${msg}`),
  success: (msg) => console.log(`${c.green}✔${c.reset}  ${msg}`),
  warn:    (msg) => console.log(`${c.yellow}⚠${c.reset}  ${msg}`),
  error:   (msg) => console.log(`${c.red}✖${c.reset}  ${msg}`),
  step:    (msg) => console.log(`${c.cyan}→${c.reset}  ${msg}`),
  title:   (msg) => console.log(`\n${c.bold}${c.white}${msg}${c.reset}`),
  divider: ()    => console.log(`${c.gray}${'─'.repeat(58)}${c.reset}`),
  blank:   ()    => console.log(''),
};

function showBanner() {
  console.log(`
${c.bold}${c.cyan}  ╔════════════════════════════════════════════════════════╗
  ║      🔍  SEO & GEO OPTIMIZER  v${VERSION}               ║
  ║  Universal AI Skill · Google · Bing · AI Overviews     ║
  ║  github.com/Aryanpanwar10005/seo-geo-optimizer         ║
  ╚════════════════════════════════════════════════════════╝${c.reset}
`);
}

function showHelp() {
  showBanner();
  console.log(`${c.bold}USAGE${c.reset}
  npx seo-geo-optimizer [option]

${c.bold}OPTIONS${c.reset}
  ${c.cyan}(none)${c.reset}          Auto-detect your IDE and install
  ${c.cyan}--cursor${c.reset}        Install for Cursor
  ${c.cyan}--windsurf${c.reset}      Install for Windsurf
  ${c.cyan}--copilot${c.reset}       Install for GitHub Copilot (VS Code)
  ${c.cyan}--lovable${c.reset}       Install for Lovable
  ${c.cyan}--bolt${c.reset}          Install for Bolt
  ${c.cyan}--all${c.reset}           Install for all supported IDEs at once
  ${c.cyan}--help${c.reset}          Show this help

${c.bold}MANUAL INSTALL${c.reset}
  Copy the raw skill file from:
  ${c.gray}https://raw.githubusercontent.com/Aryanpanwar10005/seo-geo-optimizer/main/skill/SEO_GEO_SKILL.md${c.reset}
  and paste it into your IDE rules or system prompt field.

${c.bold}DOCS${c.reset}
  ${c.gray}https://github.com/Aryanpanwar10005/seo-geo-optimizer${c.reset}
`);
}

function detectIDE(cwd) {
  const detected = [];
  for (const [key, ide] of Object.entries(IDE_TARGETS)) {
    if (key === 'generic') continue;
    for (const signal of ide.detection) {
      if (fs.existsSync(path.join(cwd, signal))) {
        detected.push(key);
        break;
      }
    }
  }
  return detected;
}

function downloadSkill(url) {
  return new Promise((resolve, reject) => {
    const localSkill = path.join(__dirname, '..', 'skill', SKILL_FILENAME);
    if (fs.existsSync(localSkill)) {
      resolve(fs.readFileSync(localSkill, 'utf8'));
      return;
    }
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        downloadSkill(res.headers.location).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} — could not fetch skill file from GitHub`));
        return;
      }
      let data = '';
      res.on('data',  chunk => data += chunk);
      res.on('end',   ()    => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function installToTarget(ideKey, skillContent, cwd) {
  const ide        = IDE_TARGETS[ideKey];
  const targetPath = path.join(cwd, ide.primary);
  const targetDir  = path.dirname(targetPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    log.step(`Created directory: ${c.gray}${targetDir}${c.reset}`);
  }
  if (fs.existsSync(targetPath)) {
    const backup = targetPath + '.backup';
    fs.copyFileSync(targetPath, backup);
    log.warn(`Existing file backed up → ${c.gray}${path.relative(cwd, backup)}${c.reset}`);
  }
  fs.writeFileSync(targetPath, skillContent, 'utf8');
  log.success(`${c.bold}${ide.name}${c.reset} → ${c.green}${path.relative(cwd, targetPath)}${c.reset}`);
  log.info(`${c.gray}${ide.note}${c.reset}`);
  return targetPath;
}

async function main() {
  const args = process.argv.slice(2);
  const cwd  = process.cwd();

  if (args.includes('--help') || args.includes('-h')) {
    showHelp();
    process.exit(0);
  }

  showBanner();
  log.divider();

  let targets = [];

  if (args.includes('--all')) {
    targets = ['cursor', 'windsurf', 'copilot', 'lovable', 'bolt'];
    log.title('Installing for ALL supported IDEs');
  } else if (args.includes('--cursor')) {
    targets = ['cursor'];
    log.title('Installing for Cursor');
  } else if (args.includes('--windsurf')) {
    targets = ['windsurf'];
    log.title('Installing for Windsurf');
  } else if (args.includes('--copilot')) {
    targets = ['copilot'];
    log.title('Installing for GitHub Copilot');
  } else if (args.includes('--lovable')) {
    targets = ['lovable'];
    log.title('Installing for Lovable');
  } else if (args.includes('--bolt')) {
    targets = ['bolt'];
    log.title('Installing for Bolt');
  } else {
    log.title('Auto-detecting your IDE...');
    targets = detectIDE(cwd);
    if (targets.length > 0) {
      log.success(`Detected: ${targets.map(t => IDE_TARGETS[t].name).join(', ')}`);
    } else {
      log.warn('No IDE config files detected in this directory.');
      log.info('Defaulting to generic install → seo-geo-optimizer.md');
      targets = ['generic'];
    }
  }

  log.divider();
  log.title('Downloading SEO & GEO skill file...');

  let skillContent;
  try {
    skillContent = await downloadSkill(REPO_RAW);
    log.success(`Skill file ready (${(skillContent.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    log.error(`Failed to download skill file: ${err.message}`);
    log.blank();
    log.info('Manual install — copy the raw skill file from:');
    log.info(`${c.cyan}https://raw.githubusercontent.com/Aryanpanwar10005/seo-geo-optimizer/main/skill/SEO_GEO_SKILL.md${c.reset}`);
    process.exit(1);
  }

  log.divider();
  log.title('Installing...');
  log.blank();

  const installed = [];
  const failed    = [];

  for (const ideKey of targets) {
    try {
      const filePath = installToTarget(ideKey, skillContent, cwd);
      installed.push({ ide: IDE_TARGETS[ideKey].name, path: path.relative(cwd, filePath) });
      log.blank();
    } catch (err) {
      log.error(`Failed to install for ${IDE_TARGETS[ideKey].name}: ${err.message}`);
      failed.push(IDE_TARGETS[ideKey].name);
    }
  }

  log.divider();

  if (installed.length > 0) {
    log.title('✅  Installation complete!');
    log.blank();
    console.log(`${c.bold}Files installed:${c.reset}`);
    for (const item of installed) {
      console.log(`  ${c.green}${item.ide}${c.reset}  →  ${c.gray}${item.path}${c.reset}`);
    }
    log.blank();
  }

  if (failed.length > 0) {
    log.title('⚠️  Some installs failed:');
    for (const name of failed) {
      console.log(`  ${c.red}${name}${c.reset}`);
    }
    log.blank();
  }

  console.log(`${c.bold}Next step — tell your AI:${c.reset}`);
  console.log(`  ${c.yellow}"Read and activate the SEO & GEO Optimizer skill, then start the process."${c.reset}`);
  log.blank();
  console.log(`${c.gray}Your AI will then:${c.reset}`);
  console.log(`  ${c.gray}1. Read the full skill file and confirm${c.reset}`);
  console.log(`  ${c.gray}2. Ask all 40 intake questions${c.reset}`);
  console.log(`  ${c.gray}3. Run competitor analysis (3–5 real SEO competitors)${c.reset}`);
  console.log(`  ${c.gray}4. Build your Execution Plan Report — waits for approval${c.reset}`);
  console.log(`  ${c.gray}5. Execute phase by phase with your approval at every step${c.reset}`);
  log.blank();
  log.divider();
  console.log(`  ${c.gray}Docs: https://github.com/Aryanpanwar10005/seo-geo-optimizer${c.reset}`);
  log.blank();
}

main().catch(err => {
  log.error(`Unexpected error: ${err.message}`);
  process.exit(1);
});

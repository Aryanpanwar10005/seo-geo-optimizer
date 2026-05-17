const { execSync } = require('child_process');
const path = require('path');

const BIN_PATH = path.resolve(__dirname, '../bin/install.js');

describe('SEO-GEO Optimizer Installer CLI', () => {
  it('should run the help command successfully', () => {
    const output = execSync(`node ${BIN_PATH} --help`).toString();
    expect(output).toContain('USAGE');
    expect(output).toContain('--cursor');
    expect(output).toContain('--dry-run');
  });

  it('should perform a dry run without errors', () => {
    const output = execSync(`node ${BIN_PATH} --all --dry-run`).toString();
    expect(output).toContain('Dry run complete. No files were written.');
    expect(output).toContain('[DRY RUN] Would install');
    expect(output).toContain('Cursor');
    expect(output).toContain('Windsurf');
    expect(output).toContain('Claude Code');
    expect(output).toContain('Trae');
  });
});

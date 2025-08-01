// check https://www.npmjs.com/package/@commitlint/config-conventional for conventional rules

// External Dependencies
import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const commitlintConfig: UserConfig = {
  // 'build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'
  extends: ['@commitlint/config-conventional'],
  rules: {
    "type-enum": [RuleConfigSeverity.Error, "always", ["foo"]],
  },
};

export default commitlintConfig;

// External Dependencies
import type { Configuration } from 'lint-staged';

const formatCheckCommand = 'prettier --check';
const lintCommand = 'eslint';

const lintStagedConfig: Configuration = {
  '*': [formatCheckCommand, lintCommand],
};

export default lintStagedConfig;

const formatCheckCommand = 'prettier --check';
const lintCommand = 'eslint';

const lintStagedConfig = {
    'app/**/*.{ts,tsx}': [formatCheckCommand, lintCommand],
};

export default lintStagedConfig;

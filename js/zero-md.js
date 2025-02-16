// doc: https://zerodevx.github.io/zero-md/?a=advanced-usage.md

import ZeroMd from 'https://cdn.jsdelivr.net/npm/zero-md@3';

customElements.define('zero-md', class extends ZeroMd {
    async load() {
        await super.load();
        this.template = `
<link rel="stylesheet" href="../../../styles/markdown-styles.css" />
`
    }
});

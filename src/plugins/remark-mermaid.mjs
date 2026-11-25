import { visit } from 'unist-util-visit';

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default function remarkMermaid() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'mermaid' || !parent || typeof index !== 'number') return;
      const escaped = escapeHtml(node.value);
      parent.children.splice(index, 1, {
        type: 'html',
        value: `<div class="mermaid-wrapper"><pre class="mermaid">${escaped}</pre></div>`,
      });
    });
  };
}

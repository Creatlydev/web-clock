declare namespace JSX {
  interface IntrinsicElements {
    'typing-effect': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'data-lines'?: string;
      'data-character-delay'?: string;
      'data-line-delay'?: string;
    };
  }
}

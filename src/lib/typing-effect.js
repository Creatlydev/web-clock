const loaded = (function () {
  if (document.readyState === 'complete') {
    return Promise.resolve();
  } else {
    return new Promise(resolve => {
      window.addEventListener('load', resolve);
    });
  }
})();

class TypingEffectElement extends HTMLElement {
  #isTyping = false

  static get observedAttributes() {
    return ['data-lines', 'data-character-delay', 'data-line-delay'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (this.content) {
        this.content.innerHTML = '';
      }
      this.connectedCallback()
    }
  }


  async connectedCallback() {
    await loaded
    if (this.#isTyping) return
    this.#isTyping = true

    if (this.content) await typeLines(this.lines, this.content, this.characterDelay, this.lineDelay);
    if (this.cursor) this.cursor.hidden = true;
    this.lines.length && this.dispatchEvent(
      new CustomEvent('typing:complete', {
        bubbles: true,
        cancelable: true
      })
    )

    this.#isTyping = false
  }

  get content() {
    return this.querySelector('[data-target="typing-effect.content"]');
  }

  get cursor() {
    return this.querySelector('[data-target="typing-effect.cursor"]');
  }

  get lines() {
    const linesAttr = this.getAttribute('data-lines');
    try {
      return linesAttr ? JSON.parse(linesAttr) : [];
    } catch {
      return [];
    }
  }

  get prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion)').matches;
  }

  get characterDelay() {
    if (this.prefersReducedMotion) {
      return 0;
    }
    return Math.max(0, Math.min(Math.floor(Number(this.getAttribute('data-character-delay'))), 2147483647)) || 40;
  }

  set characterDelay(value) {
    if (value > 2147483647 || value < 0) {
      throw new DOMException('Value is negative or greater than the allowed amount');
    }
    this.setAttribute('data-character-delay', String(value));
  }

  get lineDelay() {
    if (this.prefersReducedMotion) {
      return 0;
    }
    return Math.max(0, Math.min(Math.floor(Number(this.getAttribute('data-line-delay'))), 2147483647)) || 40;
  }

  set lineDelay(value) {
    if (value > 2147483647 || value < 0) {
      throw new DOMException('Value is negative or greater than the allowed amount');
    }
    this.setAttribute('data-line-delay', String(value));
  }
}

if (!window.customElements.get('typing-effect')) {
  window.TypingEffectElement = TypingEffectElement;
  window.customElements.define('typing-effect', TypingEffectElement);
}

async function typeLines(lines, contentElement, characterDelay, lineDelay) {
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    if (characterDelay === 0) {
      contentElement.append(lines[lineIndex]);
    } else {
      for (const character of lines[lineIndex].split('')) {
        await wait(characterDelay);
        contentElement.innerHTML += character;
      }
    }

    if (lineDelay !== 0) await wait(lineDelay);
    if (lineIndex < lines.length - 1) contentElement.append(document.createElement('br'));
  }
}

async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export default TypingEffectElement;

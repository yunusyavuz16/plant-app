const JSDOMEnvironment = require('jest-environment-jsdom').default;

class CustomEnvironment extends JSDOMEnvironment {
  constructor(config, context) {
    super(config, context);
    this.global.__ExpoImportMetaRegistry = {};
    this.global.TextDecoder = class TextDecoder {
      decode() {
        return '';
      }
    };
    this.global.TextEncoder = class TextEncoder {
      encode() {
        return new Uint8Array();
      }
    };
  }

  async setup() {
    await super.setup();
  }

  async teardown() {
    await super.teardown();
  }
}

module.exports = CustomEnvironment;
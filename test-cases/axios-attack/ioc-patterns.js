// TEST FIXTURE - Axios supply chain attack IoC signatures for detection testing
// These patterns are stored as inert string constants, not executable code.
// Based on StepSecurity disclosure of the March 2026 axios npm compromise.
//
// The detector uses grep to match these patterns in file contents.
// The exact text must be present for detection, but does not need
// to be executable code.

// C2 domain and IP used by the RAT dropper
const C2_DOMAIN = 'sfrclak.com';
const C2_IP = '142.11.206.73';
const C2_PORT = '8000';

// XOR key used in the obfuscated dropper (setup.js)
const XOR_KEY = 'OrDeR_7077';

// Distinctive User-Agent string used for RAT beaconing
const USER_AGENT = 'mozilla/4.0 (compatible; msie 8.0; windows nt 5.1; trident/4.0)';

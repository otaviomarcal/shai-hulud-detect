// Defanged Keyv/Cacheable loader fixture. It preserves IOC strings only.
import { execFileSync } from "node:child_process";

const D = "/tmp/keyv-cacheable-fixture";
const V = "1.3.13";
const E = "Math_Symbol.js";
const target = "bun-linux-x64";
const url = "https://github.com/oven-sh/bun/releases/download/bun-v" + V + "/" + target + ".zip";
const bunBinary = "bun";
const payloadPath = `${D}/${E}`;

export function describeLoader() {
  return { url, payloadPath };
}

export function inertExecSignature() {
  return 'execFileSync(bunBinary, [payloadPath], { stdio: "inherit", cwd: D });';
}

void execFileSync;
void bunBinary;
void payloadPath;

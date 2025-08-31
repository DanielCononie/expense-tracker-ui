import "@testing-library/jest-dom";
// Polyfill TextEncoder/TextDecoder for jsdom
import { TextEncoder, TextDecoder } from "util";
(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder =
  TextDecoder as unknown as typeof window.TextDecoder;

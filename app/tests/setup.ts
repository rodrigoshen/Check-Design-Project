import "@testing-library/jest-dom";
import { afterEach } from "node:test";
import { afterAll, beforeAll, vi } from "vitest";


afterEach( () => {
    vi.clearAllMocks();
});


beforeAll( () => {
    process.env.GEMINI_API_KEY = "fake_api_key"
});

afterAll( () => {
    delete process.env.GEMINI_API_KEY
});

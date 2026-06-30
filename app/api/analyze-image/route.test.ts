import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

const { mockGenerateContent } = vi.hoisted( () => ({
    mockGenerateContent : vi.fn(),
}))

vi.mock("@google/genai", () => {


    class GoogleGenAI {
        models = { generateContent: mockGenerateContent };
        constructor() {}
    }

    return { GoogleGenAI }

});

import { POST } from "./route";

function makeRequest( body : Record<string, unknown> ) : NextRequest {
    return new NextRequest("http://localhost:3000/api/analyze-image", {
        method : "POST",
        headers : { "Content-Type": "application/json" },
        body : JSON.stringify(body)
    });
}

// helper para avisar o limite de quota

function makeQuotaExceededError() {
    const error = new Error(JSON.stringify({
        error : {
            code : 429,
            message : "You exceeded your current quota, please check your plan and billing details.",
            status : "RESOURCE_EXHAUSTED"
        }
    }));

    error.name = "ApiError"

    return error
}

describe("POST /api/analyze-image", () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should be return 400 if the image does not exist", async () => {
    const req = makeRequest({ mediaType: "image/png" });
    const res = await POST(req);

    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toBe("Invalid Data, check the params");
  });

  it("should be return 400 if the 'mediaType' does not exist", async () => {

    const req = makeRequest({image: "base64string"});
    const res = await POST(req);

    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toBe("Invalid Data, check the params");

  });

  it("should be return all the successful analyze of the data", async () => {

    mockGenerateContent.mockResolvedValueOnce({
        text : "all values are good"
    });

    const req = makeRequest({
        image : "iVBORw0KGgoAAAANSUhEUgAAAAUA",
        mediaType : "image/png"
    });

    const res = await POST(req);

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.result).toBe("all values are good");

  });

  it("should be call the Gemini with correct params", async () => {

    mockGenerateContent.mockResolvedValueOnce({ text : "ok"});

    const req = makeRequest({
        image : "abc123==",
        mediaType : "image/jpeg"
    });

    await POST(req);

    expect(mockGenerateContent).toHaveBeenCalledOnce();
    const args = mockGenerateContent.mock.calls[0][0];
    expect(args.model).toBe("gemini-2.0-flash");
    expect(args.contents[0].parts[0].inlineData).toEqual({
      mimeType: "image/jpeg",
      data: "abc123==",
    });

  });

  it("should be return a fallback string if failed the completion of gemini", async () => {

    mockGenerateContent.mockResolvedValueOnce({ text: undefined });

    const req = makeRequest({
        image : "abc123==",
        mediaType : "image/jpeg"
    })

    const res = await POST(req);

    const body = await res.json();

    expect(body.result).toBe("it was not possible to generate the content");

  });

  it("should be return a 500 status error", async () => {

     mockGenerateContent.mockRejectedValueOnce(new Error("not available API"));

        const req = makeRequest({
            image: "abc123==",
            mediaType: "image/png",
        })

        const res = await POST(req);

        expect(res.status).toBe(500);
        const body = await res.json();
        expect(body.error).toBe("error to analyze the image on the server");

  });

  it("should be return an 429 error status", async () => {

     mockGenerateContent.mockRejectedValueOnce(makeQuotaExceededError());

        const req = makeRequest({
            image: "abc123==",
            mediaType: "image/png",
        });

        const res = await POST(req);

        expect(res.status).toBe(429);
        const body = await res.json();
        expect(body.error).toBe("the api of AI needs more money");

  });

});
const request = require("supertest");
const app = require("./server"); // Ensure the path to your server is correct

describe("API Tests", () => {
  test("GET / should return Hello, World!", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello, World!");
  });

  test("POST /add should return the sum of two numbers", async () => {
    const res = await request(app)
      .post("/add")
      .send({ a: 5, b: 3 });

    expect(res.status).toBe(200);
    expect(res.body.result).toBe(8);
  });
});

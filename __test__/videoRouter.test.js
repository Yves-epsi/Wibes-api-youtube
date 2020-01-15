const supertest = require('supertest')
const app = require('../routes/videoRouter');

describe("Test get all videos", () => {
    it("get all video", () => {
        supertest(app).get('/').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});

describe("Test post 1 video with id", () => {
    it("post 1 video with title", () => {
        supertest(app).post('/e66c1vKjl4o').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});

describe("Test 1 video with id", () => {
    it("get 1 video with id", () => {
        supertest(app).get('/e66c1vKjl4o').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});

describe("Test 1 video with title", () => {
    it("get 1 video with title", () => {
        supertest(app).get('/Sneazzy').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});
const supertest = require('supertest')
const app = require('../routes/videoRouter');

describe("Test get all videos", () => {
    it("get all video", () => {
        supertest(app).get('/').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});


describe("Test 1 video with id", () => {
    it("get 1 video with id", () => {
        supertest(app).get('/VIDEO_ID').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});

describe("Test post all videos about", () => {
    it("Test post all videos about", () => {
        supertest(app).post('/multiple/ID_VIDEO/ID_OTHER_VIDEO').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});

describe("Test 1 video with title", () => {
    it("get 1 video with title", () => {
        supertest(app).get('/TITLE_VIDEO').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});

describe("Test post 1 video with id", () => {
    it("post 1 video with title", () => {
        supertest(app).post('/ID_VIDEO').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});
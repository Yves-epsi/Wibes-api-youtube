const supertest = require('supertest')
const app = require('../routes/playlistRouter');

describe("Test get info playlist", () => {
    it("Test get info playlist", () => {
        supertest(app).get('/').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});


describe("Test 1 playlist with name", () => {
    it("get 1 playlist with name", () => {
        supertest(app).get('name/rap').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});

describe("Test 1 playlist with id", () => {
    it("get 1 playlist with id", () => {
        supertest(app).get('1').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});

describe("Test all user's playlist", () => {
    it("put all user's playlist", () => {
        supertest(app).put('/user/1').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});

describe("Test put (inserting) video in playlist", () => {
    it("Test put (inserting) video in playlist", () => {
        supertest(app).put('/1/WJizkgr2_pY').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});


describe("Test put (deleting) video in playlist", () => {
    it("Test put (deleting) video in playlist", () => {
        supertest(app).put('/delete/1/WJizkgr2_pY').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});

describe("Test delete playlist", () => {
    it("Test delete playlist", () => {
        supertest(app).delete('/2').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});
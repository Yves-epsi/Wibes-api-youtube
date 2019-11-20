class Video {
    constructor(id, title, bio) {
      this.id = id;
      this.title = title;
      this.url = "https://www.youtube.com/watch?v="+id;
      this.bio = bio;
    }
}

module.exports = Video
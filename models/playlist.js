class Playlist {
    constructor(id, title, user) {
      this.id = id;
      this.title = title;
      this.user = user;
      this.videos = [];
    }
    addVideo(video) {
        this.videos.push(video)
    }
    delVideo(video) {
        this.videos.pop(video)
    }
    getVideo(video) {
        this.videos.find(video)
    }
  }
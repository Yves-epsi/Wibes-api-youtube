CREATE TABLE Playlist
(
    idPlaylist INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    videos MEDIUMTEXT NOT NULL,
    idUser INT NOT NUll
);

CREATE TABLE Video
(
    idVideo VARCHAR(200)NULL,
    title VARCHAR(200) NOT NULL,
    url MEDIUMTEXT NOT NULL,
    bio MEDIUMTEXT
)
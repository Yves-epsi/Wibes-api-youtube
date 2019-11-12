package com.wibesPlaylist.wibesPlaylist.web.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MusiqueController {
    @RequestMapping(value="/Musiques", method= RequestMethod.GET)
    public String listeMusiques() {
        return "Un exemple de musique";
    }
}
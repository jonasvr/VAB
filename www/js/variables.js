var locations = {
        punt1:{     lat:51.210127, long:4.342398, sound:null, passed:null, duration:null},
        punt2:{     lat:51.208749, long:4.339040, sound:null, passed:null, duration:null},
        punt3:{     lat:51.207526, long:4.339169, sound:null, passed:null, duration:null},
        punt4:{     lat:51.206164, long:4.343334, sound:null, passed:null, duration:null},
        punt5:{     lat:51.206550, long:4.339889, sound:null, passed:null, duration:null}, //nog in te vullen
        punt6:{     lat:51.207894, long:4.337109, sound:null, passed:null, duration:null},
        punt7:{     lat:51.207894, long:4.337109, sound:null, passed:null, duration:null},
        punt8:{     lat:51.207894, long:4.337109, sound:null, passed:null, duration:null},
        test1:{     lat:51.193966, long:4.411996, sound:null, passed:null, duration:null},
        test2:{     lat:51.194580, long:4.411580, sound:null, passed:null, duration:null},
};

var current = {lat:null,long:null};

var maxDistance = 0.2 // => in km

var watchID = null;

var playing = 0;

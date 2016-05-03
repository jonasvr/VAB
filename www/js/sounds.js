function loadSounds(){
    locations.punt1 = new Media("punt1.mp3",onSucces,onError);
    locations.punt1.duration = 6500;

    locations.punt2.sound = new Media("punt2.mp3",onSucces,onError);
    locations.punt2.duration = 3500;

    locations.punt3.sound = new Media("punt3.mp3",onSucces,onError);
    locations.punt3.duration = 5500;

    locations.punt4.sound = new Media("punt4.mp3",onSucces,onError);
    locations.punt4.duration = 6500;

    locations.punt5.sound = new Media("punt5.mp3",onSucces,onError);
    locations.punt5.duration = 5500;

    locations.punt6.sound = new Media("punt6.mp3",onSucces,onError);
    locations.punt6.duration = 6500;

    locations.punt7.sound = new Media("punt7.mp3",onSucces,onError);
    locations.punt7.duration = 7500;

    locations.punt8.sound = new Media("punt8.mp3",onSucces,onError);
    locations.punt8.duration = 6500;

    locations.test1.sound = new Media("test1.mp3",
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    locations.test1.duration = 4000;

    locations.test2.sound = new Media("test2.mp3",
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    locations.test2.duration = 5000;
    console.log('songs loaded');

}

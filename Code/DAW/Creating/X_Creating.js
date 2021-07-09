"use strict";
var piano;
(function (piano) {
    var mp3sounds = ["/Code/Piano_Sounds/Piano_c.mp3", "/Piano_Sounds/Piano_c#.mp3", "/Piano_Sounds/Piano_d.mp3", "/Piano_Sounds/Piano_d#.mp3", "Piano_Sounds/Piano_e.mp3", "Piano_Sounds/Piano_f.mp3", "Piano_Sounds/Piano_f#.mp3", "Piano_Sounds/Piano_g.mp3", "Piano_Sounds/Piano_g#.mp3", "Piano_Sounds/Piano_a.mp3", "Piano_Sounds/Piano_a#.mp3", "Piano_Sounds/Piano_h.mp3"];
    window.addEventListener("load", function () {
        document.getElementById("Rechteck_46").addEventListener("mousedown", function () { playSample(0); });
        document.getElementById("Rechteck_53").addEventListener("mousedown", function () { playSample(1); });
        document.getElementById("Rechteck_49").addEventListener("mousedown", function () { playSample(2); });
        document.getElementById("Rechteck_55").addEventListener("mousedown", function () { playSample(3); });
        document.getElementById("Rechteck_47").addEventListener("mousedown", function () { playSample(4); });
        document.getElementById("Rechteck_50").addEventListener("mousedown", function () { playSample(5); });
        document.getElementById("Rechteck_54").addEventListener("mousedown", function () { playSample(6); });
        document.getElementById("Rechteck_48").addEventListener("mousedown", function () { playSample(7); });
        document.getElementById("Rechteck_56").addEventListener("mousedown", function () { playSample(8); });
        document.getElementById("Rechteck_51").addEventListener("mousedown", function () { playSample(9); });
        document.getElementById("Rechteck_57").addEventListener("mousedown", function () { playSample(10); });
        document.getElementById("Rechteck_52").addEventListener("mousedown", function () { playSample(11); });
    });
    function playSample(bNumber) {
        var sound = new Audio(mp3sounds[bNumber]);
        sound.play();
    }
})(piano || (piano = {}));
//# sourceMappingURL=X_Creating.js.map
dojo.require('dojo.fx');

dojo.ready(function () {

    var slideAwayButtonSplit = dojo.byId('slideAwayButton_split');

    var dualView = false;
    var fs, f2;
    dojo.connect(slideAwayButtonSplit, 'onclick', function (evt) {
        if (dualView) {
            fs.removeChild(parent.document.getElementById('frame2'));
            fs = parent.document.getElementById('frameset');
            fs.cols = '100%';
            dualView = false;
        } else {
            fs = parent.document.getElementById('frameset');
            f2 = top.document.createElement('frame');
            fs.cols = '50%,50%';
            f2.name = 'frame2';
            f2.id = 'frame2';
            f2.src = 'map.html';
            fs.appendChild(f2);
            dualView = true;
        }

        /* jshint ignore:start */
        window.setTimeout('fullExtent(); fullExtent();', 500);
        /* jshint ignore:end*/
    });

});

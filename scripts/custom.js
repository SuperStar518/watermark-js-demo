setTimeout(function() {
    var text = watermark.text;
    var options = {
        init(img) {
            img.crossOrigin = "anonymous";
        }
    };
    watermark(["https://kindy.jp/page/staff/img/img_maintop_enji.png"], options)
        .image(text.center("KINDY", "60px serif", "green", 0.5))
        .then(function(img) {
            // refer to `img.src`
            console.log(img.src);
            var pre = document.querySelector("#center-placed pre");
            pre.parentNode.insertBefore(img, pre);
        });

    watermark(['https://kindy.jp/manager/dashboard/img/happy_children.jpg'], options)
        .image(text.lowerLeft('watermark.js', '60px Josefin Slab', 'red', 0.5))
        .then(function(img) {
            var pre = document.querySelector('#lower-left pre');
            pre.parentNode.insertBefore(img, pre);
        });
}, 1000);

hljs.initHighlightingOnLoad();
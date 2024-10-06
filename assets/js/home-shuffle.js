document.addEventListener("DOMContentLoaded", function(event) {
    var Shuffle = window.Shuffle;

    var myShuffle = new Shuffle(document.querySelector('.my-shuffle'), {
        itemSelector: '.image-item',
        // sizer: '.my-sizer-element',
        columnWidth: (containerWidth) => containerWidth,
        buffer: 1,
    });

    window.jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });
});



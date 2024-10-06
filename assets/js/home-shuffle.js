var Shuffle = window.Shuffle;

var Demo = function () {
    this.shuffle = new Shuffle(document.querySelector('.my-shuffle'), {
        itemSelector: '.image-item',
        // sizer: '.my-sizer-element',
        columnWidth: (containerWidth) => containerWidth,
        buffer: 1,
    });

// Add Infinite Scroll Functionality Below:
    var callback = this.showItemsInViewport.bind(this);
    this.observer = new window.IntersectionObserver(callback, {
        threshold: 0.5,
    });

// Loop through each grid item and add it to the viewport watcher.
    for (var i = 0; i < this.gridItems.length; i++) {
        this.observer.observe(this.gridItems[i]);
    }

// Add the transition class to the items after ones that are in the viewport
// have received the `in` class.
    setTimeout(function () {
        this.addTransitionToItems();
    }.bind(this), 100);
};

/**
 * Add the `in` class to the element after it comes into view.
 */
Demo.prototype.showItemsInViewport = function (changes) {
    changes.forEach(function (change) {
        if (change.isIntersecting) {
            change.target.classList.add('in');
        }
    });
};

/**
 * Only the items out of the viewport should transition. This way, the first
 * visible ones will snap into place.
 */
Demo.prototype.addTransitionToItems = function () {
    for (var i = 0; i < this.gridItems.length; i++) {
        var inner = this.gridItems[i].querySelector('.picture-item__inner');
        inner.classList.add('picture-item__inner--transition');
    }
};




window.jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            Demo.filter(input.value);
        }
});

 document.addEventListener('DOMContentLoaded', function () {
     window.demo = new Demo();
 });
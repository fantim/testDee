
var Shuffle = window.Shuffle;
class Demo {
    constructor() {
        this.element = document.querySelector('.my-shuffle')
        this.gridItems = this.element.querySelectorAll('.image-item');
        var myShuffle = new Shuffle(this.element, {
        // var myShuffle = new Shuffle(this.element, {
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

        this.observer = new IntersectionObserver(callback, {
            threshold: 0.5,
        });

        // Loop through each grid item and add it to the viewport watcher.
        for (let i = 0; i < this.gridItems.length; i++) {
            this.observer.observe(this.gridItems[i]);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    window.demo = new Demo(document.getElementById('.my-shuffle'));
});

// document.addEventListener("DOMContentLoaded", function(event) {
//
//     this.gridItems = this.element.querySelectorAll('.image-item');
//
//     var myShuffle = new Shuffle(document.querySelector('.my-shuffle'), {
//         itemSelector: '.image-item',
//         // sizer: '.my-sizer-element',
//         columnWidth: (containerWidth) => containerWidth,
//         buffer: 1,
//     });
//
//
//
//     // Try Infinite Scroll
//     const callback = this.showItemsInViewport.bind(this);
//     this.observer = new IntersectionObserver(callback, {
//         threshold: 0.5,
//     });
//
//     // Loop through each grid item and add it to the viewport watcher.
//     for (let i = 0; i < this.gridItems.length; i++) {
//         this.observer.observe(this.gridItems[i]);
//     }
//
//     // Add the transition class to the items after ones that are in the viewport
//     // have received the `in` class.
//     setTimeout(() => {
//         this.addTransitionToItems();
//     }, 100);
//
//         /**
//      * Add the `in` class to the element after it comes into view.
//      */
//     showItemsInViewport(changes) {
//         changes.forEach(function (change) {
//             if (change.isIntersecting) {
//                 change.target.classList.add('in');
//             }
//         });
//     }
//
// });


// class Demo {
//     constructor() {
//         this.element = document.getElementById('grid');
//         this.gridItems = this.element.querySelectorAll('.js-item');
//         const sizer = this.element.querySelector('.js-sizer-element');
//
//         this.shuffle = new Shuffle(this.element, {
//             itemSelector: '.js-item',
//             sizer: sizer,
//             buffer: 1,
//         });
//
//         const callback = this.showItemsInViewport.bind(this);
//         this.observer = new IntersectionObserver(callback, {
//             threshold: 0.5,
//         });
//
//         // Loop through each grid item and add it to the viewport watcher.
//         for (let i = 0; i < this.gridItems.length; i++) {
//             this.observer.observe(this.gridItems[i]);
//         }
//
//         // Add the transition class to the items after ones that are in the viewport
//         // have received the `in` class.
//         setTimeout(() => {
//             this.addTransitionToItems();
//         }, 100);
//     }
//
//     /**
//      * Add the `in` class to the element after it comes into view.
//      */
//     showItemsInViewport(changes) {
//         changes.forEach(function (change) {
//             if (change.isIntersecting) {
//                 change.target.classList.add('in');
//             }
//         });
//     }
//
//     /**
//      * Only the items out of the viewport should transition. This way, the first
//      * visible ones will snap into place.
//      */
//     addTransitionToItems() {
//         for (let i = 0; i < this.gridItems.length; i++) {
//             const inner = this.gridItems[i].firstElementChild;
//             inner.classList.add('picture-item__inner--transition');
//         }
//     }
// }
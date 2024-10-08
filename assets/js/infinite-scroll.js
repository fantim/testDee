//-------------------------------------//
// init Infinte Scroll

let $container = $('.container').infiniteScroll({
    path: '.pagination__next',
    append: '.post',
    status: '.page-load-status',
});

// get Infinite Scroll instance
let infScroll = $container.data('infiniteScroll');

let $statusBar = $('.status-bar');

$container.on( 'load.infiniteScroll', function() {
    $statusBar.text(`Loaded page: ${infScroll.pageIndex}`);
});
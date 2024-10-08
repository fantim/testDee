<script src="https://unpkg.com/infinite-scroll@4/dist/infinite-scroll.pkgd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

document.addEventListener('DOMContentLoaded', function () {
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

    $container.on('load.infiniteScroll', function () {
        $statusBar.text(`Loaded page: ${infScroll.pageIndex}`);
    });
});
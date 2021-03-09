
console.log('hi');

// cards to cart
let count = 0;
$(".cart-btn").on("click", function () {
  let cart = $(".card-nav");
  let imgtodag = $(this)
    .parent('.buttons')
    .parent('.content')
    .parent('.card')
    .find('img')
    .eq(0);

    if (imgtodag) {
      let imgclone = imgtodag
      .clone()
      .offset({
        top: imgtodag.offset().top,
        left: imgtodag.offset().left,
      })
      .css ({
        opacity: '0.8',
        position: 'absolute',
        height: '150px',
        width: '150px',
        objectFit: 'cover',
        'z-index': '100'
      })
      .appendTo($('body'))
      .animate(
        {
          top: cart.offset().top + 20,
          left: cart.offset().left + 30,
          height: 75,
          width: 75
        },
        1000,
        "easeInOutExpo"
      );
      setTimeout(function() {
        count++;
        $('.card-nav .item-count').text(count);
      }, 1500);
      imgclone.animate(
        {
          width: 0,
          height: 0
        },
        function() {
          $(this).detach();
        }
      );
    }
});


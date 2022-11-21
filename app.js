(function($){
	$('.clear-notifications').on('click', function(e) {
		e.preventDefault();
		$('.notification-item').removeClass('unread');

		$('.notifications-amount').html(0);
	});
})(jQuery);
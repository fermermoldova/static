(function($){ 
	$.fn.extend({
		imgurflash: function(options) {
			//default values
			var defaults = {
				image_width:800, 
				image_height:600, 
				extension:'png',
				scaling:'fit'
			}
				 
			var options =  $.extend(defaults, options);

			return this.each(function() {
				var o = options;
				o.fieldId = $(this).attr('id');
				var flashContainer = $('<span style="display:inline-block"></span>').insertAfter($(this));
				flashContainer.flash({	
					swf: options.swfpath || 'swf/imgurflash.swf',
					width: 75,
					height: 20,
					wmode:'transparent',
					flashvars:o
				});
				flashContainer.css('margin-top','5px');
				flashContainer.css('padding-left','5px');
			});
		}
	});
})(jQuery);
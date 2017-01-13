(function( $ ){

  var methods = {
     init : function( options ) {
		//todo:
		//- options for toolbars, 
		//- options for width and height
		
	   var editorPath = options && options.editorPath || 'editor.html';
	   var width = options && options.width || 400;
	   var height = options && options.height || 300;
       return this.each(function(){			
			var o = $(this);
			var ifrm = $('<iframe src="'+editorPath+'" frameborder="0" allowtransparency="true"></iframe>').insertBefore(o);
			o.hide();
			ifrm.width(width).height(height);
			ifrm.load(function(){
				ifrm.contents().get(0).setHtml(o.val());
			});
			o.parents('form').submit(function(submit){
				var c = ifrm.contents().get(0).getHtml();
				//alert(c);
				o.val(c);
			});
       });

     },
     destroy : function( ) {

       return this.each(function(){
         $(window).unbind('.tooltip');
       })

     }
  };

  $.fn.bolteditor = function( method ) {
    
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.bolteditor' );
    }
  };

})( jQuery );
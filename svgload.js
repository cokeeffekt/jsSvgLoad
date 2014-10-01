	var svgLoad = {
		init: function(filePath) {
			if(!$) return false;
			if(localStorage.getItem('_svgLoad_data') != null) { svgLoad.build(); return true; } 
			$.get(filePath, function(data){ localStorage.setItem('_svgLoad_data', data); svgLoad.build(); });
		},
		build: function(){
			var data = localStorage.getItem('_svgLoad_data');
			$(function(){
				$('body').append('<div style="display:none;">'+data+'</div>');
				$('svg[data-svg]').each(function(){
					$(this).append($($(this).attr('data-svg')));
				});
			});
		}
	}

	svgLoad.init('assets/sprites/sprites.html');
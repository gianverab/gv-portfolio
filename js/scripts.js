
$(document).ready(function(){

	$('#navigation a').on('click', function(){
		//Assignment of the 'active' class on navigation
		$('#navigation li.active').removeClass('active');
		$(this).parent().addClass('active');

		//Getting the value of 'a' for images categories
		var $category = $(this).text().toLowerCase();

		if($category == 'all'){
			$('#gallery .hidden').fadeIn('slow').removeClass('hidden');

		}else{
			$('#gallery div').each(function(){
				if(!$(this).hasClass($category)){
					$(this).hide().addClass('hidden');
				}else{
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		//Change the heading title on navigation click
		var $mainContent = $(this).parent().closest('.top-nav').next('.main-content');

		$mainContent.find('#heading').text(function(){
			if($category == 'frontend'){
				return 'Projects where I used AngularJs, EmberJs, MeteorJs and more!';
			}
			else if($category == 'mobile'){
				return 'Ionic, React Native and PhoneGap help me to build hybrid apps!';
			}
			else if($category == 'ui'){
				return 'I used Material Design in order to create great interfaces!';
			}
			else {
				return 'The complete collection of my work!';
			}
		});

	});

});
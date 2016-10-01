var view={
  flickr_call:function(searchItem){
  	var flickrURL='https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
  	var flickrOptions={
  		tags:searchItem,
  		format:'json'
  	};
  	function display_photos(response){
  		var photosList=document.querySelector('.photos-list');
  		photosList.innerHTML='';
  		response.items.forEach(function(photo){
  			var img=document.createElement('img');
  			img.src=photo.media.m;

  			var imgLink=document.createElement('a');
  			imgLink.href=photo.link;
  			imgLink.className='image';
  			imgLink.appendChild(img);

  			var liTag=document.createElement('li');
  			liTag.classList.add('grid-25');
  			liTag.classList.add('tablet-grid-50');
  			liTag.appendChild(imgLink);

  			photosList.appendChild(liTag);
  		});
  	}
  	$.getJSON(flickrURL,flickrOptions,display_photos);
  }

};//End view

var options = {

		thumbnailData: [{
			title: 'See Tutorial',
			number: '32',
			header: 'React',
			description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
			imageUrl: 'http://formatjs.io/img/react.svg'
		},{
			title: 'See Tutorial',
			number: '12',
			header: 'Learn Gulp',
			description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
			imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
	}]
};

// react render this shit
var element = React.createElement(ThumbnailList, options);
	
// after, place it in my body tag
React.render(element, document.querySelector('.container'));
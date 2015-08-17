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
var Badge = React.createClass({displayName: "Badge",
		render: function(){

			return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
  				this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
			)	
		}
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
	render: function() {
		var list = this.props.thumbnailData.map(function(thumbnailProps){
				return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
		});
		return React.createElement("div", null, 
				list
		)
	}
});
var Thumbnail = React.createClass({displayName: "Thumbnail",
		render: function() {
			return React.createElement("div", {className: "thumbnail"}, 
      			React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
      			React.createElement("div", {className: "caption"}, 
        			React.createElement("h3", null, this.props.header), 
        			React.createElement("p", null, this.props.description), 
        			React.createElement("p", null, 
        				React.createElement(Badge, {title: this.props.title, number: this.props.number})
        			)
      			)
    		)
		}
});
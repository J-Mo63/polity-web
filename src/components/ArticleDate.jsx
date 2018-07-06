import React from 'react'
import PropTypes from 'prop-types'
import Subheading from "./Subheading";

const ArticleDate = ({ date }) => (
	<div>
        <Subheading text={ formatDate(date, "year") } />
        <p className="text-lg">{ formatDate(date, "date/monthString") }</p>
	</div>
);

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const formatDate = (date, format) => {
	let d = new Date(date);
	switch(format) {
	    case "year":
	        return d.getFullYear().toString();;
	        break;
	    case "date/monthString":
	        return d.getDate() + " " + monthNames[d.getMonth()];
	    default:
	        return d.toString();
	}
};

ArticleDate.propTypes = {
  date: PropTypes.string.isRequired
};

export default ArticleDate
import React from 'react'
import PropTypes from 'prop-types'
import './article-date.css'

const ArticleDate = ({ date }) => (
	<div>
        <p className="article-date-year-text" >{ formatDate(date, "year") }</p>
        <p className="article-date-day-text">{ formatDate(date, "date/monthString") }</p>
	</div>
);

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const formatDate = (date, format) => {
	let d = new Date(date);
	switch(format) {
	    case "year":
	        return d.getFullYear().toString();
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
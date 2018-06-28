import React from 'react'
import PropTypes from 'prop-types'
import Subheading from "./Subheading";

const ArticleDate = ({ date }) => (
	<div className="center-pad">
        <Subheading text={formatDate(date, "year")} styles={"faded-dark"} />
		<Subheading text={formatDate(date, "date/monthString")} />
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
	        break;
	    default:
	        return d.toString();
	}
};

ArticleDate.propTypes = {
  date: PropTypes.string.isRequired
}

export default ArticleDate
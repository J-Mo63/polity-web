import React from 'react'
import PropTypes from 'prop-types'
import Link from "react-router-dom/es/Link";
import "./article-thumb.css"

const ArticleThumb = ({ article, isFeatured }) => (
    <div className={ isFeatured ? "article-thumb-featured" : "article-thumb" }>
        <div className={ isFeatured ? "article-thumb-featured-content" : "article-thumb-content" }>
            <div className={ isFeatured ? "article-thumb-featured-image-container"
                : "article-thumb-image-container" }>
                <img className="article-thumb-image" src="https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1028x675/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F410fb18417446609f24cc1ff37308d0c%2F205176922%2Ffacebook-ceo-mark-zuckerberg-delivers-the-keynote-address-at-f8-on-picture-id669889770" alt="<description here>"/>
            </div>
            <br/>
            <div className={ isFeatured ? "" : "article-thumb-text" }>
                <div className="article-thumb-title-link">
                    <Link to="/article/test">
                        <p className={ isFeatured ? "article-thumb-featured-title"
                            : "article-thumb-title" }>
                            Facebook, and Better Data Protections
                        </p>
                    </Link>
                </div>
                <p className={ isFeatured ?
                    "article-thumb-featured-caption"
                    : "article-thumb-caption" }>
                    Do we need to regulate Facebook to provide privacy protections for its users?
                </p>
                <p>By&nbsp;
                    <Link to="/user/0">Lachlan Cheney</Link>
                    &nbsp;| { formatDate("06/10/2018", "monthString/date") }
                </p>
            </div>
        </div>
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
        case "monthString/date":
            return monthNames[d.getMonth()] + " " + d.getDate();
        default:
            return d.toString();
    }
};

ArticleThumb.propTypes = {
    article: PropTypes.any,
    isFeatured: PropTypes.bool.isRequired
};

export default ArticleThumb
import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component to render structured blog content
 * @param {Array} content - Array of content items (strings or objects with subheading and paragraphs)
 */
const BlogContent = ({ content }) => {
    const renderContent = (contentItems) => {
        return contentItems.map((item, index) => {
            // If item is a simple paragraph string
            if (typeof item === 'string') {
                return <p className="mb-4" key={index}>{item}</p>;
            }
            // If item is a structured section with subheading and paragraphs
            else if (item.subheading) {
                return (
                    <div key={index}>
                        <h4 style={{padding: '2px', marginTop: '0px', marginLeft: '20px'}}>{item.subheading}</h4>
                        {item.paragraphs.map((paragraph, pIndex) => (
                            <p style={{padding: '2px', marginTop: '0px', marginLeft: '20px'}} key={pIndex}>{paragraph}</p>
                        ))}
                    </div>
                );
            }
            return null;
        });
    };

    return (
        <div className="blog-content">
            {renderContent(content)}
        </div>
    );
};

BlogContent.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                subheading: PropTypes.string.isRequired,
                paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired
            })
        ])
    ).isRequired
};

export default BlogContent;
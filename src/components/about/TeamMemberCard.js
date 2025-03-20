import React from 'react';
import PropTypes from 'prop-types';

const TeamMemberCard = ({ member, delay }) => {
    return (
        <div className="col-md-12 col-lg-6 col-xl-3 wow fadeInUp align-items-center" data-wow-delay={delay}>
            <div className="team-item">
                <div className="team-img">
                    <img src={member.image} className="img-fluid" alt={`${member.name} ${member.position} at MGA & Associates`} />
                </div>
                <div className="team-title">
                    <h4 className="mb-0">{member.name}</h4>
                    <p className="mb-0">{member.position}</p>
                    <p className="mb-0" style={{ whiteSpace: 'pre-line' }}>{member.qualifications}</p>
                </div>
            </div>
        </div>
    );
};

TeamMemberCard.propTypes = {
    member: PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        qualifications: PropTypes.string,
        image: PropTypes.string.isRequired
    }).isRequired,
    delay: PropTypes.string
};

TeamMemberCard.defaultProps = {
    delay: '0.2s'
};

export default TeamMemberCard;
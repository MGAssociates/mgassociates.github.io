import React from 'react';
import { teamMembersData } from '../../data/teamData';
import TeamMemberCard from './TeamMemberCard';

const TeamSection = () => {
    return (
        <div className="container-fluid team pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                    <h4 className="text-primary">Expert Team</h4>
                    <h2 className="display-5 mb-4">Passion Meets Expertise</h2>
                </div>
                <div className="row g-4">
                    {teamMembersData.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            member={member}
                            delay="0.2s"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
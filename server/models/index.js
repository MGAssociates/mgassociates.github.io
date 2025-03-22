// server/models/index.js
const mongoose = require('mongoose');
const {
    ServiceSchema,
    TeamMemberSchema,
    TestimonialSchema,
    PartnerSchema,
    CredentialSchema,
    StatSchema,
    IndustrySchema,
    BlogPostSchema
} = require('./schemas');

// Create models from schemas
const Service = mongoose.model('Service', ServiceSchema);
const TeamMember = mongoose.model('TeamMember', TeamMemberSchema);
const Testimonial = mongoose.model('Testimonial', TestimonialSchema);
const Partner = mongoose.model('Partner', PartnerSchema);
const Credential = mongoose.model('Credential', CredentialSchema);
const Stat = mongoose.model('Stat', StatSchema);
const Industry = mongoose.model('Industry', IndustrySchema);
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = {
    Service,
    TeamMember,
    Testimonial,
    Partner,
    Credential,
    Stat,
    Industry,
    BlogPost
};
// server/models/schemas.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Schemas
const ServiceSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const TeamMemberSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    qualifications: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const TestimonialSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const PartnerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CredentialSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ['certificate', 'empanelment', 'experience'],
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    icon: {
        type: String,
        required: false
    },
    details: {
        type: String,
        required: false
    },
    order: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const StatSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    value: {
        type: Number,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const IndustrySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    icon: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    summary: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    publishedAt: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Export schemas
module.exports = {
    ServiceSchema,
    TeamMemberSchema,
    TestimonialSchema,
    PartnerSchema,
    CredentialSchema,
    StatSchema,
    IndustrySchema,
    BlogPostSchema
};
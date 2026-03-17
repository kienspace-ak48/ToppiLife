const mongoose = require('mongoose');

const PageConfigSchema = new mongoose.Schema({
    author: {
        name: { type: String, default: '--Kien' },
        ver: { type: String, default: '1.0' },
    },
    hero: {
        title_line1: String,
        title_line2: String,
        title_line3: String,
        desc: String,
        bubble_1: String,
        bubble_2: String,
        bubble_3: String,
        images: [{ primary: String, secondary: String, summary: String, _id: false }],
        issues: [{ title: String, desc: String, _id: false }],
        title_summary: String,
    },
    solution: {
        title: String,
        desc: String,
        cards: [
            {
                img: String,
                title: String,
                mechanismofoperation: [{ desc: String, _id:false }],
                purpose: [{ desc: String, _id: false }],
                _id: false,
            },
        ],
    },
    product: {
        title: String,
        img: String,
    },
    benefit: {
        title: String, 
        cards:[
            {title: String, img: String, desc: String, _id: false}
        ]
    },
    whychooseus:{
        title: String,
        cards:[
            {title: String, subtitle: String}
        ],
        img: String,
        ifyou:{
            title: String,
            line1: String, 
            line2: String,
            line3: String,
            summary: String
        },
        video: String
    },
    feedback:{
        title: String,
        cards: [
            {quote: String, img: String, name: String, job: String, _id:false}
        ]
    },
    commitment:{
        title: String,
        cards: [],
    }
    ,
    voucher:{
        title: String,
        img: String,
        icon: String,
        lines: [],
        end_date: String,
        // percent: Number
    },
    pageinfo:{
        footer_title: String,
        og_share: String,
        phone: String,
        zalo:String,
        email: String,
        address: String,
        title: String,
        desc: String,
        keywords: String,
        gg_a: String,
        gg_wt: String,
    }
});

module.exports = mongoose.model('pageconfig', PageConfigSchema);

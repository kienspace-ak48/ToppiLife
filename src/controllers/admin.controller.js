const VNAME = 'admin/';
const VLAYOUT = 'layouts/adminLayout';
const CNAME = 'admin.controller.js';

const PageConfigService = require('../services/pageconfig.service');
const ImageService = require('../services/image.service');
const imageService = require('../services/image.service');
const VideoEntity= require('../models/Video');

const dataTransfer = (data) => {
    const dataTransfer = {
        hero: {
            title_line1: data.hero.title_line1,
            title_line2: data.hero.title_line2,
            title_line3: data.hero.title_line3,
            desc: data.hero.desc,
            bubble_1: data.hero.bubble_1,
            bubble_2: data.hero.bubble_2,
            bubble_3: data.hero.bubble_3,
            images: data.hero.imgs,
            issues: data.hero.issues,
            title_summary: data.hero.title_summary
        },
        solution: {
            title: data.solution.title,
            desc: data.solution.desc,
            cards: data.solution.cards,
        },
        product: {
            title: data.product.title,
            img: data.product.img
        },
        benefit: {
            title: data.benefit.title,
            cards: data.benefit.cards
        },
        whychooseus: {
            video: data.whychooseus.video,
            title: data.whychooseus.title,
            cards: data.whychooseus.cards,
            img: data.whychooseus.img,
            ifyou: data.whychooseus.ifyou
        },
        feedback: {
            title: data.feedback.title,
            cards: data.feedback.cards
        },
        commitment: {
            title: data.commitment.title,
            icons: data.commitment.icons,
            descs: data.commitment.descs,
        },
        voucher: {
            title: data.voucher.title,
            img: data.voucher.img,
            end_date: data.voucher.end_date,
            percent: data.voucher.percent
        },
        pageinfo: {
            phone: data.pageinfo.phone,
            email: data.pageinfo.email,
            address: data.pageinfo.address
        }
    };
    return dataTransfer;
};
// 
async function GetAllImageHelper(){
    const result = await imageService.GetAll();
    console.log(result);
}
// 
const AdminController = {
    Index: (req, res) => {
        res.render(VNAME + 'index', { layout: VLAYOUT, title: 'Admin' });
    },
    PageConfig:async (req, res) => {
        const pc =await PageConfigService.getAll();
        const imgList = await ImageService.GetAll();
        const videos = await VideoEntity.find().lean();
        // console.log(videos);
        res.render(VNAME + 'pageconfig/index', { layout: VLAYOUT, title: 'Page config', pc:pc||{}, imgs:imgList||[] , videos: videos||[]});
    },
    SaveConfig: async (req, res) => {
        const data = req.body;
        try {
            const dto = dataTransfer(data);
            const result = await PageConfigService.create(dto);
            console.log(result);
            if (!result) {
                throw new Error('save failed');
            }
            res.json({ success: true, mess: result });
        } catch (error) {
            console.log(CNAME, error.message);
            res.status(500).json({ success: false, mess: error.message });
        }
    },
};

module.exports = AdminController;

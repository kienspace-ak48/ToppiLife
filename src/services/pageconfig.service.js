const PageConfigEntity = require('../models/PageConfig');
const SNAME = 'pageconfig.service.js';
class PageConfigService {
    constructor(parameters) {
        console.log('Initial PageConfigService');
    }
    //R all
    async getAll() {
        try {
            const pc = await PageConfigEntity.findOne({}).lean();
            return pc;
        } catch (error) {
            console.log(SNAME, error.message);
            return {};
        }
    }
    // C
    async create(pconfig) {
        try {
            const result = await PageConfigEntity.findOneAndUpdate({}, { $set: pconfig }, { upsert: true, new: true });
            return true;
        } catch (error) {
            console.log(SNAME, error.message);
            return false;
        }
    }
    // U
    async update() {}
    // D
    async delete() {}
    // R by id
    async findById(id) {}
}

module.exports = new PageConfigService(); //export kieu sigleton

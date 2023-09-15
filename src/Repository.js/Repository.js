import mongoose from 'mongoose';

class Repository{
    static async create(model, input){
        await model.create(input)
    }

    static async findAll(model){
        const response = await model.find()
        return response
    }

    static async findById(model, id){
        const response = await model.findOne({_id: id})
        return response
    }

    static async updateById(model, id, input){
        const response = await model.updateOne({_id:id}, input)
        return response
    }

    static async deleteById(model, id){
        const response = await model.findOneAndDelete({_id:id})
        return response
    }

    static async findByKey(model, key, value){
        const response = await model.findOne({[key]:value})
    }
};

export default Repository;
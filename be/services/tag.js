const { type } = require("express/lib/response");


const tagModel = require("../model/tag");

class Tag {

        static addTag = async (data) => {
                try {
                        const query = {
                                name : data.name,
                                description : data.description                                
                        }
                        const tag = new tagModel(query);
                        const result = tag.save();
                        if(result)
                        {
                                return result;
                        }
                        else{
                                return {};
                        }
                }
                catch(err){
                        console.log(err);
                        console.log("Some unexpected error occured while adding tag")
                }
        }


        static getPopularTags = async (data) => {
                try {                        
                        const result = tagModel.find({}).sort({"count":-1});
                        if(result)
                        {
                                return result;
                        }
                        else{
                                return {};
                        }
                }
                catch(err){
                        console.log(err);
                        console.log("Some unexpected error occured while displaying popular tag")
                }
        }

        static getNewTags = async (data) => {
                try {                        
                        const result = tagModel.find({}).sort({"createdAt":1});
                        if(result)
                        {
                                return result;
                        }
                        else{
                                return {};
                        }
                }
                catch(err){
                        console.log(err);
                        console.log("Some unexpected error occured while getting new tag")
                }
        }

        static getNameTags = async (data) => {
                try {                        
                        const result = tagModel.find({}).sort({"name":1});
                        if(result)
                        {
                                return result;
                        }
                        else{
                                return {};
                        }
                }
                catch(err){
                        console.log(err);
                        console.log("Some unexpected error occured while getting tags in alphabetical order")
                }
        }
}

module.exports.Tag = Tag;
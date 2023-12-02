const {Category} = require('../../db/models');

module.exports = {
    getAllCategories : async (req,res,next) => {
        try
        {
            const categories = await Category.findAll({
                where: {user: req.user.id},
                attributes: ['id','name']
            });

            res.status(200).json({
                message: "Success get all categories",
                data : categories
            })
        } catch(err) {
            console.error(err);
            next();
        }
    },
    createCategory : async (req,res,next) => {
        try{
            const {name} = req.body;
            const category = await Category.create({
                name : name,
                user : req.user.id
            });
            res.status(201).json({
                message: 'Success Create Category',
                data: category
            });
        } catch(err){
            next(err);
        }
    },
    updateCategory : async (req,res,next) => {
        try{
            const {id} = req.params;
            const {name} = req.body;
            
            const findCategory = await Category.findOne({ 
                where: {
                id: id,
                user: req.user.id
                }
             }
            );

            const category = await findCategory.update({name:name});
            res.status(201).json({
                message: 'Success Update Category',
                data: category
            });
        } catch(err){
            next(err);
        }
    },
    deleteCategory : async (req,res,next) => {

        const {id} = req.params;

        Category.findOne({
            where: {id: id, user: req.user.id}
        })
        .then((category) => {
            if(category){
                category.destroy();

                res.status(200).json({
                    message: "Success delete category",
                    data: category
                });
            }
        })
        .catch((err) => next(err));
    }
}
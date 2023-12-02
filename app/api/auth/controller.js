const {User}  = require('../../db/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    signin : async (req, res, next) => {
        try {
            const { email, password } = req.body;
            console.table(req.body);
            const checkUser = await User.findOne({ where: {email:email}});

            if(checkUser){
                const checkPassword = bcrypt.compareSync(password,checkUser.password);

                if(checkPassword){

                    const token = jwt.sign({
                        user: {
                            id : checkUser.id,
                            name : checkUser.name,
                            email : checkUser.email
                        },
                    },
                    'secret'
                    );
                    res.status(200).json({message: 'Success Login',token:token});
                }else {
                    res.status(403).json({message: 'Invalid Password'});
                }
            } else {
                res.status(403).json({message: 'Invalid Email'});
            }
        } catch(err) {
            console.log(err);
            next(errr);
        }
    },
    signup : async (req, res, next) => {
        try
        {
            const {name,email,password,confirmPassword} = req.body;

            if(password !== confirmPassword){
                res 
                    .status(403)
                    .json({message: "Password and confirm password don't match"});       
            }
            const checkEmail = await User.findOne({ where: {email:email}});
            if(checkEmail){
                res
                    .status(403)
                    .json({message: 'Email registered'})
            }

            const encryptPassword = bcrypt.hashSync(password,10);

            const user = await User.create({name,email,encryptPassword, role: 'admin'});

            delete user.defaultValues.password;

            res.status(200).json({
                message: 'Success Signup',
                data: user
            })

        } catch(err){
            next(err);
        }
    }
};


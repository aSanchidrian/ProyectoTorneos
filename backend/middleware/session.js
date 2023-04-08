const { handleHttpError } = require("../utils/handleError")
const { verifyToken } = require("../utils/handleJwt")
const {User}=require("../models/models")



const authMiddleware = async (req, res, next) => {
    try{
        if (!req.headers.authorization) {
            handleHttpError(res, "NOT_TOKEN", 401)
            return
        }

        // Nos llega la palabra reservada Bearer (es un estándar) y el Token, así que me quedo con la última parte
        const token = req.headers.authorization.split(' ').pop() 
        //Del token, miramos en Payload (revisar verifyToken de utils/handleJwt)
        const dataToken = await verifyToken(token)
        if(!dataToken.nickname) {
            handleHttpError(res, "ERROR_ID_TOKEN", 401)
            return
        }

        
        const user = await User.findOne({
            where: {
              nickname: dataToken.nickname
            }
          });
        req.user = user 

        next()

    }catch(err){
        handleHttpError(res, "NOT_SESSION", 401)
    }
}

module.exports = authMiddleware
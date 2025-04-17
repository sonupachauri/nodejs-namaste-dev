const adminAuth = (req,res,next)=>{
   const token = 'xyz';
   const isAdminAuthorize = token === 'xyz'
   isAdminAuthorize?next():res.status(401).send('Unauthorize request')
}

const userAuth = (req,res,next)=>{
    const token = 'xyz';
    const isAdminAuthorize = token === 'xyz'
    isAdminAuthorize?next():res.status(401).send('Unauthorize request')
 }
 

module.exports = {
    adminAuth,
    userAuth
}
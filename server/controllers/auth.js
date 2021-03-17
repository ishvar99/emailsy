const {RedirectDomainDev,RedirectDomainProd}=require('../config/keys')
exports.currentUser=(req,res)=>{
 res.send(req.user)
}
exports.logoutUser=(req,res)=>{
 req.logout();
 res.redirect('/')
}
exports.handleCallback=(req,res)=>{
  res.redirect(
    process.env.NODE_ENV === "production"
      ? `https://${req.get(
          "host"
        )}/surveys`
      : `http://localhost:3000/surveys`)
}
verification = require('./verifieValeur')


exports.verifForm = function verifForm(values)
{
   var nameOk = verification.verifieName(values.nom);
   var prenomOk = verification.verifiePrenom(values.prenoms);
   var emailOk = verification.verifieEmail(values.email);
   var passwordOk = verification.verifiePassword(values.pass);
  
  
   
   if( nameOk && prenomOk && emailOk && passwordOk){
      return true;
   }
   else
   {
      
      return false;
   }
}
let origin;
if(process.env.NODE_ENV==='development'){
  origin='localhost:3000'
}else{
  origin='productio-url-here.com'
}
module.exports = {
  cors: {
    credentials: true,
    origin
  },
};

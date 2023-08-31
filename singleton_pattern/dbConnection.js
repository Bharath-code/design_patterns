

//let uri = "mongodb://...";
const dbConnect = (uri) => {
   return {
     uri,
     connect: () => console.log(`DB ${uri} has been connected!`),
     disconnect: () => console.log("DB disconnected"),
   }; 
}
const connection = Object.freeze(dbConnect);

export {connection}
import { connect } from "mongoose";

const URI: string =
  process.env.MONGO_DB_URI ??
  "mongodb+srv://admin:admin@cluster0.bgdzgit.mongodb.net/cutshorts?retryWrites=true&w=majority";

const mongooseConnect = (cb: VoidFunction) => {
  connect(URI, () => {
    console.log("Connected to MONGO DB");
    cb();
  });
};

export default mongooseConnect;

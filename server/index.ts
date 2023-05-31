import { app } from "./app";
import { syncSeed } from "./db";

const init = async () => {
  try {
    await syncSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();

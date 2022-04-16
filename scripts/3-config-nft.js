import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xf556E7AC2595b207dEB0ad0e3F55D83CB6C9ffDF");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "Tamashii Insert",
                description: "This NFT is your first sauce!",
                image: readFileSync("scripts/assets/Tamashii-Insert.jpg"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();
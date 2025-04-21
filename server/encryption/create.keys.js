const crypto = require("crypto")
const fs = require("fs");
const path =require("path");

const createKeys = () => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: "pkcs1",
            format: "pem",
        },
        privateKeyEncoding: {
            type: "pkcs1",
            format: "pem",
        },
    });

    console.log("Saving public key...");
    fs.writeFileSync(path.join(__dirname, "../pub.pem"), publicKey);
    console.log("Saving priavet key...");
    fs.writeFileSync(path.join(__dirname, "../priv.pem"), privateKey);
    console.log("Keypair has been successfully created and saved");
};

createKeys();

// Create a new key pair and save it to the specified file paths
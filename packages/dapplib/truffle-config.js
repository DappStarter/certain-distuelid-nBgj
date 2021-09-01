require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth museum common inner private force spot'; 
let testAccounts = [
"0xc48c03c1202dca8cf566eb4d9c779268a1dba7be0636eb077931e4b910ae7d76",
"0x5bdf645173e9c5aeaa28f0c9fcb5bb55cd92fefab43f42b603861277281d5aed",
"0x642bfc90dabaeb58f01fccec61ef95ef39d22051fdcf898d1136180c0a6b7a3f",
"0x00cc3a6254d9d62eb37c83bebb4544ea019129e50672f2c0e7db30be328d40f8",
"0x27aa2ea956ceaf8291dbef10448d2898949e6fbfbb452e4644cd2ebb6ce6529e",
"0xb70aa80c4715786845cd3c639f2222cda0c5913b6cb2c0ad18f0f998fa1200de",
"0xcb9129ca3a9224814962c15700ad8ba9446a0d37258f9f2caa547dc7b37e9175",
"0xf2ba5c2a7a23c9331cf39ce2bc2c3fbcaa0b8004651fcf581739ee58a12210d3",
"0x73d1602a7d393c7df35b907dd7794eab39d6ba4914792af156d1d9d902a52357",
"0x24b836cff6b21bbce8162cb72827e5c17dfa6da6bf2288784b52f41150088d10"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


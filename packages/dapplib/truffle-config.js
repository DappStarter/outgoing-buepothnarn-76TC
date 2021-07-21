require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remain exchange grace lock tackle spin'; 
let testAccounts = [
"0xf5cfe70513943cd119810a8d5c28e12d51dd7a9a0c26d6bbb5f546aee422fa60",
"0x2069c2fa155d28ff922cd82ebe2c9edd4b1718eaa15786741b6e1e516d021fe8",
"0x647fcea7dacc311cbdb11a007c556799172886ccaf6d9d866f82435883db7a93",
"0x46e95a0d400430e4504f3bb17d5cdabd3fac3977f5ce7033add5e94b30b27be6",
"0x9bdb249b42081d329dd687b47f1db38d12d1cac1ec49c6c1677463d216eb867d",
"0xb6ec69302748bcbf0e6b6cbef0a96d260f3890fea81c63c4cc3140daef24c162",
"0x8e1771b8678d3d797c3d3f12a4c8e87f6ed7fb441f0ea969361f0d72da3b9453",
"0xa698504d27c116033580c3e24e5d59d47bfcdb2475532367d73a572109b8c7d8",
"0xe4dd71a0d496cf7031e36a7cba711b3f7d559f5f2755ca6c8ff5a4b3369f8bcc",
"0xca79a98d9540c9ad5cb894d9212c6777cf109aa03e9518588628660b9e33829b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


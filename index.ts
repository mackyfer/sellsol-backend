import express, { Request, Response } from 'express';
import Moralis from "moralis";
import { SolNetwork } from "@moralisweb3/common-sol-utils";
import { API_KEY, WALLET_PUBLIC_KEY } from './constants';
var cors = require('cors')
const app = express();
const port = 3001;
const address = WALLET_PUBLIC_KEY;
const network = SolNetwork.MAINNET;

const init = async()=>{
  await Moralis.start({
    apiKey: API_KEY,
  });
}
// Endpoint to list tokens
app.use(cors())
app.get('/tokens', async (req: Request, res: Response) => {
    try {
      const response = await Moralis.SolApi.account.getSPL({
        address,
        network,
      });
    
        res.json({ response });
    } catch (error) {
        console.error('Error fetching tokens:', error);
        res.status(500).json({ error: 'Error fetching tokens' });
    }
});


// Start the server

app.listen(port, () => {
    init()
    console.log(`Server is listening on port ${port}`);
});

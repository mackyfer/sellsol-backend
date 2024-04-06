import { retrieveEnvVariable } from "./utils";
import {logger} from './logger'
export const API_KEY = retrieveEnvVariable('API_KEY', logger)
export const WALLET_PUBLIC_KEY = retrieveEnvVariable('WALLET_PUBLIC_KEY', logger);

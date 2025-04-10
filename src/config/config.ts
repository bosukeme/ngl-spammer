import dotenv from "dotenv";

dotenv.config();

interface IConfig {
  port: number;
  nodeEnv: string;
  flashSecret: string;
}

if (!process.env.FLASH_SECRET) {
  throw new Error('FLASH_SECRET is not defined in environment variables.');
}


const config: IConfig = {
    port: Number(process.env.POST) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    flashSecret: process.env.FLASH_SECRET 
}

export default config;

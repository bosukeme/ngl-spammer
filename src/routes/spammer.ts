import { Router } from "express";

import {homePage, sendSpamMessage } from '../controllers/spammer';

const router = Router();

router.get("/", homePage);
router.post("/submit", sendSpamMessage);

export default router;
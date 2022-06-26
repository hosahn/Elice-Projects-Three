import { Router } from 'express';
import { Fortune } from '../db/index.js';
import { Activity } from '../db/index.js';

const afterDiaryRouter = Router();

afterDiaryRouter.get('/fortune', async (req, res) => {
  if (req.isAuthenticated()) {
    const result = await Fortune.getFortune();
    res.send(result);
  } else {
    res.send('Login First');
  }
});

afterDiaryRouter.post('/submit', async (req, res) => {
  if (req.isAuthenticated()) {
    const emotion = req.body.emotion;
    const music = await Activity.findMusic({ emotion });
    const activity = await Activity.findActivity({ emotion });
    res.send({ activity: activity, music: music });
  } else {
    res.send('Login First');
  }
});

afterDiaryRouter.post('/activity', async (req, res) => {
  if (req.isAuthenticated()) {
    const emotion = req.body.emotion;
  } else {
    res.send('Login First');
  }
});
afterDiaryRouter.post('/music', async (req, res) => {
  if (req.isAuthenticated()) {
    const emotion = req.body.emotion;
  } else {
    res.send('Login First');
  }
});

export { afterDiaryRouter };

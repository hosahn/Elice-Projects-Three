import { Router } from 'express';
import { RewardService } from '../services/rewardService.js';
const rewardRouter = Router();

<<<<<<< HEAD
rewardRouter.get("/user", async (req, res) => {
=======
rewardRouter.get('/user', async (req, res) => {
>>>>>>> origin/test/tag/ny
  if (req.isAuthenticated()) {
    const user_id = req.user.id;
    const result = await RewardService.getUserRewards({ user_id });
    res.send(result);
  } else {
    res.sendStatus(404);
  }
});

export { rewardRouter };

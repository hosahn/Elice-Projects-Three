import { ChallengeService } from "../services/challengeService.js";
import { Router } from "express";

const challengeRouter = Router();

challengeRouter.get("/", async (req, res) => {
  // 챌린지 타입 1 => 일기 수, 2=> 감정 수, 3=> 기타 단발성;
  if (req.isAuthenticated()) {
    const user_id = req.user.id;
    const result = await ChallengeService.getChallengeLog({ user_id });
    const challenges = await ChallengeService.findAllChallenges();
    res.send({ log: result, challenge: challenges });
  } else {
    res.sendStatus(404);
  }
});

challengeRouter.get("/start/:id", async (req, res) => {
  if (req.isAuthenticated()) {
    const user_id = req.user.id;
    const challenge_id = req.params.id;
    const result = await ChallengeService.setChallenge({
      user_id,
      challenge_id,
    });
    res.send(result);
  } else {
    res.sendStatus(404);
  }
});

challengeRouter.get("/stop/:id", async (req, res) => {
  if (req.isAuthenticated()) {
    const user_id = req.user.id;
    const challenge_id = req.params.id;
    const result = await ChallengeService.stopChallenge({
      user_id,
      challenge_id,
    });
    res.send(result);
  } else {
    res.sendStatus(404);
  }
});

export { challengeRouter };

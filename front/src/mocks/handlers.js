// src/mocks/handlers.js
import { rest } from 'msw';
export const handlers = [
  rest.get('https://12team.com/user/1234', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: '12팀',
        inserted_at: '2022-03-01',
      })
    );
  }),
  rest.get('https://12team.com/userChallenge/1234', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        challengeName: '매일 쓰기',
        start_date: '2022-03-27',
        is_completed: false,
        is_broken: false,
      })
    );
  }),
];

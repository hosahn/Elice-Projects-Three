import { Router } from "express";
import loginRequired from "../middlewares/loginRequired.js";
import BookService from "../services/bookService.js";
import * as status from "../utils/status.js";
const bookRouter = Router();

bookRouter.get("/list", loginRequired, async (req, res, next) => {
  const { id: userId } = req.user;
  const list = await BookService.bookList(userId);
  res.status(status.STATUS_200_OK).send(list);
});

bookRouter.get("/diarys", loginRequired, async (req, res, next) => {
  const { tag } = req.query;
  const { id: userId } = req.user;
  const list = await BookService.bookDiarys(userId, tag);
  res.status(status.STATUS_200_OK).send(list);
});

export default bookRouter;

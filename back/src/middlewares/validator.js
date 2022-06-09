import { validationResult } from "express-validator";
import { STATUS_400_BADREQUEST, STATUS_404_NOTFOUND } from "../utils/status";

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  logger.error("유효성 검증에서 400 에러 발생");
  return res.status(STATUS_400_BADREQUEST).json({
    success: false,
    error: {
      code: STATUS_400_BADREQUEST,
      message: errors.array()[0].msg,
      detail: errors.errors,
    },
  });
};

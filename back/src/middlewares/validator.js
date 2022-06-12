import { validationResult } from "express-validator";
import { STATUS_400_BADREQUEST, STATUS_404_NOTFOUND } from "../utils/status.js";

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(errors.code ?? STATUS_400_BADREQUEST).json({
    success: false,
    error: {
      code: STATUS_400_BADREQUEST,
      message: errors.array()[0].msg,
      detail: errors.errors,
    },
  });
};

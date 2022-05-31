import { Router } from "express";
import { basicService } from "../services/basicService.js";
const basicRouter = Router();

/**
 *  @swagger
 *  tags:
 *    name: Basic
 *    description: 서버 연결 확인
 */

/**
 * @swagger
 * /:
 *   get:
 *     tags: [Basic]
 *     description: 서버 연결 확인
 *     produces:
 *     - application/json
 *     responses:
 *       '200':
 *         description: "서버 연결 확인 완료"
 */
basicRouter.get("/", basicService.serverCheck);

/**
 * @swagger
 * /error:
 *   get:
 *     tags: [Basic]
 *     description: 에러 상황 테스트
 *     produces:
 *     - application/json
 *     responses:
 *       '500':
 *         description: "에러 상황 테스트"
 */
basicRouter.get("/error", basicService.errorTest);

/**
 * @swagger
 * /post:
 *   post:
 *     tags: [Basic]
 *     description: Post 요청 테스트
 *     produces:
 *     - "application/json"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               name:
 *                 type: string
 *                 example: "shin"
 *     responses:
 *       '200':
 *         description: "Post 요청 테스트 완료"
 */
basicRouter.post("/post", basicService.postTest);
/**
 * @swagger
 * /query:
 *   get:
 *     tags: [Basic]
 *     description: Query 테스트
 *     produces:
 *     - application/json
 *     parameters:
 *     - name: name
 *       in: query
 *       required: true
 *       example: "test"
 *     responses:
 *       '200':
 *         description: "Query 테스트"
 */
basicRouter.get("/query", basicService.queryTest);
/**
 * @swagger
 * /:id:
 *   get:
 *     tags: [Basic]
 *     description: Path 테스트
 *     produces:
 *     - application/json
 *     parameters:
 *     - name: id
 *       in: path
 *       required: true
 *     responses:
 *       '200':
 *         description: "Path 테스트"
 */
basicRouter.get("/:id", basicService.pathTest);

export { basicRouter };

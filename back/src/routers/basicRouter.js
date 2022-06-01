import { Router } from "express";
import BasicService from "../services/basicService.js";
const basicRouter = Router();

/**
 *  @swagger
 *  tags:
 *    name: Basic
 *    description: 서버 연결 확인
 */

/**
 * @swagger
 * /basic:
 *   get:
 *     tags: [Basic]
 *     description: 서버 연결 확인
 *     produces:
 *     - application/json
 *     responses:
 *       '200':
 *         description: "서버 연결 확인 완료"
 */

basicRouter.get("/", async (req, res) => {
  const body = await BasicService.serverCheck();
  return res.status(200).json(body);
});

/**
 * @swagger
 * /basic/post:
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
basicRouter.post("/post", async (req, res) => {
  const { name } = req.body;
  const body = await BasicService.postTest(name);
  return res.status(200).json(body);
});
/**
 * @swagger
 * /basic/query:
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
basicRouter.get("/query", async (req, res) => {
  const { name } = req.query;
  const body = await BasicService.queryTest(name);
  return res.status(200).json(body);
});
/**
 * @swagger
 * /basic/{id}:
 *   get:
 *     tags: [Basic]
 *     description: Path 테스트
 *     produces:
 *     - application/json
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       example: 123
 *     responses:
 *       '200':
 *         description: "Path 테스트"
 */
basicRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const body = await BasicService.pathTest(id);
  return res.status(200).json(body);
});

export { basicRouter };

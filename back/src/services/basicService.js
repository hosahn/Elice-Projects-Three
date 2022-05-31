export const basicService = {
  serverCheck: function (req, res) {
    const body = {
      success: true,
      message: "서버가 정상적으로 열렸습니다!",
    };
    return res.status(200).json(body);
  },
  errorTest: function (req, res) {
    throw new Error("에러 테스트를 위한 에러 발송 입니다.");
  },
  pathTest: function (req, res) {
    const { id } = req.params;
    const body = {
      success: true,
      message: `입력한 ID : ${id}`,
    };
    res.status(200).json(body);
  },
  postTest: function (req, res) {
    const { name } = req.body;
    const body = {
      success: true,
      message: `Post Body 에 입력된 name 값 : ${name}`,
    };
    res.status(200).json(body);
  },
  queryTest: function (req, res) {
    const { name } = req.query;
    const body = {
      success: true,
      message: `입력한 이름 : ${name}`,
    };
    res.status(200).json(body);
  },
};

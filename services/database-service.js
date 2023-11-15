const database = require("../utils/database");

exports.insertData = (dataList) => {
  const batchData = dataList.map((data) => [
    data.RANK_QTY_BM1,
    data.RANK_BATH,
    data.RANK_GP_BATH,
    data.RANK_QTY_BM2,
    data.PROD_CD,
    data.SUM_MONTH_SALE_QTY,
    data.SUM_MONTH_SALE_AMT,
    data.GP_BATH,
    data.GP_PERCENT,
    data.TTL_PRICE,
    data.TTL_PERCENT,
    data.TTL_GP_BATH,
    data.FACE,
  ]);

  return database.query(
    `INSERT INTO T_TOP_ALL_SALE_DATA 
  (RANK_QTY_BM1,
RANK_BATH,
RANK_GP_BATH,
RANK_QTY_BM2,
PROD_CD,
SUM_MONTH_SALE_QTY,
SUM_MONTH_SALE_AMT,
GP_BATH,
GP_PERCENT,
TTL_PRICE,
TTL_PERCENT,
TTL_GP_BATH,
FACE)
VALUES ?`,
    [batchData]
  );
};

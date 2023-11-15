const database = require("../utils/database");

exports.insertData = ({
  rankQtyBm1,
  rankBath,
  rankGpBath,
  rankQtybm2,
  prodCd,
  sumMonthSaleQty,
  sumMonthSaleAmt,
  gpBath,
  gpPercent,
  ttlPrice,
  ttlPercent,
  ttlGpBath,
  face,
}) => {
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
VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      rankQtyBm1,
      rankBath,
      rankGpBath,
      rankQtybm2,
      prodCd,
      sumMonthSaleQty,
      sumMonthSaleAmt,
      gpBath,
      gpPercent,
      ttlPrice,
      ttlPercent,
      ttlGpBath,
      face,
    ],
  );
};

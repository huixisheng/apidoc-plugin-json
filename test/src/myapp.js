// This is an example app with apiDoc annotations.

/**
 * @api {get} /do/something
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": 4711
 *     }
 * @apiParamJson {file=./apidoc.json} 参数
 * @apiSuccessJson {file=./apidoc.json} 操作成功
 *
 * @apiSuccessExample {json} 返回2:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiSuccessExample {json} 返回1:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 */
function doSomething() {
  console.log('best app ever');
}

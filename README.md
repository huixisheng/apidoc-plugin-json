# apidoc-plugin-json
@apiJson 读取指定son文件内容为接口返回内容


## 如何使用 ##

### 参数读取json文件 ###

```
 @apiParamJson {file=./apidoc.json} 参数
```
读取的内容转化为:

```
@apiParamExample {json} 参数:
```


### 返回结果读取json文件 ###

```
@apiSuccessJson {file=./apidoc.json} 操作成功
```
读取的内容转化为:

```
@apiSuccessExample {json} 操作成功:
```

## 参考 ##

- https://github.com/apidoc/apidoc-plugin-test
- https://github.com/willfarrell/apidoc-plugin-schema
export function readJson(file) {
    console.log(22222)
    var reader = new FileReader();//new一个FileReader实例
    console.log(file.type)
    // if (/json+/.test(file.type)) {//判断文件类型，是不是text类型
    //
    // }

    console.log(3333)
    reader.onload = function () {
        console.log(this.result)
    }
    return reader.readAsText(file);
}
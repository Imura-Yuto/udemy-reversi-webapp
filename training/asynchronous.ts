import fs from 'fs'
import util from 'util'

//ファイルを読み取りますよという約束を定義
const promisifyReadFile = util.promisify(fs.readFile)

function main(){
    const readFilePromise = promisifyReadFile('package.json')

    // readFilePromiseが終わったときの処理を登録
    readFilePromise.then((data) =>{
        const fileContent = data.toString()
        console.log(fileContent)
    })
}

main()
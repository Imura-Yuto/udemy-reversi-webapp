import fs from 'fs'
import util from 'util'

//ファイルを読み取りますよという約束を定義
const promisifyReadFile = util.promisify(fs.readFile)

async function main(){
    const data = await promisifyReadFile('package.json')
    const fileContent = data.toString()
    console.log(fileContent)
}

main()
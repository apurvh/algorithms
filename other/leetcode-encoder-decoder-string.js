function lib(){

    this.encoder = function(strs){
        let res = ''
        for(let str of strs){
            res += str.length + '#' + str

        }
        // console.log('str encode: '+res)
        return res
    }


    this.decoder = function(str){

        let debug = ''

        const res = []

        let n = 0 // pointer index that reads str from left to right
        while(n < str.length){

            // debug += 'n: '+n

            // console.log(debug)

            // get integer before #
            let integerStr = ''
            while(str[n] !=='#'){
                integerStr += str[n]
                n++
            }
            const integer = Number(integerStr)
            n++ // skip the #

            // get the string
            let unitStr = ''
            for(let i=0; i<integer; i++){
                unitStr += str[n]
                n++
            }

            res.push(unitStr)
        }

        return res
    }

}



const test = function(strArr){
    const newLib = new lib()
    const check = (strArr.join('') === newLib.decoder(newLib.encoder(strArr)).join(''))
    check? console.log('Accepted'):console.log('Wrong Answer '+strArr)
}


test(['this','test'])
test(['##this#','test'])
test(['this-this','test'])
test(['th7s-t#is','test'])


































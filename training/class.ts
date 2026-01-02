class Fraction{
    // private _numerator: number
    // private _denominator: number

    // constructor(numerator: number, denominator: number){
    //     this._numerator = numerator
    //     this._denominator = denominator
    // }

    //プロパティ定義とコンストラクタの略記法
    constructor(private _numerator: number, private _denominator: number){} 

    toString() {
        return `${this._numerator}/${this._denominator}`
    }

    add(other: Fraction): Fraction {
        const resultNumerator =
            this._numerator * other._denominator + 
            this._denominator * other._numerator

        const resultDenominator =  this._denominator * other._denominator

        return new Fraction(resultNumerator, resultDenominator)
    }

    get numerator() {
        return this._numerator   
    }
    
    get denominator(){
        return this._denominator
    }
}

const f1 = new Fraction(1, 2)
console.log(f1.numerator) // getterを定義しているため取得可能
console.log(f1.denominator)

// f1.numerator = 3 //privateなため代入不可
console.log(f1.numerator)

const f2 = new Fraction(1, 3)
console.log(f2.toString())

const result = f1.add(f2)
console.log(result.toString())

// const errResult = f1.minus(f2)
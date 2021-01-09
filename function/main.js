// 関数について
// 宣言 = 関数を作る
// 参照 = データとして関数を使う
// 呼び出し = データを変換すること

// アロー関数
const max = (x, y) => {
  if (x < y) {
    return y;
  }
  return x;
}

// function式
// const max= function(x, y) {
//   if (x < y) {
//     return y;
//   }
//   return x;
// }

// 関数宣言
// function max(x, y) {
//   if (x < y) {
//     return y;
//   }
//   return x;
// }

// 関数は同じ処理が繰り返される時に使うもの
// コードが長い関数はNG
// どんな処理が書いてあるかが分かりにくくなるから

// サブルーチン
// 小さくまとめた処理

// jsの場合、返り値を返さない関数はundefinedを返す

// 引数がない関数
// const value = Math.random();
// console.log(value);

// 副作用
// 関数が値の変換意外に何かを行った場合、それを副作用という

// 課題
const judgmentAgeType = (age) => {
  if (age < 3) {
    return '赤ちゃん';
  } else if (age < 18) {
    return '子供';
  } else if (age < 65) {
    return '大人';
  } else {
    return 'お年寄り';
  }
}

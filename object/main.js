// プリミティブ型
// Jsの基本的な型の総称
// Undefined
// Null
// Boolean
// Number
// Bigint
// Symbol
// String

// プリミティブ型はこれ以上分割できない存在
// イミュータブル = 値が変化しない
// プリミティブ型 = イミュータブル

// プリミティブ型ではないもの = オブジェクト

// オブジェクト
// 複数のデータをまとめたもの

// オブジェクト型の基本はObject

// オブジェクトの初期化
// const downtown = {
//   name: 'ダウンタウン',
//   boke: '松本人志',
//   tukkomi: '浜田雅功',
//   キー　　バリュー
//   上記の組み合わせがプロパティ
//   manzai: function (arg) {
//     return '爆笑';
//   },
//   上記をオブジェクトのメソッドという
//   オブジェクト内でアロー関数を使用すると思った通りに動かない場合があるのでアロー関数を使わない
//   manzai (arg) {
//     return '爆笑';
//   }
//   省略記法もある
// }


// console.log(downtown.boke);
// const key = 'tukkomi';
// console.log(downtown[key]);

// オブジェクトも再代入可能
// console.log(downtown);
// downtown.name = 'ライト兄弟';

// オブジェクトにプロパティの追加も可能
// downtown.maneger = '藤原寛';
// console.log(downtown);

// オブジェクトのメソッド
// プロパティに関数を定義できる
// それをオブジェクトのメソッドと呼ぶ

// thisについて
// thisは何らかのオブジェクトに紐づいている

// 課題
const downtown = {
  name: 'ダウンタウン',
  boke: '松本人志',
  tukkomi: '浜田雅功',
  introduce () {
    console.log(`コンビ名は${this.name}です。ボケは${this.boke}、ツッコミは${this.tukkomi}です。`)
  }
}

downtown.introduce();

// オブジェクトにオブジェクトを組み入れることも可能

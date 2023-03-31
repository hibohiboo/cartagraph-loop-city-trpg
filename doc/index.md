## ループ駆動の CI/CD

## コーディング規約

### eslint rule

| ルール ID                                              | 説明                                                                       | 利点                                                                 | 重要度 |
| ------------------------------------------------------ | -------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------ |
| @typescript-eslint/adjacent-overload-signatures        | オーバーロードシグニチャが隣接している場合にエラーを出す                   | オーバーロードシグニチャの誤った使用を防止                           | error  |
| @typescript-eslint/ban-ts-comment                      | 特定の ts コメントの使用を禁止する                                         | TS コメントの不適切な使用を防止                                      | error  |
| @typescript-eslint/ban-types                           | 特定の型の使用を禁止する                                                   | 不適切な型の使用を防止                                               | error  |
| @typescript-eslint/no-empty-interface                  | 空の interface の使用を禁止する                                            | 不要な interface を作成しないため、コードの見通しが良くなる          | error  |
| @typescript-eslint/no-extra-non-null-assertion         | 余分な非 null アサーションの使用を禁止する                                 | 不要な非 null アサーションを使用しないため、コードの品質が向上       | error  |
| @typescript-eslint/no-inferrable-types                 | 推測可能な型の指定を禁止する                                               | 余分な型定義を行わないため、開発の効率が向上                         | error  |
| @typescript-eslint/no-loss-of-precision                | 数字の精度損失を許可しない                                                 | 数字の計算において精度が保たれ、バグを防止                           | error  |
| @typescript-eslint/no-misused-new                      | 特定のクラスの誤った使用を禁止する                                         | クラスの誤った使用を防止                                             | error  |
| @typescript-eslint/no-namespace                        | namespace の使用を禁止する                                                 | namespace の使用を避け、コードの見通しが良くなる                     | error  |
| @typescript-eslint/no-non-null-asserted-optional-chain | 非 null アサーション演算子の使用を禁止する                                 | 不要な非 null アサーション演算子を使用しないため、コードの品質が向上 | error  |
| @typescript-eslint/no-non-null-assertion               | 非 null アサーション演算子の使用を警告する                                 | 非 null アサーション演算子の誤った使用を防止                         | warn   |
| @typescript-eslint/no-this-alias                       | this の別名の使用を禁止する                                                | this の別名を使用しないため、コードの品質が向上                      | error  |
| @typescript-eslint/no-unnecessary-type-constraint      | 不必要な型定義を禁止する                                                   | 不要な型定義を行わないため、開発の効率が向上                         | error  |
| @typescript-eslint/no-var-requires                     | require 文の使用を禁止する                                                 | import 文の使用を推奨し、コードの可読性が向上                        | error  |
| @typescript-eslint/prefer-as-const                     | const アサーション演算子の使用を推奨する                                   | const アサーション演算子の使用を推奨し、コードの品質が向上           | error  |
| @typescript-eslint/prefer-namespace-keyword            | namespace キーワードの使用を推奨する                                       | namespace キーワードの使用を推奨し、コードの見通しが良くなる         | error  |
| @typescript-eslint/triple-slash-reference              | トリプルスラッシュディレクティブの使用を禁止する                           | トリプルスラッシュを避け、コードの品質が向上                         | error  |
| react/jsx-key                                          | JSX 要素に key プロパティを指定することを要求する                          | 要素の一意性を確保し、パフォーマンスを向上させる                     | 2      |
| react/no-children-prop                                 | 子要素として children プロパティを指定しないことを要求する                 | JSX のシンタックスを簡潔にし、誤用を防ぐ                             | 2      |
| react/no-deprecated                                    | 非推奨の React API を使用しないように要求する                              | コードの品質を高め、将来的なバージョンアップに対応する               | 2      |
| react/no-find-dom-node                                 | findDOMNode メソッドの使用を禁止する                                       | コードの品質を高め、パフォーマンスを向上させる                       | 2      |
| react/no-render-return-value                           | render メソッドが値を返さないように要求する                                | コードの品質を高め、予期せぬ挙動を防ぐ                               | 2      |
| react/no-string-refs                                   | ref 属性に文字列を使用しないように要求する                                 | コードの品質を高め、React の API を正しく使う                        | 2      |
| react/no-unescaped-entities                            | 許可されていない文字参照や文字実体参照を使用しないように要求する           | 正しい文字列リテラルを使用し、脆弱性を防ぐ                           | 2      |
| react/no-unknown-property                              | 許可されていないプロパティを使用しないように要求する                       | コードの品質を高め、バグを防ぐ                                       | 2      |
| react/no-unsafe                                        | unsafe なメソッドやプロパティの使用を禁止する                              | コードの品質を高め、セキュリティを向上させる                         | 0      |
| for-direction                                          | for ループの条件部分に不正な式を使うことを禁止する                         | バグを防ぎ、コードの品質を高める                                     | error  |
| no-async-promise-executor                              | async function 内で Promise executor を使わないように要求する              | バグを防ぎ、コードの品質を高める                                     | error  |
| no-case-declarations                                   | switch 文の case 節内で宣言を使わないように要求する                        | バグを防ぎ、コードの品質を高める                                     | error  |
| no-class-assign                                        | クラスへの代入を禁止する                                                   | バグを防ぎ、コードの品質を高める                                     | error  |
| no-compare-neg-zero                                    | -0 と比較することを禁止する                                                | バグを防ぎ、コードの品質を高める                                     | error  |
| no-constant-condition                                  | 定数を条件式に使うことを禁止する                                           | バグを防ぎ、コードの品質を高める                                     | error  |
| no-debugger                                            | debugger 文の使用を禁止する                                                | バグを防ぎ、コードの品質を高める                                     | error  |
| no-dupe-else-if                                        | 同じ条件式を持つ else if 文を禁止する                                      | バグを防ぎ、コードの品質を高める                                     | error  |
| no-empty                                               | 空のブロック文を禁止する                                                   | バグを防ぎ、コードの品質を高める                                     | error  |
| no-extra-boolean-cast                                  | 不要な boolean キャストを禁止する                                          | コードの品質を高める                                                 | error  |
| no-inner-declarations                                  | ブロックスコープ内での関数宣言を禁止する                                   | バグを防ぎ、コードの品質を高める                                     | error  |
| no-irregular-whitespace                                | 不規則な空白文字の使用を禁止する                                           | コードの品質を高める                                                 | error  |
| no-misleading-character-class                          | 正規表現で誤解を招く文字クラスを禁止する                                   | バグを防ぎ、コードの品質を高める                                     | error  |
| no-nonoctal-decimal-escape                             | 8 進数リテラルや 16 進数リテラルで意図しない数値を生成しないように要求する | バグを防ぎ、コードの品質を高める                                     | error  |
| no-prototype-builtins                                  | Object.prototype のメソッドを直接呼び出さないように要求する                | バグを防ぎ、コードの品質を高める                                     | error  |
| no-unsafe-finally                                      | finally ブロックで安全でないコードを実行しないように要求する               | バグを防ぎ、コードの品質を高める                                     | error  |
| no-unsafe-optional-chaining                            | 安全でないオブジェクトのオプショナルチェイン演算子の使用を禁止する         | バグを防ぎ、コードの品質を高める                                     | error  |
| no-useless-backreference                               | 不要なバックリファレンスを禁止する                                         | コードの品質を高める                                                 | error  |
| no-useless-catch                                       | 例外処理で catch 節内で何もしないことを禁止する                            | バグを防ぎ、コードの品質を高める                                     | error  |

export const npcCardTemplate = {
  id: 0,
  name: '新刻敬',
  nameRuby: '',
  subType: '学生',
  keywords: ['学生', '委員長'],
  effect: `深陽学園2年生。風紀委員長。
中学生や小学生に間違えられるようなチビ。
頼まれると嫌とは言えない病気。
よく相談事を受けたり、困ったときに頼りにされたりする。`,
  flavor: `「姉御って感じ。見た目ガキっぽいけど頼りになる」`,
}
export type NpcCardProp = typeof npcCardTemplate

export const characterCardWithSerifTemplate = {
  id: 0,
  name: 'ブギーポップ',
  nameRuby: '',
  subType: '正体不明',
  keywords: [
    'もうこの世にいない',
    '変身ヒーロー',
    '学生',
    '後輩',
    '女子',
    '可愛い',
    'いつも難しい顔',
    '笑顔はなかった',
  ],
  words: ['「竹田君、世界は誤りで満ちているんだよ」'],
}
export type CharacterCardWithSerifProp = typeof characterCardWithSerifTemplate

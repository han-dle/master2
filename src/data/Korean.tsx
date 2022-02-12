// prettier-ignore
const CHOS = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'.split('');
// prettier-ignore
const JUNGS = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'.split('');
// prettier-ignore
const JONGS = '⬜ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ'.split('');

export const disassembledWord = (word: string): string => {
  var newWord = ''
  for (let ch of word) {
    const code = ch.charCodeAt(0) - 0xac00
    const cho = Math.floor(code / (21 * 28))
    const jung = Math.floor((code % (21 * 28)) / 28)
    const jong = (code % (21 * 28)) % 28
    newWord += CHOS[cho] + JUNGS[jung] + JONGS[jong]
  }
  return newWord
}

export const stringArrayToWords = (words: string[]): { [key: string]: boolean } => {
  const dict: { [key: string]: boolean } = {}
  for (let word of words) {
    dict[word] = true
  }
  return dict
}

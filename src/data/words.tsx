import { ALL_NOUNS } from 'pd-korean-noun-list-for-wordles'
import { stringArrayToWords, disassembledWord } from './Korean'

const words: { [key: string]: boolean } = stringArrayToWords(
  ALL_NOUNS.filter((word) => {
    return word.length === 2
  }).map((word) => {
    return disassembledWord(word)
  })
)
export default words

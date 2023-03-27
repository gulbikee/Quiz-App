export const fetchQuizData= async(difficulty,amount)=>{
    const url='https://opentdb.com/api.php?amount=10'
    const data=await (await fetch(url).json)
    return data.results

}
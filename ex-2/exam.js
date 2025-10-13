 export class Exam{
    #answer
    #wheight
    #exam
    constructor(answer,wheight){
        this.#answer = answer;
        this.#wheight = wheight;
        this.exams = []
    }

    add(exam){
        exam.grade = Object.keys(exam.values).reduce((acc,q) => {
          return acc += ( exam.values[q] == this.#answer.values[q]) ? this.#wheight[q] : 0;
        },0)
    
        this.exams.push(exam);
    }

    avg(){
        let soma = this.exams.reduce((acc, p) => {
            return acc += p.grade;
        },0);
        return soma/this.exams.length
    }

    min(count = 1){
        let menores = this.exams.map((p) => p.grade)
             menores.sort((a, b) => a - b)
             return menores.slice(0,count)
        } 

    max(count = 1){
        let maiores = this.exams.map((p) => p.grade)
             maiores.sort((a, b) => b - a)
             return maiores.slice(0,count)
        }

    lt(valor = 0){
        let menores = this.exams.map((p) => p.grade)
        menores.sort((a, b) => a - b)
        return menores.filter((i) => i < valor)
    }

    gt(valor = 0){
        let maiores = this.exams.map((p) => p.grade)
        maiores.sort((a, b) => a - b)
        return maiores.filter((i) => i > valor)
    }
    }

// const weight = { q1: 2, q2: 2, q3: 2, q4: 2, q5: 2 };

// const answer = {
//   person: 'Professor',
//   values: { q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
// };

// const exam = new Exam(answer, weight);

// exam.add({
//   student: 'Alice',
//   values: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
// });

// exam.add({
//   student: 'Bob',
//   values: { q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
// });

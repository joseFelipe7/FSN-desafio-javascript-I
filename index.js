// Base a ser utilizada
const alunosDaEscola = [{
    nome: "Henrique",
    notas: [],
    cursos: [],
    faltas: 5
}, {
    nome: "Edson",
    notas: [],
    cursos: [],
    faltas: 2
}, {
    nome: "Bruno",
    notas: [10, 9.8, 9.6],
    cursos: [],
    faltas: 0
}, {
    nome: "Guilherme",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "Full Stack",
        dataMatricula: new Date
    }],
    faltas: 0
}, {
    nome: "Carlos",
    notas: [],
    cursos: [],
    faltas: 0
}, {
    nome: "Lucca",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "UX",
        dataMatricula: new Date
    }],
    faltas: 0
}];
/*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
function adicionarAluno(nome) {
    let aluno = {
        nome: nome,
        notas: [],
        cursos: [],
        faltas: 0
    }
    try {
        alunosDaEscola.push(aluno)
        console.log('aluno matriculado com sucesso o/ :)')
    } catch (error) {
        console.log(`ocorreu um erro com a inserção do aluno :(  ${error.message}`)
    }
    
}
/*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
 Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
function listarAlunos() {
    for(aluno of alunosDaEscola){
        console.log(`Aluno ${aluno.nome}`);
        console.log(`Falta ${aluno.faltas}`);
        if(aluno['cursos'].length != 0){
            let cursos = aluno.cursos;
            console.log('cursos:')
            for(curso of cursos){
                let dia       = String(curso['dataMatricula'].getDate());
                let mes       = String(curso['dataMatricula'].getMonth()+1);
                let ano       = String(curso['dataMatricula'].getFullYear());
                let matricula = [dia.padStart(2, '0'),mes.padStart(2, '0'),ano].join('/');
                console.log(`${curso.nomeDoCurso} matriculado Em ${matricula}`)   
            }
        }else{
            console.log(`este aluno não esta matriculado em nenhum curso :'( `)
        }
        if(aluno['notas'] != 0){
            console.log(`notas foram: ${aluno['notas'].join(', ')}`)
        }else{
            console.log(`nenhuma nota foi atribuida a esse aluno`)
        }
        console.log('------------------')
    } 
}
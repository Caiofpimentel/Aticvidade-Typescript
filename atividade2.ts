// Como podemos melhorar o esse código usando TS? 
enum Profissao {
    Padeiro,
    Atriz,
}

interface pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

let pessoa1: pessoa = {
nome : "Maria",
idade : 29,
profissao : Profissao.Atriz
};


let pessoa2: pessoa = {
nome : "Roberto",
idade : 19,
profissao : Profissao.Padeiro
};

let pessoa3: pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: pessoa = {
    nome : "Carlos",
    idade : 19,
    profissao : Profissao.Padeiro
};

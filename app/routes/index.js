module.exports = function(application){
  application.get('/', (req, res) => {
    res.send(alunos)
  })

  application.get('/:id', (req, res) => {
    console.log(req.params);
    for(let aluno of alunos){
      if(aluno.id == req.params.id){
        res.send(aluno);
      }
    }
  })

  application.post('/', (req, res) => {
    alunos.push({
      id: req.query.id,
      nome: req.query.nome,
      idade: req.query.idade,
      curso: req.query.curso
    });
    res.send(alunos);
  })

  application.delete('/', (req, res) => {
    for(let i = 0; i < alunos.length; i++){
      if(alunos[i].id == req.query.id){
        alunos.splice(i, 1);
        res.send(alunos);
      }
    }
  })
}

const alunos = [
  {
    id: 1,
    nome: 'Claudiney',
    idade: 29,
    curso: 'ADS'
  },
  {
    id: 2,
    nome: 'Gisele',
    idade: 28,
    curso: 'Design Gráfico'
  },
  {
    id: 4,
    nome: 'Bortot',
    idade: 60,
    curso: 'Economia'
  },
  {
    id: 5,
    nome: 'Morganna',
    idade: 28,
    curso: 'ADS'
  },
  {
    id: 6,
    nome: 'Letícia',
    idade: 22,
    curso: 'ADS'
  },
  {
    id: 7,
    nome: 'Lucas',
    idade: 22,
    curso: 'ADS'
  }
]
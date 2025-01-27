 // Adiciona repositórios à lista
 function addRepo(language) {
    const repoName = prompt("Digite o nome do repositório:");
    if (repoName) {
    const newRepo = document.createElement('li');
     newRepo.textContent = repoName;
    document.getElementById(language + '-list').appendChild(newRepo);
    }
    }
   
    // Função para buscar repositórios
    function searchRepos() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const allLists = document.querySelectorAll('.repo-list');
    allLists.forEach(function(list) {
    const repos = list.getElementsByTagName('li');
    Array.from(repos).forEach(function(repo) {
    const repoName = repo.textContent.toLowerCase();
    if (repoName.indexOf(input) >-1) {
    repo.style.display = '';
    } else {
    repo.style.display = 'none';
    }
    });
    });
    }
    // Adicionar alguns repositórios iniciais
    document.addEventListener('DOMContentLoaded', function() {
    const repos = {
    python: ['Repositório Python 1', 'Repositório Python 2'],
    java: ['Repositório Java 1', 'Repositório Java 2'],
    javascript: ['Repositório JS 1', 'Repositório JS 2'],
    csharp: ['Repositório C# 1', 'Repositório C# 2']
    };
    for (let language in repos) {
    const repoList = document.getElementById(language + '-list');
    repos[language].forEach(function(repo) {
    const repoItem = document.createElement('li');
    repoItem.textContent= repo;
    repoList.appendChild(repoItem);
    });
}
    });
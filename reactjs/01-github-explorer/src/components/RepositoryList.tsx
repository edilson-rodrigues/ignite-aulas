import React from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const URL = 'https://api.github.com/users/edilson-rodrigues/repos';

interface Repository {
  name: string,
  description: string,
  html_url: string,
}

export function RepositoryList() {
  const [repositories, setRepositories] = React.useState<Repository[]>([]);

  React.useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  )
}
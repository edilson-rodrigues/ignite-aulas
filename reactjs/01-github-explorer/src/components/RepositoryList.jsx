import React from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const URL = 'https://api.github.com/users/edilson-rodrigues/repos';

export function RepositoryList() {
  const [repositories, setRepositories] = React.useState([]);

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
          return <RepositoryItem key={repository.id} repository={repository} />
        })}
      </ul>
    </section>
  )
}
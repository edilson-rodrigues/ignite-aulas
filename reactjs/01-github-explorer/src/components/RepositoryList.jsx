import React from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const URL = 'https://api.github.com/users/edilson-rodrigues/repos';

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
}

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
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}
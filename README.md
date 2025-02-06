# Django with React

[![license mit](https://img.shields.io/badge/licence-MIT-6C47FF)](LICENSE)

A project integrating Django and React.

## Technologies Used

- [Django](https://www.djangoproject.com/)
- [Rspack](https://rspack.dev/)
- [React](https://react.dev/)
- [TailwindCSS V3](https://v3.tailwindcss.com/)

## Installation and Running the Project

### Global Dependencies

Ensure you have the following dependencies installed globally:

- Node.js LTS v20 (or any higher version)
- [Uv](https://docs.astral.sh/uv/getting-started/installation/)

If you use `nvm`, you can run `nvm install` in the project folder to install and use the appropriate version of Node.js.

### Local Dependencies

Once the repository is cloned and the global dependencies are installed, you can install the project's local dependencies.

For Node:

```bash
pnpm install
```

For Python:

```bash
uv sync
```

### Running the Project

To start the project, you need to run the following commands:

For Node:

```bash
pnpm dev
```

For Python:

```bash
python manage.py runserver
```

The Python command will start the Django application at <http://localhost:8000> and Node will start Rspack and a proxy server for automatic loading at <http://localhost:3000>.

- Open <http://localhost:3000> to see the application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

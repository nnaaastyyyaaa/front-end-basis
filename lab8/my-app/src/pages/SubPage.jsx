import "./Pages.scss";

function SubPage({ title, notFound = false }) {
  return (
    <main className="page">
      <h1 className="page__title">{title}</h1>
      <p className="page__text">
        {notFound
          ? "Sorry, we could not find the page you are looking for."
          : `This is the "${title}" page from the dropdown menu.`}
      </p>
      <a className="page__link" href="#/">
        ← Back to home
      </a>
    </main>
  );
}

export default SubPage;

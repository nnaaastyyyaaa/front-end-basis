import "./Pages.scss";

function InnerPage() {
  return (
    <main className="page">
      <h1 className="page__title">Inner page</h1>
      <p className="page__text">
        This is an inner page of the website. Here you can place any additional
        information about our company, our team and the way we work.
      </p>
      <p className="page__text">
        Use the menu above to go back to the home page or to visit other
        sections of the site.
      </p>
      <a className="page__link" href="#/">
        ← Back to home
      </a>
    </main>
  );
}

export default InnerPage;

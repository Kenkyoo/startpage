export default function Bookmarks() {
  return (
    <div className="card card-border bg-base-200 w-96 shadow-sm border-accent">
      <div className="card-body">
        <h2 className="card-title text-success text-3xl">Bookmarks</h2>
        <ul className="menu bg-base-200 rounded-box w-56 text-2xl">
          <li className="menu-title">My bookmarks</li>
          <li>
            <a href="www.youtube.com">Youtube</a>
          </li>
          <li>
            <a href="https://www.365scores.com/es-mx">Scores</a>
          </li>
          <li>
            <a href="https://www.facebook.com/">Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

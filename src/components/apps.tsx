export default function Apps() {
  return (
    <div className="card card-border bg-base-200 w-96 h-96 shadow-sm border-accent">
      <div className="card-body">
        <h2 className="card-title text-3xl text-error">Apps</h2>
        <ul className="menu bg-base-200 rounded-box w-56 text-2xl">
          <li className="menu-title">My apps</li>
          <li>
            <a href="https://app.dailyhabits.xyz/">Habits</a>
          </li>
          <li>
            <a href="https://tasks.google.com/u/0/tasks/">Tasks</a>
          </li>
          <li>
            <a href="https://mail.proton.me/u/0/inbox">Email</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
